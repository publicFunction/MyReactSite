import React, { Component } from 'react';
import classnames from 'classnames';
import { StringsMix } from './../../../mixins';

import './StarCitizen.css';

class StarCitizen extends Component {
  render() {
    return (
      <div className={classnames('Star-Citizen', this.props.classes)}>
        <h4>{StringsMix.updateTitle(this.props.classes)}</h4>
      </div>
    );
  }
}

export default StarCitizen;
