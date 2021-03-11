import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BuyAndHoldCalculator from "./pages/BuyAndHoldCalculator";
import Material from "./pages/Material";
import TestFormHooks from "./pages/TestFormHooks";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/material" component={Material} />
      <Route path="/buy-and-hold" component={BuyAndHoldCalculator} />
      <Route path="/buy-and-hold2" component={TestFormHooks} />
    </Switch>
  );
}
