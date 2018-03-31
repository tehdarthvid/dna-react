//import React, { Component } from 'react';
import React from "react";
import { connect } from "react-redux";

import Deck from "../components/Deck/Deck";

class ActiveDeckContainer extends React.Component {
  render() {
    return (
      <div>
        <Deck cardList={this.props.cardList} />
      </div>
    );
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    cardList: state.activeDeck.deck
  };
}

export default connect(mapStateToProps)(ActiveDeckContainer);
