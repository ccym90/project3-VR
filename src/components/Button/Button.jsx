import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';
import { setLocation } from '../../redux/actions/actions'


class Button extends Component {


	handleClick = (e) => {
		let {dispatch} = this.props;
		console.log('clicky');
		dispatch(setLocation('New York'));
	}

	render() {

		return(
			<Entity>
				<audio id="click-sound" alt="" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
				<Entity
				geometry={{primitive: 'box', width: 1, height: 4, depth: 0.2 }}
				position={{x: 0, y: 0, z: -5}}
				material={{color: '#01a124'}}
				events={{click: this.handleClick}}
				sound={{ on: 'click', src: '#click-sound'}}
				/>
			</Entity>
		)
	}
}

export default connect()(Button);

/*

event-set__1={{_event: 'mousedown', property: 'scale', to:'1 1 1' }}
event-set__2={{_event: 'mouseup', property: 'scale', to:'1.2 1.2 1' }}
event-set__3={{_event: 'mouseenter', property: 'scale', to:'1.2 1.2 1' }}
event-set__4={{_event: 'mouseleave', property: 'scale', to:'1 1 1' }}


<Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>

<Entity class="link"
	geometry={{ primitive: 'plane', height: 1, width 1}}
	material={{ shader: flat, src: ${thumb}}}
	event-set__1={{_event: mousedown; scale: 1 1 1}}
	event-set__2="_event: mouseup; scale: 1.2 1.2 1"
	event-set__3="_event: mouseenter; scale: 1.2 1.2 1"
	event-set__4="_event: mouseleave; scale: 1 1 1"
	set-image="on: click; target: #image-360; src: ${src}"
	sound="on: click; src: #click-sound"/>

	<Entity
		geometry={{primitive: 'box', width: 1, height: 4, depth: 0.2 }}
		position={{x: 0, y: 0, z: -5}}
		material= {{color: '#01a124'}}
		events={{click: this.handleClick}}
		sound={{ on: 'click', src: '#click-sound'}}
		/>




<script src="raw.githubusercontent.com/gasolin/aframe-href-component‌​/…; <script type="text/javascript" src="webvr.js"></script> <script src="rawgit.com/ngokevin/aframe-text-component/master/dist/…‌​; </head> <body> <a-scene> <a-box width="1" height="0.4" position="0 0 0" depth="0.0" color="red"> <a-entity text="text: What's up" scale="0.2 0.2 0.2" color="blue" position="-0.3 0.01 0"> </a-entity> </a-box> </a-scene>

 */
