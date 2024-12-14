import {
  SET_STACK_SEARCH_TERM,
  SET_STACK_SORT_ORDER,
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR,
} from "./stackoverflow.types";
import StackOverflowAPI from "./stackoverflow.api";
const stackOverflowAPI = new StackOverflowAPI();

export const setStackSearchTerm = (searchTerm) => ({
  type: SET_STACK_SEARCH_TERM,
  payload: searchTerm,
});

export const setStackSortOrder = (sortOrder) => ({
  type: SET_STACK_SORT_ORDER,
  payload: sortOrder,
});

export const fetchStackQuestions = (title, sortOrder) => async (dispatch) => {
  dispatch({ type: FETCH_QUESTIONS_REQUEST });
  try {
    let questions = await stackOverflowAPI.getThreads(title, sortOrder);
    questions = questions.sort(
      (a, b) => b.owner.reputation - a.owner.reputation
    );
    dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: questions });
  } catch (error) {
    dispatch({ type: FETCH_QUESTIONS_ERROR, error });
  }
};