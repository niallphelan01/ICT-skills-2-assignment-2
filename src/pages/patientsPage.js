import React, { useState, useEffect } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Table from 'react-bootstrap/Table'
import PatientList from '../components/patientList';

const PatientsPage = () => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
      fetch(
        `http://hapi.fhir.org/baseR4/Patient?_pretty=true`
      )
        .then(res => res.json())
        .then(json => {
          console.log(json.entry)
          setPatients(json.entry);
          })
        
    }, []);
    
/*<section className = 'patientsList'>
       {patients.map((patient) => (
        <PatientList patients={patient}/>
       ))}
       </section>*/
    return(
      <>
      
       <div>
        <div className="row ">
        <div className="col-md-12">
        <h4>
          <span>Patient Search</span>
          </h4>
          <h2>
          <input
            type="text"
            placeholder="First Name"
            />
           <input
            type="text"
            placeholder="Last Name"
            />
            <input
            type="text"
            placeholder="Gender"
            />
            
            <input
            type="text"
            placeholder="DOB"
            />
            </h2>
          
          </div>
          </div>
          <section className = 'patientsList'>
       
       <PatientList patients={patients}/>
      
      </section>
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
                     <Dropdown.Item href="#/action-2">Add to waiting room</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Visit history</Dropdown.Item>
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
                     <Dropdown.Item href="#/action-2">Add to waiting room</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Visit history</Dropdown.Item>
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
                     <Dropdown.Item href="#/action-2">Add to waiting room</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Visit History</Dropdown.Item>
                 </DropdownButton></td>
            </tr>
        </tbody>
         </Table>
         </div>
         </>
      
    )
   
   
   
   }
   export default PatientsPage;