import React, { Component } from 'react';
import {Entity, Scene} from 'aframe-react';
import { connect } from 'react-redux';
import { setSearchText } from '../../actions/actions'

class Search  extends Component {

	handleClick = (e) => {
		console.log('clicky');
	}

	render() {

		return(

			<Entity
				geometry={{primitive: 'box', width: 5}}
				material= {{color: '#01a124'}}
				position={{x: 0, y: 0, z: -5}}
				events={{click: this.handleClick}}
				/>
		)
	}
}

export default connect()(Search);
