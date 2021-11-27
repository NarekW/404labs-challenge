import { DELETE_TODOS } from "../actions/deleteTodosAction";

export function deleteTodosActionCreator(value: any) {
  return {
    type: DELETE_TODOS,
    value,
  };
}

export default deleteTodosActionCreator;
