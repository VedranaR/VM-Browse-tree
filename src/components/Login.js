import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          ref="username"
          className="form-control m-3"
          placeholder="Username"
        />
        <input
          type="password"
          ref="password"
          className="form-control m-3"
          placeholder="Password"
        />
        <button
          //onClick={event => this.handleClick(event)}
          className="btn btn-primary"
        >
          Login
        </button>
      </div>
    );
  }
}
export default Login;
