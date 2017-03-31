import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterTodos } from '../../api/api'

import Todo from '../Todo/Todo';

class List  extends Component {
  render() {

    let { todos } = this.props
    // let todos = this.props.todos;
    // let dispatch = this.props.dispatch;

    let renderTodos = () => {
        // Default Message
        if(todos.length === 0) {
          return (
            <div className="empty_message">Nothing To Do</div>
          )
        }

        return filterTodos(todos, true, this.props.searchText).map((todo) => {
          return (
            <Todo key={todo.id} {...todo} />
          )
        });
    }
    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
}

export default connect(
  (state) => {
    return state;
  }
)(List);
