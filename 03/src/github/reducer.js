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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case FETCH_REPOS_BEGIN:
      return { ...state, loading: true, error: null };
    case FETCH_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload };
    case FETCH_REPOS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;