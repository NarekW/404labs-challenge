import { applyMiddleware, combineReducers, createStore } from "redux";
import { initialState } from "./initialState";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import emailReducer from "./reducers/email-reducer";
import passwordReducer from "./reducers/password-reducer";
import passwordRepeatReducer from "./reducers/password_repeat-reducer";
import loadingReducer from "./reducers/loading-reducer";
import errorReducer from "./reducers/error-reducer copy";
import todosReducer from "./reducers/todos-reducer";
import addTodosInputChangeReducer from "./reducers/addTodosInputChangeReducer";

const reducers = combineReducers({
  email: emailReducer,
  password: passwordReducer,
  password_repeat: passwordRepeatReducer,
  loading: loadingReducer,
  error: errorReducer,
  todos: todosReducer,
  addTodosInputValue: addTodosInputChangeReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
