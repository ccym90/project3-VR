import React, {Component} from 'react';
import {Entity} from 'aframe-react';
// import classNames from 'classnames'
// import { TYPE_TO_COLOR_MAP } from '../core'
import { connect } from 'react-redux';

class Graphic extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  handleClick = (e) => {
    console.log("huston we have a click")

  }

  render() {
    return (
      <div className="graphicLocation">
      <Entity id="graphic"
        geometry={{primitive: 'box'}}
        material={{color: this.state.color, opacity: 0.6}}
        position={{x: 0, y: 1, z: -3}}
        events={{click: this.changeColor.bind(this)}}>
      </Entity>
      </div>
    )
  }
}

export default connect()(Graphic);

// constructor(props) {
//   super(props);
//
// }
//
//   this.state = {
//     graphic: {}
//   }
//
// handleChange = (e) => {
//
//
// }
//
// handleClick = (e) => {
//
// }

// ****** render click example changing colour
// render() {
//   return (
//     <div className="graphicLocation">
//     <Entity id="graphic"
//       geometry={{primitive: 'box'}}
//       material={{color: this.state.color, opacity: 0.6}}
//       position={{x: 0, y: 1, z: -3}}
//       events={{click: this.changeColor.bind(this)}}>
//     </Entity>
//     </div>
//   )
// }

//****************************** Taken from members API example
// export default connect()(AddNew);
//
// export default class Member extends Component {
//   render () {
//     const { id, name, photoUrl } = this.props
//
//     if (this.props.vrMode) {
//       const { width, height, depth } = this.props
//       const { x, y, z } = this.props.position
//       const color = `#${TYPE_TO_COLOR_MAP[this.props.type || '']}`
//
//       return (
//         <Entity geometry={{'primitive': 'box', width: width, height: height, depth: depth}}
//                 material={{src: `url(${photoUrl})`, color}}
//                 position={`${x} ${y} ${z}`}
//                 onClick={() => {this.props.onClick(id) }} />
//       )
//
//     } else {
//       var memberClass = classNames({
//         'member-component': true,
//         'member-component__hipster': this.props.type === 'hipster',
//         'member-component__hacker': this.props.type === 'hacker',
//         'member-component__hustler': this.props.type === 'hustler'
//       })
//
//       return (
//         <div className={memberClass} onClick={() => {this.props.onClick(id) }} title={name}>
//           <img src={photoUrl} width="100" height="100" />
//         </div>
//       )
//
//     }
//   }
// }
