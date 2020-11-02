import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state, //return whatever is in the state before chnging it
        loading: true,
      };

    default:
      return state;
  }
};

// Function that decides what happens to the state based on an action - Changes the state of the component
//**Ship pff to GithubState**/
