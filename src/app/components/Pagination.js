
import React from 'react';
import { Pagination as BSPagination } from 'react-bootstrap';

function Pagination(props) {
  let items = [];
  let pageSize = Math.ceil(props.linkList?.length / props.perPage)

  for (let number = 1; number <= pageSize; number++) {
    items.push(
      <BSPagination.Item key={number} active={number === props.activePage} onClick={() => props.handlePaginate(number)}>
        {number}
      </BSPagination.Item>,
    );
  }

  return (
    <BSPagination className="justify-content-center">
      <BSPagination.Prev onClick={() => props.handlePaginate(props.activePage - 1)} disabled={props.activePage <= 1} />
      {items}
      <BSPagination.Next onClick={() => props.handlePaginate(props.activePage + 1)} disabled={props.activePage >= pageSize} />
    </BSPagination>
  );
}

export default Pagination;
