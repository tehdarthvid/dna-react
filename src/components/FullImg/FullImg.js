import "./FullImg.css";

import React, { Component } from "react";
import { connect } from "react-redux";

import { setActiveCard } from "../../actions/cardActions";
//import AtomicImage from "../AtomicImage/AtomicImage";

const modalRatio = 0.8;

// React component
class FullImg extends Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      width: null,
      height: null
    };
  }
  */

  onClick = event => {
    console.log(
      `${this.props.activeCard.title} FullImg clicked: ${event.clientX}, ${
        event.clientY
      }`
    );
    // Reset store activeCarder.activeCard to {}
    this.props.setActiveCard({});
  };

  onKeyDown = event => {
    if (event.keyCode === 27) {
      this.props.setActiveCard({});
    }
  };
  componentDidMount = () => {
    document.addEventListener("keydown", this.onKeyDown, false);
  };
  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.onKeyDown, false);
  };

  onImgLoad = ({ target: img }) => {
    console.log(
      `${this.props.activeCard.title} cbImgLoad: ${img.width}, ${img.height}`
    );
    if ("undefined" !== typeof window) {
      //this.setState({ width: img.width, height: img.height });
    }
  };

  getFittedImgWidth = () => {
    let res =
      window.innerWidth < window.innerHeight
        ? `${Math.floor(window.innerWidth * modalRatio)}px`
        : null;

    return res;
    //return newWidth ? `${newWidth}px` : null;
  };

  getFittedImgHeight = () => {
    let res =
      window.innerHeight < window.innerWidth
        ? `${Math.floor(window.innerHeight * modalRatio)}px`
        : null;

    return res;
    //return newHeight ? `${newHeight}px` : null;
  };

  render() {
    let jsx = null;
    if (this.props.activeCard.title) {
      jsx = (
        <div
          id="modalZoom"
          className="modal"
          onClick={this.onClick}
          style={{ display: this.props.activeCard.title ? "block" : "none" }}
        >
          <span id="cbtnZoom" className="closeX">
            &times;
          </span>
          <img
            className="modal-content"
            id="imgZoom"
            onLoad={this.onImgLoad}
            src={this.props.activeCard.bgImage}
            alt={this.props.activeCard.title}
            width={this.getFittedImgWidth()}
            height={this.getFittedImgHeight()}
          />
          <div id="txtModal">{this.props.activeCard.title}</div>
        </div>
      );
    }
    return jsx;
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    activeCard: state.activeCarder.activeCard
  };
}

// Map Redux actions to component props via connect.
const mapDispatchToProps = dispatch => {
  return {
    // setActiveCard key + ()=> will be added to Component props via connect.
    // ()=> calls dispatch({action object}).
    setActiveCard: card => {
      dispatch(setActiveCard(card));
    }
  };
};

// Connect React Component to Redux, then export the component.
//
// Connects desired Component state to Redux store via Reducer.
// State is actually defined in Reducer. Store just links them.
// After connection, state is indirectly read via props.
// Changes to state in store will trigger render().
//
// Adds function in mapDispatchToProps to Component.props.
// After connection, trigger dispatch by calling props.function().
export default connect(mapStateToProps, mapDispatchToProps)(FullImg);
