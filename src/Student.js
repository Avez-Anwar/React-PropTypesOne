import React from 'react';
import PropTypes from 'prop-types';

class Student extends React.Component {
  render() {
    return (
      <div>
        Name: {this.props.name}
        <br />
        Roll: {this.props.roll}
        <br />
        Class: {this.props.class}
      </div>
    );
  }
}

Student.propTypes = {
  name: PropTypes.string,
  roll: PropTypes.number,
  class: PropTypes.number
};

export default Student;
