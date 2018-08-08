import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoSearch from './TodoSearch';

import {startLogout} from "../store/actions"

export const TodoApp = props => (
  <div>
    <div className="page-actions">
      <a href="#" onClick={() => props.startLogout()}>Logout</a>
    </div>
    <h1 className="page-title">Todo App</h1>
    <div className="row">
      <div className="columns small-centered small-11 medium-6 large-5">
        <div className="container">
          <TodoSearch/>
          <TodoList/>
          <TodoForm/>
        </div>
      </div>
    </div>
    <div className="user-info">
      User: <span className="user-name">{props.email}</span>
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    email: state.auth.email
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    startLogout,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)