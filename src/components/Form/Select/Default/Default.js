import React, { Component } from 'react';
import './Default.scss';

class Default extends Component {
  render() {
    return (
      <select className="Select">
        <option value={this.props.placeholder.value}>
          {this.props.placeholder.label}
        </option>
        {this.props.options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    );
  }
}

export default Default;
