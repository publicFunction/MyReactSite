import React, { Component } from 'react';
import classnames from 'classnames';
import { StringsMix, DatesMix } from './../../../mixins';
import OrgsListItem from './OrgsList/OrgsList';

import './StarCitizen.scss';
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
      if (this.state.person.organizations !== null) {
        return (
          <ul>
            {this.state.person.organizations.map((org, index) => {
              return (
                <OrgsListItem organistation={org} key={index} />
              );
            })}
          </ul>
        );
      }
    } else {
      return 'No Organisations listed';
    }
  }

  render() {
    if (Object.keys(this.state).length > 0) {
      return (
        <div className={classnames('Star-Citizen', this.props.classes)}>
          <h4>
            {StringsMix.updateTitle(this.props.classes)} {
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
                  <label>Enlistment Date: </label>
                  <span className="content">{DatesMix.timestampToDate(this.state.person.enlisted, ' ', ['d','M','y'])}</span>
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
