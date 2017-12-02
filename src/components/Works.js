import React, { Component } from 'react';
import {VelocityTransitionGroup} from 'velocity-react';
import Tilt from 'react-tilt'
import RaisedButton from 'material-ui/RaisedButton';

import CodeIcon from 'react-icons/lib/md/code';
import YoutubeIcon from 'react-icons/lib/fa/youtube-play';
import DesktopIcon from 'react-icons/lib/md/desktop-windows';

import deokjdotcom from '../assets/deokjdotcom.png';
import madClock from '../assets/madClock.gif';
import tingrindr from '../assets/tingrindr.png';
import copWatch from '../assets/copWatch.png';
import toiletnotatrashcan from '../assets/toiletnotatrashcan.png';

class TiltOrDiv extends Component {
  constructor(props) {
    super(props);
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    const isMobile = (typeof window.orientation !== 'undefined') ||  navigator.userAgent.match(/Android/i)
                                                                 || navigator.userAgent.match(/webOS/i)
                                                                 || navigator.userAgent.match(/iPhone/i)
                                                                 || navigator.userAgent.match(/iPad/i)
                                                                 || navigator.userAgent.match(/iPod/i)
                                                                 || navigator.userAgent.match(/BlackBerry/i)
                                                                 || navigator.userAgent.match(/Windows Phone/i);

    const tiltOption = (isMobile) ? undefined : {
       max:            (isChrome) ? 30 : 0,     // max tilt rotation (degrees)
       perspective:    (isChrome) ? 1000 : 0,   // Transform perspective, the lower the more extreme the tilt gets.
       scale:          1.05,      // 2 = 200%, 1.5 = 150%, etc..
       speed:          1000,    // Speed of the enter/exit transition
       transition:     false,   // Set a transition on enter/exit.
     }
    this.state={
      isMobile: isMobile,
      tiltOption: tiltOption
    }
  }

  render() {
    if(this.state.isMobile)
      return (
        <div className="project">
          {this.props.children}
        </div>
      );
    else
      return(
        <Tilt className="project" options={this.state.tiltOption}>
          {this.props.children}
        </Tilt>
      );
  }

}



class Works extends Component {
  constructor(props){
    super(props);
    this.state={
      clicked : false,
      selected : '',
    }
  }

  projectSelect(project){
    this.setState(()=>({
      clicked : true,
      selected : project
    }));
  }

  projectClose(){
    this.setState(()=>({
      clicked : false,
      selected: ''
    }));
  }

  render(){
    let snackBarMsg = (<h4>This Project Description has not been updated yet.</h4>);
    let openedImg;

    if(this.state.selected === 'deokjae'){
      openedImg = (<img className="projectImg openImg" src = {deokjdotcom} alt="project img appears here/may be loading"/>);
      snackBarMsg = (
        <div>
          <h4 className="highlight">Deokj.com</h4>
          <h5>The Website you are on right now!</h5>
          <h5>ReactJS posted on Firebase</h5>
          <RaisedButton
            onClick ={(e)=>{e.stopPropagation();}}
            href="https://github.com/Deokjj/deokj.com"
            target="_blank"
            label="View Codes"
            icon={<CodeIcon />}
          />
        </div>
      )
    }
    else if(this.state.selected === 'madClock'){
      openedImg = (<img className="projectImg openImg" src = {madClock} alt="project img appears here/may be loading"/>);
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
          <div className="btnFlex">
            <div className="btnItem">
              <RaisedButton
                onClick ={(e)=>{e.stopPropagation();}}
                href="https://github.com/Deokjj/AlarmMadness"
                target="_blank"
                label="Client Codes"
                fullWidth={true}
                icon={<CodeIcon />}
              />
            </div>
            <div className="btnItem">
              <RaisedButton
                onClick ={(e)=>{e.stopPropagation();}}
                href="https://github.com/Deokjj/AlarmMadnessApi"
                target="_blank"
                label="Server Codes"
                fullWidth={true}
                icon={<CodeIcon />}
              />
            </div>
            <div className="btnItem">
              <RaisedButton
                onClick ={(e)=>{e.stopPropagation();}}
                href="https://youtu.be/GhnBJbq0Enw"
                target="_blank"
                label="Video Demo"
                fullWidth={true}
                backgroundColor="#1db954"
                labelStyle={{color: '#ecebe8'}}
                icon={<YoutubeIcon />}
              />
            </div>
            <div className="btnItem">
              <RaisedButton
                onClick ={(e)=>{e.stopPropagation();}}
                href="https://alarmmadness.herokuapp.com"
                target="_blank"
                label="Try It"
                fullWidth={true}
                backgroundColor="#1db954"
                labelStyle={{color: '#ecebe8'}}
                icon={<DesktopIcon />}
              />
            </div>
          </div>
        </div>
      );
    }
    else if(this.state.selected === 'tingrindr'){
      openedImg = (<img className="projectImg openImg" src = {tingrindr} alt="project img appears here/may be loading"/>);
      snackBarMsg = (
        <div>
          <h4 className="highlight">TinGrindr</h4>
          <h5>A dating Application that is inclusive of gender diversity and is free of discriminations that are often displayed popular dating apps such as Tinder and Grindr</h5>
          <h5>FullStack app - Node.js, MongoDB, Mongoose, Express.js, Fully responsive.</h5>
          <RaisedButton
            onClick ={(e)=>{e.stopPropagation();}}
            href="https://github.com/Deokjj/tinGrindR"
            target="_blank"
            label="View Codes"
            icon={<CodeIcon />}
          />
          <span className="btnPadding"></span>
          <RaisedButton
            onClick ={(e)=>{e.stopPropagation();}}
            href="https://tingrindr.herokuapp.com"
            target="_blank"
            label="Try It"
            backgroundColor="#1db954"
            labelStyle={{color: '#ecebe8'}}
            icon={<DesktopIcon />}
          />
        </div>
      );
    }
    else if(this.state.selected === 'copwatch'){
      openedImg = (<img className="projectImg openImg" src = {copWatch} alt="project img appears here/may be loading"/>);
      snackBarMsg = (
        <div>
          <h4 className="highlight">CopWatch</h4>
          <h5>ShellHacks Hakathon Submit At Florida International University</h5>
          <h5>React Native Mobile App and Angular Web App</h5>
        </div>
      );
    }
    else if(this.state.selected === 'toilet'){
      openedImg = (<img className="projectImg openImg" src = {toiletnotatrashcan} alt="project img appears here/may be loading"/>);
      snackBarMsg = (
        <div>
          <h4 className="highlight">Destroy the Toilet</h4>
          <h5>Throwing projectiles to hit the toilet engined with hard coded Physics.<br/>
           User can alter weights, power value, initial projectile angle, initial y-axis position of trajectories.
          </h5>
          <h5>HTML5, CSS, SASS, JavaScript, jQuery and Canvas API</h5>
          <RaisedButton
            onClick ={(e)=>{e.stopPropagation();}}
            href="https://github.com/Deokjj/ToiletNotATrashCan"
            target="_blank"
            label="View Codes"
            icon={<CodeIcon />}
          />
          <span className="btnPadding"></span>
          <RaisedButton
            onClick ={(e)=>{e.stopPropagation();}}
            href="https://deokjj.github.io/ToiletNotATrashCan/"
            target="_blank"
            label="Try It"
            backgroundColor="#1db954"
            labelStyle={{color: '#ecebe8'}}
            icon={<DesktopIcon />}
          />
        </div>
      );
    }
    else{
      openedImg = undefined;
      snackBarMsg = undefined;
    }

    const SelectedProject = () =>{
      return(
        <div className="projectOpen" onClick={(e)=>{this.projectClose();}}>
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
          <TiltOrDiv>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:300}} runOnMount={true}>
              <img className="projectImg" src = {deokjdotcom} alt="" onClick={(e)=>{this.projectSelect('deokjae');}}/>
            </VelocityTransitionGroup>
          </TiltOrDiv>
          <TiltOrDiv>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:500}} runOnMount={true}>
              <img className="projectImg" src = {madClock} alt="" onClick={(e)=>{this.projectSelect('madClock');}}/>
            </VelocityTransitionGroup>
          </TiltOrDiv>
          <TiltOrDiv>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:700}} runOnMount={true}>
              <img className="projectImg" src = {tingrindr} alt="" onClick={(e)=>{this.projectSelect('tingrindr');}}/>
            </VelocityTransitionGroup>
          </TiltOrDiv>
          <TiltOrDiv>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:900}} runOnMount={true}>
              <img className="projectImg" src = {copWatch} alt="" onClick={(e)=>{this.projectSelect('copwatch');}}/>
            </VelocityTransitionGroup>
          </TiltOrDiv>
          <TiltOrDiv>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay: 1100}} runOnMount={true}>
              <img className="projectImg" src = {toiletnotatrashcan} alt="" onClick={(e)=>{this.projectSelect('toilet');}}/>
            </VelocityTransitionGroup>
          </TiltOrDiv>
        </div>
        <VelocityTransitionGroup enter={{animation: 'transition.bounceDownIn', duration: 500}} leave={{animation: 'transition.bounceUpOut', duration: 500}}>
          {this.state.clicked ? <div className="overlay" style={{position: 'fixed',zIndex: 11}} onClick={(e)=>{this.projectClose();}}></div> : undefined}
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: 'transition.expandIn', duration: 400, delay: 200}} leave={{animation: 'transition.expandOut',duration: 400, delay: 200}}>
          {this.state.clicked ? <SelectedProject/> : undefined}
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: 'transition.slideUpBigIn', duration: 500, delay: 400}} leave={{animation: 'transition.slideDownBigOut', duration: 500}}>
          {this.state.clicked ? <div className="snackBar" onClick={(e)=>{this.projectClose();}}>{snackBarMsg}</div> : undefined}
        </VelocityTransitionGroup>
      </div>
    );
  }
}
export default Works;
