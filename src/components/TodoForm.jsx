import React from "react";
import {connect} from "react-redux";
import {startAddTodo} from "../store/actions";

export class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ""
    };
  }

  onAddTodo(e) {
    e.preventDefault();
    let {dispatch} = this.props;
    let {todoText} = this.state;
    if (todoText.trim()) {
      this.setState({todoText: ""});
      dispatch(startAddTodo(todoText));
    } else {
      this.todoRef.focus();
    }
  }

  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onAddTodo.bind(this)}>
          <input type="text"
                 value={this.state.todoText}
                 ref={ref => this.todoRef = ref}
                 onChange={(e) => this.setState({todoText: e.target.value})}
                 placeholder="What you need to do?"/>
          <button disabled={!this.state.todoText.trim()} className="expanded button primary">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect()(TodoForm);