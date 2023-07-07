import { Button } from '.';
import Modal from 'react-bootstrap/Modal';

type Props = {
  showModal: boolean;
  onCloseModal: () => void;
}

export const MyModal = ({ showModal, onCloseModal }: Props) => {
  return (
    <Modal
      size="lg"
      centered
      show={showModal}
      backdrop="static"
    >
      <Modal.Header className='d-flex justify-content-center'>
        <Modal.Title className='text-upper'>
          Tú mensaje fue enviado
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-center'>
        Gracias por contactarte conmigo, te responderé lo más pronto posible.
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center'>
        <Button onClick={onCloseModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
