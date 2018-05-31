import React, { Component } from 'react';
import classnames from 'classnames';

import './Twitter.css';

class Twitter extends Component {
  render() {
    return (
      <div className={classnames('Twitter', this.props.classes)}>
        {this.props.classes} {process.env.REACT_APP_TWITTER_API}
      </div>
    );
  }
}

export default Twitter;
