import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login.js";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo mb-5" alt="logo" />
          <Login />
        </header>
      </div>
    );
  }
}

export default App;
