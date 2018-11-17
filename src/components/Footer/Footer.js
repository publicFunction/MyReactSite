import React, { Component } from 'react';
import Option from './../Option/Option';

import './Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <footer className="Footer">
        <Option classes="Health Left" />
        <Option classes="Live Left" />
        <Option classes="Twitter Center" />
        <Option classes="Twitch Right" />
        <Option classes="You-Tube Right" />
      </footer>
    );
  }
}

export default Footer;
