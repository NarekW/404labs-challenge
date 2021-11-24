import { REPEAT_PASSWORD } from "../actions/repeatPasswordAction";

const initialState = {
  repeat_password: "Enter repeat password !!!",
};

export default function reapeatPasswordReducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case REPEAT_PASSWORD:
      return { repeat_password: action.value };
    default:
      return state;
  }
}
