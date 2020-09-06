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
                patient.name.map( name =>(
                    <>
                    <p>First name {name.given}</p> <p>Surname {name.family}</p>
                    </>
                )):"Undefined..."}
                </>
               
      
      </>
    )
   
   
   
   }
   export default SinglePatientPage;