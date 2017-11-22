import React, { Component } from 'react';
import Tilt from 'react-tilt'
import {VelocityTransitionGroup} from 'velocity-react';

import deokjdotcom from '../assets/deokjdotcom.png';
import madClock from '../assets/madClock.png';
import tingrindr from '../assets/tingrindr.png';
import copWatch from '../assets/copWatch.png';
import toiletnotatrashcan from '../assets/toiletnotatrashcan.png';


class Works extends Component {
  constructor(props){
    super(props);
    this.state={
      clicked : false,
      selected : ''
    }
  }

  projectSelect(project){
    this.setState((prevState)=>({
      clicked : !prevState.clicked,
      selected : project
    }));
  }

  render(){
    const tiltOption={
      max:            30,     // max tilt rotation (degrees)
      perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
      scale:          1.05,      // 2 = 200%, 1.5 = 150%, etc..
      speed:          1000,    // Speed of the enter/exit transition
      transition:     true,   // Set a transition on enter/exit.
    }

    let openedImg;

    if(this.state.selected === 'deokjae'){
      openedImg = (<img className="projectImg openImg" src = {deokjdotcom} alt=""/>);
    }
    else if(this.state.selected === 'madClock'){
      openedImg = (<img className="projectImg openImg" src = {madClock} alt=""/>);
    }
    else if(this.state.selected === 'tingrindr'){
      openedImg = (<img className="projectImg openImg" src = {tingrindr} alt=""/>);
    }
    else if(this.state.selected === 'copwatch'){
      openedImg = (<img className="projectImg openImg" src = {copWatch} alt=""/>);
    }
    else{
      openedImg = (<img className="projectImg openImg" src = {toiletnotatrashcan} alt=""/>);
    }

    const SelectedProject = () =>{
      return(
        <div className="projectOpen" onClick={(e)=>{this.projectSelect('');}}>
          {openedImg}
        </div>
      );
    }

    return(
      <div className = "works" style={{zIndex: (this.state.clicked) ? 401 : 3}}>
        <VelocityTransitionGroup enter={{animation: "transition.flipYIn", duration: 700, delay:0}} runOnMount={true}>
          <h2>
            What Ive <span className="highlight">Worked</span> On:
          </h2>
        </VelocityTransitionGroup>
        <div className="flex projectList">
          <Tilt className="project" options={tiltOption}>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:300}} runOnMount={true}>
              <img className="projectImg" src = {deokjdotcom} alt="" onClick={(e)=>{this.projectSelect('deokjae');}}/>
            </VelocityTransitionGroup>
          </Tilt>
          <Tilt className="project" options={tiltOption}>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:500}} runOnMount={true}>
              <img className="projectImg" src = {madClock} alt="" onClick={(e)=>{this.projectSelect('madClock');}}/>
            </VelocityTransitionGroup>
          </Tilt>
          <Tilt className="project" options={tiltOption}>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:700}} runOnMount={true}>
              <img className="projectImg" src = {tingrindr} alt="" onClick={(e)=>{this.projectSelect('tingrindr');}}/>
            </VelocityTransitionGroup>
          </Tilt>
          <Tilt className="project" options={tiltOption}>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:900}} runOnMount={true}>
              <img className="projectImg" src = {copWatch} alt="" onClick={(e)=>{this.projectSelect('copwatch');}}/>
            </VelocityTransitionGroup>
          </Tilt>
          <Tilt className="project" options={tiltOption}>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay: 1100}} runOnMount={true}>
              <img className="projectImg" src = {toiletnotatrashcan} alt="" onClick={(e)=>{this.projectSelect('toilet');}}/>
            </VelocityTransitionGroup>
          </Tilt>
        </div>
        <VelocityTransitionGroup enter={{animation: 'transition.expandIn', duration: 400, delay: 200}} leave={{animation: 'transition.expandOut',duration: 400, delay: 200}}>
          {this.state.clicked ? <SelectedProject/> : undefined}
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: 'transition.bounceDownIn', duration: 500}} leave={{animation: 'transition.bounceUpOut', duration: 500}}>
          {this.state.clicked ? <div className="overlay" onClick={(e)=>{this.projectSelect('');}}></div> : undefined}
        </VelocityTransitionGroup>
      </div>
    );
  }
}
export default Works;
