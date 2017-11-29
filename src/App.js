import React, { Component } from 'react';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

import {VelocityTransitionGroup} from 'velocity-react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Stars from './components/Stars';
import Mountains from './components/Mountains';
import Navigation from './components/Navigation';
import Arrow from './components/Arrow';
import Home from './components/Home';
import Intro from './components/Intro';
import Works from './components/Works';
import Contact from './components/Contact';
import './App.css';
import mistImg from './assets/mist.jpg';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {pageIndex:0}
    this.pageChange = this.pageChange.bind(this);
    this.nextprevPage = this.nextprevPage.bind(this);
  }

  pageChange(index) {
    this.setState(prevState => ({
      pageIndex: index
    }));
  }

  nextprevPage(str) {
    if(str === "next" && this.state.pageIndex < 3){
      this.setState(prevState => ({
        pageIndex: prevState.pageIndex + 1
      }));
    }
    else if(str === "prev" && this.state.pageIndex > 0){
      this.setState(prevState => ({
        pageIndex: prevState.pageIndex - 1
      }));
    }
  }

  render() {

    const mist = (
      <img id='mist' src={mistImg} alt=''/>
    )

    const ContentPicker = (props) => {
      if(props.pageIndex === 0){
        return (<Home/>);
      }
      else if (props.pageIndex === 1) {
        return(<Intro/>);
      }
      else if (props.pageIndex === 2) {
        return(
          <MuiThemeProvider>
            <Works/>
          </MuiThemeProvider>
        );
      }
      else if (props.pageIndex === 3) {
        return(
          <MuiThemeProvider>
            <Contact/>
          </MuiThemeProvider>
        );
      }
      else{
        return (<p>Sorry, Still Working on it.<br/>pageIndex: {props.pageIndex}</p>);
      }
    }

    return (
      <div
      onMouseMove={(e)=>{this.refs.mountains.animation(e);
                         this.refs.stars.animation(e);}}>
        <Stars ref="stars"/>
        <Stars/>
        <Mountains ref="mountains"/>
        {mist}
        <Navigation pageChange={this.pageChange}/>
        <VelocityTransitionGroup enter={{animation: 'transition.expandIn', duration: 600}} leave={{animation: 'transition.slideLeftOut', duration: 800}}>
          {(this.state.pageIndex>0) ? <Arrow nextprevPage={this.nextprevPage} pageIndex={this.state.pageIndex} direction='left'/> : undefined}
        </VelocityTransitionGroup>
        <VelocityTransitionGroup>
          {(this.state.pageIndex<3) ? <Arrow nextprevPage={this.nextprevPage} pageIndex={this.state.pageIndex} direction='right'/> : undefined}
        </VelocityTransitionGroup>

        <div id="contents">
            <ContentPicker pageIndex={this.state.pageIndex}/>
        </div>
      </div>
    );
  }

}

export default App;
