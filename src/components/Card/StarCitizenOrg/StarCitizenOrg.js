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
          <h3>{this.state.organisation.title}</h3>
          <p>{JSON.stringify(this.state.organisation)}</p>
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
