import React from 'react';
import { Button, Dropdown } from 'react-bootstrap'
import { ArrowRightIcon, TriangleDownIcon } from '@primer/octicons-react'

function DropdownFilter() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
      className="btn-dropdown"
    >
      <span>{children}</span>
      <span className="icon-wrapper">
        <TriangleDownIcon size={24} />
      </span>
    </Button>
  ));

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
        Order by
    </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Most Voted (Z <ArrowRightIcon /> A)</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Less Voted (A <ArrowRightIcon /> Z)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownFilter;