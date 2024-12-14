import {
  SET_STACK_SEARCH_TERM,
  SET_STACK_SORT_ORDER,
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR,
} from "./stackoverflow.types";

const initialState = {
  searchTerm: "",
  sortOrder: "creation",
  loading: false,
  questions: [],
  error: null,
};

const stackoverflowReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STACK_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case SET_STACK_SORT_ORDER:
      return { ...state, sortOrder: action.payload };
    case FETCH_QUESTIONS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_QUESTIONS_SUCCESS:
      return { ...state, loading: false, questions: action.payload };
    case FETCH_QUESTIONS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
export default stackoverflowReducer;
