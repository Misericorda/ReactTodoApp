import React from "react";
import moment from "moment";
import {connect} from "react-redux";
import {startToggleTodo} from "../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Todo = props => {
  let {text, id, completed, createdAt, completedAt, dispatch} = props;
  let todoClassName = completed ? "todo todo-completed" : "todo";
  let iconClassName = completed ? "check-square" : "square";
  let renderDate = () => {
    let message = completed ? "Completed " : "Created ";
    let timestamp = completed ? completedAt : createdAt;

    return message + moment.unix(timestamp).format("MMM Do YYYY @ h:mm a");
  };
  return (
    <div className={todoClassName} onClick={() => dispatch(startToggleTodo(id, !completed))}>
      <div>
        <FontAwesomeIcon icon={["far", iconClassName]}/>
      </div>
      <div>
        <p>{text}</p>
        <p className="todo__subtext">{renderDate()}</p>
      </div>
    </div>
  );
};

export default connect()(Todo);