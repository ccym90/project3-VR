// +++
// Structure taken from here, where they exported all assets
// https://github.com/RSpace/agile-space/blob/master/src/js/components/Assets.js

import React, { Component } from 'react'
import { Entity } from 'aframe-react'

export default class Assets extends Component {
  render () {
    return (
      <a-assets>
        <img id="city" alt="" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg"/>
        <img id="city-thumb" alt="" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg"/>
        <img id="cubes-thumb" alt="" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg"/>
        <img id="sechelt-thumb" alt="" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg"/>
        <audio id="click-sound" alt="" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
        <img id="cubes" alt="" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg"/>
        <img id="sechelt" alt="" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"/>

        <img id="groundTexture" alt="" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
				<img id="skyTexture" alt="" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
      </a-assets>
    )
  }
}


/*
<script id="link" type="text/html">
  <a-entity class="link"
    geometry="primitive: plane; height: 1; width: 1"
    material="shader: flat; src: ${thumb}"
    event-set__1="_event: mousedown; scale: 1 1 1"
    event-set__2="_event: mouseup; scale: 1.2 1.2 1"
    event-set__3="_event: mouseenter; scale: 1.2 1.2 1"
    event-set__4="_event: mouseleave; scale: 1 1 1"
    set-image="on: click; target: #image-360; src: ${src}"
    sound="on: click; src: #click-sound"></a-entity>
</script>
 */

// <Entity
//   geometry={{primitive: 'plane', height: 1; width: 1}}
//   position={{x: 0, y: 0, z: -5}}
//   material={{shader: flat, src: tumb}}
//   />
