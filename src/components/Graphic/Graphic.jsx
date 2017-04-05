import React, {Component} from 'react';
import {Entity} from 'aframe-react';
import { connect } from 'react-redux';
import { showText } from '../../redux/actions/actions'


class Graphic extends Component {



  handleClick = (e) => {
    console.log("huston we have a click");
    let {dispatch} = this.props;
    dispatch(showText('hk_instruction'));
    console.log("the graphic props", this.props);
  }

  render() {
    return (
      <Entity
        geometry={{primitive: 'box'}}
        material={{color: 'purple'}}
        position={{x: 0, y: 1, z: -3}}
        events={{click: this.handleClick}}/>
    )
  }
}

export default connect(
	(state) => {
		return state;
	})
  (Graphic);
