import React from "react";
import styles from "./TodosList.module.scss";
import TodosProps from "../interfaces/TodosProps";
import AddTaskBar from "./AddTaskBar/AddTaskBar";
import Todos from "./Todos/Todos";
import SearchBar from "./SearchBar/SearchBar";
import Button from "@mui/material/Button";

export default class TodosList extends React.Component<TodosProps> {
  render() {
    const {
      todos,
      addTodos,
      onChangeAddTodosInput,
      sortByNameHandler,
      addTodosInputValue,
      onChangeComplitedCheckBox,
      deleteTodos,
      onChangeSearchTodosInput,
      sortByDateHalder,
    } = this.props;

    return (
      <section className={styles.tasksContainer}>
        <SearchBar onChangeSearchTodosInput={onChangeSearchTodosInput} />
        <div className={styles.buttonsContainer}>
          <Button variant="contained" onClick={sortByNameHandler} size="small">
            Sort by name
          </Button>
          <Button variant="contained" onClick={sortByDateHalder} size="small">
            Sort by date
          </Button>
        </div>
        <ul>
          {todos ? (
            todos.map((el: any, idx: number) => {
              return (
                <Todos
                  body={el}
                  key={idx}
                  deleteTodos={deleteTodos}
                  onChangeComplitedCheckBox={onChangeComplitedCheckBox}
                />
              );
            })
          ) : (
            <p>No tasks found</p>
          )}
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
