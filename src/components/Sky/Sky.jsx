import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';
import ocarina from './ocarina.mp3'
import basementmp3 from './basement-storage.mp3'
import darkwoods1 from './images/darkwoods1.jpg';
import darkwoods5 from './images/darkwoods5.jpg';


class Sky extends Component {
	render() {
		let fadeAnimation = () => {
			// console.log('fade animation');
		}

		let renderSky = () => {
			{ fadeAnimation() }
			switch (this.props.location) {
				case 'hongkong':
					return (
						<Entity>
							<img id="darkwoods1" alt="" src={darkwoods1}/>
							<Entity primitive="a-sky"
								height="2048" radius="30" src="#darkwoods1"
								theta-length="90" width="2048"
								sound={{ src: '#music', autoplay: true, loop: true, volume: 0.5 }}
								/>
						</Entity>
					)
				case 'newyork':
					return(
						<Entity>
							<img id="darkwoods5" alt="" src={darkwoods5}/>
							<Entity primitive="a-sky" height="2048" radius="30" src="#darkwoods5" theta-length="90" width="2048"/>
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
				<audio id="music" alt="" crossOrigin="anonymous" src={ocarina}></audio>
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
