import React, { Component } from 'react';
import classnames from 'classnames';

import './Dashboard.css';

class Dashboard extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classnames('Dashboard', className)}>
        BODY CONTENT FOR DASHBOARD
      </div>
    );
  }
}

export default Dashboard;
