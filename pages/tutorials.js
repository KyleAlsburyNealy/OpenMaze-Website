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


          <div

            className={`text-white border-tutorial-brown border-t-8 h-full md:border-t-0 md:border-l-8 md:max-w-3xl lg:max-w-5xl rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}
          >
            <p className="text-xl mt-2 md:text-2xl">Step 1: Download, Install, and Setup</p>
            <br />
            <p className="text-lg">Downloading, Installing and Setting Up OpenMaze</p>
            <div className="h-full">
              <ReactPlayer
                url={"https://youtu.be/ZvMeEif-_lg"}
                width="100%"
                style={{ borderRadius: "0.5rem" }}
              />
            </div>

            <br />
            <p><b>Summary</b></p>
            <br />
            <p>There are three pieces of software that you’ll need for coding experiments using OpenMaze. <br /><br />
              (1) Unity Game Engine, <br />
              (2) OpenMaze toolbox, <br />
              (3) a text editor that supports JSON files. <br /><br />
              All are free to download and install.
</p> <br />
            <p>
              What you’ll learn:</p>
            <ol>
              <li>1. How to download all the required software</li>
              <li>2. How to set up the software</li>
              <li>3. How to setup OpenMaze in the Unity interface</li>
            </ol>

          </div>


          <div

            className={`text-white border-tutorial-blue border-t-8 h-full md:border-t-0 md:border-l-8 md:max-w-3xl lg:max-w-5xl rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}
          >
            <p className="text-xl mt-2 md:text-2xl">Step 2: Create Environments</p>
            <br />
            <p className="text-lg">Create Environments - Tutorial 1: Basic Tools</p>

            <div className="h-full">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=rC0S63hHopo"}
                width="100%"
                style={{ borderRadius: "0.5rem" }}
              />
            </div>
            <p className="my-8">
              Learn how to create custom 3D environments using the Unity editor and use them in your OpenMaze experiment!
              <br /> <br />
              What you’ll learn: <br />
              1. How to create OpenMaze compatible 3D Environments <br />
              2. How to use the Unity Terrain Building Tools <br />
              3. How to download environment materials from the Unity Asset Store <br />
              4. How to add environments to your experiment Build <br />
              5. How to create an experiment that uses multiple Unity Environments.  <br />

            </p>
            <br />
            <br />
            <p className="text-lg">Create Environments - Tutorial 2: Tutorial Environments
            </p>

            <div className="h-full">
              <ReactPlayer
                url={"https://youtu.be/ZvMeEif-_lg"}
                width="100%"
                style={{ borderRadius: "0.5rem" }}
              />
            </div>
            <p className="my-8">
              In this tutorial we’ll create two simple environments that experimenters will be used for the remainder of the tutorials. Note: experimenters can use the environments they build in the previous tutorial: Create Environments - Tutorial 1: Basic Tools.

              <br /> <br />
              What you’ll learn: <br />
              1. Quickly build two environments using the Unity Terrain Tool<br />
              2. Add and remove environments from the experiment build<br />
              3. Create new folders within your project to save supplementary materials<br />



            </p>
          </div>


          <div

            className={`text-white border-tutorial-red border-t-8 h-full md:border-t-0 md:border-l-8 md:max-w-3xl lg:max-w-5xl rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}
          >
            <p className="text-xl mt-2 md:text-2xl">Step 3: Configure Experiment
</p>
            <br />
            <p className="text-lg">Experiment Configuration - Tutorial 1: Blocks
</p>

            <div className="h-full">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=Nqj0VUgi4gE&t=281s"}
                width="100%"
                style={{ borderRadius: "0.5rem" }}
              />
            </div>
            <p className="my-8">
              Blocks control the flow of your experiment task by grouping and presenting trials in a variety of ways.
              <br /> <br />
              What you’ll learn: <br />
              1. How to create an experiment <b><i>Block</i></b> <br />
              2. How to present <b><i>Trials</i></b> in serial order <br />
              3. How to present <b><i>Trials</i></b> in Random order (with or without Replacement) <br />
              4. How to create an experiment by defining the order in which <b><i>Blocks</i></b> are called <br />

            </p>
            <br />
            <br />
            <p className="text-lg">Experiment Configuration - Tutorial 2: Instruction Trials
            </p>

            <div className="h-full">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=64lVb1U0KIg"}
                width="100%"
                style={{ borderRadius: "0.5rem" }}
              />
            </div>
            <p className="my-8">
              Learn how to create custom instruction and cue screens for your experiment and present them to your participant in a variety of ways.

              <br /> <br />
              What you’ll learn: <br />
              1. How to create an instruction trial in the OpenMaze Configuration file <br />
              2. How to create instruction screens using PowerPoint <br />
              3. How to save instruction screens in the appropriate OpenMaze folder <br />
              4. How to define presentation duration <br />
              5. How to define use input to end Instruction Trials <br />
            </p>
            <br />
            <br />
            <p className="text-lg">Experiment Configuration - Tutorial 3: 3D Trial Basics
            </p>

            <div className="h-full">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=CnlVgKkj3C4"}
                width="100%"
                style={{ borderRadius: "0.5rem" }}
              />
            </div>
            <p className="my-8">
              Learn the basics of creating 3D trials within the OpenMaze Configuration file.

              <br /> <br />
              What you’ll learn: <br />
              1. Use different Unity environments on a trial-by-trial Basis <br />
              2. Display text to a participant while they navigate an environment <br />
              3. Define the participant starting position within the environment <br />

            </p>

            <br />
            <br />
            <p className="text-lg">Experiment Configuration - Tutorial 4: 3D Trial Objects
            </p>

            <div className="h-full">
              <ReactPlayer
                url={"https://youtu.be/sSOWmIR7dWA"}
                width="100%"
                style={{ borderRadius: "0.5rem" }}
              />
            </div>
            <p className="my-8">
              In this tutorial, you'll learn how to create Trial contingencies and manipulate environment cues using Goal and Landmark objects

              <br /> <br />
              What you’ll learn: <br />
              1. How to add Visible Collision activated Goal objects to an environment<br />
              2. How to Add Invisible Collision activated Goal objects to an environment<br />
              3. How to Add Landmarks to your Environment. <br />
              4. How to set collision activation quotas to initiate the end of a Trial<br />
              5. How to Add Visible Goals that do not respond to collision<br />


            </p>
            <br />
            <br />
            <p className="text-lg">Experiment Configuration - Tutorial 5: Goal Objects
            </p>

            <div className="h-full">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=20UysrQwdgU&feature=youtu.be"}
                width="100%"
                style={{ borderRadius: "0.5rem" }}
              />
            </div>
            <p className="my-8">
              Learn how to create Goal objects using any 3D object or 2D image.
              <br /> <br />
              What you’ll learn: <br />
              1. How to define Goal Objects in the configuration file <br />
              2. How to manipulate Goal object characteristics <br />
              3. How to place Goal objects within your 3D environment on a trial-by-trial basis <br />
              4. How to import 3D objects and use them as Goal Objects <br />
              5. How to import 2D images and use them as Goal Objects <br />
              6. How to import sound files and assign them to Goal Objects <br />
            </p>

            <br />
            <br />
            <p className="text-lg">Experiment Configuration - Tutorial 7: Landmark Objects
            </p>

            <div className="h-full">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=20UysrQwdgU&feature=youtu.be"}
                width="100%"
                style={{ borderRadius: "0.5rem" }}
              />
            </div>
            <p className="my-8">
              In this tutorial we demonstrate how Landmark objects can be used to manipulate key environment features.

            <br /> <br />
              NOTE: This tutorial will not detail how Landmarks are defined in configuration files. Landmarks are defined using the same parameters as Goal objects (minus sound). For an in depth explanation of Landmark parameters please refer to the <a href="https://www.youtube.com/watch?v=CnlVgKkj3C4">Goal Object Tutorial</a>.

            </p>

            <br />
            <br />
            <p className="text-lg">Experiment Configuration - Tutorial 8: Enclosures
            </p>

            <div className="h-full">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=DTH-Bc1m_wc&feature=youtu.be"}
                width="100%"
                style={{ borderRadius: "0.5rem" }}
              />
            </div>
            <p className="my-8">
              Enclosures restrict participant movement to a prescribed area of the 3D environment and can be used to create global-local environment pairings.

              <br /> <br />
              What you’ll learn: <br />
              1. How to call enclosures on a trial-by-trial basis <br />
              2. How to customize enclosures <br />
              3. How to use enclosures to manipulate global-local environment cues <br />
              4. how to create invisible enclosures  <br />

            </p>
          </div>


          <div

            className={`text-white border-tutorial-yellow border-t-8 h-full md:border-t-0 md:border-l-8 md:max-w-3xl lg:max-w-5xl rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}
          >
            <p className="text-xl mt-2 md:text-2xl">Step 4: Test Experiment & Output Data
</p>
            <br />
            <p className="text-lg">Test Experiment & Output Data - Tutorial 1: The Output File 

            </p>

            <div className="h-full">
              <ReactPlayer
                url={"https://youtu.be/ZvMeEif-_lg"}
                width="100%"
                style={{ borderRadius: "0.5rem" }}
              />
            </div>
            <p className="my-8">
              OpenMaze automatically logs all the data you’ll need to do in depth behavioural analysis. In this tutorial we’ll go over each column of the output file.

              <br /> <br />
              What you’ll learn: <br />
              1. How to add build platforms through the Unity Hub <br />
              2. How to build your experiment for Mac and Windows systems using the Unity editor<br />
              3. How to add your experiment materials to a Mac application<br />
              4. How to make changes to your experiment after it has been built.<br />


            </p>
          </div>

          <div

            className={`text-white border-tutorial-cyan border-t-8 h-full md:border-t-0 md:border-l-8 md:max-w-3xl lg:max-w-5xl rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}
          >
            <p className="text-xl mt-2 md:text-2xl">Step 5: Build Experiment</p>
            <br />
            <p className="text-lg">Build Experiment - Tutorial 1: Adding Build Platforms and Building Experiments for Mac and Windows
            </p>
            <div className="h-full">
              <ReactPlayer
                url={"https://youtu.be/ZvMeEif-_lg"}
                width="100%"
                style={{ borderRadius: "0.5rem" }}
              />
            </div>
            <p className="my-8">
              The Unity build feature allows experimenters to create executable/application files for a variety of platforms (Mac, Windows, Linux, Mobile, etc.). Executable/application files allow experimenters to transfer and run experiments independent of the Unity Engine.
              <br /> <br />
              What you’ll learn: <br />
              1. How to add build platforms through the Unity Hub <br />
              2. How to build your experiment for Mac and Windows systems using the Unity editor<br />
              3. How to add your experiment materials to a Mac application<br />
              4. How to make changes to your experiment after it has been built.<br />
            </p>
          </div>

          <div

            className={`text-white border-tutorial-brown border-t-8 h-full md:border-t-0 md:border-l-8 md:max-w-3xl lg:max-w-5xl rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}
          >
            <p className="text-xl mt-2 md:text-2xl">Tips and Tricks</p>
            <br />
            <p className="text-lg">Tips and Tricks: Why Isn’t My OpenMaze Experiment Working?
            </p>
            <div className="h-full">
              <ReactPlayer
                url={"https://youtu.be/ZvMeEif-_lg"}
                width="100%"
                style={{ borderRadius: "0.5rem" }}
              />
            </div>
            <p className="my-8">
              This tutorial covers the most common reasons why your OpenMaze experiment isn’t executing properly and how to fix them!
<br /> <br />
              What you’ll learn: <br />
              1. Using the Unity console window to investigate runtime errors.  <br />
              2. Using a JSON validator to ensure that your configuration file is valid.<br />

            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
