import React, { useState } from 'react';

const Field = (props) => {
  const { label, name, type, defaultValue, onChange } = props;
  const [isError, setIsError] = useState(false);

  const validate = (value) => {
    const trim = value.replace(' ', '');

    if (trim.length === 0) return false;
    return true;
  };

  const handleChange = (e, id) => {
    const newValue = e.target.value;
    setIsError(validate(newValue) ? false : true);
    onChange(e, id);
  };

  return (
    <div>
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      <div>
        {type === 'textarea' ? (
          <textarea
            name={name}
            defaultValue={defaultValue}
            onChange={handleChange}
            autoComplete="off"
            className={`field ${isError ? 'error' : ''}`}
            rows={5}
            columns={50}
          ></textarea>
        ) : (
          <input
            type={type}
            name={name}
            defaultValue={defaultValue}
            onChange={handleChange}
            autoComplete="off"
            className={`field ${isError ? 'error' : ''}`}
          ></input>
        )}
      </div>
    </div>
  );
};

export default Field;
