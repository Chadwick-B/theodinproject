import React, { useState } from 'react';
import Field from './Field.js';

const General = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    isEditable: true,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setData({
      ...data,
      isEditable: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      ...data,
      isEditable: false,
    });
  };

  return (
    <div className="section">
      <h2 className="title">General Information</h2>
      <div>
        {data.isEditable ? (
          <form onSubmit={handleSubmit} className="form">
            <Field
              label="Name"
              name="name"
              type="text"
              defaultValue={data.name}
              onChange={handleChange}
            />
            <Field
              label="Email"
              name="email"
              type="text"
              defaultValue={data.email}
              onChange={handleChange}
            />
            <Field
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              defaultValue={data.phoneNumber}
              onChange={handleChange}
            />
            <button type="submit" className="btn">
              Save
            </button>
          </form>
        ) : (
          <div>
            <div className="icon-group">
              <span onClick={handleEdit}>&#x270E;</span>
            </div>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Phone Number: {data.phoneNumber}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default General;
