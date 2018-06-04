import React, { Component } from 'react';
import BaseLine from './../BaseLine/BaseLine';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <BaseLine inverted={false} />
      </header>
    );
  }
}

export default Header;
