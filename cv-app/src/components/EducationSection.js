import React, { Component } from 'react';
import EducationForm from './EducationForm.js';
import EducationDisplay from './EducationDisplay.js';
import uid from '../utils/uid.js';

class EducationSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSets: [],
      data: {
        id: uid(),
        schoolName: '',
        titleOfStudy: '',
        dateFrom: '',
        dateTo: '',
      },
      isShowingEmpty: false,
    };
  }

  isFormValid = () => {
    const { schoolName, titleOfStudy, dateFrom, dateTo } = this.state.data;
    const values = [schoolName, titleOfStudy, dateFrom, dateTo];

    for (const value of values) {
      if (value.length <= 0) return false;
    }

    return true;
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      },
      isShowingEmpty: false,
    });
  };

  handleEdit = (editData) => {
    this.setState({
      dataSets: this.state.dataSets.filter((data) => {
        return data !== editData;
      }),
      data: editData,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.isFormValid()) {
      this.setState({
        dataSets: this.state.dataSets.concat(this.state.data),
        data: {
          id: uid(),
          schoolName: '',
          titleOfStudy: '',
          dateFrom: '',
          dateTo: '',
        },
        isShowingEmpty: false,
      });
    } else {
      this.setState({
        isShowingEmpty: true,
      });
    }
  };

  handleDelete = (key) => {
    this.setState({
      dataSets: this.state.dataSets.filter((data) => {
        return data.id !== key;
      }),
    });
  };

  render() {
    const data = this.state.data;
    return (
      <div>
        <h2 className="text-center">Education Information</h2>
        <EducationDisplay
          dataSets={this.state.dataSets}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
        />
        <EducationForm
          schoolName={data.schoolName}
          titleOfStudy={data.titleOfStudy}
          dateFrom={data.dateFrom}
          dateTo={data.dateTo}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          showEmpty={this.state.isShowingEmpty}
        />
      </div>
    );
  }
}

export default EducationSection;
