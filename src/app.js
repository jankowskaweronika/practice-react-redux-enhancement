import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from './components/App';
import githubReducer from "./modules/github/github.reducer";
import stackoverflowReducer from "./modules/stackoverflow/stackoverflow.reducer";

const rootReducer = combineReducers({
  github: githubReducer,
  stackoverflow: stackoverflowReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
const root = createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);