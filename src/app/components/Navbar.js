import React from 'react';
import { Navbar as BSNavbar } from 'react-bootstrap';
import images from '../images';


function Navbar() {
  return (
    <BSNavbar className="justify-content-between">
      <BSNavbar.Brand href="/">
        <img
          src={images.logo}
          width="35"
          height="35"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </BSNavbar.Brand>
      <div className="font-huge">
        <span className="font-weight-bolder">Link</span>
        <span className="font-weight-light">VOTE </span>
        <span className="font-weight-bold">Challenge</span>
      </div>
    </BSNavbar>
  )
}

export default Navbar;