import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ArrowUpIcon, ArrowDownIcon } from '@primer/octicons-react'

function LinkItem(props) {
  const { point, name, url, upVote, downVote } = props;

  return (
    <Row className="mb-4">
      <Col xs={3}>
        <div className="box">
          <div className="box-body">
            <h3>{point}</h3>
            <p>POINTS</p>
          </div>
        </div>
      </Col>
      <Col xs={9}>
        <h4 className="mb-0">{name}</h4>
        <p className="text-muted font-medium">({url})</p>

        <Row>
          <Col xs={6}>
            <a onClick={() => {}} className="btn-vote btn-vote-up"><ArrowUpIcon /> Up Vote</a>
          </Col>
          <Col xs={6}>
            <a onClick={() => {}} className="btn-vote"><ArrowDownIcon /> Down Vote</a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default LinkItem;
