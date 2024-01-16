import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';


import { BookingReservationFeedback } from './booking-reservation-feedback/booking-reservation-feedback.component';

const bookingReservationSchema = z.object({
  pickupLocation: z.string().min(1, { message: 'Required' }),
  dropOffLocation: z.string().min(1, { message: 'Required' }),
  pickupDate: z.string().min(1, { message: 'Required' }),
  pickupTime: z.string().min(1, { message: 'Required' }),
  dropOffDate: z.string().min(1, { message: 'Required' }),
  dropOffTime: z.string().min(1, { message: 'Required' }),
  isOver25: z.boolean(),
  hasDiscountCode: z.boolean(),
  discountCode: z.string(),
}).required();
type FormData = z.infer<typeof bookingReservationSchema>;

const timeOptions = [
  {value: '', text: '--Please Select--'},
  {value: '9:00', text: '9:00'},
  {value: '10:00', text: '10:00'},
  {value: '11:00', text: '11:00'},
  {value: '12:00', text: '12:00'},
];

export const BookingReservation = () => {
  const [validated, setValidated] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(bookingReservationSchema),
  });
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    // console.log(errors)
  }

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const form = event.currentTarget;

  //   if (form.checkValidity() === false) {
  //     event.stopPropagation();
  //   } else {
  //     const dataObj = buildDataObject(new FormData(event.currentTarget))
  //     console.log(dataObj)
  //   }
  //   setValidated(true);
  // };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6' controlId='pickupLocation'>
          <Form.Label>Pickup Location</Form.Label>
          <Form.Control
            type='text'
            placeholder='Pickup Location'
            {...register('pickupLocation', { required: true})}
          />
          {errors.pickupLocation && <span>This field is required</span>}
          {/* <BookingReservationFeedback invalidFeedbackText='Please provide a pickup location.' /> */}
        </Form.Group>
        <Form.Group as={Col} md='6' controlId='dropOffLocation'>
          <Form.Label>Drop-off Location</Form.Label>
          <Form.Control
            type='text'
            placeholder='Drop-off Location'
            {...register('dropOffLocation', { required: true})}
          />
          {errors.dropOffLocation && <span>This field is required</span>}
          {/* <BookingReservationFeedback invalidFeedbackText='Please provide a drop-off location.' /> */}
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='3' controlId='pickupDate'>
          <Form.Label>Date From</Form.Label>
          <Form.Control
            type='date'
            {...register('pickupDate', { required: true})}
          />
          {errors.pickupDate && <span>This field is required</span>}
          {/* <BookingReservationFeedback invalidFeedbackText='Please provide a pick-up date.' /> */}
        </Form.Group>
        <Form.Group as={Col} md='3' controlId='pickupTime'>
          <Form.Label>Pick-up Time</Form.Label>
          <Form.Select
            {...register('pickupTime', { required: true})}>
            {timeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </Form.Select>
          {errors.pickupTime && <span>This field is required</span>}
          {/* <BookingReservationFeedback invalidFeedbackText='Please provide a pick-up time.' /> */}
        </Form.Group>
        <Form.Group as={Col} md='3' controlId='dropOffDate'>
          <Form.Label>Date To</Form.Label>
          <Form.Control
            type='date'
            {...register('dropOffDate', { required: true})}
          />
          {errors.dropOffDate && <span>This field is required</span>}
          {/* <BookingReservationFeedback invalidFeedbackText='Please provide a drop-off date.' /> */}
        </Form.Group>
        <Form.Group as={Col} md='3' controlId='dropOffTime'>
          <Form.Label>Drop-off Time</Form.Label>
          <Form.Select
            {...register('dropOffTime', { required: true})}>
            {timeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </Form.Select>
          {errors.dropOffTime && <span>This field is required</span>}
          {/* <BookingReservationFeedback invalidFeedbackText='Please provide a drop-off time.' /> */}
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='4' controlId='isOver25'>
          <Form.Check
            label='Is driver over 25 years old?'
            {...register('isOver25')}
          />
        </Form.Group>
        <Form.Group as={Col} md='4' controlId='hasDiscountCode'>
          <Form.Check
            label='I have discount code'
            {...register('hasDiscountCode')}
          />
        </Form.Group>
        <Form.Group as={Col} md='4' controlId='discountCode'>
          <Form.Label>Discount Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Discount Code'
            {...register('discountCode', { required: true})}
          />
          {errors.discountCode && <span>This field is required</span>}
          {/* <BookingReservationFeedback invalidFeedbackText='Please provide a discount code.' /> */}
        </Form.Group>
      </Row>
      <Button type='submit'>Find Cars</Button>
    </Form>
  )
}
