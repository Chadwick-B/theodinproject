import React from 'react';
import General from './General';
import Education from './Education';
import Practical from './Practical';
import '../styles/cv.css';

const CV = () => {
  return (
    <>
      <h2 className="text-center">CV Form</h2>
      <div className="container">
        <General />
        <Education />
        <Practical />
      </div>
    </>
  );
};

export default CV;
