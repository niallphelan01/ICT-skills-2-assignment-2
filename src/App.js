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
        <CardDeck>
        <Accordion defaultActiveKey="0">
           <Card className = 'text-center' style={{ width: '18rem' }}>
              <Card.Title><FontAwesomeIcon icon={["fas", "address-book"]} size="1x" /> Patient Name</Card.Title>
              <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1"> More information</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                 <Card.Body>More information on the patient, fields etc.
                     <DropdownButton id="dropdown-basic-button" title="Action">
                     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                 </DropdownButton>
                 </Card.Body>
                
              </Accordion.Collapse>
              <Card.Footer className="text-muted">Last updated</Card.Footer>
                      </Card>
         </Accordion>
         <Accordion defaultActiveKey="0">
           <Card className = 'text-center' style={{ width: '18rem' }}>
              <Card.Title><FontAwesomeIcon icon={["fas", "address-book"]} size="1x" /> Patient Name</Card.Title>
              <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1"> More information</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                 <Card.Body>More information on the patient, fields etc.
                     <DropdownButton id="dropdown-basic-button" title="Action">
                     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                 </DropdownButton>
                 </Card.Body>
                
              </Accordion.Collapse>
              <Card.Footer className="text-muted">Last updated</Card.Footer>
                      </Card>
         </Accordion>
         <Accordion defaultActiveKey="0">
           <Card className = 'text-center' style={{ width: '18rem' }}>
              <Card.Title>Patient Name</Card.Title>
              <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1"> More information</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                 <Card.Body>More information on the patient, fields etc.
                     <DropdownButton id="dropdown-basic-button" title="Action">
                     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                 </DropdownButton>
                 </Card.Body>
                
              </Accordion.Collapse>
              <Card.Footer className="text-muted">Last updated</Card.Footer>
                      </Card>
         </Accordion>
         <Accordion defaultActiveKey="0">
           <Card className = 'text-center' style={{ width: '18rem' }}>
              <Card.Title>Patient Name</Card.Title>
              <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1"> More information</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                 <Card.Body>More information on the patient, fields etc.
                     <DropdownButton id="dropdown-basic-button" title="Action">
                     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                 </DropdownButton>
                 </Card.Body>
                
              </Accordion.Collapse>
              <Card.Footer className="text-muted">Last updated</Card.Footer>
                      </Card>
         </Accordion>
         
         </CardDeck>
         </div>
         </>
  );
}

export default App;

