import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/actions'

class Create  extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    let {dispatch} = this.props;
    let todoText = this.refs.todoText.value;

    if(todoText.length > 0 ){
      this.refs.todoText.value = '';
      dispatch(addTodo(todoText));
    } else{
      this.refs.todoText.focus();
    }
  }

  render() {

    console.log(this.props);

    return(
      <form onSubmit={this.handleSubmit}>
          <input ref="todoText" className="form-control input-lg" type="text" placeholder="What do you need to do?" />
          <button type="submit" className="btn btn-primary btn-lg btn-block">Add Todo</button>
      </form>
    )
  }
}

export default connect()(Create);
