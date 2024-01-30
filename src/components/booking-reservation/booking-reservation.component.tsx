import { useForm, SubmitHandler } from "react-hook-form";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { z } from "zod";
// is date-fns necessary?
// import { subDays } from "date-fns/subDays";

import { zodResolver } from "@hookform/resolvers/zod";
import { BookingReservationFeedback } from "./booking-reservation-feedback/booking-reservation-feedback.component";

const bookingReservationSchema = z
  .object({
    pickupLocation: z
      .string()
      .min(1, { message: "Please provide a pickup location." }),
    dropOffLocation: z
      .string()
      .min(1, { message: "Please provide a drop-off location." }),
    pickupDate: z
      .date({ required_error: "Please provide a pick-up date."})
      .min(new Date(), { message: "Pick-up date needs to be in the future" }),
    dropOffDate: z
      .date({ required_error: "Please provide a drop-off date."})
      .min(new Date(), { message: "Drop-off date needs to be in the future" }),
    isOver25: z.boolean(),
    hasDiscountCode: z.boolean().optional(),
    discountCode: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.pickupDate && data.dropOffDate && data.pickupDate > data.dropOffDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["dropOffDate"],
        message: "Drop-off date needs to be greater than pick-up date",
      });
    }

    if (data.hasDiscountCode && !data.discountCode) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["discountCode"],
        message: "Please provide a discount code.",
      });
    }
  });
type FormData = z.infer<typeof bookingReservationSchema>;

export const BookingReservation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
  } = useForm<FormData>({
    resolver: zodResolver(bookingReservationSchema),
  });

  const isDiscountSelected = watch("hasDiscountCode", false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("form", data);
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-3">
        <Form.Group as={Col} md="8" controlId="pickupLocation">
          <Form.Label>Pickup Location</Form.Label>
          <Form.Control
            {...register("pickupLocation")}
            type="text"
            placeholder="Pickup Location"
            isValid={!errors.pickupLocation && isSubmitted}
            isInvalid={!!errors.pickupLocation}
          />
          {errors.pickupLocation && (
            <BookingReservationFeedback
              invalidFeedbackText={errors.pickupLocation?.message}
            />
          )}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="pickupDate">
          <Form.Label>Date From</Form.Label>
          <Form.Control
            {...register("pickupDate", { valueAsDate: true })}
            type="datetime-local"
            isValid={!errors.pickupDate && isSubmitted}
            isInvalid={!!errors.pickupDate}
          />
          {errors.pickupDate && (
            <BookingReservationFeedback
              invalidFeedbackText={errors.pickupDate?.message}
            />
          )}
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="8" controlId="dropOffLocation">
          <Form.Label>Drop-off Location</Form.Label>
          <Form.Control
            {...register("dropOffLocation")}
            type="text"
            placeholder="Drop-off Location"
            isValid={!errors.dropOffLocation && isSubmitted}
            isInvalid={!!errors.dropOffLocation}
          />
          {errors.dropOffLocation && (
            <BookingReservationFeedback
              invalidFeedbackText={errors.dropOffLocation?.message}
            />
          )}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="dropOffDate">
          <Form.Label>Date To</Form.Label>
          <Form.Control
            {...register("dropOffDate", { valueAsDate: true })}
            type="datetime-local"
            isValid={!errors.dropOffDate && isSubmitted}
            isInvalid={!!errors.dropOffDate}
          />
          {errors.dropOffDate && (
            <BookingReservationFeedback
              invalidFeedbackText={errors.dropOffDate?.message}
            />
          )}
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="isOver25">
          <Form.Check
            label="Is driver over 25 years old?"
            {...register("isOver25")}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="hasDiscountCode">
          <Form.Check
            label="I have discount code"
            {...register("hasDiscountCode")}
          />
        </Form.Group>
        {isDiscountSelected && (
          <Form.Group as={Col} md="4" controlId="discountCode">
            <Form.Label>Discount Code</Form.Label>
            <Form.Control
              {...register("discountCode")}
              isValid={!errors.discountCode && isSubmitted}
              isInvalid={!!errors.discountCode}
              type="text"
              placeholder="Discount Code"
            />
            <BookingReservationFeedback
              invalidFeedbackText={errors.discountCode?.message}
            />
          </Form.Group>
        )}
      </Row>
      <Button type="submit">Find Cars</Button>
    </Form>
  );
};
