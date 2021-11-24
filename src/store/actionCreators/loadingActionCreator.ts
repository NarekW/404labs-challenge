import { SET_LOADING } from "../actions/loadingAction";

export function loadingActionCreator(value: any) {
  return {
    type: SET_LOADING,
    value,
  };
}

export default loadingActionCreator;
