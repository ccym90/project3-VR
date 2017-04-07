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
            scale={{x:1.25, y:1.16, z:8.29}}>
              <a-animation attribute="position" repeat="indefinite" easing="ease" dur="10000" />
              <a-animation attribute="position" direction="alternate" dur="8000" repeat="indefinite"
              to="-1.26 2.48 -1.27"/>
            </Entity>
          )
        } else {
          return(
            <Entity text={{value: ' '}}/>
          )
        }
      };

      // <Animation animation={{attribute:"rotation", dur:"5000", repeat:"indefinite", to:"0 360 360"}}/>
      // <a-animation animation={{attribute:"rotation", begin:"click", dur:"2000", to:"360 405 45"}}/>
      if(loco === 'castle') {
        if (textChange === 'hk_intro') {
          return (
            <Entity text={{value: 'Is that blood on that tombstone...?', align: 'center', wrapCount: 15 }}
            position={{x: 0, y: 2, z: -1.2}}>
              <a-animation attribute="position" fill="forwards" to="0 2 -1.2" from="0 2 -3" easing="ease" dur="10000"/>
            </Entity>
          )
        } else if(textChange === 'hk_instruction') {
          return(
            <Entity text={{value: 'He rises at nightfall, you need to leave now!', align: 'center', wrapCount: 15}}
            position={{x: -2.46, y: 2.62, z: -2.12}}
            rotation={{x: 0, y:55.58, z:0}}
            scale={{x:1.54, y:1.53, z:3.75}}>
              <a-animation attribute="position" fill="forwards" from="-2.46 2.62 -3" to="-2.46 2.62 -1"  easing="ease" dur="900"/>            </Entity>
          )
        }
      }

      if(loco === 'darkwoods') {
        if(textChange === 'darkwoodsclue') {
          return (
            <Entity text={{value: 'It\'s locked, you\'ll need a key', align: 'center', wrapCount: 15}}
            position={{x: -0.95, y: 3.92, z: -3.16}}
            rotation={{x:0, y:18.33, z:0}}
            scale={{x:1.81, y:1.88, z:0.35}}/>
          )
        } else if(textChange === 'finish') {
          return (
            <Entity text={{value: 'You managed to escape... this time...', align: 'center', wrapCount: 15}}
            position={{x: 0, y: 1.90, z: -4}}
            rotation={{x:0, y: 14.90, z:0}}
            scale={{x:1.9, y:1.65, z:9.73}}>
              <a-animation attribute="position" fill="forwards" to="0 1.9 -1.21" from="0 1.9 -4" easing="ease" dur="10000"/>
            </Entity>
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
