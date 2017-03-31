import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions/actions'

class Todo extends Component {

  render() {
    let {id, text, done, dispatch} = this.props;
    let todoClassName = done ? 'todo todo-completed' : 'todo';

    return (
      <div className={todoClassName} onClick={() => {
          dispatch(toggleTodo(id));
        }}>
        <div>
          <input type="checkbox" checked={done}/>
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    )
  }
}
export default connect()(Todo);
