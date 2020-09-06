import React, { useState, useEffect } from 'react';

const SinglePatientPage = ({match}) => {
  

  const [patient, setPatient] = useState([]);
    useEffect(() => {
      fetch(
        `http://hapi.fhir.org/baseR4/Patient/${match.params.id}`
      )
        .then(res => res.json())
        .then(json => {
          console.log("test");
          console.log(json)
          setPatient(json);
          })
      }, [match]);

    return(
      <>
      <h1>Single patient details for {patient.id} </h1>
      <>
              {patient.name ?  //Allowance for the name field being undefined
                patient.name.map(  name =>(
                    <>
                    <p>First name: {name.given}</p> <p>Surname: {name.family}</p>
                    </>
                )):"Name Undefined..."}
                </>
                {patient.gender? 
                <p>Gender: {patient.gender}</p>
                :<p>Gender not assigned</p>}
                {patient.birthDate ? 
                 <p>DOB: {patient.birthDate}</p>
                 :<p>DOB not assigned</p>}

                {patient.address ?  //Allowance for the name field being undefined
                patient.address.map( address =>(
                    <>
                    <p>Address type: {address.use}</p> 
                    <p>Address: {address.line}</p> 
                    <p>Country code:{address.country}</p>
                    </>
                )):"Address Undefined..."}
                
      
      </>
    )
   
   
   
   }
   export default SinglePatientPage;