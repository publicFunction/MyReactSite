import React, { Component } from 'react';
import classnames from 'classnames';

import Twitter from './Twitter/Twitter';
import Twitch from './Twitch/Twitch';
import StarCitizen from './StarCitizen/StarCitizen';
import Squadron42 from './Squadron-42/Squadron-42';
import Live from './Live/Live';
import StarCitizenOrg from './StarCitizenOrg/StarCitizenOrg';

import './Card.css';

class Card extends Component {
  chooseCardType = () => {
    switch (this.props.classes) {
      case 'Twitter':
        return <Twitter classes={this.props.classes} />;
      case 'Twitch':
        return <Twitch classes={this.props.classes} />;
      case 'Star-Citizen':
        return <StarCitizen classes={this.props.classes} />;
      case 'Squadron-42':
        return <Squadron42 classes={this.props.classes} />;
      case 'Live':
        return <Live classes={this.props.classes} />;
      case 'Star-Citizen-Org':
        return <StarCitizenOrg classes={this.props.classes} />;
      default:
        return (
          <div className={classnames('Card', this.props.classes)}>
            {this.props.classes}
            <h5>PLEASE SELECT A CARD TYPE</h5>
          </div>
        );
    }
  };

  render() {
    return (
      <div className={classnames('Card', this.props.classes)}>
        {this.chooseCardType()}
      </div>
    );
  }
}

export default Card;
