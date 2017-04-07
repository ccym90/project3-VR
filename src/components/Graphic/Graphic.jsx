import React, {Component} from 'react';
import {Entity} from 'aframe-react';
import { connect } from 'react-redux';
import { getKey, showText, showSignPosts } from '../../redux/actions/actions';

class Graphic extends Component {

	handleClick = (e) => {
		let {dispatch} = this.props;
		dispatch(showText('hk_instruction'));
		dispatch(showSignPosts());
	}

	handleClick2 = (e) => {
		let {dispatch} = this.props;
		let { hasKey } = this.props.playerItems
		if (hasKey){
				dispatch(showText('finish'))
		} else {
				dispatch(showText('darkwoodsclue'));
		}
	}

	handleClick3 = (e) => {
			let {dispatch} = this.props;
			dispatch(getKey());
			dispatch(showText('found'));
			e.target.setAttribute('visible', false);
	}

  renderNewGraphic = () => {
    let {dispatch} = this.props;
    if(this.props.location === 'castle') {
      return(
        <Entity
          geometry={{primitive: 'box', width: 1, height: 1.5, depth: 1}}
          position={{x: -4.43, y: 1.5, z: -3.74}}
          rotation={{x:1.72, y:-44.6, z:4.06}}
          material={{src: '#tomb', roughness:0.70, metalness:0.82 }}
          events={{click: this.handleClick}}/>
      )
    } else if (this.props.location === 'darkwoods') {
      return(
        <Entity
        geometry={{primitive: 'box', width:5.65, height:4.10, depth:2.13}}
        position={{x: -2.78, y: 0.66, z: -7.98 }}
        rotation={{x: 76.78, y: 21.20, z: -1.15}}
        scale={{x: 1.29, y: 1.89, z: 1.76}}
        material={{src: '#car', opacity: 0.68,roughness: 0.86, metalness: 1 }}
        events={{click: this.handleClick2}}
				sound={{src: '#sfx-locked', on: 'click'}}
				/>
      )
    } else if (this.props.location === 'field') {
      return(
        <Entity
        geometry={{primitive: 'box', width:0.76, height:0.69, depth:0.73}}
        position={{x: -5.40, y:0.07 , z:-4.47}}
        rotation={{x:75.06, y:150.6, z:93.97}}
        material={{src: '#key', opacity: 0.54, roughness: 0, metalness: 0.44 }}
        events={{click: this.handleClick3}}>
          <a-animation attribute="scale" begin="mouseenter" dur="300" to="2.3 2.3 2.3"></a-animation>
        </Entity>
      )
    }
  }
	render() {
		return (
			<Entity>
				{ this.renderNewGraphic() }
			</Entity>
		)
	}
}

export default connect(
	(state) => {
		return state;
	})(Graphic);
