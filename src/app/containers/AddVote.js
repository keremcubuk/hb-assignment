import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from '@primer/octicons-react'

function AddVote() {
  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }}>
        <div className="mb-5">
          <Link to="/"><ArrowLeftIcon size={16} />Return to List</Link>
        </div>

        <h4 className="mb-4">Add New Link</h4>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Link Name:</Form.Label>
            <Form.Control type="text" placeholder="e.g Alphabet" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Link URL:</Form.Label>
            <Form.Control type="text" placeholder="e.g http://abc.xyz" />
          </Form.Group>
          <Button variant="dark" type="submit" className="float-right">
            Add
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default AddVote;
