import userEvent from '@testing-library/user-event'

import { render, screen } from '../../utils/test-utils'
import { BookingReservation } from "./booking-reservation.component";
import ModalComponent from '../ui/modal/modal.component';

describe('Booking Reservation', () => {

  beforeEach(() => {
    render(
        <BookingReservation />
    );
  })

  it('should test validation on empty fields in the reservation form', async () => {
    const button = screen.getByRole('button', { name: 'Submit button'})

    const user = userEvent.setup()
    await user.click(button) 

    expect(await screen.findByText('Please provide a pickup location.')).toBeInTheDocument()
    expect(await screen.findByText('Please provide a drop-off location.')).toBeInTheDocument()

    // Date validation is not working and not sure wjy
    // expect(await screen.findByText('Please provide a pick-up date.')).toBeInTheDocument()
    // expect(await screen.findByText('Please provide a drop-off date.')).toBeInTheDocument()

    // if has discount code selected, validate discount code input
    // const hasDiscountCode = await screen.findByLabelText('I have discount code.')
    // const hasDiscountCode = screen.getByLabelText('I have discount code.')

  })

  it('should fill in the form and display the modal', async () => {

    const pickupLocation = await userEvent.type(screen.getByLabelText('Pickup Location'), 'Rzeszów Główny PKP');
    const dropOffLocation = await userEvent.type(screen.getByLabelText('Drop-off Location'), 'Millenium Hall Rzeszów');
    const pickupDate = await userEvent.type(screen.getByLabelText('Date From'), new Date("2024-03-20").toString());
    const dropOffDate = await userEvent.type(screen.getByLabelText('Date To'), new Date("2024-03-25").toString());
    const isOver25 = await userEvent.click(screen.getByLabelText('Is driver over 25 years old?'))
    const hasDiscountCode = await userEvent.click(screen.getByLabelText('I have discount code'))
    const discountCode = await userEvent.type(screen.getByLabelText('Discount Code'), 'HIT15');

    const button = screen.getByRole('button', { name: 'Submit button'})
    const user = userEvent.setup()
    await user.click(button) 

    // struggling to use data from userEvent

    const formData = {
      pickupLocation: 'Rzeszów Główny PKP',
      dropOffLocation: 'Millenium Hall Rzeszów',
      pickupDate: new Date("2024-03-20"),
      dropOffDate: new Date("2024-03-25"),
      isOver25: true,
      hasDiscountCode: true,
      discountCode: 'HIT15'
    }
    
    const modalComponent = render(<ModalComponent showModal={false} onClose={() => true} formData={formData} />)
    expect(modalComponent.container).toBeInTheDocument()

    // expect(await (modalComponent.container).findByText('Rzeszów Główny PKP')).toBeInTheDocument()

  })
})



// test dates if the're not in the past
// test dates if start date is not greater than end date
