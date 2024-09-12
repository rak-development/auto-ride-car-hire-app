import { type FC } from 'react'
import Form from 'react-bootstrap/Form'

interface BookingReservationFeedbackProps {
  invalidFeedbackText: string | undefined
}

export const BookingReservationFeedback: FC<
  BookingReservationFeedbackProps
> = ({ invalidFeedbackText }) => (
  <Form.Control.Feedback type='invalid'>
    {invalidFeedbackText}
  </Form.Control.Feedback>
)
