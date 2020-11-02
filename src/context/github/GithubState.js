//All actions goes here - fetch data etc
//Initial state too - instead of in App.js
import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

//@Initial state of root component - Global state - Things to do with Github here
const GithubState = (props) => {
  const initalState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  //Call an Action -> to make a request to Github -> Get a response -> Dispatch a type to the reducer
  const [state, dispatch] = useReducer(GithubReducer, initalState);

  //@Search Users

  //@Get User

  //@Get Repos

  //@Clear Users

  //@Set Loading

  //@Wrap entire application in a provider - Takes in a prop pf value ->Pass in everything to want available app
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
