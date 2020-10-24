import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ eachUser: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="avatar"
        className="round-img"
        style={{ width: "70px" }}
      />
      <h3>{login}</h3>

      <div>
        <a
          href={html_url}
          className="btn btn-dark btn-sm my-1"
          style={{ borderRadius: "3px" }}
        >
          More
        </a>
      </div>
    </div>
  );
};

//@prop type
UserItem.propTypes = {
  eachUser: PropTypes.object.isRequired,
};

export default UserItem;
