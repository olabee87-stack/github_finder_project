import React, { Component } from "react";
import NavBar from "./components/layout/NavBar";
import "./App.css";

class App extends Component {
  state = {
    name: "Mama Araoluwa",
    loading: false,
    showName: true,
  };

  render() {
    return (
      <div className="navbar bg-primary">
        <NavBar title="Github Finder" icon="fab fa-github" />
      </div>
    );
  }
}

export default App;
