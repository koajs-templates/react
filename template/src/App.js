import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./router";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          {routes.map((route, index) => (
            <Route
              exact={route.exact}
              key={index}
              path={route.path}
              component={route.component}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
