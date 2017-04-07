import React, {Component} from 'react';
import {Entity} from 'aframe-react';
import { connect } from 'react-redux';
import { showText, showSignPosts } from '../../redux/actions/actions';

class Car extends Component {

	handleClick2 = (e) => {
		let {dispatch} = this.props;
		let { hasKey } = this.props.playerItems
		if (hasKey){
				dispatch(showText('finish'))
		} else {
				dispatch(showText('darkwoodsclue'));
		}
	}


	renderNewCar = () => {
		let {dispatch} = this.props;
		if (this.props.playerItems.hasKey) {
			return(
				<Entity
					geometry={{primitive: 'box', width:5.65, height:4.10, depth:2.13}}
					position={{x: -2.78, y: 0.66, z: -7.98 }}
					rotation={{x: 76.78, y: 21.20, z: -1.15}}
					scale={{x: 1.29, y: 1.89, z: 1.76}}
					material={{src: '#car', opacity: 0.68,roughness: 0.86, metalness: 1 }}
					events={{click: this.handleClick2}}
					sound={{src: '#sfx-ignition', on: 'click'}}>
        </Entity>
			)
		} else {
			return(
				<Entity
					geometry={{primitive: 'box', width:5.65, height:4.10, depth:2.13}}
					position={{x: -2.78, y: 0.66, z: -7.98 }}
					rotation={{x: 76.78, y: 21.20, z: -1.15}}
					scale={{x: 1.29, y: 1.89, z: 1.76}}
					material={{src: '#car', opacity: 0.68,roughness: 0.86, metalness: 1 }}
					events={{click: this.handleClick2}}
					sound={{src: '#sfx-locked', on: 'click'}}>
				</Entity>
			)
		}
	}

	render() {
		return(
			<Entity>
				{ this.renderNewCar() }
			</Entity>
		)
	}
}
export default connect(
	(state) => {
		return state;
	})(Car);
