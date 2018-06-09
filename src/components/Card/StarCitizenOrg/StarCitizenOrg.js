import React, { Component } from 'react';
import classnames from 'classnames';
import { StringsMix } from './../../../mixins';
import store from './../../../store';
import SCApiService from './../../../services/SCApi';

import './StarCitizenOrg.css';

class StarCitizenOrg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    SCApiService.SCApi();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        organisation: store.getState().scOrganisations.organisation
      });
    });
  }

  render() {
    if (Object.keys(this.state).length > 0) {
      return (
        <div className={classnames('Star-Citizen-Org', this.props.classes)}>
          <h4>{StringsMix.updateTitle(this.props.classes)}</h4>
          <div className="Row">
            <div className="orgLogo">
              <img
                src={this.state.organisation.logo}
                alt={this.state.organisation.title}
              />
            </div>
            <div className="orgDetails">
              <h3>
                {this.state.organisation.title}{' '}
                <small>{this.state.organisation.archetype}</small>
              </h3>
              <ul>
                <li>
                  <label>Current Member Count: </label>
                  <span className="content">
                    {this.state.organisation.member_count}
                  </span>
                </li>
                <li>
                  <label>Primary Focus: </label>
                  <span className="content">
                    {this.state.organisation.primary_focus}
                  </span>
                </li>
                <li>
                  <label>Secondary Focus: </label>
                  <span className="content">
                    {this.state.organisation.secondary_focus}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={classnames('Star-Citizen-Org', this.props.classes)}>
          <p className="error">We are unable to get the data for this panel</p>
        </div>
      );
    }
  }
}

export default StarCitizenOrg;
