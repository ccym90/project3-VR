import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchText } from '../../actions/actions'

class Search  extends Component {

  // handleSubmit = (e) => {
  // .preventDefault();
  //
  //   let {dispatch} = this.props;
  // et todoText = this.refs.todoText.value;
  //
  // f(todoText.length > 0 ){
  //  this.refs.todoText.value = '';
  //  dispatch(addTodo(todoText));
  //  else{
  //  this.refs.todoText.focus();
  //
  // }

  handleChange = (e) => {
      e.preventDefault();
	  let {dispatch} = this.props;
	  let searchText = this.refs.searchText.value;

	  if(searchText.length > 0){
		  dispatch( setSearchText(searchText) );
	  }
  }

  render() {

//	console.log(this.props);

	return(
		<div>
			<input onChange={this.handleChange} ref="searchText" type="search" className="form-control" placeholder="Search for ..."></input>
		</div>
	)
  }
}

export default connect()(Search);
