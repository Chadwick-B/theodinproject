import React from 'react';

const PracticalDisplay = (props) => {
  const { dataSets, onEdit, onDelete } = props;

  return (
    <ul className="display-container">
      {dataSets.map((data) => {
        return (
          <li key={data.id}>
            <div className="icon-group">
              <span onClick={() => onEdit(data)} className="icon-btn">
                &#x270E;
              </span>
              <span onClick={() => onDelete(data.id)} className="icon-btn">
                &#10006;
              </span>
            </div>
            <p>Company Name: {data.companyName}</p>
            <p>Position Title: {data.positionTitle}</p>
            <p>Job Tasks: {data.jobTasks}</p>
            <p>
              Date: {data.dateFrom} to {data.dateTo}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default PracticalDisplay;
