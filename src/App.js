import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login.js";
import List from "./components/List.js";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
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
      .then(data => this.setState({ token: data.data.token }));

    //this.props.history.push("/list");
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo mb-5" alt="logo" />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Login handleClick={this.handleClick} />}
                // component={Login}
                // token={this.state.token}
              />
              <Route
                exact
                path="/list"
                render={() => <List token={this.state.token} />}
                //component={List}
              />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
