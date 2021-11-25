import React from "react";
import TodosList from "./TodosList/TodosList";
import styles from "./TodosListPage.module.scss";
import TodosProps from "../TodosListPage/interfaces/TodosProps";
import { connect } from "react-redux";
import todosActionCreator from "../../store/actionCreators/todosActionCreator";
import addTodosActionCreator from "../../store/actionCreators/addTodosActionCreator";

class TodosListPage extends React.Component<TodosProps> {
  SearchTodoHandler = () => {};
  DeleteTodoHandler = () => {};
  SortTodoHandler = () => {};
  render() {
    const { todos, addTodos, onChangeAddTodosInput, addTodosInputValue } =
      this.props;
    return (
      <section className={styles.todoPageContainer}>
        <TodosList
          todos={todos}
          addTodos={addTodos}
          onChangeAddTodosInput={onChangeAddTodosInput}
          addTodosInputValue={addTodosInputValue}
        />
      </section>
    );
  }
}
const mapStateToProps = function (state: any) {
  return {
    todos: state.todos,
    addTodosInputValue: state.addTodosInputValue,
  };
};

const mapDispatchToProps = function (dispatch: any) {
  return {
    addTodos: (newTodoText: any) => {
      dispatch(todosActionCreator(newTodoText));
    },
    onChangeAddTodosInput: (event: any) => {
      dispatch(addTodosActionCreator(event.target.value));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodosListPage);
