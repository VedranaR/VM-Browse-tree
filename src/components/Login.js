import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mx-auto">
        <p className="mx-auto mb-3">Sign in</p>
        <input
          type="text"
          ref="username"
          className="form-control mx-auto mb-3"
          placeholder="Username"
        />
        <input
          type="password"
          ref="password"
          className="form-control mx-auto mb-3"
          placeholder="Password"
        />
        <Link to="/list">
          <button onClick={this.props.handleClick} className="btn btn-primary">
            Login
          </button>
        </Link>
      </div>
    );
  }
}
export default Login;
