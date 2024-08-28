import userEvent, { UserEvent } from '@testing-library/user-event'
import { addDays, subDays, format } from 'date-fns'

import { render, screen } from '../../utils/test-utils'
import { BookingReservation } from './booking-reservation.component'

const dateFormatForForm = (dateObject: Date) => format(dateObject, "yyyy-MM-dd'T'HH:mm:ss")

type FormData = {
  pickupLocation: string
  dropOffLocation: string
  pickupDate: Date
  dropOffDate: Date,
  discountCode?: string
}

const fillInForm = async (formData: FormData, user: UserEvent) => {
  await user.type(screen.getByLabelText('Pickup Location'), formData.pickupLocation)
  await user.type(screen.getByLabelText('Drop-off Location'), formData.dropOffLocation)
  await user.type(screen.getByLabelText('Date From'), dateFormatForForm(formData.pickupDate))
  await user.type(screen.getByLabelText('Date To'), dateFormatForForm(formData.dropOffDate))
  await user.click(screen.getByLabelText('Is driver over 25 years old?'))
  await user.click(screen.getByLabelText('I have discount code'))

  if (formData.discountCode) {
    await user.type(screen.getByLabelText('Discount Code'), formData.discountCode)
  }
}

const clickInsideInput = async (labelText: string) =>
  await userEvent.click(screen.getByLabelText(labelText))

describe('Booking Reservation', () => {
  beforeEach(() => {
    render(<BookingReservation />)
  })

  // working
  it('should test validation on empty fields in the reservation form', async () => {
    const submitButton = screen.getByRole('button', { name: 'Find Cars' })
    const user = userEvent.setup()
    await user.click(submitButton)

    expect(await screen.findByText('Please provide a pickup location.')).toBeInTheDocument()

    expect(await screen.findByText('Please provide a drop-off location.')).toBeInTheDocument()

    expect(await screen.findAllByText('Invalid date')).toHaveLength(2)
  })

  // working
  it('should test validation on discount code', async () => {
    const formData: FormData = {
      pickupLocation: 'Rzeszów Główny PKP',
      dropOffLocation: 'Millenium Hall Rzeszów',
      pickupDate: addDays(new Date(), 5),
      dropOffDate: addDays(new Date(), 10)
    }

    const user = userEvent.setup()
    fillInForm(formData, user)

    expect(await screen.findByText('Please provide a discount code.')).toBeInTheDocument()
  })

  // not working
  // it('should test filling in the form', async () => {
  //   expect(screen.queryByRole('modal')).not.toBeInTheDocument()

  //   const formData = {
  //     pickupLocation: 'Rzeszów Główny PKP',
  //     dropOffLocation: 'Millenium Hall Rzeszów',
  //     pickupDate: addDays(new Date(), 5),
  //     dropOffDate: addDays(new Date(), 10),
  //     discountCode: 'HIT15',
  //   }

  //   const user = userEvent.setup()

  //   fillInForm(formData, user)

  //   const submitButton = screen.getByRole('button', { name: 'Find Cars' })
  //   await user.click(submitButton)

  //   // expect(screen.queryByRole('dialog')).toBeInTheDocument()

  //   const modal = screen.queryByRole('modal')
  //   expect(modal).toBeInTheDocument()

  //   // expect(screen.getByText('Pickup Location : Rzeszów Główny PKP')).toBeInTheDocument()
  //   // expect(screen.getByText('Drop-off Location : Millenium Hall Rzeszów')).toBeInTheDocument()
  //   // expect(
  //   //   screen.getByText(`Date From : ${format(formData.pickupDate, 'PPPppp')}`),
  //   // ).toBeInTheDocument()
  //   // expect(
  //   //   screen.getByText(`Date To : ${format(formData.dropOffDate, 'PPPppp')}`),
  //   // ).toBeInTheDocument()

  //   // expect(screen.getByText('Is driver over 25 years old? : Yes')).toBeInTheDocument()
  //   // expect(screen.getByText('I have discount code : Yes')).toBeInTheDocument()
  //   // expect(screen.getByText(`Discount code : ${formData.discountCode}`)).toBeInTheDocument()

  //   // const closeButton = screen.getAllByRole('button', { name: 'Close' })[1]
  //   // await user.click(closeButton)
  //   // expect(screen.queryByRole('dialog', { hidden: true })).not.toBeInTheDocument()
  // })

  // it('should test pick-up date validation if date is in the past', async () => {
  //   const formData = {
  //     pickupLocation: 'Rzeszów Główny PKP',
  //     dropOffLocation: 'Millenium Hall Rzeszów',
  //     pickupDate: subDays(new Date(), 2),
  //     dropOffDate: addDays(new Date(), 2),
  //   }

  //   const user = userEvent.setup()
  //   fillInForm(formData, user)

  //   const submitButton = screen.getByRole('button', { name: 'Find Cars' })
  //   await user.click(submitButton)

  //   screen.debug()
  //   // screen.debug(screen.getByTestId('test'))


  // //   // expect(await screen.findByText('Pick-up date needs to be in the future.')).toBeInTheDocument()
  // })

  // it('should test drop-off date validation if date is in the past', async () => {
  //   const formData = {
  //     pickupLocation: 'Rzeszów Główny PKP',
  //     dropOffLocation: 'Millenium Hall Rzeszów',
  //     pickupDate: addDays(new Date(), 2),
  //     dropOffDate: subDays(new Date(), 2),
  //   }

  //   const user = userEvent.setup()

  //   const submitButton = screen.getByRole('button', { name: 'Find Cars' })
  //   await user.click(submitButton)

  //   expect(await screen.findByText('Drop-off date needs to be in the future')).toBeInTheDocument()
  // })

  // it('should test drop-off date validation if date is not greater than pick-up date', async () => {
  //   const formData = {
  //     pickupLocation: 'Rzeszów Główny PKP',
  //     dropOffLocation: 'Millenium Hall Rzeszów',
  //     pickupDate: addDays(new Date(), 10),
  //     dropOffDate: addDays(new Date(), 8),
  //   }

  //   const user = userEvent.setup()

  //   const submitButton = screen.getByRole('button', { name: 'Find Cars' })
  //   await user.click(submitButton)

  //   expect(
  //     await screen.findByText('Drop-off date needs to be greater than pick-up date'),
  //   ).toBeInTheDocument()
  // })
})
