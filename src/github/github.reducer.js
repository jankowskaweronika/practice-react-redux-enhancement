import {
  SET_USERNAME,
  SET_SEARCH_TERM,
  FETCH_REPOS_BEGIN,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
} from "./github.types";
const initialState = {
  username: "",
  searchTerm: "",
  repos: [],
  loading: false,
  error: null,
};

const githubReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
  }
};

export default githubReducer;