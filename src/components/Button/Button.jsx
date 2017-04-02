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
				geometry={{primitive: 'box', width: 1, height: 4, depth: 0.2 }}
				position={{x: 0, y: 0, z: -5}}
				material= {{color: '#01a124'}}
				events={{click: this.handleClick}}
				/>
		)
	}
}

export default connect()(Search);


/*
<script src="raw.githubusercontent.com/gasolin/aframe-href-component‌​/…; <script type="text/javascript" src="webvr.js"></script> <script src="rawgit.com/ngokevin/aframe-text-component/master/dist/…‌​; </head> <body> <a-scene> <a-box width="1" height="0.4" position="0 0 0" depth="0.0" color="red"> <a-entity text="text: What's up" scale="0.2 0.2 0.2" color="blue" position="-0.3 0.01 0"> </a-entity> </a-box> </a-scene>

 */
