import React, { Component } from 'react';
import Option from './../Option/Option';

import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <footer className="Footer">
        <Option classes="Health" />
        <Option classes="Live" />
        <Option classes="Twitter" />
        <Option classes="Twitch" />
        <Option classes="You-Tube" />
      </footer>
    );
  }
}

export default Footer;
