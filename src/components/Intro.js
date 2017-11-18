import React, { Component } from 'react';
import angularLogo from '../assets/angular.svg';
import awsS3Logo from '../assets/aws-s3.svg';
import mongoLogo from '../assets/mongo.svg';
import nodeJsLogo from '../assets/nodejs.svg';
import reactLogo from '../assets/react.svg';

class Intro extends Component {

  render(){
    return(
      <div className="intro">
        <h2 className>
          But Deokjae.. <span className='highlight'>WHO?</span>
        </h2>
        <h5 className="introContents">
          Hi! I am a <span className='highlight'>Computer Science student</span> at The University of Miami. 🙌<br/>
          My interests are <span className='highlight'>Web Development</span> and <span className='highlight'>Machine learning.</span><br/>
          Having a passion for <span className='highlight'>Social Justice,</span><br/> I would love to develop technology to create a more <span className='highlight'>inclusive</span> society!
        </h5>
        <h4 className="techIntro">
          What I have worked with:
        </h4>
        <div className="flex marginBox">
          <div className="flexChildren">
            <img className="logoImg" src = {angularLogo} alt="Angular Logo Appears here"/>
            <div className="caption">Angular 4</div>
          </div>
          <div className="flexChildren">
            <img className="logoImg" src = {reactLogo} alt="Angular Logo Appears here"/>
            <div className="caption react">React</div>
          </div>
          <div className="flexChildren">
            <img className="logoImg" src = {nodeJsLogo} alt="Angular Logo Appears here"/>
            <div className="caption">Node.js</div>
          </div>
          <div className="flexChildren">
            <img className="logoImg" src = {mongoLogo} alt="Angular Logo Appears here"/>
            <div className="caption">MongoDB</div>
          </div>
          <div className="flexChildren">
            <img className="logoImg" src = {awsS3Logo} alt="Angular Logo Appears here"/>
            <div className="caption">AWS S3</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
