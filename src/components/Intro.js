import React, { Component } from 'react';
import angularLogo from '../assets/angular.svg';
import awsS3Logo from '../assets/aws-s3.svg';
import mongoLogo from '../assets/mongo.svg';
import nodeJsLogo from '../assets/nodejs.svg';
import reactLogo from '../assets/react.svg';

import {VelocityTransitionGroup} from 'velocity-react';

class Intro extends Component {

  render(){
    return(
      <div className="intro">
        <VelocityTransitionGroup enter={{animation: "transition.flipYIn", duration: 700, delay:0}} runOnMount={true}>
          <h2>
            But Deokjae.. <span className='highlight'>WHO?</span>
          </h2>
          <h5 className="introContents">
            Hi! I studied <span className='highlight'>Computer Science</span> at The University of Miami 🙌.<br/>
            My interests are <span className='highlight'>Web Development</span> and <span className='highlight'>UX/UI.</span><br/>
            Recently, I worked as a <span className='highlight'>Frontend developer</span> at <span className='highlight'>Protobrand</span>.<br/>
            I am currently looking for fulltime opportunities!
          </h5>
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "transition.slideRightBigIn", duration: 700, delay:0}} runOnMount={true}>
          <h4 className="techIntro">
            <span>What I have worked with:</span>
          </h4>
        </VelocityTransitionGroup>
        <div className="flex marginBox">
          <div className="flexChildren">
            <VelocityTransitionGroup enter={{animation: "transition.slideRightIn", duration: 700, delay:800}} runOnMount={true}>
              <img className="logoImg" src = {angularLogo} alt="Angular Logo Appears here"/>
            </VelocityTransitionGroup>
            <div className="caption">Angular 4</div>
          </div>
          <div className="flexChildren">
            <VelocityTransitionGroup enter={{animation: "transition.slideRightIn", duration: 700, delay:600}} runOnMount={true}>
              <img className="logoImg" src = {reactLogo} alt="React Logo Appears here"/>
            </VelocityTransitionGroup>
            <div className="caption react">React</div>
          </div>
          <div className="flexChildren">
            <VelocityTransitionGroup enter={{animation: "transition.slideRightIn", duration: 700, delay:400}} runOnMount={true}>
              <img className="logoImg" src = {nodeJsLogo} alt="NodeJs Logo Appears here"/>
            </VelocityTransitionGroup>
            <div className="caption">Node.js</div>
          </div>
          <div className="flexChildren">
            <VelocityTransitionGroup enter={{animation: "transition.slideRightIn", duration: 700, delay:200}} runOnMount={true}>
              <img className="logoImg" src = {mongoLogo} alt="MongoDb Logo Appears here"/>
            </VelocityTransitionGroup>
            <div className="caption">MongoDB</div>
          </div>
          <div className="flexChildren">
            <VelocityTransitionGroup enter={{animation: "transition.slideRightIn", duration: 700, delay:0}} runOnMount={true}>
              <img className="logoImg" src = {awsS3Logo} alt="AWS Logo Appears here"/>
            </VelocityTransitionGroup>
            <div className="caption">AWS S3</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
