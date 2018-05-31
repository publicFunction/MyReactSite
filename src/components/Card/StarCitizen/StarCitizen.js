import React, { Component } from 'react';
import classnames from 'classnames';

import './StarCitizen.css';

class StarCitizen extends Component {
  render() {
    return (
      <div className={classnames('Star-Citizen', this.props.classes)}>
        {this.props.classes}
      </div>
    );
  }
}

export default StarCitizen;
