import React, { Component } from 'react';

import './Option.css';
import classnames from "classnames";

class Option extends Component {
  render() {
    return (
      <div className={classnames('Option', this.props.classes)}>
        {this.props.classes}
      </div>
    );
  }
}

export default Option;