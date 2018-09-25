import React from "react";
import Todo from "./Todo";
import {connect} from "react-redux";
import {filterTodos} from "../api/todos";

export const TodoList = props => {
  let {todos, showCompleted, searchText} = props;
  let filteredTodos = filterTodos(todos, showCompleted, searchText);
  let todoBlock;
  if (!filteredTodos.length) {
    todoBlock = <p className="container__message">Nothing To Do</p>;
  } else {
    todoBlock = filteredTodos.map((todo) => <Todo key={todo.id} {...todo} />);
  }
  return (
    <div>
      {todoBlock}
    </div>
  );
};

export default connect(state => state)(TodoList);