import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ showClear, clearUsers, searchUsers, setAlert }) => {
  const [text, setText] = useState("");

  //@form method - onSubmitHandler -> call this.props.searchUsers -> search Github users based on input
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light"); //@Pop-up if input field is nothing
    } else {
      searchUsers(text);
      setText(""); //clear form
    }
  };

  //@input method - update component - change state to whatever value types into the input bar
  const onChangeHandler = (e) => setText(e.target.value); //set name of target to value

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search..."
          value={text}
          onChange={onChangeHandler}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {/* showClear prop -clearUsers button only when the user array is visible */}
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

//@prop type
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
