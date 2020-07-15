import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { ArrowUpIcon, ArrowDownIcon, NoEntryIcon } from '@primer/octicons-react'
import { useDispatch } from 'react-redux';
import ApprovalModal from './ApprovalModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LinkItem(props) {
  const dispatch = useDispatch();
  const { item, upVote, downVote, deleteLink } = props;
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const mouseEnter = () => setIsMouseInside(true);
  const mouseLeave = () => setIsMouseInside(false);

  const notify = () => toast.success(`${item.name} removed.`);


  return (
    <div className="on-hover mb-4" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <Row>
        <Col xs={3}>
          <div className="box">
            <div className="box-body">
              <h3>{item.point}</h3>
              <p>POINTS</p>
            </div>
          </div>
        </Col>
        <Col xs={9}>
          <h4 className="mb-0">{item.name}</h4>
          <p className="text-muted font-medium">({item.url})</p>

          <Row>
            <Col xs={6}>
              <div onClick={() => dispatch(upVote(item.id))} type="button" className="btn-vote btn-vote-up">
                  <ArrowUpIcon /> Up Vote
              </div>
            </Col>
            <Col xs={6}>
              <div onClick={() => dispatch(downVote(item.id))} type="button" className="btn-vote">
                <ArrowDownIcon /> Down Vote
              </div>
            </Col>
          </Row>

          {isMouseInside ? (
            <Button variant="delete" onClick={handleShow}>
              <NoEntryIcon size={24} />
            </Button>
          ) : null}

          <ApprovalModal
            show={show}
            name={item.name}
            okAction={() => {
              dispatch(deleteLink(item.id));
              setIsMouseInside(false);
              handleClose();
              notify();
            }}
            closeAction={handleClose}
          />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
          />
        </Col>
      </Row>
    </div>
  );
}

export default LinkItem;
