import React from 'react';

const PracticalForm = (props) => {
  const {
    companyName,
    positionTitle,
    jobTasks,
    dateFrom,
    dateTo,
    onChange,
    onSubmit,
    showEmpty,
  } = props;

  return (
    <form
      onSubmit={onSubmit}
      className={`flex column form-container ${
        showEmpty ? 'display-empty' : ''
      }`}
    >
      <label
        htmlFor="companyName"
        className={companyName.length <= 0 ? 'empty' : ''}
      >
        Company Name
      </label>
      <input
        type="text"
        name="companyName"
        value={companyName}
        onChange={onChange}
        autoComplete="off"
      />
      <label
        htmlFor="positionTitle"
        className={positionTitle.length <= 0 ? 'empty' : ''}
      >
        Title of Position
      </label>
      <input
        type="text"
        name="positionTitle"
        value={positionTitle}
        onChange={onChange}
        autoComplete="off"
      />
      <label htmlFor="jobTasks" className={jobTasks.length <= 0 ? 'empty' : ''}>
        Main Tasks of Job
      </label>
      <textarea
        name="jobTasks"
        onChange={onChange}
        autoComplete="off"
        rows="6"
        cols="50"
      >
        {jobTasks}
      </textarea>
      <div className="date-field">
        <label
          htmlFor="dateFrom"
          className={dateFrom.length <= 0 ? 'empty' : ''}
        >
          Date From
        </label>
        <label htmlFor="dateTo" className={dateTo.length <= 0 ? 'empty' : ''}>
          To
        </label>
        <input
          type="date"
          name="dateFrom"
          value={dateFrom}
          onChange={onChange}
        />
        <input type="date" name="dateTo" value={dateTo} onChange={onChange} />
      </div>
      <button type="submit" className="btn">
        Save
      </button>
    </form>
  );
};

export default PracticalForm;
