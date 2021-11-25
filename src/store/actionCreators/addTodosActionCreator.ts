import { ADD_TODOS_INPUT_CHANGE } from "../actions/addTodosInputChangeAction";

export function addTodosActionCreator(value: any) {
  return {
    type: ADD_TODOS_INPUT_CHANGE,
    value,
  };
}

export default addTodosActionCreator;
