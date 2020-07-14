import React from 'react';
import { Link } from "react-router-dom";
import { Card, Row, Col } from 'react-bootstrap'
import { PlusIcon } from '@primer/octicons-react'

function NewLink() {
  return (
    <Card>
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={3}>
            <Link to="/add-vote" className="btn-square">
              <PlusIcon size={40} />
            </Link>
          </Col>
          <Col xs={9} >
            <h3 className="text-center mb-0">SUBMIT A LINK</h3>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default NewLink;