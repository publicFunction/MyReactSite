import React, { Component } from 'react';
import classnames from 'classnames';

import './StarCitizenOrg.css';

class StarCitizenOrg extends Component {
  render() {
    return (
      <div className={classnames('Star-Citizen-Org', this.props.classes)}>
        {this.props.classes}
      </div>
    );
  }
}

export default StarCitizenOrg;
