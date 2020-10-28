import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login); //pull a username's login name- defined /user/:login on App.js
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.eachUser;

    const { loading } = this.props;
    return (
      <h1>
        {name} {bio}
      </h1>
    );
  }
}

export default User;
