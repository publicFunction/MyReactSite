import React, { Component } from 'react';
import classnames from 'classnames';
import { StringsMix } from './../../../mixins';

import './Twitter.scss';
import TwitterService from './../../../services/twitter';
import store from "../../../store";

class Twitter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    TwitterService.GetLatestTweet();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        person: store.getState().scOrganisations.person
      });
    });
  }

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
