import { PASSWORD_REPEAT } from "../actions/passwordRepeatAction";

const initialState = {
  repeat_password: "Enter repeat password",
};

export default function reapeatPasswordReducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case PASSWORD_REPEAT:
      return action.value;
    default:
      return state;
  }
}
