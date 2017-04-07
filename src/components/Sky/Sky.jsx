import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

class Sky extends Component {
	render() {
		let fadeAnimation = () => {
			// console.log('fade animation');
		}

		let renderSky = () => {
			fadeAnimation()
			switch (this.props.location) {
				case 'castle':
				case 'castle2':
					return(
						<Entity>
							<Entity primitive="a-circle" src="#groundTexture"
								position={{ x: 0, y: 15, z: 0 }}
								rotation={{ x: 90, y: 0, z: 0 }}
								scale={{x: 5, y:5, z:0 }}
								geometry={{ radius: 1 }}
								/>
							<Entity
								primitive='a-sky'
								position={{ x: 0, y: 5, z: 0 }}
								geometry={{ radius: 10, thetaLength: 150, thetaStart: 10}}
								src={'#castle'}
								sound={{ src: '#music', autoplay: true, loop: true, volume: 1 }} />
							<Entity primitive="a-circle" src="#groundTexture"
								position={{ x: 0, y: -5, z: 0 }}
								rotation={{ x: -90, y: 0, z: 0 }}
								scale={{x: 5, y:5, z:0 }}
								geometry={{ radius: 1 }}
								/>
						</Entity>
					)
				case 'darkwoods':
					return (
						<Entity>
							<Entity primitive="a-circle" src="#groundTexture"
								position={{ x: 0, y: 15, z: 0 }}
								rotation={{ x: 90, y: 0, z: 0 }}
								scale={{x: 5, y:5, z:0 }}
								geometry={{ radius: 1 }}
								/>
							<Entity
								primitive='a-sky'
								position={{ x: 0, y: 5, z: 0 }}
								geometry={{ radius: 10, thetaLength: 160, thetaStart: 0}}
								src={'#darkwoods'}
								sound={{ src: '#music', autoplay: true, loop: true, volume: 1 }} />
							<Entity primitive="a-circle" src="#groundTexture"
								position={{ x: 0, y: -4.5, z: 0 }}
								rotation={{ x: -90, y: 0, z: 0 }}
								scale={{x: 5, y:5, z:0 }}
								geometry={{ radius: 1 }}
								/>
						</Entity>
					)
				case 'field':
					return(
						<Entity>
							<Entity primitive="a-circle" src="#groundTexture"
								position={{ x: 0, y: 14, z: 0 }}
								rotation={{ x: 90, y: 0, z: 0 }}
								scale={{x: 5, y:5, z:0 }}
								geometry={{ radius: 1.35 }}
								/>
							<Entity
								primitive='a-sky'
								position={{ x: 0, y: 6.5, z: 0 }}
								geometry={{ radius: 10, thetaLength: 100, thetaStart: 40}}
								src={'#field'}
								sound={{ src: '#music', autoplay: true, loop: true, volume: 1 }} />
							<Entity primitive="a-circle" src="#groundTexture"
								position={{ x: 0, y: -1, z: 0 }}
								rotation={{ x: -90, y: 0, z: 0 }}
								scale={{x: 5, y:5, z:0 }}
								geometry={{ radius: 1.3 }}
								/>
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
	})(Sky);
