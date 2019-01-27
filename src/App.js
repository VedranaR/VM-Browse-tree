import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      viewLogin: true,
      username: "",
      password: ""
    };
  }

  //using the input value as a content
  loginUser = e => {
    this.setState({ username: e.target.value });
  };

  loginPass = e => {
    this.setState({ password: e.target.value });
  };

  handleClick = () => {
    axios
      .post("https://www.vumedi.com/api/token-auth/", {
        username: this.state.username,
        password: this.state.password
        // username: "frontend@vumedi.com",
        // password: "Frontend123"
      })
      .then(data => this.setState({ token: data.data.token }));

    this.setState({ viewLogin: !this.state.viewLogin });
  };

  render() {
    const { token } = this.state;
    const { viewLogin } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo mb-5" alt="logo" />
          <div className="mx-auto">
            {viewLogin ? (
              <div className="form-group">
                <p className="mx-auto mb-3">Sign in</p>
                <input
                  type="text"
                  ref="username"
                  className="form-control mx-auto mb-3"
                  placeholder="Username"
                  onInput={this.loginUser}
                />
                <input
                  type="password"
                  ref="password"
                  className="form-control mx-auto mb-3"
                  placeholder="Password"
                  onInput={this.loginPass}
                />
                <button onClick={this.handleClick} className="btn btn-primary">
                  Login
                </button>
              </div>
            ) : null}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
