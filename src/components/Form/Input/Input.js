import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

class Input extends Component {
  addLabel = () => {
    return <label htmlFor={this.props.name}>{this.props.placeholder}</label>;
  };

  render() {
    return (
      <div className="Form-Element">
        {this.props.useLabel ? this.addLabel() : null}
        <input
          name={this.props.name}
          id={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          className={this.props.classes}
        />
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.node,
  type: PropTypes.node,
  placeholder: PropTypes.node,
  classes: PropTypes.node
};

export default Input;
