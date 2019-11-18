import React, { Component, Fragment } from "react";

class TutorialSection extends Component {
  render() {
    console.log(this.props.title);
    return (
      <Fragment>
        <p
          className="absolute z-neg font-bold text-6xl mt-1 sm:text-7xl md:text-8xl lg:text-10xl"
          style={{ color: "#E8EFF9" }}
        >
          {this.props.header}
        </p>
        <div className="step-1 pt-9 mx-2 mb-32 sm:pt-12 md:pt-14 lg:pt-18">
          {this.props.title ? (
            <div className="flex items-center content-center mb-14 md:mb-24 lg:mb-32">
              <div
                className="flex items-center justify-center rounded-full h-6 w-6 md:h-8 md:w-8 text-white text-xs mr-4"
                style={{ backgroundColor: "#FF4444" }}
              >
                {this.props.number}
              </div>
              <p className="sm:text-lg md:text-xl">{this.props.title}</p>
            </div>
          ) : null}
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default TutorialSection;
