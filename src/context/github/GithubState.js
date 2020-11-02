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

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

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

  //@Search Github users method -$text-:@users search input
  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client=${githubClientId}&secret=${githubClientSecret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items, //data to send - to be sent from the Github reducer
    });
  };

  //@Get User
  const getUser = async (login) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${login}?client=${githubClientId}&secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //@Get Repos
  const getUserRepos = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //@Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //@Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING }); //dispatch to reducer

  //@Wrap entire application in a provider - Takes in a prop pf value ->Pass in everything to want available app
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
