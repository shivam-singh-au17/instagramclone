import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";
import { PrivateRoute } from "./PrivateRoute";

function Routes() {
  return (
    <>
      <Switch>
        <PrivateRoute path="/" exact>
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/accounts/emailsignup">
          <Registration />
        </PrivateRoute>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Registration />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
