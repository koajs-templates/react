import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ""
    };
  }

  componentDidMount() {
    fetch("/api/hello")
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          msg: text
        });
      });
  }

  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Home;
