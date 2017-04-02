import 'aframe';
import 'aframe-animation-component'
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import Button from '../Button/Button';
import Assets from '../Assets/Assets';


class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {color: 'red'};
	}

	changeColor() {
		const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
		this.setState({
			color: colors[Math.floor(Math.random() * colors.length)]
		});
	}

	render () {
		return (
			<Scene>
				<Assets/>
				<Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
				<Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
				<Entity text={{value: 'A-Frame React!', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>

				<Button/>

				<Entity id="links"
					layout="type: line; margin: 1.5"
					position="0 -1 -4" >
					<Entity template="src: #link" data-src="#cubes" data-thumb="#cubes-thumb"/>
				</Entity>


				<Entity id="graphic"
					geometry={{primitive: 'box'}}
					material={{color: this.state.color, opacity: 0.6}}
					position={{x: 0, y: 1, z: -3}}
					events={{click: this.changeColor.bind(this)}}/>

				<Entity primitive="a-camera">
					<Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
				</Entity>
			</Scene>
		);
	}
}

export default Main;
