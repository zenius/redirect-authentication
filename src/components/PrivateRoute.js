import React from "react";
import { FakeAuth } from "./FakeAuth";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("component ", Component);
  console.log("...rest ", rest);
  return (
    <Route
      {...rest}
      render={props =>
        FakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
