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
    <Navbar bg="dark" variant="dark">
    <Navbar.Collapse className="justify-content-end">
    <Navbar.Brand href="">HL7 Application</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">home</Nav.Link>
      <Nav.Link href="/waitingroom">Waiting Room</Nav.Link>
      <Nav.Link href="/patients">patients</Nav.Link>
      <Nav.Link href="/visithistory">Visit History</Nav.Link>
      <Nav.Link href="/scheduling">Scheduling</Nav.Link>
      
    </Nav>
   
    <Nav>
    <Navbar.Text>
      Signed in as: <a href="#login">User Name</a>
    </Navbar.Text>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    

</>
  );
};

export default SiteHeader;