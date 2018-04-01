import React, { Component } from "react";

class AtomicImage extends Component {
  constructor(props) {
    super(props);
    this.state = { dimensions: {} };
    this.onImgLoad = this.onImgLoad.bind(this);
  }
  onImgLoad({ target: img }) {
    this.setState({
      dimensions: {
        height: img.offsetHeight,
        width: img.offsetWidth
      }
    });
    if ("function" === typeof this.props.cbImgLoad) {
      this.props.cbImgLoad({
        width: img.offsetWidth,
        height: img.offsetHeight
      });
    }
  }
  render() {
    const { src } = this.props;
    const { width, height } = this.state.dimensions;

    return (
      <img
        max-width="100%"
        max-height="100%"
        onLoad={this.onImgLoad}
        src={src}
      />
    );
  }
}

export default AtomicImage;
