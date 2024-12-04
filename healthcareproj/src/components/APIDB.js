import React, { useState, useEffect } from 'react';  
import { getPatients } from './api';  
  
const Patients = () => {  
  const [patients, setPatients] = useState([]);  
  
  useEffect(() => {  
   getPatients().then((data) => setPatients(data));  
  }, []);  
  
  return (  
   <div>  
    <h1>Patients</h1>  
    <ul>  
      {patients.map((patient) => (  
       <li key={patient.id}>{patient.name}</li>  
      ))}  
    </ul>  
   </div>  
  );  
};
