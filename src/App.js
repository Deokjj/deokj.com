import React, { Component } from 'react';

import Stars from './components/Stars';
import Mountains from './components/Mountains';
import Navigation from './components/Navigation';
import Arrow from './components/Arrow';
import Home from './components/Home';

import './App.css';
import mistImg from './assets/mist.jpg';


const mist = (
  <img id='mist' src={mistImg} alt=''/>
)

function ContentPicker(props) {
  if(props.pageIndex === 0){
    return (<Home/>);
  }
  else{
    return (<p>Sorry, Still Working on it.<br/>pageIndex: {props.pageIndex}</p>);
  }
}

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
    return (
      <div
      onMouseMove={(e)=>{this.refs.mountains.viewMove(e);
                         this.refs.stars.viewMove(e);}}>
        <Stars ref="stars"/>
        <Stars/>
        <Mountains ref="mountains"/>
        {mist}
        <Navigation pageChange={this.pageChange}/>
        <Arrow nextprevPage={this.nextprevPage} pageIndex={this.state.pageIndex}/>

        <div id="contents">
          <ContentPicker pageIndex={this.state.pageIndex}/>
        </div>
      </div>
    );
  }

}

export default App;
