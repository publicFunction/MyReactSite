import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Header-Menu">
          <ul></ul>
        </div>
        <span className="Header-Logo" />
      </header>
    );
  }
}

export default Header;
