import { SET_EMAIL } from "../actions/emailAction";

export function emailActionCreator(value: any) {
  return {
    type: SET_EMAIL,
    value,
  };
}

export default emailActionCreator;
