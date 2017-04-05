import {Entity} from 'aframe-react';
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class Timer extends Component {
  /* delay is just the delay on showing the update of the timer */
  render () {
    let options = { prefix: 'seconds elapsed!', delay: 100}
    return (
      <Entity>
        <Timer options={options} />
      </Entity>
    )
  }
}
export default Timer;

// AFRAME.registerComponent('timertext', function () {
//    tick: function (time, timeDelta) {
//      // ...
//      el_ttimer.setAttribute('text', 'text: '+ d.toLocaleString("ru", options) + '; font: Droid Sans Mono; size: .77;');
//    }
//  });
