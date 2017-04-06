import React, {Component} from 'react';
import {Entity} from 'aframe-react';
import { connect } from 'react-redux';
import { showText, showSignPosts } from '../../redux/actions/actions';

class Graphic extends Component {


	handleClick = (e) => {
		console.log("huston we have a click", this.props.location)
		let {dispatch} = this.props;
		dispatch(showText('hk_instruction'));
		dispatch(showSignPosts());
	}

	handleClick2 = (e) => {
		let {dispatch} = this.props;
		dispatch(showText('darkwoodsclue'));
	}


	handleClick3 = (e) => {
		let {dispatch} = this.props;
		dispatch(showText('found'));
		(console.log("CHANGE", this.props.showText))
	}

	renderNewGraphic = () => {
		if(this.props.location === 'castle') {
			return(
				<Entity
					geometry={{primitive: 'box'}}
					material={{color: 'red'}}
					position={{x: 0, y: 1, z: -3}}
					events={{click: this.handleClick}}/>
			)
		} else if (this.props.location === 'darkwoods') {
			return(
				<Entity
				geometry={{primitive: 'box'}}
				material={{color: 'green'}}
				position={{x: -1, y:1 , z: -5}}
				events={{click: this.handleClick2}}/>
			)
		} else if (this.props.location === 'field') {
			// dispatch(showText('field'));
			return(
				<Entity
				geometry={{primitive: 'box'}}
				material={{color: 'yellow'}}
				position={{x: -3, y: 2, z: -3}}
				events={{click: this.handleClick3}}
				visible="true"/>
			)
		}
	}

	render() {
		return (
			<Entity>
			{ this.renderNewGraphic() }
			</Entity>
		)
	}
}

export default connect(
	(state) => {
		return state;
	})(Graphic);
