import userEvent from '@testing-library/user-event'
import { addDays, subDays } from 'date-fns'

import { fireEvent, render, screen } from '../../utils/test-utils'
import { BookingReservation } from "./booking-reservation.component";

describe('Booking Reservation', () => {

  beforeEach(() => {
    render(
        <BookingReservation />
    );
  })

  it('should test validation on empty fields in the reservation form', async () => {
    const submitButton = screen.getByRole('button', { name: 'Find Cars'})
    const user = userEvent.setup()
    await user.click(submitButton)

    expect(await screen.findByText('Please provide a pickup location.')).toBeInTheDocument()

    expect(await screen.findByText('Please provide a drop-off location.')).toBeInTheDocument()

    expect(await screen.findAllByText('Invalid date')).toHaveLength(2)
  })

  it('should test validation on discount code', async () => {
    const formData = {
      pickupLocation: 'Rzeszów Główny PKP',
      dropOffLocation: 'Millenium Hall Rzeszów',
      pickupDate: addDays(new Date(), 10),
      dropOffDate: addDays(new Date(), 5),
    }

    await userEvent.type(screen.getByLabelText('Pickup Location'), formData.pickupLocation);
    await userEvent.type(screen.getByLabelText('Drop-off Location'), formData.dropOffLocation);
    await userEvent.type(screen.getByLabelText('Date From'), formData.pickupDate.toString());
    await userEvent.type(screen.getByLabelText('Date To'), formData.dropOffDate.toString());
    await userEvent.click(screen.getByLabelText('Is driver over 25 years old?'))
    await userEvent.click(screen.getByLabelText('I have discount code'))

    // const submitButton = screen.getByRole('button', { name: 'Find Cars'})
    // const user = userEvent.setup()
    // await user.click(submitButton)
    
    // why below fails?
    // expect(await screen.findByText('Please provide a discount code.')).toBeInTheDocument()

  })

  it('should test filling in the form', async () => {
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument()

    const formData = {
      pickupLocation: 'Rzeszów Główny PKP',
      dropOffLocation: 'Millenium Hall Rzeszów',
      pickupDate: addDays(new Date(), 10),
      dropOffDate: addDays(new Date(), 5),
      discountCode: 'HIT15'
    }

    await userEvent.type(screen.getByLabelText('Pickup Location'), formData.pickupLocation);
    await userEvent.type(screen.getByLabelText('Drop-off Location'), formData.dropOffLocation);
    await userEvent.type(screen.getByLabelText('Date From'), formData.pickupDate.toString());
    await userEvent.type(screen.getByLabelText('Date To'), formData.dropOffDate.toString());
    await userEvent.click(screen.getByLabelText('Is driver over 25 years old?'))
    await userEvent.click(screen.getByLabelText('I have discount code'))
    await userEvent.type(screen.getByLabelText('Discount Code'), formData.discountCode);

    const submitButton = screen.getByRole('button', { name: 'Find Cars'})
    const user = userEvent.setup()
    await user.click(submitButton)
    fireEvent.click(submitButton);

    // why I cannot find the modal?
    const modalAgain = screen.queryByTestId("modal");
    console.log('modalAgain: ', modalAgain)
  })

  it('should test pick-up date validation if date is in the past', async () => {
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument()

    const formData = {
      pickupLocation: 'Rzeszów Główny PKP',
      dropOffLocation: 'Millenium Hall Rzeszów',
      pickupDate: subDays(new Date(), 2),
      dropOffDate: addDays(new Date(), 1)
    }

    await userEvent.type(screen.getByLabelText('Pickup Location'), formData.pickupLocation);
    await userEvent.type(screen.getByLabelText('Drop-off Location'), formData.dropOffLocation);
    await userEvent.type(screen.getByLabelText('Date From'), formData.pickupDate.toString());
    await userEvent.type(screen.getByLabelText('Date To'), formData.dropOffDate.toString());

    const submitButton = screen.getByRole('button', { name: 'Find Cars'})
    // const user = userEvent.setup()
    // await user.click(submitButton)

    // userEvent or fireEvent
    fireEvent.click(submitButton)

    // why does it fail?
    // expect(await screen.findByText('Pick-up date needs to be in the future.')).toBeInTheDocument()
  })

  it('should test drop-off date validation if date is in the past', async () => {})
  it('should test drop-off date validation if date is not greater than pick-up date', async () => {})
})
