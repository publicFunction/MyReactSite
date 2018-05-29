import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Default from './Default/Default';
import Search from './Search/Search';

import './Select.css';

class Select extends Component {
  addLabel = () => {
    return <label htmlFor={this.props.name}>{this.props.label}</label>;
  };

  chooseSelectType = () => {
    switch (this.props.type) {
      case 'search':
        return (
          <Search
            className={this.props.classes}
            name={this.props.name}
            placeholder={this.props.placeholder}
            options={this.props.options}
          />
        );
      case 'default':
      default:
        return (
          <Default
            className={this.props.classes}
            name={this.props.name}
            placeholder={this.props.placeholder}
            options={this.props.options}
          />
        );
    }
  };

  render() {
    return (
      <div className="Form-Element">
        {this.props.useLabel ? this.addLabel() : null}
        {this.chooseSelectType()}
      </div>
    );
  }
}

Select.propTypes = {
  label: PropTypes.node,
  name: PropTypes.node,
  placeholder: PropTypes.object,
  classes: PropTypes.node,
  options: PropTypes.array
};

export default Select;
