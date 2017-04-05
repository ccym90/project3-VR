import React, {Component} from 'react';
import {Entity} from 'aframe-react';
import { connect } from 'react-redux';
import { showPosts } from '../../redux/actions/actions'



class Instruction extends Component {

  render() {
    let dispatch = this.props;
    let textChange = this.props.showText;
    // console.log("state", textChange);


    let Clue = () => {
      if(this.props.showText === 'hk_intro') {
        return (
          <Entity text={{value: 'Don\'t let him take you', align: 'center', wrapCount: 15 }}
                  position={{x: 0, y: 2, z: -1.2}}/>
        )
      } else if(this.props.showText === 'hk_instruction') {
        return(
          <Entity text={{value: 'He rises before sunrise', align: 'center', wrapCount: 15}}
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
