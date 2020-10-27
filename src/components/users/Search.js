import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  //@prop type
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  //@form method - onSubmitHandler -> call this.props.searchUsers -> search Github users based on input
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" }); //clear form
  };

  //@input method - update component
  onChangeHandler = (e) => this.setState({ [e.target.name]: e.target.value }); //set name of target to value

  render() {
    const { showClear, clearUsers } = this.props; //@destructure props
    return (
      <div>
        <form onSubmit={this.onSubmitHandler} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search..."
            value={this.state.text}
            onChange={this.onChangeHandler}
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
  }
}

export default Search;
