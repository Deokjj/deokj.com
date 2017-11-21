import React, { Component } from 'react';
import Tilt from 'react-tilt'
import {VelocityTransitionGroup} from 'velocity-react';

import deokjdotcom from '../assets/deokjdotcom.png';
import madClock from '../assets/madClock.png';
import tingrindr from '../assets/tingrindr.png';
import copWatch from '../assets/copWatch.png';
import toiletnotatrashcan from '../assets/toiletnotatrashcan.png';


class Works extends Component {

  render(){
    const tiltOption={
      max:            25,     // max tilt rotation (degrees)
      perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
      scale:          1.05,      // 2 = 200%, 1.5 = 150%, etc..
      speed:          1000,    // Speed of the enter/exit transition
      transition:     true,   // Set a transition on enter/exit.
    }

    return(
      <div className = "works">
      <VelocityTransitionGroup enter={{animation: "transition.flipYIn", duration: 700, delay:0}} runOnMount={true}>
        <h2>
          What Ive <span className="highlight">Worked</span> On:
        </h2>
      </VelocityTransitionGroup>
        <div className="flex projectList">
          <Tilt className="project" options={tiltOption}>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:300}} runOnMount={true}>
              <img className="projectImg" src = {deokjdotcom} alt=""/>
            </VelocityTransitionGroup>
          </Tilt>
          <Tilt className="project" options={tiltOption}>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:500}} runOnMount={true}>
              <img className="projectImg" src = {madClock} alt=""/>
            </VelocityTransitionGroup>
          </Tilt>
          <Tilt className="project" options={tiltOption}>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:700}} runOnMount={true}>
              <img className="projectImg" src = {tingrindr} alt=""/>
            </VelocityTransitionGroup>
          </Tilt>
          <Tilt className="project" options={tiltOption}>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:900}} runOnMount={true}>
              <img className="projectImg" src = {copWatch} alt=""/>
            </VelocityTransitionGroup>
          </Tilt>
          <Tilt className="project" options={tiltOption}>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay: 1100}} runOnMount={true}>
              <img className="projectImg" src = {toiletnotatrashcan} alt=""/>
            </VelocityTransitionGroup>
          </Tilt>
        </div>
      </div>
    );
  }
}
export default Works;
