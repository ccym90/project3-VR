import React, {Component} from 'react';
import {Entity} from 'aframe-react';
import { connect } from 'react-redux';



class Instruction extends Component {

  render() {

    let textChange = this.props.showText;
    // console.log("state", textChange);

    let Clue = () => {
      if(this.props.showText == 'hk_intro') {
        return (
          <Entity text={{value: 'He\'s been kidnapped, its up to you to save him!', align: 'center', wrapCount: 15 }}
                  position={{x: 0, y: 2, z: -1.2}}/>
        )
      } else if(this.props.showText == 'hk_instruction') {
        return(
          <Entity text={{value: 'They took him up the Big Apple, they were going to drop him but someone stole him before they could', align: 'center', wrapCount: 15}}
                  position={{x: 0, y: 2, z: -1.2}}/>
        )
      } else {
        return console.log('boop');
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
///***********************************************
