import { type FC } from 'react'
import Form from 'react-bootstrap/Form';

interface BookingReservationFeedbackProps {
  invalidFeedbackText: string
}

export const BookingReservationFeedback: FC<BookingReservationFeedbackProps> = ({invalidFeedbackText}) => {
  return (
    <>
      <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>{invalidFeedbackText}</Form.Control.Feedback>
    </>
  )
}
