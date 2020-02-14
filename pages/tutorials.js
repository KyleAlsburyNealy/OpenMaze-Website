import Link from "next/link";

import Layout from "../components/layout";
import TutorialSection from "../components/tutorialSection";
import TutorialComponent from "../components/tutorialComponent";
import ReactPlayer from "react-player";

const tutorialsData = [
  {
    id: 1,
    yt: "https://youtu.be/ZvMeEif-_lg",
    title: "Step 1: Download, Install, and Setup",
    description:
      "In this tutorial you'll learn how to configure your experiments with the OpenMaze Configuration file.",
    colour: "tutorial-brown"
  },
  {
    id: 2,
    yt: "https://www.youtube.com/watch?v=ED26ra-hORc",
    title: "Step 2: Create Scenes",
    description:
      "OpenMaze allows you to use any image file as a trial. This allows you to customize instruction screens and cues. In this tutorial you'll learn how easy it is to incorporate image trials into your experiment.",
    colour: "tutorial-blue"
  },
  {
    id: 3,
    yt: "https://www.youtube.com/watch?v=KgI97nbEMb4",
    title: "Step 3: Configure Experiment",
    description:
      "OpenMaze makes it easy to create any number of customized trials. In this tutorial you'll see just how easily you can create new trials or make changes to preexisting trials.",
    colour: "tutorial-red"
  },
  {
    id: 4,
    yt: "https://www.youtube.com/watch?v=rX8tvyR_AYA",
    title: "Step 4: Test Experiment",
    description:
      "Learn how to place goal objects throughout your environments.",
    colour: "tutorial-yellow"
  },
  {
    id: 5,
    yt: "https://www.youtube.com/watch?v=rX8tvyR_AYA",
    title: "Step 5: Build Experiment",
    description:
      "Learn how to place goal objects throughout your environments.",
    colour: "tutorial-cyan"
  }
];

export default function Tutorials() {
  return (
    <>
      <Layout>
        <div className="m-4">
          {tutorialsData.map(item => {
            const { id, yt, title, description, colour } = item;

            return (
              <div
                key={id}
                className={`text-white border-${colour} border-t-8 h-full md:border-t-0 md:border-l-8 md:max-w-3xl lg:max-w-5xl rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}
              >
                <p className="text-xl mt-2 md:text-2xl">{title}</p>
                <p className="my-8">{description}</p>
                <div className="h-full">
                  <ReactPlayer
                    url={yt}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
}
