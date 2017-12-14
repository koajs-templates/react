import About from "../components/About";
import Home from "../components/Home";

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/about",
    component: About
  }
];
