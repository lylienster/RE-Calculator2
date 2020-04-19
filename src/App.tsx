import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BrrrrCalculator from "./pages/BrrrrCalculator";

export default function App() {
  return (
    <Switch>
      <Route exact path="/re-calculator2" component={HomePage} />
      <Route path="/brrrr-calculator" component={BrrrrCalculator} />
    </Switch>
  );
}
