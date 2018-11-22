import React, { Component } from 'react';
import classnames from 'classnames';
import { StringsMix } from './../../../mixins';

import './Twitch.scss';
import TwitchService from './../../../services/twitch';
import store from './../../../store';

class Twitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      twitchProfile: {},
      twitchStatus: {},
    };
    TwitchService.GetTwitchStatus();
    TwitchService.GetTwitchProfile();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        twitchProfile: store.getState().twitch.twitchProfile,
        twitchStatus: store.getState().twitch.streamStatus
      });
    });
  }

  render() {
    if (Object.keys(this.state.twitchStatus).length <= 0) {
      return (
        <div className={classnames('Twitch', this.props.classes)}>
          <h4>{StringsMix.updateTitle(this.props.classes)}</h4>
          <div className="Offline-Container">
            <img src={this.state.twitchProfile.offline_image_url} alt={this.state.twitchProfile.login} />
          </div>
        </div>
      );
    } else {
      return (
        <div className={classnames('Twitch', this.props.classes)}>
          <h4>{StringsMix.updateTitle(this.props.classes)}</h4>
          <p>{JSON.stringify(this.state.twitchProfile)}</p>
        </div>
      );
    }
  }
}

export default Twitch;
