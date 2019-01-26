import React, { Component } from "react";

class Login extends Component {
  render() {
    // handleClick = () => {

    // }
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
        <button
          //onClick={this.handleClick()}
          className="btn btn-primary"
        >
          Login
        </button>
      </div>
    );
  }
}
export default Login;
