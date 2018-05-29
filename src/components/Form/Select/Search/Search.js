import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false
    };
    this.handleFocus = this.focusSearchInput.bind(this, 'searchInput');
    this.handleBlur = this.blurSearchInput.bind(this, 'searchInput');
  }

  focusSearchInput() {
    this.setState({ showDropDown: true });
  }

  blurSearchInput() {
    this.setState({ showDropDown: false });
  }

  render() {
    const show = this.state.showDropDown
      ? 'selectOptions show'
      : 'selectOptions';

    return (
      <div className="searchHolder">
        <input
          className="searchHolder"
          type="text"
          placeholder={this.props.placeholder.label}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          ref="searchInput"
        />
        <div className={show} ref="searchList">
          <ul>
            {this.props.options.map((option, index) => {
              return (
                <li key={index} data-value={option.value}>
                  {option.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
