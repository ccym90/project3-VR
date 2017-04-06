import React, {Component} from 'react';
import {Entity} from 'aframe-react';
import { connect } from 'react-redux';
import { showText, showSignPosts } from '../../redux/actions/actions'

class Graphic extends Component {


  handleClick = (e) => {
    console.log("huston we have a click", this.props.location)
    console.log("visble???", this.state);
    this.props.visible === 'false';
    let {dispatch} = this.props;
    dispatch(showText('hk_instruction'));
    console.log("the graphic props", this.props);
    dispatch(showSignPosts());
  }

  renderNewGraphic = () => {
    console.log("whats my location", this.props.location )
    if(this.props.location === 'castle') {
      return(
        <Entity
          geometry={{primitive: 'box'}}
          material={{color: 'red'}}
          position={{x: 1, y: 1, z: -3}}
          events={{click: this.handleClick}}/>
      )
    } else if (this.props.location === 'darkwoods') {
      return(
        <Entity
        geometry={{primitive: 'box'}}
        material={{color: 'green'}}
        position={{x: -1, y:1 , z: -5}}
        events={{click: this.handleClick}}/>
      )
    } else if (this.props.location === 'field') {
      return(
        <Entity
        geometry={{primitive: 'box'}}
        material={{color: 'yellow'}}
        position={{x: -3, y: 2, z: -3}}
        events={{click: this.handleClick}}
        visible="true"/>
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
	})
  (Graphic);
