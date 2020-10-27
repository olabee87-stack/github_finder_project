import React, { Component } from "react";
import axios from "axios";
import NavBar from "./components/layout/NavBar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import "./App.css";

class App extends Component {
  state = {
    icon: "fab fa-github",
    title: "Github Finder",
    users: [],
    loading: false,
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

  render() {
    const { users, loading, title, icon } = this.state; //@Destructure state
    return (
      <div className="App">
        <NavBar title={title} icon={icon} />
        <div className="container">
          <Search
            searchUsers={this.searchUsersHandler}
            clearUsers={this.clearUsersHandler}
            showClear={users.length > 0 ? true : false} //show button when only users are displayed
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
