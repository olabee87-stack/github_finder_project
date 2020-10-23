import React, { Component, Fragment } from "react";

class NavBar extends Component {
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
  };

  render() {
    return (
      <Fragment>
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </Fragment>
    );
  }
}

export default NavBar;
