import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { BookingReservationFeedback } from './booking-reservation-feedback/booking-reservation-feedback.component'

import styled from '@emotion/styled'
import ModalComponent from '../ui/modal/modal.component'

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

const BookingReservationFormLabel = styled(Form.Label)`
  color: var(--bs-black);
`

const BookingReservationFormCheckbox = styled(Form.Check)`
  color: var(--bs-black);
`

const BookingReservationFormButtonGroup = styled.div`
  padding: 1.25rem;
`

const bookingReservationSchema = z
  .object({
    pickupLocation: z
      .string()
      .min(1, { message: 'Please provide a pickup location.' }),
    dropOffLocation: z
      .string()
      .min(1, { message: 'Please provide a drop-off location.' }),
    pickupDate: z
      .date({ required_error: 'Please provide a pick-up date.' })
      .min(new Date(), { message: 'Pick-up date needs to be in the future' }),
    dropOffDate: z
      .date({ required_error: 'Please provide a drop-off date.' })
      .min(new Date(), { message: 'Drop-off date needs to be in the future' }),
    isOver25: z.boolean(),
    hasDiscountCode: z.boolean(),
    discountCode: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.pickupDate &&
      data.dropOffDate &&
      data.pickupDate > data.dropOffDate
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['dropOffDate'],
        message: 'Drop-off date needs to be greater than pick-up date',
      })
    }

    if (data.hasDiscountCode && !data.discountCode) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['discountCode'],
        message: 'Please provide a discount code.',
      })
    }
  })
export type FormData = z.infer<typeof bookingReservationSchema>

export const BookingReservation = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalDataObj, setModalDataObj] = useState<FormData | null>(null)

  const {
    register,
    trigger,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
  } = useForm<FormData>({
    resolver: zodResolver(bookingReservationSchema),
  })

  const isDiscountSelected = watch('hasDiscountCode', false)

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setModalDataObj(data)
    setShowModal(true)
  }

  const hideModalHandler = () => {
    setShowModal(false)
  }

  return (
    <>
      <BookingReservationForm
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className='container-fluid'>
        <Row>
          <BookingReservationFormGroup
            as={BookingReservationFormCol}
            md='8'
            controlId='pickupLocation'>
            <BookingReservationFormLabel>
              Pickup Location
            </BookingReservationFormLabel>
            <Form.Control
              {...register('pickupLocation')}
              type='text'
              placeholder='Pickup Location'
              isValid={!errors.pickupLocation && isSubmitted}
              isInvalid={!!errors.pickupLocation}
            />
            {errors.pickupLocation && (
              <BookingReservationFeedback
                invalidFeedbackText={errors.pickupLocation?.message}
              />
            )}
          </BookingReservationFormGroup>
          <BookingReservationFormGroup
            as={BookingReservationFormCol}
            md='4'
            controlId='pickupDate'>
            <BookingReservationFormLabel>Date From</BookingReservationFormLabel>
            <Form.Control
              {...register('pickupDate', { valueAsDate: true })}
              type='datetime-local'
              isValid={!errors.pickupDate && isSubmitted}
              isInvalid={!!errors.pickupDate}
            />
            {errors.pickupDate && (
              <BookingReservationFeedback
                invalidFeedbackText={errors.pickupDate?.message}
              />
            )}
          </BookingReservationFormGroup>
        </Row>
        <Row>
          <BookingReservationFormGroup
            as={BookingReservationFormCol}
            md='8'
            controlId='dropOffLocation'>
            <BookingReservationFormLabel>
              Drop-off Location
            </BookingReservationFormLabel>
            <Form.Control
              {...register('dropOffLocation')}
              type='text'
              placeholder='Drop-off Location'
              isValid={!errors.dropOffLocation && isSubmitted}
              isInvalid={!!errors.dropOffLocation}
            />
            {errors.dropOffLocation && (
              <BookingReservationFeedback
                invalidFeedbackText={errors.dropOffLocation?.message}
              />
            )}
          </BookingReservationFormGroup>
          <BookingReservationFormGroup
            as={BookingReservationFormCol}
            md='4'
            controlId='dropOffDate'>
            <BookingReservationFormLabel>Date To</BookingReservationFormLabel>
            <Form.Control
              {...register('dropOffDate', { valueAsDate: true })}
              type='datetime-local'
              isValid={!errors.dropOffDate && isSubmitted}
              isInvalid={!!errors.dropOffDate}
            />
            {errors.dropOffDate && (
              <BookingReservationFeedback
                invalidFeedbackText={errors.dropOffDate?.message}
              />
            )}
          </BookingReservationFormGroup>
        </Row>
        <Row className='mb-3 align-items-center'>
          <BookingReservationFormGroup as={Col} md='4' controlId='isOver25'>
            <BookingReservationFormCheckbox
              label='Is driver over 25 years old?'
              {...register('isOver25')}
            />
          </BookingReservationFormGroup>
          <BookingReservationFormGroup
            as={Col}
            md='4'
            controlId='hasDiscountCode'>
            <BookingReservationFormCheckbox
              label='I have discount code'
              {...register('hasDiscountCode', {
                onChange: (e) => trigger('discountCode'),
              })}
            />
          </BookingReservationFormGroup>
          {isDiscountSelected && (
            <BookingReservationFormGroup
              as={Col}
              md='4'
              controlId='discountCode'>
              <BookingReservationFormLabel>
                Discount Code
              </BookingReservationFormLabel>
              <Form.Control
                {...register('discountCode')}
                isValid={!errors.discountCode && isSubmitted}
                isInvalid={!!errors.discountCode}
                type='text'
                placeholder='Discount Code'
              />
              <BookingReservationFeedback
                invalidFeedbackText={errors.discountCode?.message}
              />
            </BookingReservationFormGroup>
          )}
        </Row>
        <BookingReservationFormButtonGroup>
          <Button type='submit'>Find Cars</Button>
        </BookingReservationFormButtonGroup>
      </BookingReservationForm>
      {modalDataObj && (
        <ModalComponent
          showModal={showModal}
          onClose={hideModalHandler}
          formData={modalDataObj}
        />
      )}
    </>
  )
}
