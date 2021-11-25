import { SET_TODOS } from "../actions/todosAction";

export function todosActionCreator(value: any) {
  return {
    type: SET_TODOS,
    value,
  };
}

export default todosActionCreator;
