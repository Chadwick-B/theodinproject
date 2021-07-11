import React from 'react';

const GeneralDisplay = (props) => {
  const { name, email, phoneNumber, onEdit } = props;

  return (
    <ul className="display-container">
      <li>
        <div className="icon-group">
          <span onClick={onEdit} className="icon-btn">
            &#x270E;
          </span>
        </div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone Number: {phoneNumber}</p>
      </li>
    </ul>
  );
};

export default GeneralDisplay;
