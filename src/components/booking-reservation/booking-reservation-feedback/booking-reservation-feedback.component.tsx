import { type FC } from 'react'
import Form from 'react-bootstrap/Form';

import { type FeedbackType } from 'react-bootstrap/esm/Feedback';

interface BookingReservationFeedbackProps {
  type: FeedbackType,
  feedbackText: string
}

export const BookingReservationFeedback: FC<BookingReservationFeedbackProps> = ({type, feedbackText}) => {
  return (
    <Form.Control.Feedback type={type}>
      {feedbackText}
    </Form.Control.Feedback>
  )
}
