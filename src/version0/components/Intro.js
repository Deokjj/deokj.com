import React, { Component } from 'react';
import { logos } from '../assets/image';
import {VelocityTransitionGroup} from 'velocity-react';

const {angularLogo, awsS3Logo, mongoLogo, nodeJsLogo, reactLogo, reduxLogo} = logos;


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
            I do contracts! I worked with <span className='highlight'>New York Hall of Science</span> and others.<br/>
            I also worked as a <span className='highlight'>Frontend developer</span> at <span className='highlight'>Protobrand</span>.<br/>
            I am currently looking for fulltime opportunities!
          </h5>
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "transition.slideRightBigIn", duration: 700, delay:0}} runOnMount={true}>
          <h4 className="techIntro">
            <span>What I have worked with:</span>
          </h4>
        </VelocityTransitionGroup>
        <div className="flex marginBox logoFlex">
          <VelocityTransitionGroup className="flexChildren" enter={{animation: "transition.slideRightIn", duration: 700, delay:1000}} runOnMount={true}>
            <img className="logoImg" src = {angularLogo} alt="Angular Logo Appears here"/>
            <div className="caption">Angular 4</div>
          </VelocityTransitionGroup>
          <VelocityTransitionGroup className="flexChildren" enter={{animation: "transition.slideRightIn", duration: 700, delay:800}} runOnMount={true}>
            <img className="logoImg" src = {reactLogo} alt="React Logo Appears here"/>
            <div className="caption react">React</div>
          </VelocityTransitionGroup>
          <VelocityTransitionGroup className="flexChildren" enter={{animation: "transition.slideRightIn", duration: 700, delay:600}} runOnMount={true}>
            <img className="logoImg" src = {reduxLogo} alt="Redux Logo Appears here"/>
            <div className="caption react">Redux</div>
          </VelocityTransitionGroup>
          <VelocityTransitionGroup className="flexChildren" enter={{animation: "transition.slideRightIn", duration: 700, delay:400}} runOnMount={true}>
            <img className="logoImg" src = {nodeJsLogo} alt="NodeJs Logo Appears here"/>
            <div className="caption">Node.js</div>
          </VelocityTransitionGroup>
          <VelocityTransitionGroup className="flexChildren" enter={{animation: "transition.slideRightIn", duration: 700, delay:200}} runOnMount={true}>
            <img className="logoImg" src = {mongoLogo} alt="MongoDb Logo Appears here"/>
            <div className="caption">MongoDB</div>
          </VelocityTransitionGroup>
          <VelocityTransitionGroup className="flexChildren" enter={{animation: "transition.slideRightIn", duration: 700, delay:0}} runOnMount={true}>
            <img className="logoImg" src = {awsS3Logo} alt="AWS Logo Appears here"/>
            <span className="buffer" />
            <div className="caption">AWS S3</div>
          </VelocityTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Intro;
