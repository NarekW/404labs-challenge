import { COMPLITED_TODOS } from "../actions/complitedTodosAction";

export function complitedTodosActionCreator(value: any) {
  return {
    type: COMPLITED_TODOS,
    value,
  };
}

export default complitedTodosActionCreator;
