import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1>Welcome to use koajs-templates/react.</h1>
        <h2>Learn more about<span> </span>
          <a href="https://github.com/koajs-templates/react.git">koajs-templates/react</a>.
        </h2>
        <Link to="/">Go to home</Link>  
      </div>
    );
  }
}

export default About;
