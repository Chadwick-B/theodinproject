import React, { useState } from 'react';
import uid from '../utils/uid.js';
import Field from './Field.js';

const Education = () => {
  const [data, setData] = useState([
    {
      id: uid(),
      schoolName: '',
      titleOfStudy: '',
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
        schoolName: '',
        titleOfStudy: '',
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
      <h2 className="title">Education Information</h2>
      {data.map(
        ({ id, schoolName, titleOfStudy, dateFrom, dateTo, isEditable }) => {
          return (
            <li key={id}>
              {isEditable ? (
                <form onSubmit={(e) => handleSubmit(e, id)} className="form">
                  <Field
                    label="School Name"
                    name="schoolName"
                    type="text"
                    defaultValue={schoolName}
                    onChange={(e) => handleChange(e, id)}
                  />
                  <Field
                    label="Title of Study"
                    name="titleOfStudy"
                    type="text"
                    defaultValue={titleOfStudy}
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
                  <p>School Name: {schoolName}</p>
                  <p>Study: {titleOfStudy}</p>
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

export default Education;
