import Button from "@mui/material/Button";

const AddTaskBar = (props: any) => {
  return (
    <form
      onSubmit={(event) => {
        const newTodoText = props.addTodosInputValue;
        event.preventDefault();
        props.addTodos(newTodoText);
      }}
    >
      <div>
        <span>add task</span>
        <input
          required
          onChange={props.onChangeAddTodosInput}
          type="text"
          value={props.addTodosInputValue}
          placeholder="Task description"
        />
        <Button type="submit" variant="contained">
          add task
        </Button>
      </div>
    </form>
  );
};

export default AddTaskBar;
