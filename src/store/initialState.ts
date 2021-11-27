const stateInLocalStorage: any =
  window.localStorage.getItem("todos") ||
  window.localStorage.setItem("todos", JSON.stringify([]));
export let initialState: any = {
  email: "",
  password: "",
  password_repeat: "",
  loading: false,
  error: "",
  addTodosInputValue: "",
  todos: JSON.parse(stateInLocalStorage),
};
