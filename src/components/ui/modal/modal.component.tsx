import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { format } from "date-fns";

import { type FormData } from '../../booking-reservation/booking-reservation.component';
import ModalElement from './modal-element/modal-element.component';

const camelCaseToWords = (string: string) => {
  const result = string.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

const userFriendlyText = (value: string | boolean | Date) => {
  if ('boolean' === typeof value) {
    return value ? 'Yes' : 'No'
  } else if (value instanceof Date) {
    return format(value, 'PPPppp');
  } else {
    return value
  }
}

interface ModalComponentProps {
  formData: FormData;
  showModal: boolean | undefined;
  onClose: (() => void) | undefined;
}

const ModalComponent = ({formData, showModal, onClose}: ModalComponentProps) => 
 (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your submitted details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Object.entries(formData).map(([key, value]) => {
          const questionTitle = camelCaseToWords(key);
          const questionAnswer = userFriendlyText(value);

          return <ModalElement key={key} title={questionTitle} answer={questionAnswer} />} 
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )

export default ModalComponent
