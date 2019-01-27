import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      token: ""
    };
  }
  handleClick = () => {
    axios
      .post("https://www.vumedi.com/api/token-auth/", {
        username: "frontend@vumedi.com",
        password: "Frontend123"
      })
      //.then(response => response.json())
      .then(data => this.setState({ token: data.data.token }));
  };
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
        <button onClick={this.handleClick} className="btn btn-primary">
          Login
        </button>
      </div>
    );
  }
}
export default Login;
