import { COMPLITED_TODOS } from "../actions/complitedTodosAction";
import { DELETE_TODOS } from "../actions/deleteTodosAction";
import { SEARCH_TODOS_INPUT_CHANGE } from "../actions/searchTodosAction";
import { SORT_BY_DATE } from "../actions/sortByDateAction";
import { SORT_BY_NAME } from "../actions/sortByNameAction";
import { SET_TODOS } from "../actions/todosAction";

const initialState: any = [];

function localSaveTodos(oldState: any, value: any) {
  oldState
    ? window.localStorage.setItem("todos", JSON.stringify([...oldState, value]))
    : window.localStorage.setItem("todos", JSON.stringify(value));
}

export default function todosReducer(state = initialState, action: any) {
  const newTodo: any = {
    id: Math.floor(Math.random() * 100),
    text: action.value,
    completed: false,
    date: new Date(),
  };
  switch (action.type) {
    case SORT_BY_DATE:
      const newSortStateByDate = state
        .slice()
        .sort(function (a: any, b: any): any {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
      return newSortStateByDate;

    case SORT_BY_NAME:
      const newSortStateByName = state
        .slice()
        .sort(function (a: any, b: any): any {
          if (a.text < b.text) {
            return -1;
          }
          if (a.text > b.text) {
            return 1;
          }
          return 0;
        });
      return newSortStateByName;

    case SET_TODOS:
      localSaveTodos(state, newTodo);
      return [...state, newTodo];

    case SEARCH_TODOS_INPUT_CHANGE:
      const oldState: any = window.localStorage.getItem("todos");

      const searchResult = state.slice().filter((el: any) => {
        return el.text.indexOf(`${action.value}`) > -1 ? [el] : null;
      });
      return searchResult.length > 0 && action.value.length > 0
        ? searchResult
        : JSON.parse(oldState);

    case DELETE_TODOS:
      const deleteResult = state
        .slice()
        .filter((el: any) => el.id !== action.value);
      localSaveTodos(null, deleteResult);
      return deleteResult;

    case COMPLITED_TODOS:
      const complitedResult = state.map((el: any) => {
        if (action.value.todosId === el.id) {
          return {
            id: el.id,
            text: el.text,
            completed: action.value.CheckboxStatus,
            date: el.date,
          };
        }
        return el;
      });
      localSaveTodos(null, complitedResult);
      return complitedResult;

    default:
      return state;
  }
}
