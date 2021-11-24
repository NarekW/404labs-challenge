import { REPEAT_PASSWORD } from "../actions/repeatPasswordAction";

export function repeatPasswordActionCreator(value: any) {
  return {
    type: REPEAT_PASSWORD,
    value,
  };
}

export default repeatPasswordActionCreator;
