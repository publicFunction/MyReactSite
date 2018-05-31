import React, { Component } from 'react';
import classnames from 'classnames';

import './Squadron-42.css';

class Squadron42 extends Component {
  render() {
    return (
      <div className={classnames('Squadron-42', this.props.classes)}>
        {this.props.classes}
      </div>
    );
  }
}

export default Squadron42;
