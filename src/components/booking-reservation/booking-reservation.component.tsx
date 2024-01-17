import { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { BookingReservationFeedback } from './booking-reservation-feedback/booking-reservation-feedback.component'

const bookingReservationSchema = z
  .object({
    pickupLocation: z.string().min(1, { message: 'Please provide a pickup location.' }),
    dropOffLocation: z.string().min(1, { message: 'Please provide a drop-off location.' }),
    pickupDate: z.string().min(1, { message: 'Please provide a pick-up date.' }),
    // pickupDate: z.date().min(new Date(), { message: 'Please provide a pick-up date.' }),
    pickupTime: z.string().min(1, { message: 'Please provide a pick-up time.' }),
    dropOffDate: z.string().min(1, { message: 'Please provide a drop-off date.' }),
    // dropOffDate: z.date().min(new Date(), { message: 'Please provide a drop-off date.' }),
    dropOffTime: z.string().min(1, { message: 'Please provide a drop-off time.' }),
    isOver25: z.boolean(),
    hasDiscountCode: z.boolean(),
    discountCode: z.string(),
  })
  .required()
type FormData = z.infer<typeof bookingReservationSchema>

const timeOptions = [
  { value: '', text: '--Please Select--' },
  { value: '9:00', text: '9:00' },
  { value: '10:00', text: '10:00' },
  { value: '11:00', text: '11:00' },
  { value: '12:00', text: '12:00' },
]

export const BookingReservation = () => {
  const [isDiscountSelected, setDiscountSelected] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
  } = useForm<FormData>({
    resolver: zodResolver(bookingReservationSchema),
  })

  useEffect(() => {
    const discountCodeSubscription = watch((value) =>
      setDiscountSelected(value.hasDiscountCode || false),
    )
    const bookingTimeSubscription = watch((value, { name, type }) => {
      const { pickupDate, pickupTime, dropOffDate, dropOffTime } = value
      if (pickupDate && pickupTime && dropOffDate && dropOffTime) {
        const today = new Date()
        const newPickupDate = new Date(`${pickupDate}T${pickupTime}:00`)
        const newDropOffDate = new Date(`${dropOffDate}T${dropOffTime}:00`)
        console.log('today: ', today)
        console.log('pickupDate: ', newPickupDate)
        console.log('dropOffDate: ', newDropOffDate)

        if (today > newPickupDate) {
          // date needs to be in the future
        }

        if (newPickupDate > newDropOffDate) {
          // pickup date cannot be greater than drop off date
        }
      }
    })

    return () => {
      discountCodeSubscription.unsubscribe()
      bookingTimeSubscription.unsubscribe()
    }
  }, [watch])

  // Callback version of watch.  It's your responsibility to unsubscribe when done.
  // React.useEffect(() => {
  //   const subscription = watch((value, { name, type }) =>
  //     console.log(value, name, type)
  //   )
  //   return () => subscription.unsubscribe()
  // }, [watch])

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
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
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6' controlId='pickupLocation'>
          <Form.Label>Pickup Location</Form.Label>
          <Form.Control
            {...register('pickupLocation')}
            type='text'
            placeholder='Pickup Location'
            isValid={!errors.pickupLocation && isSubmitted}
            isInvalid={!!errors.pickupLocation}
          />
          {errors.pickupLocation && (
            <BookingReservationFeedback invalidFeedbackText={errors.pickupLocation?.message} />
          )}
        </Form.Group>
        <Form.Group as={Col} md='6' controlId='dropOffLocation'>
          <Form.Label>Drop-off Location</Form.Label>
          <Form.Control
            {...register('dropOffLocation')}
            type='text'
            placeholder='Drop-off Location'
            isValid={!errors.dropOffLocation && isSubmitted}
            isInvalid={!!errors.dropOffLocation}
          />
          {errors.dropOffLocation && (
            <BookingReservationFeedback invalidFeedbackText={errors.dropOffLocation?.message} />
          )}
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='3' controlId='pickupDate'>
          <Form.Label>Date From</Form.Label>
          <Form.Control
            {...register('pickupDate')}
            type='date'
            isValid={!errors.pickupDate && isSubmitted}
            isInvalid={!!errors.pickupDate}
          />
          {errors.pickupDate && (
            <BookingReservationFeedback invalidFeedbackText={errors.pickupDate?.message} />
          )}
        </Form.Group>
        <Form.Group as={Col} md='3' controlId='pickupTime'>
          <Form.Label>Pick-up Time</Form.Label>
          <Form.Select
            {...register('pickupTime')}
            isValid={!errors.pickupTime && isSubmitted}
            isInvalid={!!errors.pickupTime}
          >
            {timeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </Form.Select>
          {errors.pickupTime && (
            <BookingReservationFeedback invalidFeedbackText={errors.pickupTime?.message} />
          )}
        </Form.Group>
        <Form.Group as={Col} md='3' controlId='dropOffDate'>
          <Form.Label>Date To</Form.Label>
          <Form.Control
            {...register('dropOffDate')}
            type='date'
            isValid={!errors.dropOffDate && isSubmitted}
            isInvalid={!!errors.dropOffDate}
          />
          {errors.dropOffDate && (
            <BookingReservationFeedback invalidFeedbackText={errors.dropOffDate?.message} />
          )}
        </Form.Group>
        <Form.Group as={Col} md='3' controlId='dropOffTime'>
          <Form.Label>Drop-off Time</Form.Label>
          <Form.Select
            {...register('dropOffTime')}
            isValid={!errors.dropOffTime && isSubmitted}
            isInvalid={!!errors.dropOffTime}
          >
            {timeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </Form.Select>
          {errors.dropOffTime && (
            <BookingReservationFeedback invalidFeedbackText={errors.dropOffTime?.message} />
          )}
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='4' controlId='isOver25'>
          <Form.Check label='Is driver over 25 years old?' {...register('isOver25')} />
        </Form.Group>
        <Form.Group as={Col} md='4' controlId='hasDiscountCode'>
          <Form.Check label='I have discount code' {...register('hasDiscountCode')} />
        </Form.Group>
        {isDiscountSelected && (
          <Form.Group as={Col} md='4' controlId='discountCode'>
            <Form.Label>Discount Code</Form.Label>
            <Form.Control {...register('discountCode')} type='text' placeholder='Discount Code' />
          </Form.Group>
        )}
      </Row>
      <Button type='submit'>Find Cars</Button>
    </Form>
  )
}
