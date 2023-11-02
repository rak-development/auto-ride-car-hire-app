import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import styled from '@emotion/styled';

const BookingReservationForm = styled(Form)`
  background-color: var(--bs-white);
  border: 0.0625rem solid var(--bs-gray-200);
`

const BookingReservationFormCol = styled(Col)`
  border-right: 0.0625rem solid var(--bs-gray-200);
  border-bottom: 0.0625rem solid var(--bs-gray-200);
`

const BookingReservationFormGroup = styled(Form.Group)`
  padding: 1.25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const BookingReservationFormButtonGroup = styled.div`
  padding: 1.25rem;
`

const BookingReservationFormLabel = styled(Form.Label)`
  color: var(--bs-black);
`

const BookingReservationFormCheckbox = styled(Form.Check)`
  color: var(--bs-black);
`

export const BookingReservation = () => {
  const [isDiscountSelected, setDiscountSelected] = useState(false)

  return (
    <BookingReservationForm>
      <Container>
        <Row>
          <BookingReservationFormCol md={6}>
            <BookingReservationFormGroup controlId="pickupLocation">
              <BookingReservationFormLabel>Pickup Location</BookingReservationFormLabel>
              <Form.Control type='text' />
            </BookingReservationFormGroup>
          </BookingReservationFormCol>
          <BookingReservationFormCol md={6}>
            <BookingReservationFormGroup controlId="dropOffLocation">
              <BookingReservationFormLabel>Drop-off Location</BookingReservationFormLabel>
              <Form.Control type='text' />
            </BookingReservationFormGroup>
          </BookingReservationFormCol>
          <BookingReservationFormCol md={6} lg={3}>
            <BookingReservationFormGroup controlId="pickupDate">
              <BookingReservationFormLabel>Date From</BookingReservationFormLabel>
              <Form.Control type='date' />
            </BookingReservationFormGroup>
          </BookingReservationFormCol>
          <BookingReservationFormCol md={6} lg={3}>
            {/* Select element must have an accessible name: Element has no title attributeMicrosoft Edge Tools axe/forms */}
            <BookingReservationFormGroup controlId="pickupTime">
              <BookingReservationFormLabel aria-labelledby="Label for select pickup time">Pick-up Time</BookingReservationFormLabel>
              <Form.Select id="pickupTime" name="pickupTime" aria-labelledby="Select for pickup time" title="Select for pickup time">
                <option value='9:00'>9:00</option>
                <option value='10:00'>10:00</option>
                <option value='11:00'>11:00</option>
                <option value='12:00'>12:00</option>
              </Form.Select>
            </BookingReservationFormGroup>
          </BookingReservationFormCol>
          <BookingReservationFormCol md={6} lg={3}>
            <BookingReservationFormGroup controlId="dropOffDate">
              <BookingReservationFormLabel>Date To</BookingReservationFormLabel>
              <Form.Control type='date' />
            </BookingReservationFormGroup>
          </BookingReservationFormCol>
          <BookingReservationFormCol md={6} lg={3}>
            {/* Select element must have an accessible name: Element has no title attributeMicrosoft Edge Tools axe/forms */}
            <BookingReservationFormGroup controlId="dropOffTime">
              <BookingReservationFormLabel aria-labelledby="Label for select drop-off time">Drop-off Time</BookingReservationFormLabel>
              <Form.Select id="dropOffTime" name="dropOffTime" aria-labelledby="Select for drop-ff time" title="Select for drop-ff time">
                <option value='9:00'>9:00</option>
                <option value='10:00'>10:00</option>
                <option value='11:00'>11:00</option>
                <option value='12:00'>12:00</option>
              </Form.Select>
            </BookingReservationFormGroup>
          </BookingReservationFormCol>
          <BookingReservationFormCol md={4}>
            <BookingReservationFormGroup controlId="over25">
              <BookingReservationFormCheckbox
                inline
                label="Is driver over 25 years old?"
                name="over25"
                type='checkbox'
                id='over25'
              />
            </BookingReservationFormGroup>
          </BookingReservationFormCol>
          <BookingReservationFormCol md={4}>
            <BookingReservationFormGroup controlId="discountCodeCheck">
              <BookingReservationFormCheckbox
                inline
                label="I have discount code"
                name="discountCodeCheck"
                type='checkbox'
                id='discountCodeCheck'
                checked={isDiscountSelected} 
                onChange={() => setDiscountSelected(!isDiscountSelected)}
              />
            </BookingReservationFormGroup>
          </BookingReservationFormCol>
          {isDiscountSelected && <BookingReservationFormCol md={4}>
            <BookingReservationFormGroup controlId="discountCode">
              <Form.Control placeholder='Discount Code' type='text' />
            </BookingReservationFormGroup>
          </BookingReservationFormCol>}
          <BookingReservationFormCol xs={12}>
            <BookingReservationFormButtonGroup>
              <Button type="submit">Find Cars</Button>
            </BookingReservationFormButtonGroup>
          </BookingReservationFormCol>
        </Row>
      </Container>
    </BookingReservationForm>
  )
}
