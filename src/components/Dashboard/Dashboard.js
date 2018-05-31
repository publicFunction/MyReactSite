import React, { Component } from 'react';
import classnames from 'classnames';
import Card from './../Card/Card';

import './Dashboard.css';

class Dashboard extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classnames('Dashboard', className)}>
        <section className="Dashboard-Row">
          <Card classes="Twitter" />
          <Card classes="Twitch" />
          <Card classes="Star-Citizen" />
        </section>
        <section className="Dashboard-Row">
          <Card classes="Squadron-42" />
          <Card classes="Live" />
          <Card classes="Star-Citizen-Org" />
        </section>
      </div>
    );
  }
}

export default Dashboard;
