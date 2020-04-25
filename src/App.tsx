import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BuyAndHoldCalculator from "./pages/BuyAndHoldCalculator";

export default function App() {
  return (
    <Switch>
      <Route exact path="/re-calculator2" component={HomePage} />
      <Route
        path="/re-calculator2/buy-and-hold"
        component={BuyAndHoldCalculator}
      />
    </Switch>
  );
}
