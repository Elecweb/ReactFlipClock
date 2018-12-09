import React, { Component, createRef } from "react";

class FlipClock extends Component {
  constructor() {
    super();
    this.flipclockRef = createRef();
  }

  componentDidMount() {
    const flipclockRef = this.flipclockRef.current;
    const element$ = $(flipclockRef);
    element$.FlipClock(this.props.countDownTime, {
      countdown: true,
      ...this.props
    });
  }

  render() {
    return <div ref={this.flipclockRef} />;
  }
}

export default FlipClock;
