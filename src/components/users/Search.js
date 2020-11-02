import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ showClear, clearUsers, setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState("");

  //@form method - onSubmitHandler -> searchUsers -> search Github users based on input
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light"); //@Pop-up if input field is nothing
    } else {
      githubContext.searchUsers(text);
      setText(""); //clear form
    }
  };

  //@input method - update component - change state to whatever value types into the input bar
  const onChangeHandler = (e) => setText(e.target.value); //state of text is the inpt passed in

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
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
