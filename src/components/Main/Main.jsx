import 'aframe';
import 'aframe-animation-component'
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import Assets from '../Assets/Assets'
import Camera from '../Camera'
import Button from '../Button/Button';
import Sky from '../Sky/Sky';
import Graphic from '../Graphic/Graphic';
import Instruction from '../Instruction/Instruction';

var firebase = require("firebase/app");
// Leave out Storage
//require("firebase/storage");
class Main extends Component {

	render () {
		return (
			<Scene>
				<Assets/>
				<Instruction/>
				<Sky/>
				<Button />
				<Graphic/>
				<Entity primitive="a-light" type="ambient" color="#445451"/>
				<Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
				<Camera>
          <a-entity cursor="fuse: true; fuseTimeout: 800"
                    position="0 0 -1"
                    geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
                    material="color: white; shader: flat">
            <a-animation begin="click"
                        easing="ease-in"
                        attribute="scale"
                        dur="200"
                        fill="backwards"
                        from="0.1 0.1 0.1" to="1 1 1"></a-animation>
            <a-animation begin="cursor-fusing"
                        easing="ease-in"
                        attribute="scale"
                        dur="1500"
                        fill="forwards"
                        from="1 1 1" to="0.1 0.1 0.1"></a-animation>
          </a-entity>
				</Camera>
			</Scene>
		);
	}
}

export default Main;
// <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>
