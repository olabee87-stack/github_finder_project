import React, { Component } from "react";
import NavBar from "./components/layout/NavBar";
import UserItem from "./components/users/UserItem";
import "./App.css";

class App extends Component {
  state = {
    icon: "fab fa-github",
    title: "Github Finder",

    user: [
      {
        id: "id",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <NavBar title={this.state.title} icon={this.state.icon} />
        <UserItem
          id={this.state.user[0].id}
          login={this.state.user[0].login}
          avatar_url={this.state.user[0].avatar_url}
          html_url={this.state.user[0].html_url}
        />
      </div>
    );
  }
}

export default App;
