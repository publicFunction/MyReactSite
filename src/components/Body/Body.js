import React, { Component } from 'react';
import Routes from './../../routes';
import BaseLine from './../BaseLine/BaseLine';

import './Body.scss';

class Body extends Component {
  render() {
    return (
      <div className="Container">
        <Routes />
        <BaseLine inverted={true} />
      </div>
    );
  }
}

export default Body;
