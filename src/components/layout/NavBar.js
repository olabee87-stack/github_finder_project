import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary2">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

//@default values if nothing is defined on App.js
NavBar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

//@Prop types to ensure the right data type is passed
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavBar;
