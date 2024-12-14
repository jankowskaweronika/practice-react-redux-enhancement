import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from './components/App';
import reducer from "./modules/github/github.reducer";

const rootReducer = combineReducers({
  github: reducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

const root = createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);