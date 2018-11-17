import React, { Component } from 'react';
import classnames from 'classnames';
import { StringsMix } from './../../../../mixins';

import './OrgsList.scss';

class OrgsListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={classnames('OrgsListItem', this.props.classes)}>
        <div className="Content">
          <h5>{StringsMix.updateTitle(this.props.organistation.sid)} ({this.props.organistation.rank}) - {this.props.organistation.type.toUpperCase()}</h5>
        </div>
      </div>
    );
  }
}

export default OrgsListItem;
