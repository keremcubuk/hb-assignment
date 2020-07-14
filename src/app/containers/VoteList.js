import React, { useState } from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';

// Custom Components
import NewLink from '../components/NewLink';
import DropdownFilter from '../components/DropdownFilter';
import LinkItem from '../components/LinkItem';
import * as data from '../data/data.json';

function VoteList() {
  let perPage = 5;
  let items = [];
  let pageSize = Math.ceil(data.linkList.length / perPage)
  const [offset, setOffset] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const handlePaginate = (selectedPage) => {
    console.log(selectedPage);
    setOffset((selectedPage - 1) * perPage);
    setActivePage(selectedPage);
  }

  for (let number = 1; number <= pageSize; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage} onClick={() => handlePaginate(number)}>
        {number}
      </Pagination.Item>,
    );
  }
  
  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }}>
        <NewLink />

        <div className="divider" />

        <DropdownFilter />
        {console.log('>', offset)}
        {console.log('<', perPage)}
        {data.linkList.slice(offset, offset + perPage).map((item, index)=> {
          return (
            <LinkItem
              name={item.name}
              point={item.point}
              url={item.url}
              createDate={item.createDate}
              updateDate={item.updateDate}
              key={`link-item${index}`}
            />
          );
        })}

        {data.linkList.length > 5 ? <Pagination>{items}</Pagination> : null}
      </Col>
    </Row>
  );
}

export default VoteList;
