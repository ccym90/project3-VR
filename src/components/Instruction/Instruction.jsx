import React, {Component} from 'react';
import {Entity} from 'aframe-react';
import { connect } from 'react-redux';

class Instruction extends Component {

  render() {
    let Clue = () => {
      let textChange = this.props.showText;
      let loco = this.props.location;

      if(loco === 'field') {
        if(textChange === 'found'){
          return(
            <Entity text={{value: 'You found a key!', align: 'center', wrapCount: 15}}
            position={{x: -1.62, y: 2.43, z: -1.27}}
            rotation={{x:0, y:57.87, z:0}}
            scale={{x:1.25, y:1.16, z:8.29}}/>
          )
        } else {
          return(
            <Entity text={{value: ' '}}/>
          )
        }
      };

      if(loco === 'castle') {
        if (textChange === 'hk_intro') {
          return (
            <Entity text={{value: 'Is that blood on that tombstone...?', align: 'center', wrapCount: 15 }}
            position={{x: 0, y: 2, z: -1.2}}/>
          )
        } else if(textChange === 'hk_instruction') {
          return(
            <Entity text={{value: 'He rises at nightfall, you need to leave now!', align: 'center', wrapCount: 15}}
            position={{x: -0.84, y: 1.92, z: -0.66}}
            rotation={{x: 0, y:48.70, z:0}}
            scale={{x:1.05, y:1, z:1.75}}/>
          )
        }
      }

      if(loco === 'darkwoods') {
        if(textChange === 'darkwoodsclue') {
          return (
            <Entity text={{value: 'It\'s locked, you\'ll need a key', align: 'center', wrapCount: 15}}
            position={{x: 0, y: 2, z: -1.2}}/>
          )
        } else if(textChange === 'finish') {
          return (
            <Entity text={{value: 'You managed to escape... this time...', align: 'center', wrapCount: 15}}
            position={{x: 0, y: 2, z: -1.2}}/>
          )
        } else {
          return(
            <Entity text={{value: ' '}}/>
          )
        }
      }

      if(loco === 'castle2') {
        if(textChange === 'castle2'){
        }else{
          return(
            <Entity text={{value: ' '}}/>
          )
        }
      }

    }

    return(
      <Entity>
        { Clue() }
      </Entity>
    )
  }
}

//   let textChange = 'castle2'
//   console.log("POOOOOOOOOOYYYYY", textChange)
//   // textChange = 'castle2';
//   return(
//     <Entity text={{value: ' '}}/>
//   )
// };
// if(loco === 'castle');
// } else if(textChange === 'field') {
//   return(
//   <Entity text={{value: 'You found a key!', align: 'center', wrapCount: 15}}
//            position={{x: 0, y: 2, z: -1.2}}/>
//   )

export default connect(
  (state) => {
    return state;
  }
)(Instruction);
