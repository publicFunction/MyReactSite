import React, { Component } from 'react';
import classnames from 'classnames';
import { StringsMix } from './../../../mixins';

import './Twitter.css';
// import StringsMix from "../../../mixins/Strings";

class Twitter extends Component {
  render() {
    return (
      <div className={classnames('Twitter', this.props.classes)}>
        <h4>{StringsMix.updateTitle(this.props.classes)}</h4>
        <div className="Card-Content">{process.env.REACT_APP_TWITTER_API}</div>
      </div>
    );
  }
}

export default Twitter;
