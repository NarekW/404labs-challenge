import { SET_TODOS } from "../actions/todosAction";

const initialState: any = [];

export default function todosReducer(state = initialState, action: any) {
  const newTodo: any = {
    id: Math.floor(Math.random() * 10),
    text: action.value,
    completed: false,
  };
  switch (action.type) {
    case SET_TODOS:
      return [...state, newTodo];
    default:
      return state;
  }
}
