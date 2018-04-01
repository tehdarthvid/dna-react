/* @darthvid DNA (React) Card.js */

//import React, { Component } from 'react';
import React from "react";
import "./Card.css";

import { connect } from "react-redux";
import { setActiveCard } from "../../actions/cardActions";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseX: 0,
      mouseY: 0,
      fnMouseLeaveDelay: null
    };
  }

  onMouseMove = evt => {
    //console.log(this.props.title + " move: " + evt.clientX + ", " + evt.clientY);
    this.setState({ mouseX: evt.clientX, mouseY: evt.clientY });
  };

  onMouseEnter() {}

  onMouseLeave = () => {
    let _this = this;

    this.setState({
      fnMouseLeaveDelay: setTimeout(function() {
        _this.setState({ mouseX: 0, mouseY: 0 });
      }, 1000)
    });
    //console.log(`${this.props.title} mouseLeave`);
  };

  getCardStyle() {
    let rX = 0;
    let rY = 0;

    if (undefined !== this.refs.card) {
      let rect = this.refs.card.getBoundingClientRect();

      if (0 !== this.state.mouseX) {
        let cardMidX = rect.width / 2;
        rX = (this.state.mouseX - rect.left - cardMidX) / cardMidX * 30;
      }
      if (0 !== this.state.mouseY) {
        let cardMidY = rect.height / 2;
        rY = (this.state.mouseY - rect.top - cardMidY) / cardMidY * -30;
      }
    }

    return {
      transform: "rotateY(" + rX + "deg) rotateX(" + rY + "deg)"
    };
  }

  getCardBgStyle() {
    let tX = 0;
    let tY = 0;

    if (undefined !== this.refs.card) {
      let rect = this.refs.card.getBoundingClientRect();

      if (0 !== this.state.mouseX) {
        let cardMidX = rect.width / 2;
        tX = (this.state.mouseX - rect.left - cardMidX) / cardMidX * -40;
      }
      if (0 !== this.state.mouseY) {
        let cardMidY = rect.height / 2;
        tY = (this.state.mouseY - rect.top - cardMidY) / cardMidY * -40;
      }
    }

    return {
      transform: "translate(" + tX + "px, " + tY + "px)"
      //backgroundImage: 'url(' + this.props.bgImage + ')',
    };
  }

  render() {
    return (
      <div
        className="card-wrap"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onMouseMove={this.onMouseMove}
        onDoubleClick={this.onDoubleClick}
      >
        <div
          className="card"
          ref="card"
          style={this.getCardStyle()}
          onClick={this.onClick}
        >
          <div className="card-bg" style={this.getCardBgStyle()}>
            <img
              className="card-img"
              src={this.props.bgImage}
              alt={this.props.title}
            />
          </div>
          <div className="card-info">
            <h1>{this.props.title}</h1>
            <p>{this.props.date}</p>
          </div>
        </div>
      </div>
    );
  }

  onClick = event => {
    console.log(
      `${this.props.title} click: ${event.clientX}, ${event.clientY}`
    );
    // setActiveCard added to props via mapDispatchToProps + connect.
    //this.props.setActiveCard(this.props);
  };

  onDoubleClick = event => {
    console.log(
      `${this.props.title} doubleclick: ${event.clientX}, ${event.clientY}`
    );
    // setActiveCard added to props via mapDispatchToProps + connect.
    this.props.setActiveCard(this.props);
  };
}

// Map Redux actions to component props via connect.
const mapDispatchToProps = dispatch => {
  return {
    // setActiveCard key + ()=> will be added to Component props via connect.
    // ()=> calls dispatch({action object}).
    setActiveCard: card => {
      console.log(`dispatch ${card.title}`);
      dispatch(setActiveCard(card));
    }
  };
};

// Connect React Component to Redux, then export the component.
// Adds function in mapDispatchToProps to Component.props.
// After connection, trigger dispatch by calling props.function().
export default connect(null, mapDispatchToProps)(Card);
