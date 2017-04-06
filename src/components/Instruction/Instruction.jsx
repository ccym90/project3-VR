import React, {Component} from 'react';
import {Entity} from 'aframe-react';
import { connect } from 'react-redux';
import { showText } from '../../redux/actions/actions'

class Instruction extends Component {

  render() {

    // // console.log("state", textChange);
    // let {dispatch} = dispatch(showText();
    let {textChange} = this.props.showText;

    let Clue = () => {
      // if(this.props.location === 'castle');
      if (this.props.showText === 'hk_intro') {
        return (
          <Entity text={{value: 'Is that blood on the tombstone...?', align: 'center', wrapCount: 15 }}
                  position={{x: 0, y: 2, z: -1.2}}/>
        )
      } else if(this.props.showText === 'hk_instruction') {
        return(
          <Entity text={{value: 'He rises at nightfall, you need to leave now!', align: 'center', wrapCount: 15}}
                  position={{x: 0, y: 2, z: -1.2}}/>
        )
      } else if(this.props.showText === 'field') {
        return(
        <Entity text={{value: 'You found a key!', align: 'center', wrapCount: 15}}
                 position={{x: 0, y: 2, z: -1.2}}/>
        )
      } else if(this.props.showText === 'darkwoodsclue') {
        return(
        <Entity text={{value: 'It\'s locked...you\'ll need a key', align: 'center', wrapCount: 15}}
                 position={{x: 0, y: 2, z: -1.2}}/>
        )
      } else {
        return console.log('boop error');
      }
    }

    return(
      <Entity>
        { Clue() }
      </Entity>
    )
  }
}

export default connect(
  (state) => {
    return state;
  }
)(Instruction);
