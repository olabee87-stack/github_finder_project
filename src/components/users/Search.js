import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  //@form method
  onSubmit = (e) => {
    e.preventDefault();
  };

  //@input method
  onChange = (e) => this.setState({ [e.target.name]: e.target.value }); //set name of target to value

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
