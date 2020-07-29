import React, { Component, Fragment } from "react";

class TutorialSection extends Component {
  render() {
    return (
      <Fragment>
        <div className="pt-9 mx-2 mb-32 sm:pt-12 md:pt-14 lg:pt-18">
          {this.props.subtitle ? (
            <div className="flex items-center content-center mb-14 md:mb-18">
              <div
                className="flex items-center justify-center rounded-full h-6 w-6 md:h-8 md:w-8 text-white text-xs mr-4"
                style={{ backgroundColor: "#FF4444" }}
              >
                {this.props.number}
              </div>
              <p className="sm:text-lg md:text-xl">{this.props.subtitle}</p>
            </div>
          ) : (
            <div className="pt-9 mx-2 mb-8 sm:mb-10 md:mb-18 lg:mb-28"></div>
          )}
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default TutorialSection;
