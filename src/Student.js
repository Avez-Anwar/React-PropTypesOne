import React from "react";
import PropTypes from "prop-types";

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

Student.defaultProps = {
  name: "Peter",
  roll: 23,
  class: 10
};

Student.propTypes = {
  name: PropTypes.string,
  roll: PropTypes.number,
  class: PropTypes.number
};

export default Student;
