import React, { Component } from "react";
import PropTypes from "prop-types";

class NavBar extends Component {
  //@default values if nothing is defined on App.js
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
  };

  //@Prop types to ensure the right data type is passed
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary2">
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default NavBar;
