import React, { Component } from 'react';
import classnames from 'classnames';
import { StringsMix } from './../../../mixins';

import './Twitter.scss';
// import TwitterService from './../../../services/twitter';
// import store from "../../../store";
class Twitter extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    // TwitterService.GetLatestTweet();
  }
  handleTwitterError = (error, response, body) => {
    console.log(error);
  };
  handleTwitterSuccess = (response) => {
    console.log(response);
  };
  componentWillMount() {
    /*var twitter = new TwitterClient(
      twitter_config,
    );
    twitter.getUserTimeline(
      {
        screenName: process.env.REACT_APP_TWITTER_API_USER,
        count: 1,
      },
      this.handleTwitterError,
      this.handleTwitterSuccess,
    );*/
  }

  render() {
    return (
      <div className={classnames('Twitter', this.props.classes)}>
        <h4>{StringsMix.updateTitle(this.props.classes)}</h4>
        <p>The Twitter API is shit for Client Only solutions</p>
        <p>I now need to build a Middleware API to handle the Twitter API</p>
      </div>
    );
  }
}

export default Twitter;
