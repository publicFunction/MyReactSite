import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './BaseLine.scss';

class BaseLine extends Component {
  isInverted = () => {
    if (this.props.inverted) {
      return 'Inverted';
    }
    return '';
  };

  render() {
    return (
      <div className={classnames('Baseline', this.isInverted())}>
        <span className="BaseLine-Start" />
        <span className="Baseline-Main" />
        <span className="BaseLine-End" />
      </div>
    );
  }
}

BaseLine.propTypes = {
  inverted: PropTypes.bool
};

export default BaseLine;
