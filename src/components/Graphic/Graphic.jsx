import React, {Component} from 'react';
import {Entity} from 'aframe-react';
import { connect } from 'react-redux';
import { getKey, showText, showSignPosts } from '../../redux/actions/actions';
import Tomb from './Tomb'
import Car from './Car'

class Graphic extends Component {

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
        <Tomb/>
      )
    } else if (this.props.location === 'darkwoods') {
      return(
        <Car/>
      )
    } else if (this.props.location === 'field') {
      return(
        <Entity
        geometry={{primitive: 'box', width:0.76, height:0.69, depth:0.73}}
        position={{x: -5.40, y:0.07 , z:-4.47}}
        rotation={{x:75.06, y:150.6, z:93.97}}
        material={{src: '#key', opacity: 0.54, roughness: 0, metalness: 0.44 }}
        events={{click: this.handleClick3}}>
        <a-animation attribute="scale" begin="mouseenter" dur="300" to="2.3 2.3 2.3"/>
				<a-animation attribute="scale" begin="mouseleave" visbile="false"/>
        </Entity>
      )
    } else if(this.props.location === 'castle') {
        return(
          <Tomb/>
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
