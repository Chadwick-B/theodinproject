import React, { Component } from 'react';
import GeneralForm from './GeneralForm.js';
import GeneralDisplay from './GeneralDisplay.js';

class GeneralSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: '',
        email: '',
        phoneNumber: '',
      },
      isFormShowing: true,
      isShowingEmpty: false,
    };
  }

  isFormValid = () => {
    const { name, email, phoneNumber } = this.state.data;
    const values = [name, email, phoneNumber];

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

  handleEdit = () => {
    this.setState({
      isFormShowing: true,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.isFormValid()) {
      this.setState({
        isFormShowing: false,
        isShowingEmpty: false,
      });
    } else {
      this.setState({
        isShowingEmpty: true,
      });
    }
  };

  render() {
    return (
      <div>
        <h2 className="text-center">General Information</h2>
        {this.state.isFormShowing ? (
          <GeneralForm
            name={this.state.data.name}
            email={this.state.data.email}
            phoneNumber={this.state.data.phoneNumber}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            showEmpty={this.state.isShowingEmpty}
          />
        ) : (
          <GeneralDisplay
            name={this.state.data.name}
            email={this.state.data.email}
            phoneNumber={this.state.data.phoneNumber}
            onEdit={this.handleEdit}
          />
        )}
      </div>
    );
  }
}

export default GeneralSection;
