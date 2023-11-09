import { useEffect, useState } from 'react';
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

const timeOptions = ['9:00', '10:00', '11:00', '12:00']

const buildDateValue = (date: Date) => 
  date.getFullYear().toString() + 
  "-" + 
  (date.getMonth() + 1).toString().padStart(2,'0') +
  "-" + 
  date.getDate().toString().padStart(2,'0')


const addTimeToDate = (time: string,  date: Date | undefined) => {
  if (!time || !date) return
  const [hrs, mins] = time.split(':')
  date.setHours(parseInt(hrs))
  date.setMinutes(parseInt(mins))
  date.setSeconds(0);
}

const buildDataObject = (formData: any) => {
  const pickupLocation = formData.get('pickupLocation')
  const dropOffLocation = formData.get('dropOffLocation')
  const pickupDate = formData.get('pickupDate')
  const pickupTime = formData.get('pickupTime')
  const dropOffDate = formData.get('dropOffDate')
  const dropOffTime = formData.get('dropOffTime')
  const isOver25 = formData.get('over25') ? 'Yes' : 'No'
  const discountCodeCheck = formData.get('discountCodeCheck')
  const discountCode = discountCodeCheck ? formData.get('discountCode') : ''

  const obj = {
    pickupLocation,
    dropOffLocation,
    pickupDate,
    pickupTime,
    dropOffDate,
    dropOffTime,
    isOver25,
    discountCodeCheck,
    discountCode
  }

  console.log(obj)
}

export const BookingReservation = () => {
  const today = new Date()
  const [isDiscountSelected, setDiscountSelected] = useState(false)
  const [isFormValidated, setFormValidated] = useState(false)
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [startTime, setStartTime] = useState(timeOptions[0])
  const [endDate, setEndDate] = useState<Date>()
  const [endTime, setEndTime] = useState(timeOptions[0])
  const [isStartDateValid, setStartDateValid] = useState(false)
  const [isEndDateValid, setEndDateValid] = useState(false)

  useEffect(() => {
    // Handle start date and start time validation
    addTimeToDate(startTime, startDate)
    setStartDateValid(today < startDate)

    // Handle end date and end time validation
    addTimeToDate(endTime, endDate || undefined)
    setEndDateValid(endDate ? startDate < endDate : false)

    setFormValidated(isStartDateValid && isEndDateValid)

  }, [startDate, startTime, endDate, endTime])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = (event.currentTarget);
    form.setAttribute('validated', (isStartDateValid && isEndDateValid).toString())
    console.log(form.checkValidity())
    console.log('isFormValidated', isFormValidated)
    console.log('isStartDateValid && isEndDateValid', isStartDateValid && isEndDateValid)

    if (form.checkValidity() === false) {
      setFormValidated(false);
    } else {
      setFormValidated(true);
    }
    buildDataObject(new FormData(event.target as any))
  };

  return (
    <BookingReservationForm noValidate validated={isFormValidated} onSubmit={handleSubmit}>
      <Container>
        <Row>
          <BookingReservationFormCol md={6}>
            <BookingReservationFormGroup controlId="pickupLocation">
              <BookingReservationFormLabel>Pickup Location</BookingReservationFormLabel>
              <Form.Control type='text' name="pickupLocation" required />
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a pickup location.
              </Form.Control.Feedback>
            </BookingReservationFormGroup>
          </BookingReservationFormCol>
          <BookingReservationFormCol md={6}>
            <BookingReservationFormGroup controlId="dropOffLocation">
              <BookingReservationFormLabel>Drop-off Location</BookingReservationFormLabel>
              <Form.Control type='text' name="dropOffLocation" required />
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a drop-off location.
              </Form.Control.Feedback>
            </BookingReservationFormGroup>
          </BookingReservationFormCol>
          <BookingReservationFormCol md={6} lg={3}>
            <BookingReservationFormGroup controlId="pickupDate">
              <BookingReservationFormLabel>Date From</BookingReservationFormLabel>
              <Form.Control
                type='date'
                required
                name="pickupDate"
                value={buildDateValue(startDate)}
                onChange={event => setStartDate(new Date(event.target.value))}
                isInvalid={!isStartDateValid} 
                isValid={isStartDateValid}
                />
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Start date and time need to be in the future!
                </Form.Control.Feedback>
            </BookingReservationFormGroup>
          </BookingReservationFormCol>
          <BookingReservationFormCol md={6} lg={3}>
            {/* Select element must have an accessible name: Element has no title attributeMicrosoft Edge Tools axe/forms */}
            <BookingReservationFormGroup controlId="pickupTime">
              <BookingReservationFormLabel aria-labelledby="Label for select pickup time">Pick-up Time</BookingReservationFormLabel>
              <Form.Select
                id="pickupTime" 
                name="pickupTime"
                aria-labelledby="Select for pickup time"
                title="Select for pickup time"
                value={startTime}
                onChange={event => setStartTime(event.target.value)}
                isInvalid={!isStartDateValid} 
                isValid={isStartDateValid}
                >
                {timeOptions.map(value => <option key={value} value={value}>{value}</option>)}
              </Form.Select>
              <Form.Control.Feedback type="valid">
                  Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Start date and time need to be in the future!
              </Form.Control.Feedback>
            </BookingReservationFormGroup>
          </BookingReservationFormCol>
          <BookingReservationFormCol md={6} lg={3}>
            <BookingReservationFormGroup controlId="dropOffDate">
              <BookingReservationFormLabel>Date To</BookingReservationFormLabel>
              <Form.Control
                type='date'
                name="dropOffDate"
                required
                value={endDate ? buildDateValue(endDate) : 'dd/mm/yyyy'}
                onChange={event => setEndDate(new Date(event.target.value))}
                isInvalid={!isEndDateValid} 
                isValid={isEndDateValid}
                />
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                End date and time need to be greater than start date and time!
              </Form.Control.Feedback>
            </BookingReservationFormGroup>
          </BookingReservationFormCol>
          <BookingReservationFormCol md={6} lg={3}>
            {/* Select element must have an accessible name: Element has no title attributeMicrosoft Edge Tools axe/forms */}
            <BookingReservationFormGroup controlId="dropOffTime">
              <BookingReservationFormLabel aria-labelledby="Label for select drop-off time">Drop-off Time</BookingReservationFormLabel>
              <Form.Select
                id="dropOffTime"
                name="dropOffTime"
                aria-labelledby="Select for drop-ff time"
                title="Select for drop-ff time"
                value={endTime}
                onChange={event => setEndTime(event.target.value)}
                isInvalid={!isEndDateValid} 
                isValid={isEndDateValid}>
                {timeOptions.map(value => <option key={value} value={value}>{value}</option>)}
              </Form.Select>
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                End date and time need to be greater than start date and time!
              </Form.Control.Feedback>
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
              <Form.Control placeholder='Discount Code' type='text' name="discountCode" required />
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a discount code.
              </Form.Control.Feedback>
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
