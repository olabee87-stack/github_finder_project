import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default NavBar;
