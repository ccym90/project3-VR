import React, {Component} from 'react';
import {Entity} from 'aframe-react';
import { connect } from 'react-redux';
import { showText, showSignPosts } from '../../redux/actions/actions';

class Tomb extends Component {

	handleClick = (e) => {
		let {dispatch} = this.props;
		dispatch(showText('hk_instruction'));
		dispatch(showSignPosts());
	}

	render() {
		return (
			<Entity>
				<Entity
          geometry={{primitive: 'box', width: 1, height: 1.5, depth: 1}}
          position={{x: -4.43, y: 1.5, z: -3.74}}
          rotation={{x:1.72, y:-44.6, z:4.06}}
          material={{src: '#tomb', roughness:0.70, metalness:0.82 }}
          events={{click: this.handleClick}}
					/>
			</Entity>
		)
	}
}
export default connect(
	(state) => {
		return state;
	})(Tomb);
