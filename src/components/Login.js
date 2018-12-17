import React, { Component } from "react";
import { FakeAuth } from "./FakeAuth";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    FakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    console.log("login ", this.props);
    let { from } = this.props.location.state;
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from.pathname} />;
    }
    return (
      <div>
        <div>You must log in to view the page {from.pathname}</div>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}
