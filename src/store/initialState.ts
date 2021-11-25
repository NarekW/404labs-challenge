export let initialState: any = {
  email: "",
  password: "",
  password_repeat: "",
  loading: false,
  error: "",
  addTodosInputValue: "",
  todos: [
    {
      id: Math.floor(Math.random() * 10),
      text: "My task 2",
      completed: false,
    },
    {
      id: Math.floor(Math.random() * 10),
      text: "My task 3",
      completed: false,
    },
    {
      id: Math.floor(Math.random() * 10),
      text: "My task 5",
      completed: false,
    },
    {
      id: Math.floor(Math.random() * 10),
      text: "My task 8",
      completed: false,
    },
  ],
};
