import React, { useState, useEffect } from 'react';
import { getPatients } from './api';
import { getPhysicians } from './api';

const database = () => {
  const [patients, setPatients] = useState([]);
  const [physicians, setPhysicians] = useState([]);

  useEffect(() => {
        getPatients().then((data) => setPatients(data));
        getPhysicians().then((data) => setPhysicians(data));
        },
          []);

  return (
      <div>
          <h1>Patients</h1>
        <ul>
            {patients.map((patient) => (
              <li key={patient.id}>{patient.name}</li>
            ))}
            <h1>Physicians</h1>
            {physicians.map((physician) => (
              <li key={physician.id}>{physician.name}</li>
            ))}
        </ul>
      </div>
  );
};
export default database;
