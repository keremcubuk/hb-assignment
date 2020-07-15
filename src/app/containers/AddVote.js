import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from '@primer/octicons-react'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

// Custom Components
import { addNewLink } from '../redux/actions';

function AddVote(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [linkName, setLinkName] = useState('');
  const [linkURL, setLinkURL] = useState('');

  const addNewLinkSubmit = () => {
    dispatch(addNewLink({ linkName, linkURL }));
    history.push("/")
  };

  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }}>
        <div className="mb-5 text-dark">
          <Link to="/" className="btn-black"><ArrowLeftIcon size={16} />Return to List</Link>
        </div>

        <h4 className="mb-4">Add New Link</h4>

        <Form onSubmit={addNewLinkSubmit}>
          <Form.Group controlId="formLinkName">
            <Form.Label>Link Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g Alphabet"
              value={linkName}
              onChange={e => setLinkName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formLinkURL">
            <Form.Label>Link URL:</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g http://abc.xyz"
              value={linkURL}
              onChange={e => setLinkURL(e.target.value)}
            />
          </Form.Group>
          <Button variant="black rounded" type="submit" className="float-right">
            ADD
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default AddVote;
