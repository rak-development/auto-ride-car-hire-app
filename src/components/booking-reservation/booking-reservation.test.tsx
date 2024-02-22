import userEvent from '@testing-library/user-event'

import { fireEvent, render, screen } from '../../utils/test-utils'
import { BookingReservation } from "./booking-reservation.component";
import ModalComponent from '../ui/modal/modal.component';

describe('Booking Reservation', () => {

  it('should render the booking reservation form', () => {
    render(<BookingReservation />)
  });

  it('reservation form should have empty fields', () => {
    render(<BookingReservation />)

    const bookingReservationForm = screen.getByRole('form', { name: 'Booking reservation form'})
    expect(bookingReservationForm).toHaveFormValues({
      pickupLocation: '',
      dropOffLocation: '',
      pickupDate: '',
      dropOffDate: '',
      isOver25: false,
      hasDiscountCode: false
    })
  })

  it('should trigger submit button on the reservation form', () => {
    render(<BookingReservation />)

    const button = screen.getByRole('button', { name: 'Submit button'})
    expect(button).toHaveAttribute('type', 'submit')

    const user = userEvent.setup()
    user.click(button) 
  })

  it('should test validation on empty fields in the reservation form', () => {
    render(<BookingReservation />)

    const button = screen.getByRole('button', { name: 'Submit button'})
    expect(button).toHaveAttribute('type', 'submit')

    const user = userEvent.setup()
    user.click(button) 


    const pickupLocation = screen.getByRole('textbox', { name: 'Pickup Location'})
    expect(pickupLocation).toBeValid()

  })

  it('should fill the reservation for with values', async () => {
    render(<BookingReservation />)

    const pickupLocation = screen.getByRole('textbox', { name: 'Pickup Location'})
    await userEvent.type(pickupLocation, 'Rzeszów Główny PKP');

    const dropOffLocation = screen.getByRole('textbox', { name: 'Drop-off Location'})
    await userEvent.type(dropOffLocation, 'Millenium Hall Rzeszów');

    // How to test date picker dates?

    const isOver25 = screen.getByRole('checkbox', { name: 'Is driver over 25 years old?'})
    await userEvent.click(isOver25)

    const hasDiscountCode = screen.getByRole('checkbox', { name: 'I have discount code'})
    await userEvent.click(hasDiscountCode)

    const discountCode = screen.getByRole('textbox', { name: 'Discount Code'})
    await userEvent.type(discountCode, 'HIT15');

    const bookingReservationForm = screen.getByRole('form', { name: 'Booking reservation form'})
    // expect(bookingReservationForm).toHaveFormValues({
    //   pickupLocation: 'Rzeszów Główny PKP',
    //   dropOffLocation: 'Millenium Hall Rzeszów',
    //   pickupDate: new Date("2024-03-20").toString(),
    //   dropOffDate: new Date("2024-03-25").toString(),
    //   isOver25: true,
    //   hasDiscountCode: true,
    //   discountCode: 'HIT15'
    // })

    // const pickupDate = screen.getByRole('date', { name: 'Pickup Date'})
    // fireEvent.change(pickupDate, { target: { value: 'Millenium Hall Rzeszów' } })
  })

  it('test opening modal with empty fields', async () => {
    render(<BookingReservation />)

    const button = screen.getByRole('button', { name: 'Submit button'})
    expect(button).toHaveAttribute('type', 'submit')

    const user = userEvent.setup()
    user.click(button) 

    const formData = {
      pickupLocation: '',
      dropOffLocation: '',
      pickupDate: new Date,
      dropOffDate: new Date,
      isOver25: false,
      hasDiscountCode: false,
      discountCode: ''
    }

    // expect(screen.find(ModalComponent)).toHaveLength(1)
    const modalComponent = render(<ModalComponent showModal={false} onClose={() => {}} formData={formData} />)

  })
})
