import App from "../App";
import About from "../components/About";

export default [
  {
    path: "/",
    component: App,
    exact: true
  },
  {
    path: "/about",
    component: About
  }
];
