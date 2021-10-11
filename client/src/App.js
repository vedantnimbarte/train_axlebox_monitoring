import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignIn, SignUp, Dashboard } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
