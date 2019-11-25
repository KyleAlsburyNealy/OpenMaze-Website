import React, { Component } from "react";
import Link from "next/link";
import ItemsCarousel from "react-items-carousel";

// images
import codeJPG from "../public/code.jpg";
import scene from "../public/scene.jpg";
import configuration from "../public/configuration.jpg";
import participant from "../public/RunParticipants.jpg";

class Carousel extends Component {
  state = {
    activeItemIndex: 0,
    items: [
      {
        id: 1,
        title: "Installation and Setup",
        image: codeJPG
      },
      {
        id: 2,
        title: "Create Scenes",
        image: scene
      },
      {
        id: 3,
        title: "Configure Experiment",
        image: configuration
      },
      {
        id: 4,
        title: "Testing and Coding",
        image: participant
      }
    ]
  };

  // for the carousel to shift left and right.
  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    return (
      <div className="w-2/3 m-auto sm:w-1/2 md:w-1/3 lg:w-1/4">
        <ItemsCarousel
          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={this.state.activeItemIndex}
          numberOfCards={1}
          gutter={20}
          leftChevron={
            <button className="focus:outline-none rounded-full px-3 py-1 bg-blue-800 text-white text-center">
              {"<"}
            </button>
          }
          rightChevron={
            <button className="focus:outline-none rounded-full px-3 py-1 bg-blue-800 text-white text-center">
              {">"}
            </button>
          }
          outsideChevron
          chevronWidth={50}
        >
          {this.state.items.map(item => {
            return (
              <Link href="tutorials" key={item.id}>
                <div className="bg-white max-w-sm mx-auto h-auto cursor-pointer">
                  <div className="p-4">
                    <p className="font-thin text-sm">{`Step ${item.id}`}</p>
                    <p className="font-bold">{item.title}</p>
                  </div>
                  <div className="w-full h-48">
                    <img className="w-full h-full" src={item.image} />
                  </div>
                </div>
              </Link>
            );
          })}
        </ItemsCarousel>
      </div>
    );
  }
}

export default Carousel;
