import React, { Component } from 'react';
import classnames from 'classnames';

import './Twitch.css';

class Twitch extends Component {
  render() {
    return (
      <div className={classnames('Twitch', this.props.classes)}>
        {this.props.classes}
      </div>
    );
  }
}

export default Twitch;
