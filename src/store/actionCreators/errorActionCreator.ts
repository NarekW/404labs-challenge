import { SET_ERROR } from "../actions/errorAction";

export function errorActionCreator(value: any) {
  return {
    type: SET_ERROR,
    value,
  };
}

export default errorActionCreator;
