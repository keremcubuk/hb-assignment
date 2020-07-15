import React from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap'

function ApprovalModal(props) {
  return (
    <Modal show={props.show} onHide={props.closeAction}>
      <Modal.Header closeButton>
        <Modal.Title>Remove Link</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p className="text-muted mb-0">Do you want to remove:</p>
        <h4>{props.name}</h4>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Row>
          <Col xs={6}>
            <Button variant="black rounded" onClick={props.okAction}>
              OK
          </Button>
          </Col>
          <Col xs={6}>
            <Button variant="black rounded" onClick={props.closeAction}>
              CANCEL
        </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}

export default ApprovalModal;