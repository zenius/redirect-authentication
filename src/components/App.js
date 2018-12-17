import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Public from "./Public";
import Login from "./Login";
import Protected from "./Protected";
import PrivateRoute from "./PrivateRoute";
import AuthButton from "./AuthButton";

const App = () => {
  return (
    <Router>
      <div className="App">
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  );
};

export default App;
