import React, { Component } from 'react';
import '../assets/animation.css';
import {VelocityTransitionGroup, velocityHelpers} from 'velocity-react';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
        show: true
    }
  }

  Animations = {
    in: velocityHelpers.registerEffect({
      defaultDuration: 600,
      calls: [
        [{
          width: '100%'
        }, 1, {
          delay: 50,
          easing: 'ease-out',
        }]
      ],
    }),

    out: velocityHelpers.registerEffect({
      defaultDuration: 200,
      calls: [
        [{
          width: 0
        }, 1, {
          delay: 50,
          easing: 'ease-in',
        }]
      ],
    }),
  };

  render(){
    return(
      <div className="home">
        <VelocityTransitionGroup enter={{animation: "slideDown", duration: 700, delay:600}} runOnMount={true}>
          <h1 className="myName">Deokjae Jeon</h1>
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: this.Animations.in, duration: 800, delay:100}} leave={{animation: this.Animations.out}} runOnMount={true}>
          <hr className="middleStroke"/>
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "slideDown", duration: 700, delay:600}} runOnMount={true}>
          <h4 className="shortIntro">Computer Scienctist | Student Dev</h4>
        </VelocityTransitionGroup>
      </div>
    );
  }
}

export default Home;
