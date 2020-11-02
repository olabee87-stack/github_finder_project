import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/layout/NavBar";
import Alert from "./components/layout/Alert";
import User from "./components/users/User";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import About from "./components/pages/About";

import GithubState from "./context/github/GithubState";

import "./App.css";

const App = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //@Get single Github user
  const getUserHandler = async (login) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${login}?client=${process.env.REACT_APP_GITHUB_CLIENT_ID}&secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);
  };

  //@Get users Repos
  const getUserReposHandler = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(res.data);
    setLoading(false);
  };

  //@Clear users handler
  const clearUsersHandler = () => {
    setUsers([]);
    setLoading(false);
  };

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
                    <Search
                      clearUsers={clearUsersHandler}
                      showClear={users.length > 0 ? true : false} //show button when only users are displayed
                      setAlert={setAlertHandler}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={getUserHandler}
                    getUserRepos={getUserReposHandler}
                    eachUser={user}
                    loading={loading}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
