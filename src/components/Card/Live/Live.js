import React, { Component } from 'react';
import classnames from 'classnames';
import { StringsMix } from './../../../mixins';

import './Live.css';

class Live extends Component {
  render() {
    return (
      <div className={classnames('Live', this.props.classes)}>
        <h4>{StringsMix.updateTitle(this.props.classes)}</h4>
        <div className="Card-Content">
          <p>No Live Data</p>
        </div>
      </div>
    );
  }
}

export default Live;
