import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

class Modal extends Component {
  createProject = () => {};

  render() {
    if (!this.props.show) {
      return null;
    }

    const modalStyle = {
      borderRadius: 5,
      width: `${this.props.width}`,
      maxHeight: `${this.props.height}`,
      top: `${this.props.top}`,
      left: `${this.props.left}`,
      margin: '0 auto'
    };

    return (
      <div className="Modal-Backdrop">
        <div className="Modal" style={modalStyle}>
          <header className="Modal-Header">
            <h1>{this.props.title}</h1>
          </header>
          <section className="Modal-Content">{this.props.children}</section>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  height: PropTypes.node,
  width: PropTypes.node,
  top: PropTypes.node,
  left: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.node
};

export default Modal;
