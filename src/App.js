import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Alert from "./components/layout/Alert";
import User from "./components/users/User";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import About from "./components/pages/About";

import GithubState from "./context/github/GithubState";

import "./App.css";

const App = () => {
  const [alert, setAlert] = useState(null);

  //@Set Alert handler - @msg, @type - params from Search.js
  const setAlertHandler = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000); //set alert to null after 5s
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <NavBar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search setAlert={setAlertHandler} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
