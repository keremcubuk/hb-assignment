import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { sortByMostVoted, sortByLessVoted, upVote, downVote, deleteLink } from '../redux/actions'
import { selectVoteList } from '../redux/reducer'

// Custom Components
import NewLink from '../components/NewLink';
import DropdownFilter from '../components/DropdownFilter';
import LinkItem from '../components/LinkItem';
import Pagination from '../components/Pagination';

function VoteList(props) {
  const dispatch = useDispatch();
  const linkList = useSelector(selectVoteList);
  const perPage = 5;
  const [offset, setOffset] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const handlePaginate = (selectedPage) => {
    setOffset((selectedPage - 1) * perPage);
    setActivePage(selectedPage);
  }

  return (
    <Row>
      <Col lg={{ span: 4, offset: 4 }} sm={{ span: 8, offset: 2 }}>
        <NewLink />

        <div className="divider" />

        <DropdownFilter
          sortByMostVoted={() => dispatch(sortByMostVoted())}
          sortByLessVoted={() => dispatch(sortByLessVoted())}
        />

        {linkList?.slice(offset, offset + perPage).map((item, index)=> {
          return (
            <LinkItem
              item={item}
              key={`link-item${index}`}
              upVote={upVote}
              downVote={downVote}
              deleteLink={deleteLink}
            />
          );
        })}

        <Pagination
          linkList={linkList}
          handlePaginate={handlePaginate}
          activePage={activePage}
          perPage={perPage}
        />
      </Col>
    </Row>
  );
}

export default VoteList;
