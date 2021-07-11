import React from 'react';

const EducationForm = (props) => {
  const {
    schoolName,
    titleOfStudy,
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
        htmlFor="schoolName"
        className={schoolName.length <= 0 ? 'empty' : ''}
      >
        School Name
      </label>
      <input
        type="text"
        name="schoolName"
        value={schoolName}
        onChange={onChange}
        autoComplete="off"
      />
      <label
        htmlFor="titleOfStudy"
        className={titleOfStudy.length <= 0 ? 'empty' : ''}
      >
        Title of Study
      </label>
      <input
        type="text"
        name="titleOfStudy"
        value={titleOfStudy}
        onChange={onChange}
        autoComplete="off"
      />
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

export default EducationForm;
