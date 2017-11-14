import React, { Component } from 'react';

import Stars from './components/Stars';
import Mountains from './components/Mountains';
import Navigation from './components/Navigation';
import Home from './components/Home';
import './App.css';

const mist = (
  <img id='mist' src="http://www.refletcommunication.com/assets/images/mirror-slideshow/1440x810/insight-default-background.jpg" alt=''/>
)

function ContentPicker(props) {
  if(props.pageIndex === 0){
    return (<Home/>);
  }
  else{
    return (<p>Sorry, Still Working on it.</p>);
  }
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {pageIndex:0}
    this.pageChange = this.pageChange.bind(this);
  }

  pageChange(index) {
    this.setState(prevState => ({
      pageIndex: index
    }));
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

        <div id="contents">
          <ContentPicker pageIndex={this.state.pageIndex}/>
        </div>
      </div>
    );
  }

}

export default App;
