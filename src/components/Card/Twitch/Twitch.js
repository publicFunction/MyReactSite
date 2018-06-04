import React, { Component } from 'react';
import classnames from 'classnames';
import { StringsMix } from './../../../mixins';

import './Twitch.css';

class Twitch extends Component {
  render() {
    return (
      <div className={classnames('Twitch', this.props.classes)}>
        <h4>{StringsMix.updateTitle(this.props.classes)}</h4>
      </div>
    );
  }
}

export default Twitch;
