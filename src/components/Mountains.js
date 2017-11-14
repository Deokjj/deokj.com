import React, { Component } from 'react';
import mountainsImg from '../assets/mountains.png';

class Mountains extends Component {
    constructor(props){
      super(props);
      this.state = {style: {transform: `translate(10vw,20vh)`}};
      this.viewMove = this.viewMove.bind(this);
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.cx = 10;
      this.cy = 20;
    }

    componentDidMount(){

    }

    viewMove(e){
      let x = 10 - (e.pageX /this.width - 0.5)*8;
      let y = 20 - (e.pageY /this.height - 0.5)*10;
      // let keyframesStyle= `
      //   @-webkit-keyframes mountainsMove {
      //     0%   { transform: translate(`+`${this.cx}vw,${this.cy}vh`+`)}
      //     100% { transform:` + `translate(${x}vw,${y}vh)` + `}
      //   }`;
      // injectStyle(keyframesStyle);
      // this.setState(prevState => (
      //   { style: { transform: `translate(${this.cx}vw,${this.cy}vh)`, WebkitAnimation : '' } }
      // ));
      // setTimeout(()=>{
      //   this.setState(prevState => (
      //     { style: { WebkitAnimation: 'mountainsMove 10s cubic-bezier(.06,.22,0,.55) 1 forwards' } }
      //   ));
      //   this.cx = x;
      //   this.cy = y;
      //   }
      // ,20);
      this.setState(prevState => (
        { style: {transform: `translate(${x}vw,${y}vh)`}}
      ));
    }

    render() {
      return (
        <img id='mountains' style={this.state.style} src = {mountainsImg } alt=""/>
      );
    }
}

export default Mountains;
