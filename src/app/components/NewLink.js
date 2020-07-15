import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { PlusIcon } from '@primer/octicons-react'

function NewLink() {
  return (
    <div className="box-gray">
      <Row className="align-items-center">
        <Col xs={3}>
          <a href="/add-vote" className="btn-square">
            <PlusIcon size={40} />
          </a>
        </Col>
        <Col xs={9} >
          <h3 className="text-center mb-0">SUBMIT A LINK</h3>
        </Col>
      </Row>
    </div>
  );
}

export default NewLink;