import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login); //pull a username's login name- defined /user/:login on App.js
  }

  //@Prop-types
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    eachUser: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };

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

    //@show spinner while a single user's data is loading
    if (loading) return <Spinner />;

    //@Return the below content after the single user's data has been loaded
    return (
      <Fragment>
        <p>{name}</p>
        {hireable}
        <p>{followers}</p>
        <p>{following}</p>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
      </Fragment>
    );
  }
}

export default User;
