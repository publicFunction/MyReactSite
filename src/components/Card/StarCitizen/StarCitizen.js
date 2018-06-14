import React, { Component } from 'react';
import classnames from 'classnames';
import { StringsMix } from './../../../mixins';

import './StarCitizen.css';
import SCApiService from '../../../services/SCApi';
import store from '../../../store';

class StarCitizen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    SCApiService.SCApiPerson();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        person: store.getState().scOrganisations.person
      });
    });
  }

  renderOrgList() {
    if (Object.keys(this.state.person).length > 0) {
      return (
        <ul>
          {this.state.person.organizations.map((org, index) => {
            return (
              <li key={index}>
                <span className="content">{org.sid}</span>
                <label>Rank: </label>
                <span className="content">{org.rank}</span>
                <label>Stars: </label>
                <span className="content">{org.stars}</span>
                <label>Type: </label>
                <span className="content">{org.type}</span>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return 'No Orgs';
    }
  }

  render() {
    if (Object.keys(this.state).length > 0) {
      return (
        <div className={classnames('Star-Citizen', this.props.classes)}>
          <h4>
            {StringsMix.updateTitle(this.props.classes)} #{
              this.state.person.citizen_number
            }
          </h4>
          <div className="Row">
            <div className="orgDetails">
              <h3>
                {this.state.person.title} {this.state.person.handle}
              </h3>
              <ul>
                <li>
                  <label>Enlisted Date: </label>
                  <span className="content">{this.state.person.enlisted}</span>
                </li>
                <li>
                  <label>Organisations: </label>
                </li>
                <li>{this.renderOrgList()}</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={classnames('Star-Citizen', this.props.classes)}>
          <h4>{StringsMix.updateTitle(this.props.classes)}</h4>
          <div className="Row">
            <p className="error">
              We are unable to get the data for this panel
            </p>
          </div>
        </div>
      );
    }
  }
}

export default StarCitizen;
