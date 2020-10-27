import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/layout/NavBar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import "./App.css";

class App extends Component {
  state = {
    icon: "fab fa-github",
    title: "Github Finder",
    users: [],
    loading: false,
    alert: null,
  };

  //@Search Github users method -$text-:@users search input
  searchUsersHandler = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client=${process.env.REACT_APP_GITHUB_CLIENT_ID}&secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    //Populate the users array with the value gotten from the search response
    this.setState({ users: res.data.items, loading: false });
    console.log(res);
  };

  //@Clear users handler
  clearUsersHandler = () => this.setState({ users: [], loading: false });

  //@Set Alert handler - @msg, @type - params from Search.js
  setAlertHandler = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000); //set alert to null after 5s
  };

  render() {
    const { users, loading, title, icon, alert } = this.state; //@Destructure state
    return (
      <Router>
        <div className="App">
          <NavBar title={title} icon={icon} />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsersHandler}
                      clearUsers={this.clearUsersHandler}
                      showClear={users.length > 0 ? true : false} //show button when only users are displayed
                      setAlert={this.setAlertHandler}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
