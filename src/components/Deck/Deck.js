/* @darthvid DNA (React) Deck.js */

//import React, { Component } from 'react';
import React from "react";
//import ReactDOM from 'react-dom';

//import './Deck.css';
import Card from "../Card/Card";

class Deck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: this.props.cardList.map(function(card) {
        return (
          <Card title={card.title} bgImage={card.bgImage} date={card.date} />
        );
      })
    };
  }

  render() {
    return <div id="container">{this.state.cards}</div>;
  }
}

export default Deck;
