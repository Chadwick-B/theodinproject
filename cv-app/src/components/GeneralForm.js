import React from 'react';

const GeneralForm = (props) => {
  const { name, email, phoneNumber, onChange, onSubmit, showEmpty } = props;

  return (
    <form
      onSubmit={onSubmit}
      className={`flex column form-container ${
        showEmpty ? 'display-empty' : ''
      }`}
    >
      <label htmlFor="name" className={name.length <= 0 ? 'empty' : ''}>
        Name
      </label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        autoComplete="off"
      />
      <label htmlFor="email" className={email.length <= 0 ? 'empty' : ''}>
        Email
      </label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={onChange}
        autoComplete="off"
      />
      <label
        htmlFor="phoneNumber"
        className={phoneNumber.length <= 0 ? 'empty' : ''}
      >
        Phone Number
      </label>
      <input
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        onChange={onChange}
        autoComplete="off"
        pattern="[0-9]+"
      />
      <button type="submit" className="btn">
        Save
      </button>
    </form>
  );
};

export default GeneralForm;
