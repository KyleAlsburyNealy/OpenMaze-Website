import Link from "next/link";

import Layout from "../components/layout";
import ReactPlayer from "react-player";
import { Component } from "react";

const sectionLinkStyle = "block py-2 text-lg";

class Tutorial extends Component {
  state = {
    // start with the menu closed
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false
  };
  stepOneOpen = () => {
    this.setState({ step1: !this.state.step1 });
  };
  stepTwoOpen = () => {
    this.setState({ step2: !this.state.step2 });
  };
  stepThreeOpen = () => {
    this.setState({ step3: !this.state.step3 });
  };
  stepFourOpen = () => {
    this.setState({ step4: !this.state.step4 });
  };
  stepFiveOpen = () => {
    this.setState({ step5: !this.state.step5 });
  };

  render() {
    return (
      <>
        <div className="z-neg hidden lg:block bg-dark-light fixed left-0 w-64 h-screen text-white"></div>
        <Layout>
          <div className="flex flex-wrap justify-center m-0 mx-4 md:mx-0">
            <div className="text-white bg-dark-light p-4 mb-10 rounded-lg w-screen lg:w-64 lg:left-0">
              <div className="lg:sticky md:top-0 pt-4">
                <p className="opacity-75 text-sm font-thin">
                  Learn OpenMaze
              </p>
                <button
                  onClick={this.stepOneOpen}
                  className=""
                >
                  <p className="block py-2 text-lg hover:text-tutorial-brown">
                    Step 1: Setup
                </p>
                </button>
                {this.state.step1 &&
                  <a href="#step1" className="block py-2 font-thin hover:text-tutorial-brown ml-6">
                    Download, Install & Setup
              </a>
                }
                <button
                  onClick={this.stepTwoOpen}
                  className="text-left"
                >
                  <p className="block py-2 text-lg hover:text-tutorial-blue">
                    Step 2: Environment Building
                </p>
                </button>
                {this.state.step2 &&

                  <a href="#step2" className="block py-2 hover:text-tutorial-blue font-thin ml-6">
                    Basic Environment Building Tools
              </a>
                }
                <button
                  onClick={this.stepThreeOpen}
                  className="text-left"
                >
                  <p className="block py-2 text-lg hover:text-tutorial-red">
                    Step 3: Experiment Design
                </p>
                </button>
                {this.state.step3 &&
                  <div>
                    <a href="#step3" className="block py-2 hover:text-tutorial-red font-thin ml-6">
                      Experiment Blocks
              </a>
                    <a href="#instructionTrials" className="block py-2 hover:text-tutorial-red font-thin ml-6">
                      Instruction Trials
              </a>
                    <a href="#3DTrialBasics" className="block py-2 hover:text-tutorial-red font-thin ml-6">
                      3D Trials: Basics
              </a>
                    <a href="#3dTrialObjects" className="block py-2 hover:text-tutorial-red font-thin ml-6">
                      3D Trials: Objects
              </a>
                    <a href="#GoalObjects" className="block py-2 hover:text-tutorial-red font-thin ml-6">
                      Goal Objects
              </a>
                    <a href="#LandmarkObjects" className="block py-2 hover:text-tutorial-red font-thin ml-6">
                      Landmark Objects
              </a>
                    <a href="#enclosures" className="block py-2 hover:text-tutorial-red font-thin ml-6">
                      Enclosures
              </a>
                  </div>
                }
                <button
                  onClick={this.stepFourOpen}
                  className="text-left"
                >
                  <p className="block py-2 text-lg hover:text-tutorial-yellow">
                    Step 4: Finalize Experiment
                </p>
                </button>
                {this.state.step4 &&
                  <a href="#step4" className="block py-2 hover:text-tutorial-yellow font-thin ml-6">
                    Test Experiment & Output Data
              </a>
                }
                <button
                  onClick={this.stepFiveOpen}
                  className="text-left"
                >
                  <p className="block py-2 text-lg hover:text-tutorial-cyan">
                    Step 5: Build/Export Experiment
                </p>
                </button>
                {this.state.step5 &&

                  <a href="#step5" className="block py-2 hover:text-tutorial-cyan font-thin ml-6">
                    Export for Mac & PC
              </a>
                }
                {/* <p className="opacity-75 mt-4 md:mb-2 md:mt-8 text-sm">
                Tips and Tricks
              </p>

              <a href="#whyNotWorking" className={sectionLinkStyle}>
                Why isn't OpenMaze Working?
              </a> */}
              </div>
            </div>

            <div className="flex-1 flex flex-wrap flex-col items-center mt-6 md:mt-0 md:max-w-2xl lg:max-w-4xl mx-auto">
              <div
                id="step1"
                className={`text-white border-tutorial-brown border-t-8  md:border-t-0 md:border-l-8 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light`}
              >
                <p className="text-xl mt-2 md:text-2xl">
                  Step 1: Download, Install, and Setup
              </p>
                <br />
                <p className="text-lg">
                  Download, Install & Setup
              </p>
                <div className="h-full">
                  <ReactPlayer
                    url={"https://www.youtube.com/watch?v=yCcT8mvqCos"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <br />
                <p>
                  <b>Summary</b>
                </p>
                <br />
                <p>
                  There are three pieces of software that you’ll need for coding experiments using OpenMaze. (1) Unity Game Engine, (2) OpenMaze toolbox, (3) a text editor that supports JSON files. All are free to download and install. OpenMaze also requires the <b><i>Standard Assets (for Unity 2017.3)</i></b> and <b><i>Nature Starter Kit 2</i></b> asset packs which can be downloaded from the Unity Asset store.
              </p>
                <br />
                <p>What you’ll learn:</p>
                <ol>
                  <li>1. How to download all the required software</li>
                  <li>2. How to launch OpenMaze in the Unity Editor</li>
                  <li>3. How to setup OpenMaze in the Unity Editor</li>
                  <li>4. How to download the required asset packs from the Unity Asset Store</li>
                  <li>5. How to test that OpenMaze is working correctly in the Unity Editor</li>
                </ol>
              </div>
              <div
                id="step2"
                className={`text-white border-tutorial-blue border-t-8  md:border-t-0 md:border-l-8 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}
              >
                <p className="text-xl mt-2 md:text-2xl">
                  Step 2 - Create Environments
              </p>
                <br />
                <p className="text-lg">
                  Environment Building Basics
              </p>

                <div className="h-full">
                  <ReactPlayer
                    url={"https://www.youtube.com/watch?v=JrkyJqnzS4o&list=PLppXGUtW-XlIuTh-lW6URgm5Cim_DH4gL"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="my-8">
                  Learn how to create multiple OpenMaze 3D environments using the OpenMaze 3D Environment template and the Unity editor tools.
                <br /> <br />
                  What you’ll learn: <br />
                  1. How to create OpenMaze compatible 3D Environments <br />
                  2. How to use the Unity Terrain Building Tools <br />
                  3. How to download environment materials from the Unity Asset
                Store <br />
                  4. How to add environments to your experiment Build <br />
                  5. How to create an experiment that uses multiple Unity
                  Environments.
              </p>
              </div>
              <div
                id="step3"
                className={`text-white border-tutorial-red border-t-8 md:border-t-0 md:border-l-8 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}
              >
                <p className="text-xl mt-2 md:text-2xl">
                  Step 3 - Experiment Design
              </p>
                <br />
                <p className="text-lg">
                  Experiment Blocks
              </p>

                <div className="h-full">
                  <ReactPlayer
                    url={"https://www.youtube.com/watch?v=Nqj0VUgi4gE&t=281s"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="my-8">
                  Blocks control the flow of your experiment task by grouping and
                  presenting trials in a variety of ways.
                <br /> <br />
                  What you’ll learn: <br />
                  1. How to create an experiment{" "}
                  <b>
                    <i>Block</i>
                  </b>{" "}
                  <br />
                  2. How to present{" "}
                  <b>
                    <i>Trials</i>
                  </b>{" "}
                  in serial order <br />
                  3. How to present{" "}
                  <b>
                    <i>Trials</i>
                  </b>{" "}
                  in Random order (with or without Replacement) <br />
                  4. How to create an experiment by defining the order in which{" "}
                  <b>
                    <i>Blocks</i>
                  </b>{" "}
                  are called <br />
                </p>
                <br />
                <br />
                <p id="instructionTrials" className="text-lg">
                  Instruction Trials
              </p>

                <div className="h-full">
                  <ReactPlayer
                    url={"https://www.youtube.com/watch?v=64lVb1U0KIg"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="my-8">
                  Learn how to create custom instruction and cue screens for your
                  experiment and present them to your participant in a variety of
                  ways.
                <br /> <br />
                  What you’ll learn: <br />
                  1. How to create an instruction trial in the OpenMaze
                Configuration file <br />
                  2. How to create instruction screens using PowerPoint <br />
                  3. How to save instruction screens in the appropriate OpenMaze
                folder <br />
                  4. How to define presentation duration <br />
                  5. How to define use input to end Instruction Trials <br />
                </p>
                <br />
                <br />
                <p id="3DTrialBasics" className="text-lg">
                  3D Trial Basics
              </p>

                <div className="h-full">
                  <ReactPlayer
                    url={"https://www.youtube.com/watch?v=CnlVgKkj3C4"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="my-8">
                  Learn the basics of creating 3D trials within the OpenMaze
                  Configuration file.
                <br /> <br />
                  What you’ll learn: <br />
                  1. Use different Unity environments on a trial-by-trial Basis{" "}
                  <br />
                  2. Display text to a participant while they navigate an
                environment <br />
                  3. Define the participant starting position within the
                environment <br />
                </p>

                <br />
                <br />
                <div id="3dTrialObjects"></div>
                <p className="text-lg">
                  3D Trials: Goals and Landmarks
              </p>

                <div className="h-full">
                  <ReactPlayer
                    url={"https://youtu.be/sSOWmIR7dWA"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="my-8">
                  In this tutorial, you'll learn how to create Trial contingencies
                  and manipulate environment cues using Goal and Landmark objects
                <br /> <br />
                  What you’ll learn: <br />
                  1. How to add Visible Collision activated Goal objects to an
                  environment
                <br />
                  2. How to Add Invisible Collision activated Goal objects to an
                  environment
                <br />
                  3. How to Add Landmarks to your Environment. <br />
                  4. How to set collision activation quotas to initiate the end of
                  a Trial
                <br />
                  5. How to Add Visible Goals that do not respond to collision
                <br />
                </p>
                <br />
                <br />
                <p id="GoalObjects" className="text-lg">
                  Goal Objects
              </p>

                <div className="h-full">
                  <ReactPlayer
                    url={
                      "https://www.youtube.com/watch?v=20UysrQwdgU&feature=youtu.be"
                    }
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="my-8">
                  Learn how to create Goal objects using any 3D object or 2D
                  image.
                <br /> <br />
                  What you’ll learn: <br />
                  1. How to define Goal Objects in the configuration file <br />
                  2. How to manipulate Goal object characteristics <br />
                  3. How to place Goal objects within your 3D environment on a
                trial-by-trial basis <br />
                  4. How to import 3D objects and use them as Goal Objects <br />
                  5. How to import 2D images and use them as Goal Objects <br />
                  6. How to import sound files and assign them to Goal Objects{" "}
                  <br />
                </p>

                <br />
                <br />
                <p id="LandmarkObjects" className="text-lg">
                  Landmark Objects - <i>COMING SOON</i>
                </p>

                {/* <div className="h-full">
                <ReactPlayer
                  url={
                    "https://www.youtube.com/watch?v=20UysrQwdgU&feature=youtu.be"
                  }
                  width="100%"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div> */}
                <p className="my-8">
                  The Landmarks section of the configuration file is reserved for the non-interactive environment objects. Landmarks are defined in much the same way as goal objects and allow experimenters to make key environment manipulations on a trial-by-trial basis. For more information check out the OpenMaze User manual section on Landmarks.
                {/* In this tutorial we demonstrate how Landmark objects can be used
                to manipulate key environment features.
                <br /> <br />
                NOTE: This tutorial will not detail how Landmarks are defined in
                configuration files. Landmarks are defined using the same
                parameters as Goal objects (minus sound). For an in depth
                explanation of Landmark parameters please refer to the{" "}
                <a href="https://www.youtube.com/watch?v=CnlVgKkj3C4">
                  Goal Object Tutorial
                </a>
                . */}
                </p>
                <div id="enclosures"></div>
                <br />
                <br />
                <p className="text-lg">
                  Enclosures
              </p>

                <div className="h-full">
                  <ReactPlayer
                    url={
                      "https://www.youtube.com/watch?v=DTH-Bc1m_wc&feature=youtu.be"
                    }
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="my-8">
                  Enclosures restrict participant movement to a prescribed area of
                  the 3D environment and can be used to create global-local
                  environment pairings.
                <br /> <br />
                  What you’ll learn: <br />
                  1. How to call enclosures on a trial-by-trial basis <br />
                  2. How to customize enclosures <br />
                  3. How to use enclosures to manipulate global-local environment
                cues <br />
                  4. how to create invisible enclosures <br />
                </p>
              </div>

              <div
                id="step4"
                className={`text-white border-tutorial-yellow border-t-8 md:border-t-0 md:border-l-8 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}
              >
                <p className="text-xl mt-2 md:text-2xl">
                  Step 4: Test Experiment & Output Data
              </p>
                <br />
                <p className="text-lg">
                  Testing & Output Data
              </p>

                <div className="h-full">
                  <ReactPlayer
                    url={"https://www.youtube.com/watch?v=tCW9fgpGmww&list=PLppXGUtW-XlIuTh-lW6URgm5Cim_DH4gL&index=10&t=0s"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="my-8">
                  OpenMaze automatically logs all the data you’ll need to do in depth behavioral analysis. In this tutorial we’ll go over where to find the data and what it means!
                <br /> <br />
                  What you’ll learn: <br />
                  1. How to change start screen input fields <br />
                  2. Where to find the output data for your experiment
                <br />
                  3. What each column of the output data tells you
                <br />
                  4. How to change the column names of your output data files
                <br />
                </p>
              </div>

              <div
                id="step5"
                className={`text-white border-tutorial-cyan border-t-8 md:border-t-0 md:border-l-8 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}
              >
                <p className="text-xl mt-2 md:text-2xl">
                  Step 5 - Build Experiment
              </p>
                <br />
                <p className="text-lg">
                  Building Experiments for Mac and Windows
              </p>
                <div className="h-full">
                  <ReactPlayer
                    url={"https://www.youtube.com/watch?v=6OQ7wyj7kB4&list=PLppXGUtW-XlIuTh-lW6URgm5Cim_DH4gL&index=10&t=0s"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="my-8">
                  The Unity build feature allows experimenters to create
                  executable/application files for a variety of platforms (Mac,
                  Windows, Linux, Mobile, etc.). Executable/application files
                  allow experimenters to transfer and run experiments independent
                  of the Unity Engine.
                <br /> <br />
                  What you’ll learn: <br />
                  1. How to add build platforms through the Unity Hub <br />
                  2. How to build your experiment for Mac and Windows systems
                  using the Unity editor
                <br />
                  3. How to add your experiment materials to a Mac application
                <br />
                  4. How to make changes to your experiment after it has been
                  built.
                <br />
                </p>
              </div>

              {/* <div
              id="whyNotWorking"
              className={`text-white border-tutorial-brown border-t-8 md:border-t-0 md:border-l-8 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}
            >
              <p className="text-xl mt-2 md:text-2xl">Tips and Tricks</p>
              <br />
              <p className="text-lg">
                Tips and Tricks: Why Isn’t My OpenMaze Experiment Working?
              </p>
              <div className="h-full">
                <ReactPlayer
                  url={"https://youtu.be/ZvMeEif-_lg"}
                  width="100%"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
              <p className="my-8">
                This tutorial covers the most common reasons why your OpenMaze
                experiment isn’t executing properly and how to fix them!
                <br /> <br />
                What you’ll learn: <br />
                1. Using the Unity console window to investigate runtime errors.{" "}
                <br />
                2. Using a JSON validator to ensure that your configuration file
                is valid.
                <br />
              </p>
            </div> */}
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default Tutorial;
