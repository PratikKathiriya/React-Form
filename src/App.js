import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';

const App = () => {
  const [studentData, setStudentData] = useState([]);

  const handleFormSubmit = (formData) => {
    console.log("Form data submitted:", formData);
    setStudentData((prevData) => [...prevData, formData]);
  };

  console.log("Current studentData state:::::::::::::::::", studentData);

  return (
    <div>
      <Form onSubmit={handleFormSubmit} />
      {
        studentData && <Table students={studentData} />
      }

    </div>
  );
};

export default App;
