import React, { Component } from 'react';
import classnames from 'classnames';
import { StringsMix } from './../../../mixins';

import './Squadron-42.css';

class Squadron42 extends Component {
  render() {
    return (
      <div className={classnames('Squadron-42', this.props.classes)}>
        <h4>{StringsMix.updateTitle(this.props.classes)}</h4>
      </div>
    );
  }
}

export default Squadron42;
