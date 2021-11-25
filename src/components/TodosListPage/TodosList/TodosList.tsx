import React from "react";
import styles from "./TodosList.module.scss";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TodosProps from "../interfaces/TodosProps";

const Todos = (props: any) => {
  return (
    <li>
      <div>
        <p>{props.body.text}</p>
      </div>
      <div>
        {" "}
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={props.body.completed} />}
            label="Complited"
          />
        </FormGroup>
        <Button type="submit" variant="contained">
          delete
        </Button>
      </div>
    </li>
  );
};

const SearchBar = (props: any) => {
  return (
    <form action="">
      <div className={styles.tasksBlock}>
        <span>search</span> <input type="text" placeholder="search task" />
        <Button type="submit" variant="contained">
          search tasks
        </Button>
      </div>
    </form>
  );
};

const AddTaskBar = (props: any) => {
  return (
    <form
      onSubmit={(event) => {
        const newTodoText = props.addTodosInputValue;
        event.preventDefault();
        props.addTodos(newTodoText);
      }}
    >
      <div className={styles.tasksBlock}>
        <span>add task</span>
        <input
          onChange={props.onChangeAddTodosInput}
          type="text"
          value={props.addTodosInputValue}
          placeholder="add task"
        />
        <Button type="submit" variant="contained">
          add task
        </Button>
      </div>
    </form>
  );
};

export default class TodosList extends React.Component<TodosProps> {
  render() {
    const { todos, addTodos, onChangeAddTodosInput, addTodosInputValue } =
      this.props;
    return (
      <section className={styles.tasksContainer}>
        <SearchBar />
        <ul>
          {todos.map((el: any) => {
            return <Todos body={el} />;
          })}
        </ul>
        <AddTaskBar
          onChangeAddTodosInput={onChangeAddTodosInput}
          addTodos={addTodos}
          addTodosInputValue={addTodosInputValue}
        />
      </section>
    );
  }
}
