import React, { Component } from 'react';
import classnames from 'classnames';

import './Live.css';

class Live extends Component {
  render() {
    return (
      <div className={classnames('Live', this.props.classes)}>
        {this.props.classes}
      </div>
    );
  }
}

export default Live;
