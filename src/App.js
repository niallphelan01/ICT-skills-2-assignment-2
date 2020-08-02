import React from 'react';
import SiteHeader from './components/siteHeader';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Accordion from 'react-bootstrap/Accordion';
import CardDeck from 'react-bootstrap/CardDeck';
import Table from 'react-bootstrap/Table'
import { BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./globals/fontawesome";

function App() {
  return (
      <>
      <BrowserRouter>
        <SiteHeader />
        </BrowserRouter>
        <div>
        
         <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Gender</th>
      <th>Date of Birth</th>
      <th>More information</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>Male</td>
      <td>01-11-1978</td>
      <td><DropdownButton id="dropdown-basic-button" title="Action">
                     <Dropdown.Item href="#/action-1">More information</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                 </DropdownButton></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jessie</td>
      <td>Thornton</td>
      <td>Female</td>
      <td>01-11-1978</td>
      <td><DropdownButton id="dropdown-basic-button" title="Action">
                     <Dropdown.Item href="#/action-1">More information</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                 </DropdownButton></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry</td>
      <td>Test</td>
      <td>Male</td>
      <td>01-11-1978</td>
      <td><DropdownButton id="dropdown-basic-button" title="Action">
                     <Dropdown.Item href="#/action-1">More information</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                 </DropdownButton></td>
    </tr>
  </tbody>
</Table>
         </div>
         </>
  );
}

export default App;

