import React, { useState } from 'react';
import uid from '../utils/uid.js';
import Field from './Field.js';

const Practical = () => {
  const [data, setData] = useState([
    {
      id: uid(),
      companyName: '',
      positionTitle: '',
      jobTasks: '',
      dateFrom: '',
      dateTo: '',
      isEditable: true,
    },
  ]);

  const handleChange = (e, id) => {
    const name = e.target.name;
    const value = e.target.value;

    const newData = data.map((formData) => {
      if (formData.id === id) {
        return {
          ...formData,
          [name]: value,
        };
      } else {
        return {
          ...formData,
        };
      }
    });

    setData(newData);
  };

  const handleEdit = (id) => {
    let newData = [...data];
    const index = newData.findIndex((formData) => formData.id === id);
    newData[index].isEditable = true;

    setData(newData);
  };

  const handleAdd = () => {
    const newData = [
      ...data,
      {
        id: uid(),
        companyName: '',
        positionTitle: '',
        jobTasks: '',
        dateFrom: '',
        dateTo: '',
        isEditable: true,
      },
    ];

    setData(newData);
  };

  const handleDelete = (id) => {
    const newData = data.filter((formData) => {
      return formData.id !== id;
    });

    setData(newData);
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();

    let newData = [...data];
    const index = newData.findIndex((formData) => formData.id === id);
    newData[index].isEditable = false;

    setData(newData);
  };

  return (
    <ul className="section">
      <h2 className="title">Practical Information</h2>
      {data.map(
        ({
          id,
          companyName,
          positionTitle,
          jobTasks,
          dateFrom,
          dateTo,
          isEditable,
        }) => {
          return (
            <li key={id}>
              {isEditable ? (
                <form onSubmit={(e) => handleSubmit(e, id)} className="form">
                  <Field
                    label="Company Name"
                    name="companyName"
                    type="text"
                    defaultValue={companyName}
                    onChange={(e) => handleChange(e, id)}
                  />
                  <Field
                    label="Position Title"
                    name="positionTitle"
                    type="text"
                    defaultValue={positionTitle}
                    onChange={(e) => handleChange(e, id)}
                  />
                  <Field
                    label="Job Tasks"
                    name="jobTasks"
                    type="textarea"
                    defaultValue={jobTasks}
                    onChange={(e) => handleChange(e, id)}
                  />
                  <div className="date-group flex gap">
                    <Field
                      label="Date From"
                      name="dateFrom"
                      type="date"
                      defaultValue={dateFrom}
                      onChange={(e) => handleChange(e, id)}
                    />
                    <Field
                      label="Date To"
                      name="dateTo"
                      type="date"
                      defaultValue={dateTo}
                      onChange={(e) => handleChange(e, id)}
                    />
                  </div>
                  <button type="submit" className="btn">
                    Save
                  </button>
                </form>
              ) : (
                <>
                  <div className="icon-group">
                    <span onClick={() => handleEdit(id)}>&#x270E;</span>
                    <span onClick={() => handleDelete(id)}>&#10006;</span>
                  </div>
                  <p>Company Name: {companyName}</p>
                  <p>Position Title: {positionTitle}</p>
                  <p>Job Tasks: {jobTasks}</p>
                  <p>
                    Date: {dateFrom} to {dateTo}
                  </p>
                </>
              )}
            </li>
          );
        }
      )}
      <button type="button" className="btn" onClick={handleAdd}>
        Add
      </button>
    </ul>
  );
};

export default Practical;
