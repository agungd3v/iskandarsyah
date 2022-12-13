import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Page2 from "./Page2.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/page" exact component={Page2} />
      </Switch>
    </Router>
  );
}
