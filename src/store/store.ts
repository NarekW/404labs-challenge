import { applyMiddleware, combineReducers, createStore } from "redux";
import { initialState } from "./initialState";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import emailReducer from "./reducers/email-reducer";
import passwordReducer from "./reducers/password-reducer";
import reapeatPasswordReducer from "./reducers/repeat-password-reducer";
import loadingReducer from "./reducers/loading-reducer";

const reducers = combineReducers({
  email: emailReducer,
  password: passwordReducer,
  password_repeat: reapeatPasswordReducer,
  loading: loadingReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
