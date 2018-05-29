import React, { Component } from 'react';
import Input from './../Form/Input/input';
import './Login.css';
import x from '../../img/icons/x.svg';
import avatar from '../../img/icons/avatar-placeholder.svg';

class Login extends Component {
  render() {
    return (
      <div className="Login bg-container">
        <object
          aria-label="bg-logo"
          type="image/svg+xml"
          data={x}
          className="Login-bg-logo"
        />
        <div className="Login-form-container">
          <div className="Login-left-section">
            <object
              aria-label="left-bg"
              type="image/svg+xml"
              data={x}
              className="Login-left-bg"
            />
          </div>
          <div className="Login-right-section">
            <form action="submit">
              <object
                aria-label="avatar"
                type="image/svg+xml"
                data={avatar}
                className="Login-avatar"
              />
              <Input
                placeholder="Email address"
                type="email"
                classes="Login-form-input Login-form-username"
              />
              <Input
                type="password"
                placeholder="Password"
                classes="Login-form-input Login-form-password"
              />
              <button>Login</button>
              <p>Forgotten your password?</p>
              <a href="">
                <strong>Get help signing in</strong>
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
