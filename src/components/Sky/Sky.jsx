import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';
import darkwoods from './images/darkwoods.jpg';
import field from './images/darkwoodsgirl.jpg';
import castle from './images/castle.jpg';


class Sky extends Component {
	render() {
		let fadeAnimation = () => {
			// console.log('fade animation');
		}

		let renderSky = () => {
			{ fadeAnimation() }
			switch (this.props.location) {
				case 'castle':
				case 'castle2':
				return(
					<Entity>
						<img id="castle" alt="" src={castle}/>
						<Entity primitive="a-sky" radius="10" src="#castle"
							sound={{ src: '#music', autoplay: true, loop: true, volume: 1 }} />
					</Entity>
				)
				case 'darkwoods':
					return (
						<Entity>
							<img id="darkwoods" alt="" src={darkwoods}/>
							<Entity primitive="a-sky" height="2048" radius="30" src="#darkwoods" theta-length="90" width="2048"
								sound={{ src: '#music', autoplay: true, loop: true, volume: 1 }} />
						</Entity>
					)
				case 'field':
					return(
						<Entity>
							<img id="field" alt="" src={field}/>
							<Entity primitive="a-sky" height="2048" radius="30" src="#field" theta-length="90" width="2048"
								sound={{ src: '#music', autoplay: true, loop: true, volume: 1 }} />
						</Entity>
					)
				default:
					return (
						<Entity>{
								console.log('SKY: state.location error:', this.props.location)
							}</Entity>
					)
			}
		}
		return(
			<Entity>
				{ renderSky() }
			</Entity>
		)
	}
}

export default connect(
	(state) => {
		return state;
	})
	(Sky);
