import {
  SET_USERNAME,
  SET_SEARCH_TERM,
  FETCH_REPOS_BEGIN,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
} from "./github.types";
import GitHubAPI from "./github.api";

const api = new GitHubAPI();

export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});

export const fetchRepos = (username) => {
  return (dispatch) => {
    dispatch(fetchReposBegin());

    api
      .getRepos(username)
      .then((data) => {
        dispatch(fetchReposSuccess(data));
      })
      .catch((error) => dispatch(fetchReposFailure(error)));
  };
};

const fetchReposBegin = () => ({
  type: FETCH_REPOS_BEGIN,
});

const fetchReposSuccess = (repos) => ({
  type: FETCH_REPOS_SUCCESS,
  payload: repos,
});

const fetchReposFailure = (error) => ({
  type: FETCH_REPOS_FAILURE,
  payload: error,
});