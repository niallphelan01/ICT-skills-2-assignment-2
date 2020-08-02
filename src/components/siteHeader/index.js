import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './../../logo/512px-Patient_logo_2019.png'


const SiteHeader = () => {
  return (
    <>
    <div>
    <img class="img-fluid" src={logo} crop="fill" effect="sepia" alt="Logo" height="50px" />
    </div>
    <Navbar>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="">HL7 Application</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="">Home</Nav.Link>
      <Nav.Link href="">Waiting Room</Nav.Link>
      <Nav.Link href="">Patients</Nav.Link>
      <Nav.Link href="">Visit History</Nav.Link>
      <Nav.Link href="">Scheduling</Nav.Link>
    </Nav>
    
  </Navbar>
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">User Name</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
</>
  );
};

export default SiteHeader;