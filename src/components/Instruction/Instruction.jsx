import React, {Component} from 'react';
import {Entity} from 'aframe-react';
import { connect } from 'react-redux';


class Instruction extends Component {

  render() {
    return (
      <Entity text={{value: 'He\'s been kidnapped, its up to you to save him!', align: 'center'}} position={{x: 0, y: 2, z: -1}}>
      </Entity>
    )
  }
}

export default connect()(Instruction);
