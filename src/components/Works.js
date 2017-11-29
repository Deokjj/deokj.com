import React, { Component } from 'react';
import {VelocityTransitionGroup} from 'velocity-react';
import Tilt from 'react-tilt'
// import FlatButton from 'material-ui/FlatButton';

import deokjdotcom from '../assets/deokjdotcom.png';
import madClock from '../assets/madClock.png';
import tingrindr from '../assets/tingrindr.png';
import copWatch from '../assets/copWatch.png';
import toiletnotatrashcan from '../assets/toiletnotatrashcan.png';


class Works extends Component {
  constructor(props){
    super(props);
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    this.state={
      clicked : false,
      selected : '',
      isChrome: isChrome
    }
  }

  componentDidMount(){
  }

  projectSelect(project){
    this.setState((prevState)=>({
      clicked : !prevState.clicked,
      selected : project
    }));
  }

  render(){
    const tiltOption={
      max:            (this.state.isChrome) ? 30 : 0,     // max tilt rotation (degrees)
      perspective:    (this.state.isChrome) ? 1000 : 0,   // Transform perspective, the lower the more extreme the tilt gets.
      scale:          1.05,      // 2 = 200%, 1.5 = 150%, etc..
      speed:          1000,    // Speed of the enter/exit transition
      transition:     false,   // Set a transition on enter/exit.
    }

    let snackBarMsg = (<h4>This Project Description has not been updated yet.</h4>);
    let openedImg;

    if(this.state.selected === 'deokjae'){
      openedImg = (<img className="projectImg openImg" src = {deokjdotcom} alt=""/>);
      snackBarMsg = (
        <div>
          <h4 className="highlight">Deokj.com</h4>
          <h5>The Website you are on right now!</h5>
          <h5>ReactJS posted on Firebase</h5>
        </div>
      )
    }
    else if(this.state.selected === 'madClock'){
      openedImg = (<img className="projectImg openImg" src = {madClock} alt=""/>);
      snackBarMsg = (
        <div>
          <h4 className="highlight">Mad Alarm</h4>
          <h5>MEAN web application.
          Users can set up their alarm or timer. In order to turn off the alarm,
          user must make facial expressions as instructed by the app.
          After completion, it posts user’s captured photos that will be shared as part of social media.</h5>
          <h5>
            Angular 4, Node.js, MongoDB, Express.js, App RESTful API, Google Vision API, Amazon Web Service S3, Youtube Data API. Single page application.
          </h5>
        </div>
      );
    }
    else if(this.state.selected === 'tingrindr'){
      openedImg = (<img className="projectImg openImg" src = {tingrindr} alt=""/>);
      snackBarMsg = (
        <div>
          <h4 className="highlight">TinGrindr</h4>
          <h5>A dating Application that is inclusive of gender diversity and is free of discriminations that are often displayed popular dating apps such as Tinder and Grindr</h5>
          <h5>FullStack app - Node.js, MongoDB, Mongoose, Express.js, Fully responsive.</h5>
        </div>
      );
    }
    else if(this.state.selected === 'copwatch'){
      openedImg = (<img className="projectImg openImg" src = {copWatch} alt=""/>);
      snackBarMsg = (
        <div>
          <h4 className="highlight">CopWatch</h4>
          <h5>ShellHacks Hakathon Submit At Florida International University</h5>
          <h5>React Native Mobile App and Angular Web App</h5>
        </div>
      );
    }
    else{
      openedImg = (<img className="projectImg openImg" src = {toiletnotatrashcan} alt=""/>);
      snackBarMsg = (
        <div>
          <h4 className="highlight">Destroy the Toilet</h4>
          <h5>Throwing projectiles to hit the toilet engined with hard coded Physics.<br/>
           User can alter weights, power value, initial projectile angle, initial y-axis position of trajectories.
          </h5>
          <h5>HTML5, CSS, SASS, JavaScript, jQuery and Canvas API</h5>
        </div>
      );
    }

    const SelectedProject = () =>{
      return(
        <div className="projectOpen" onClick={(e)=>{this.projectSelect('');}}>
          {openedImg}
        </div>
      );
    }

    return(
      <div className = "works" style={{zIndex: (this.state.clicked) ? 401 : 4}}>
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
        <VelocityTransitionGroup enter={{animation: 'transition.bounceDownIn', duration: 500}} leave={{animation: 'transition.bounceUpOut', duration: 500}}>
          {this.state.clicked ? <div className="overlay" style={{position: 'fixed',zIndex: 11}} onClick={(e)=>{this.projectSelect('');}}></div> : undefined}
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: 'transition.expandIn', duration: 400, delay: 200}} leave={{animation: 'transition.expandOut',duration: 400, delay: 200}}>
          {this.state.clicked ? <SelectedProject/> : undefined}
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: 'transition.slideUpBigIn', duration: 500, delay: 400}} leave={{animation: 'transition.slideDownBigOut', duration: 500}}>
          {this.state.clicked ? <div className="snackBar">{snackBarMsg}</div> : undefined}
        </VelocityTransitionGroup>
      </div>
    );
  }
}
export default Works;
