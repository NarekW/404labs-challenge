import { SET_EMAIL } from "../actions/emailAction";

const initialState = {
  email: "Enter email !!!",
};

export default function emailReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_EMAIL:
      return action.value;
    default:
      return state;
  }
}
