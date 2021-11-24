import { SET_PASSWORD } from "../actions/passwordAction";

export function passwordActionCreator(value: any) {
  return {
    type: SET_PASSWORD,
    value,
  };
}

export default passwordActionCreator;
