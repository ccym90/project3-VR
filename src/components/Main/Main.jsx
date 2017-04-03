import 'aframe';
import 'aframe-animation-component'
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import Button from '../Button/Button';
import Assets from '../Assets/Assets';
import Sky from '../Sky/Sky';
import Graphic from '../Graphic/Graphic';
import Instruction from '../Instruction/Instruction'

class Main extends Component {

  render () {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" alt="" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
        </a-assets>
        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>

        <Instruction/>
        <Sky/>
        <Button />
        <Graphic/>

        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>

      </Scene>
    );
  }
}

export default Main;


// <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>
