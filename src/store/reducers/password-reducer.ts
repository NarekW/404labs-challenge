import { SET_PASSWORD } from "../actions/passwordAction";

const initialState = {
  password: "Enter password !!!",
};

export default function passwordReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_PASSWORD:
      return { password: action.value };
    default:
      return state;
  }
}
