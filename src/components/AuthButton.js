import React from "react";
import { FakeAuth } from "./FakeAuth";
import { withRouter } from "react-router-dom";

const AuthButton = ({ history }) => {
  return FakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          FakeAuth.signOut(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
};

export default withRouter(AuthButton);
