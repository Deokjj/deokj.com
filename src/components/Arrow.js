import React, { Component } from 'react';
import './Arrow.css';
import $ from 'jquery';


class Arrow extends Component {
  constructor(props){
    super(props);
    this.nextprevPage = this.nextprevPage.bind(this);
  }

  nextprevPage = (str) =>{
    console.log(this.props);
    if (typeof this.props.nextprevPage === 'function') {
        this.props.nextprevPage(str);
    }
  };

  leftClick = () => {
    $('.c-arrow--left').toggleClass('is-triggered');
    setTimeout(()=>{
      $('.is-triggered').toggleClass('is-triggered');
      if(this.props.pageIndex<1) $('.c-arrow--left').addClass('is-inactive');
    },550);
    $('.c-arrow--right').removeClass('is-inactive');
  }

  rightClick = () => {
    $('.c-arrow--right').addClass('is-triggered');
    setTimeout(()=>{
      $('.is-triggered').removeClass('is-triggered');
      if(this.props.pageIndex > 2) $('.c-arrow--right').addClass('is-inactive');
    },550);
    $('.c-arrow--left').removeClass('is-inactive');
  }

  renderLeft = ()=>{
    // if(this.props.pageIndex > 0)
      return (
        <a onClick={()=>{this.nextprevPage('prev'); this.leftClick()}}className="c-arrow c-arrow--left u-absolute js-arrow-left is-inactive">
        <span className="c-arrow__mode c-arrow__mode--default u-absolute u-block u-overflow-h">
        <span className="c-arrow__circle u-absolute u-block u-pos-tl u-fit u-overflow-h">
        </span>
        <span className="c-arrow__circle-trigger u-absolute u-block u-pos-tl u-fit">
        </span>
        </span>
        <span className="c-arrow__inner u-block u-absolute u-pos-tl u-fit">
        <span className="c-arrow__icon u-absolute u-block u-overflow-h">
        <span className="c-arrow__icon-inner u-absolute u-block u-pos-tl u-fit">
        <span className="c-arrow__bar u-absolute u-inline-block">
        </span>
        <span className="arrow-pointer">
        </span>
        </span>
        </span>
        </span>
        </a>
      );
  };

  renderRight = ()=>{
    // if(this.props.pageIndex < 3)
      return (
        <a onClick={()=>{this.nextprevPage('next'); this.rightClick()}}className="c-arrow c-arrow--right u-absolute js-arrow-right">
        <span className="c-arrow__mode c-arrow__mode--default u-absolute u-block u-overflow-h">
        <span className="c-arrow__circle u-absolute u-block u-pos-tl u-fit u-overflow-h">
        </span>
        <span className="c-arrow__circle-trigger u-absolute u-block u-pos-tl u-fit">
        </span>
        </span>
        <span className="c-arrow__inner u-block u-absolute u-pos-tl u-fit">
        <span className="c-arrow__icon u-absolute u-block u-overflow-h">
        <span className="c-arrow__icon-inner u-absolute u-block u-pos-tl u-fit">
        <span className="c-arrow__bar u-absolute u-inline-block">
        </span>
        <span className="arrow-pointer">
        </span>
        </span>
        </span>
        </span>
        </a>
      );
  };


  render(){
    return(
      <span>
        {this.renderLeft()}
        {this.renderRight()}
      </span>
    );
  }
}

export default Arrow;
