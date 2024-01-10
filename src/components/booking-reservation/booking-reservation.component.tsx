import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { BookingReservationFeedback } from './booking-reservation-feedback/booking-reservation-feedback.component';

const timeOptions = [
  {value: '', text: '--Please Select--'},
  {value: '9:00', text: '9:00'},
  {value: '10:00', text: '10:00'},
  {value: '11:00', text: '11:00'},
  {value: '12:00', text: '12:00'},
];

const buildDataObject = (formData: FormData) => {
  const pickupLocation = formData.get('pickupLocation')
  const dropOffLocation = formData.get('dropOffLocation')
  const pickupDate = formData.get('pickupDate')
  const pickupTime = formData.get('pickupTime')
  const dropOffDate = formData.get('dropOffDate')
  const dropOffTime = formData.get('dropOffTime')
  const isOver25 = formData.get('isOver25') ? true : false
  const hasDiscountCode = formData.get('hasDiscountCode') ? true : false
  const discountCode = hasDiscountCode ? formData.get('discountCode') : ''

  return {
    pickupLocation,
    dropOffLocation,
    pickupDate,
    pickupTime,
    dropOffDate,
    dropOffTime,
    isOver25,
    hasDiscountCode,
    discountCode
  }
}

export const BookingReservation = () => {
  const [validated, setValidated] = useState(false);
  const [pickupTimeSelected, setPickupTimeSelected] = useState(timeOptions[0].value);
  const [dropOffTimeSelected, setDropOffTime] = useState(timeOptions[0].value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (validated) {
      // submit the form
      console.log('form valid')
      const dataObj = buildDataObject(new FormData(event.currentTarget))
      console.log(dataObj)
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="pickupLocation">
          <Form.Label>Pickup Location</Form.Label>
          <Form.Control
            name="pickupLocation"
            required
            type="text"
            placeholder="Pickup Location"
          />
          <BookingReservationFeedback type='valid' feedbackText='Looks good!' />
          <BookingReservationFeedback type='invalid' feedbackText='Please provide a pickup location.' />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="dropOffLocation">
          <Form.Label>Drop-off Location</Form.Label>
          <Form.Control
            name="dropOffLocation"
            required
            type="text"
            placeholder="Drop-off Location"
          />
          <BookingReservationFeedback type='valid' feedbackText='Looks good!' />
          <BookingReservationFeedback type='invalid' feedbackText='Please provide a drop-off location.' />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="pickupDate">
          <Form.Label>Date From</Form.Label>
          <Form.Control
            name="pickupDate"
            required
            type='date'
          />
          <BookingReservationFeedback type='valid' feedbackText='Looks good!' />
          <BookingReservationFeedback type='invalid' feedbackText='Please provide a pick-up date.' />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="pickupTime">
          <Form.Label>Pick-up Time</Form.Label>
          <Form.Select
            name="pickupTime"
            required
            value={pickupTimeSelected}
            onChange={(event) => setPickupTimeSelected(event.target.value)}>
            {timeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </Form.Select>
          <BookingReservationFeedback type='valid' feedbackText='Looks good!' />
          <BookingReservationFeedback type='invalid' feedbackText='Please provide a pick-up time.' />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="dropOffDate">
          <Form.Label>Date To</Form.Label>
          <Form.Control
            name="dropOffDate"
            required
            type='date'
          />
          <BookingReservationFeedback type='valid' feedbackText='Looks good!' />
          <BookingReservationFeedback type='invalid' feedbackText='Please provide a drop-off date.' />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="dropOffTime">
          <Form.Label>Drop-off Time</Form.Label>
          <Form.Select
            name="dropOffTime"
            required
            value={dropOffTimeSelected}
            onChange={(event) => setDropOffTime(event.target.value)}>
            {timeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </Form.Select>
          <BookingReservationFeedback type='valid' feedbackText='Looks good!' />
          <BookingReservationFeedback type='invalid' feedbackText='Please provide a drop-off time.' />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="isOver25">
          <Form.Check
            name="isOver25"
            label="Is driver over 25 years old?"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="hasDiscountCode">
          <Form.Check
            name="hasDiscountCode"
            label="I have discount code"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="discountCode">
          <Form.Label>Discount Code</Form.Label>
          <Form.Control
            name="discountCode"
            required
            type="text"
            placeholder="Discount Code"
          />
          <BookingReservationFeedback type='valid' feedbackText='Looks good!' />
          <BookingReservationFeedback type='invalid' feedbackText='Please provide a pickup location.' />
        </Form.Group>
      </Row>
      <Button type="submit">Find Cars</Button>
    </Form>
  )
}
