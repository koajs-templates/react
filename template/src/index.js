import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import routes from "./router";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <div>
      {routes.map((route, index) => (
        <Route
          exact={route.exact}
          key={index}
          path={route.path}
          component={route.component}
        />
      ))}
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
