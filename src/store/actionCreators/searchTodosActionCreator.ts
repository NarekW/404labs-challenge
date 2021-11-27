import { SEARCH_TODOS_INPUT_CHANGE } from "../actions/searchTodosAction";

export function searchTodosActionCreator(value: any) {
  return {
    type: SEARCH_TODOS_INPUT_CHANGE,
    value,
  };
}

export default searchTodosActionCreator;
