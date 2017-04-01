import 'aframe';
import 'aframe-animation-component'
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import Button from '../Button/Button'


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

	handleClick = (e) => {
		console.log('clicky');
	}

	render () {
		return (
			<Scene>
				<a-assets>
					<img id="groundTexture" alt="" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
					<img id="skyTexture" alt="" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
					<img id="city" alt="" crossOrigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg" />
					<img id="city-thumb" alt="" crossOrigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg" />
					<img id="cubes-thumb" alt="" crossOrigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg" />
					<img id="sechelt-thumb" alt=""  crossOrigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg" />
					<audio id="click-sound"  crossOrigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg" />
					<img id="cubes" alt="" crossOrigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg" />
					<img id="sechelt" alt="" crossOrigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg" />
				</a-assets>

				<Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
				<Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
				<Entity text={{value: 'Butts', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>


				<Entity id="box"
				geometry={{primitive: 'box'}}
				material={{color: this.state.color, opacity: 0.6}}
				position={{x: 0, y: 1, z: -3}}
				events={this.handleClick}>
				</Entity>

				<Button/>

				<Entity primitive="a-camera">
				<Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
				</Entity>
			</Scene>
		);
	}
}

export default Main;
