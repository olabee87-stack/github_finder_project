import React from "react";

const UserItem = (props) => {
  return (
    <div className="card text-center">
      <img
        src={props.avatar_url}
        alt="img"
        className="round-img"
        style={{ width: "60px" }}
      ></img>
      <h3>{props.login}</h3>
      <div>
        <a
          href={props.html_url}
          className="btn btn-dark btn-sm my-1"
          style={{ borderRadius: "4px" }}
        >
          More
        </a>
      </div>
      {props.id}
    </div>
  );
};

export default UserItem;
