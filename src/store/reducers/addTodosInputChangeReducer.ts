import { ADD_TODOS_INPUT_CHANGE } from "../actions/addTodosInputChangeAction";

const initialState: string = "";

export default function addTodosInputChangeReducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case ADD_TODOS_INPUT_CHANGE:
      return action.value;
    default:
      return state;
  }
}
