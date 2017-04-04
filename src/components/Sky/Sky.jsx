import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';
import hksky from './images/urban.jpg';
import nysky from './images/newyork.jpg';
class Sky extends Component {


	render() {
		let fadeAnimation = () => {
			console.log('fade');
		}

		let renderSky = () => {
			{ fadeAnimation() }
			switch (this.props.location) {
				case 'hongkong':
					return (
						<Entity>
							<img id="skyTexture" alt="" src={hksky}/>
							<Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
						</Entity>
					)
				case 'newyork':
					return(
						<Entity>
							<img id="city" alt="" src={nysky}/>
							<Entity primitive="a-sky" height="2048" radius="30" src="#city" theta-length="90" width="2048"/>
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
				<img id="skyTexture" alt="" src={nysky}/>
				<img id="city" alt="" src={hksky}/>
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
