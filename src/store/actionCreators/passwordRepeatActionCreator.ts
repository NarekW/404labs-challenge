import { PASSWORD_REPEAT } from "../actions/passwordRepeatAction";

export function passwordRepeatActionCreator(value: any) {
  return {
    type: PASSWORD_REPEAT,
    value,
  };
}

export default passwordRepeatActionCreator;
