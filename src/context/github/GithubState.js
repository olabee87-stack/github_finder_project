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

  //@Search Github users method -$text-:@users search input
  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client=${process.env.REACT_APP_GITHUB_CLIENT_ID}&secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
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
      `https://api.github.com/users/${login}?client=${process.env.REACT_APP_GITHUB_CLIENT_ID}&secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //@Get Repos

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
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
