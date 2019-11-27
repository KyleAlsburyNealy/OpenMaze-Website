import React, { Component } from "react";

import InfoCard from "./InfoCard/info-card-desktop";

export default class tutorialComponent extends Component {
  state = {
    tutorials: [
      {
        id: 1,
        yt: "https://youtu.be/ZvMeEif-_lg",
        title: "Tutorial 1: The Experiment Configuration File",
        description:
          "In this tutorial you'll learn how to configure your experiments with the OpenMaze Configuration file."
      },
      {
        id: 2,
        yt: "https://www.youtube.com/watch?v=ED26ra-hORc",
        title: "Tutorial 2: Image Trials",
        description:
          "OpenMaze allows you to use any image file as a trial. This allows you to customize instruction screens and cues. In this tutorial you'll learn how easy it is to incorporate image trials into your experiment."
      },
      {
        id: 3,
        yt: "https://www.youtube.com/watch?v=KgI97nbEMb4",
        title: "Tutorial 3: 3D Trial Design",
        description:
          "OpenMaze makes it easy to create any number of customized trials. In this tutorial you'll see just how easily you can create new trials or make changes to preexisting trials."
      },
      {
        id: 4,
        yt: "https://www.youtube.com/watch?v=rX8tvyR_AYA",
        title: "Tutorial 4: Goal Objects",
        description:
          "Learn how to place goal objects throughout your environments."
      }
    ]
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center">
        {this.state.tutorials.map(tutorial => (
          <div key={tutorial.id} className="mb-14 w-full">
            <InfoCard
              yt={tutorial.yt}
              title={tutorial.title}
              description={tutorial.description}
            />
          </div>
        ))}
      </div>
    );
  }
}
