import React from "react";
import TodosList from "./TodosList/TodosList";
import styles from "./TodosListPage.module.scss";
import TodosProps from "../TodosListPage/interfaces/TodosProps";
import { connect } from "react-redux";
import todosActionCreator from "../../store/actionCreators/todosActionCreator";
import addTodosActionCreator from "../../store/actionCreators/addTodosActionCreator";
import deleteTodosActionCreator from "../../store/actionCreators/deleteTodosActionCreator";
import complitedTodosActionCreator from "../../store/actionCreators/complitedTodosActionCreator";
import searchTodosActionCreator from "../../store/actionCreators/searchTodosActionCreator";
import sortByDateActionCreator from "../../store/actionCreators/sortByDateActionCreator";
import sortByNameActionCreator from "../../store/actionCreators/sortByNameActionCreator";
import { Link } from "react-router-dom";

class TodosListPage extends React.Component<TodosProps> {
  render() {
    const checkuserInfo: any = window.localStorage.getItem("userData");
    const {
      todos,
      addTodos,
      onChangeAddTodosInput,
      addTodosInputValue,
      deleteTodos,
      onChangeComplitedCheckBox,
      onChangeSearchTodosInput,
      sortByNameHandler,
      sortByDateHalder,
    } = this.props;
    return checkuserInfo ? (
      <section className={styles.todoPageContainer}>
        <TodosList
          todos={todos}
          addTodos={addTodos}
          sortByNameHandler={sortByNameHandler}
          onChangeAddTodosInput={onChangeAddTodosInput}
          addTodosInputValue={addTodosInputValue}
          deleteTodos={deleteTodos}
          onChangeComplitedCheckBox={onChangeComplitedCheckBox}
          onChangeSearchTodosInput={onChangeSearchTodosInput}
          sortByDateHalder={sortByDateHalder}
        />
      </section>
    ) : (
      <h1>
        Please <Link to="/login">log in</Link> or{" "}
        <Link to="/registration">register</Link>
      </h1>
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
    sortByDateHalder: () => {
      dispatch(sortByDateActionCreator(null));
    },
    sortByNameHandler: () => {
      dispatch(sortByNameActionCreator(null));
    },
    deleteTodos: (todosId: number) => {
      dispatch(deleteTodosActionCreator(todosId));
    },
    onChangeComplitedCheckBox: (CheckboxStatus: boolean, todosId: number) => {
      const complitedData = {
        CheckboxStatus: !CheckboxStatus,
        todosId,
      };
      dispatch(complitedTodosActionCreator(complitedData));
    },
    onChangeAddTodosInput: (event: any) => {
      dispatch(addTodosActionCreator(event.target.value));
    },
    onChangeSearchTodosInput: (event: any) => {
      dispatch(searchTodosActionCreator(event.target.value));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodosListPage);
