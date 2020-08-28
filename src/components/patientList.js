import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Table from 'react-bootstrap/Table'
const PatientList = ({patients}) => {
   console.log(patients)
     return(
        <>
        <Table striped bordered hover>
         <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Address</th>
                <th>More information</th>
            </tr>
        </thead>
        
        {
        patients.map(

            patient =>(
            <>
            <tbody>
            <tr>
            <td>{patient.resource.id}</td>
            
            
          {
              <>
              {patient.resource.name ?  //Allowance for the name field being undefined
                patient.resource.name.map( name =>(
                    <>
                    <td>{name.given}</td> <td>{name.family}</td>
                    </>
                )):"Undefined..."}
                </>
            }
            <td>{patient.resource.gender}</td>
            <td>{patient.resource.birthDate}</td>
            {
                <>
              {patient.resource.address ?
               patient.resource.address.map( address =>(
                    <> <td>{address.line}{address.country}</td></>)):"Undefined ..." }
                    
                    
                </>
            }
            
            <td><DropdownButton id="dropdown-basic-button" title="Action">
                    <Dropdown.Item href={patient.fullUrl}>More information  </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Add to waiting room</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Visit history</Dropdown.Item>
                </DropdownButton></td>   
            
                
            
            </tr>  
              </tbody>
            </>
            )
            )
                   }   
                 
        </Table>
                  </>
    )
    
    
    
    }
export default PatientList;