import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ConfirmationModalProps {
    show: boolean;
    onHide: () => void;
    onResendEmail: () => void;
    emailReceiver: string | undefined; // Altere conforme necessário
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ show, onHide, onResendEmail, emailReceiver }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Form Validated, Email sent to {emailReceiver}. Please check your email.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onHide}>
                    Ok
                </Button>
                <Button variant="danger" onClick={onResendEmail}>
                    Resend Email
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmationModal;
