import React, { Component } from "react";
import NavBar from "./components/layout/NavBar";
import "./App.css";

class App extends Component {
  state = {
    icon: "fab fa-github",
    title: "Github Finder",
  };

  render() {
    return (
      <div className="navbar bg-primary2">
        <NavBar title={this.state.title} icon={this.state.icon} />
      </div>
    );
  }
}

export default App;
