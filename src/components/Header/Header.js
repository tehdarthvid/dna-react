import React, { Component } from "react";

//import PropTypes from "prop-types";
//import ReactDOM from 'react-dom'

import { connect } from "react-redux";

// React component
class Header extends Component {
  render() {
    //const { activeCard } = this.props;
    return <div>{props.activeCard}</div>;
  }
}

/*
// NOT REQUIRED
Header.propTypes = {
  valuey: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  activeCard: PropTypes.bool.isRequired
};
*/

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    activeCard: state.activeCarder.activeCard
  };
}

// Connected Component
export default connect(mapStateToProps)(Header);
