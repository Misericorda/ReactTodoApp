import moment from 'moment';
import {connect} from 'react-redux';
import {startToggleTodo} from '../store/actions';

export const Todo = props => {
  let {text, id, completed, createdAt, completedAt, dispatch} = props;
  let todoClassName = completed ? 'todo todo-completed' : 'todo';
  let iconClassName = completed ? 'far fa-check-square' : 'far fa-square';
  let renderDate = () => {
    let message = completed ? 'Completed ' : 'Created ';
    let timestamp = completed ? completedAt : createdAt;

    return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
  };
  return (
    <div className={todoClassName} onClick={() => dispatch(startToggleTodo(id, !completed))}>
      <div>
        <i className={iconClassName}> </i>
      </div>
      <div>
        <p>{text}</p>
        <p className='todo__subtext'>{renderDate()}</p>
      </div>
    </div>
  )
};

export default connect()(Todo);