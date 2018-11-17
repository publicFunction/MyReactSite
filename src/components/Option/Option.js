import React, { Component } from 'react';

import './Option.scss';
import classnames from 'classnames';

class Option extends Component {
  render() {
    return (
      <div className={classnames('Option', this.props.classes)}>
        <b />
      </div>
    );
  }
}

export default Option;
