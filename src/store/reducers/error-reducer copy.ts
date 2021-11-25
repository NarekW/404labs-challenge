import { SET_ERROR } from "../actions/errorAction";

const initialState = {
  error: "",
};

export default function errorReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_ERROR:
      return action.value;
    default:
      return state;
  }
}
