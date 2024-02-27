import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { format } from 'date-fns'

import { type FormData } from '../../booking-reservation/booking-reservation.component'
import ModalElement from './modal-element/modal-element.component'

interface ModalComponentProps {
  formData: FormData
  showModal: boolean
  onClose: () => void
}

const ModalComponent = ({ formData, showModal, onClose }: ModalComponentProps) => (
  <Modal show={showModal} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Your submitted details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ModalElement title='Pickup Location' answer={formData.pickupLocation} />
      <ModalElement title='Date From' answer={format(formData.pickupDate, 'PPPppp')} />
      <ModalElement title='Drop-off Location' answer={formData.dropOffLocation} />
      <ModalElement title='Date To' answer={format(formData.dropOffDate, 'PPPppp')} />
      <ModalElement
        title='Is driver over 25 years old?'
        answer={formData.isOver25 ? 'Yes' : 'No'}
      />
      <ModalElement title='I have discount code' answer={formData.hasDiscountCode ? 'Yes' : 'No'} />
      {formData.discountCode && (
        <ModalElement title='Discount code' answer={formData.discountCode} />
      )}
    </Modal.Body>
    <Modal.Footer>
      <Button variant='secondary' onClick={onClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
)

export default ModalComponent
