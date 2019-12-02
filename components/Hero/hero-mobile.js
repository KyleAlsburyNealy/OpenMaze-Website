// mobile version of hero
import React, { Component } from "react";
import Link from "next/link";
import ItemsCarousel from "react-items-carousel";

// assets
import Hero1 from "../../public/computer-keyboard-connection-contemporary-1714208.jpg";
import Hero2 from "../../public/chris-liverani-dBI_My696Rk-unsplash.jpg";
import Hero3 from "../../public/RunParticipants.jpg";
import PlaySVG from "../../public/play_circle_outline-24px.svg";

export default class HeroMobile extends Component {
  state = {
    activeItemIndex: 0
  };

  // for the carousel to shift left and right.
  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    return (
      <ItemsCarousel
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={this.state.activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={
          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
                fill="white"
              />
            </svg>
          </button>
        }
        rightChevron={
          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
                fill="white"
              />
            </svg>
          </button>
        }
        infiniteLoop
        outsideChevron={false}
        chevronWidth={50}
      >
        <Link href="tutorials">
          <div className="relative h-full">
            <div className="p-2 absolute text-white text-xs h-full w-full">
              <div className="flex content-between flex-wrap h-full">
                <div className="">
                  <p>&#9679; Introduction</p>
                </div>
                <div className="flex justify-between py-2 w-11/12">
                  <div className="w-auto">
                    <p className="text-lg sm:text-2xl">
                      Learn OpenMaze in a Day!
                    </p>
                    <p>Tutorials</p>
                    <p> &nbsp; </p>
                  </div>
                  <div className="w-auto">
                    <img className="p-2 w-12" src={PlaySVG} />
                  </div>
                </div>
              </div>
            </div>
            <img className="" src={Hero1} />
          </div>
        </Link>
        <Link href="tutorials">
          <div className="relative h-full">
            <div className="p-2 absolute text-white text-xs h-full w-full">
              <div className="flex content-between flex-wrap h-full">
                <div className="">
                  <p>&#9650; Documentation</p>
                </div>
                <div className="flex justify-between py-2 w-11/12">
                  <div className="w-auto">
                    <p className="text-lg">Configure Your Maze</p>
                    <p>Documentation</p>
                    <p> &nbsp; </p>
                  </div>
                  <div className="w-auto">
                    <img className="p-2 w-12" src={PlaySVG} />
                  </div>
                </div>
              </div>
            </div>
            <img className="" src={Hero3} />
          </div>
        </Link>
        <Link href="tutorials">
          <div className="relative h-full">
            <div className="p-2 absolute text-white text-xs h-full w-full">
              <div className="flex content-between flex-wrap h-full">
                <div className="">
                  <p>&#9650; Documentation</p>
                </div>
                <div className="flex justify-between py-2 w-11/12">
                  <div className="w-auto">
                    <p className="text-lg">Data Collection</p>
                    <p>Documentation</p>
                    <p> &nbsp; </p>
                  </div>
                  <div className="w-auto">
                    <img className="p-2 w-12" src={PlaySVG} />
                  </div>
                </div>
              </div>
            </div>
            <img className="" src={Hero2} />
          </div>
        </Link>
      </ItemsCarousel>
    );
  }
}
