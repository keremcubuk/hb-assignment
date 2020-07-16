import React, { useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap'
import { ArrowRightIcon, TriangleDownIcon } from '@primer/octicons-react'

function DropdownFilter(props) {
  const [selectedOption, setSelectedOption] = useState('Order By');

  const selectItem = (e) => {
    if (e === "1") {
      setSelectedOption("Most Voted (Z > A)");
    } else {
      setSelectedOption("Less Voted (A > Z)");
    }
  }

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
    <Dropdown onSelect={e => selectItem(e)}>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
        {selectedOption}
    </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as="button" eventKey="1" onSelect={props.sortByMostVoted}>Most Voted (Z <ArrowRightIcon /> A)</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="2" onSelect={props.sortByLessVoted}>Less Voted (A <ArrowRightIcon /> Z)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownFilter;