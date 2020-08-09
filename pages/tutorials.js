import Link from "next/link";

import Layout from "../components/layout";
import ReactPlayer from "react-player";
import { Component } from "react";
import Openmaze from "../public/WebsiteLogoFinal.png";
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
          <div className="text-white bg-dark-light p-4 rounded-lg w-screen md:w-64 md:left-0">
              <div className="md:fixed md:top-0 pt-4 text-left">
              
              <a href = "/">
                <img  src={Openmaze} alt="" className="w-48 sm:w-56" /></a><br/>
               
                <p className="text-gray-300 text-2xl">
                  <b>Learn OpenMaze</b>
              </p>

                <p className={sectionLinkStyle}>
                  <a href="#software"><p class="hover:text-tutorial-brown">Software Setup</p></a>
                </p>

                <p className={sectionLinkStyle}>
                  <a href="#buildEnvironments"><p class="hover:text-tutorial-blue">Building Environments</p></a>
                </p>

                <button onClick={this.stepThreeOpen} className="text-left">
                  <p className="block py-2 text-lg hover:text-tutorial-red">
                    Creating Experiments
                  </p>
                </button>

                {this.state.step3 &&
                  <div>
                    <a href="#blocks" className="block py-2 hover:text-tutorial-red font-thin ml-6">
                      Blocks
                    </a>
                    <a href="#instructionTrials" className="block py-2 hover:text-tutorial-red font-thin ml-6">
                      Instruction/Cue Screen Trials
                    </a>
                    <a href="#taskBasics" className="block py-2 hover:text-tutorial-red font-thin ml-6">
                      Task Trial Basics
                    </a>
                    <a href="#taskObjects" className="block py-2 hover:text-tutorial-red font-thin ml-6">
                      Task Trial Goals/Landmarks
                    </a>
                    <a href="#goalLandmarks" className="block py-2 hover:text-tutorial-red font-thin ml-6">
                      Goals/Landmarks
                    </a>
                    <a href="#enclosures" className="block py-2 hover:text-tutorial-red font-thin ml-6">
                      Enclosures
                    </a>
                  </div>
                }

                <p className={sectionLinkStyle}>
                  <a href="#testData"><p class="hover:text-tutorial-yellow">Testing and Data</p></a>
                </p>
                
                <p className={sectionLinkStyle}>
                  <a href="#export"><p class="hover:text-tutorial-cyan">Exporting Experiments</p></a>
                </p><br/>

                <p className="text-gray-300 text-2xl">
                  <b>Advanced Features</b>
              </p>

                <p className={sectionLinkStyle}>
                  <a href="#online">Online Experiments</a>
                </p>

                
               
              
                {/* <p className="opacity-75 mt-4 md:mb-2 md:mt-8 text-sm">
                Tips and Tricks
              </p>

              <a href="#whyNotWorking" className={sectionLinkStyle}>
                Why isn't OpenMaze Working?
              </a> */}
              </div>
            </div>

            <div className="flex-1 flex flex-wrap flex-col items-center mt-6 md:mt-0 md:max-w-2xl lg:max-w-4xl mx-auto">


<div id = "software"></div>
                <div  className={`text-white  border-tutorial-brown border-b-8 md:border-t-8 md:border-l-8 border-r-8 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}>
              <h2  className="font-medium text-center text-5xl my-2">Software Setup</h2>

                 
            
                <br />
                
                <div className="">
                  <ReactPlayer
                    url={"https://youtu.be/_MwF2JgmraY"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <br />
                <p className="text-xl my-8">
                <b>What you’ll learn:</b>
                <ul style={{padding: 20}} class="list-decimal">
                  <li>How to download all the required software</li>
                  <li>How to launch OpenMaze in the Unity Editor</li>
                  <li>How to test that OpenMaze is working correctly in the Unity Editor</li>
                </ul>
                </p>
              </div>

              <div id="buildEnvironments"></div>

              <div  className={`text-white  border-tutorial-blue border-b-8 md:border-t-8 md:border-l-8 border-r-8 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}>
              <h2  className="font-medium text-center text-5xl my-2">Building Environments</h2>

                 
              
              <br />

                <div className=" ">
                  <ReactPlayer
                    url={"https://www.youtube.com/watch?v=JrkyJqnzS4o&list=PLppXGUtW-XlIuTh-lW6URgm5Cim_DH4gL"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="text-xl my-8">
                
                  <b>What you’ll learn: </b>
                  <ul style={{padding: 20}} class="list-decimal">
                  <li> How to create OpenMaze compatible 3D environments</li>
                  <li> How to use the Unity Terrain building tools</li>
                  <li> How to download environment materials from the Unity Asset Store</li>
                  <li> How to add environments to your experiment build</li>
                  <li> How to create an experiment that uses multiple Unity environments</li>
                  </ul>
              </p>
              </div>

              <div className={`text-white  border-tutorial-red border-t-8 md:border-b-8 md:border-l-8 border-r-8 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}>
              <h2 className="font-medium text-center text-5xl my-2">Creating Experiments</h2>


              
                <br />
                <h2 id="blocks" className="font-medium text-5xl my-2">Experiment <i>Blocks</i></h2>
               

                <div className=" ">
                  <ReactPlayer
                    url={"https://www.youtube.com/watch?v=Nqj0VUgi4gE&t=281s"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="text-xl my-8">
                 <b> What you’ll learn: </b>
                 <ul style={{padding: 20}} class="list-decimal">
                 <li> How to create an experiment <i>Block</i></li>
                 <li> How to present <i>Trials </i> in serial order </li>
                 <li> How to present <i>Trials</i> in Random order (with or without replacement)</li>
                 <li> How to create an experiment by defining the order in which <i>Blocks</i> are called </li>
                </ul>
                </p>
                <br />
                <br />

                <h2 id="instructionTrials" className="font-medium text-5xl my-2"><i>Instruction/Cue Screen Trials</i></h2>

                <div className=" ">
                  <ReactPlayer
                    url={"https://www.youtube.com/watch?v=64lVb1U0KIg"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="text-xl my-8">

                  <b>What you’ll learn:</b>
                  <ul style={{padding: 20}} class="list-decimal">
                  <li> How to create an instruction <i>Trial </i> in the OpenMaze Configuration File </li>
                  <li> How to create instruction screens using PowerPoint </li>
                  <li> How to save instruction screens in the appropriate OpenMaze folder </li>
                  <li> How to define presentation duration </li>
                  <li> How to define user input to end <i>Instruction Trials </i></li>
                  </ul>
                </p>
                <br />
                <br />

                <h2 id="taskBasics" className="font-medium text-5xl my-2"><i>Task Trial </i>Basics</h2>

                <div className=" ">
                  <ReactPlayer
                    url={"https://www.youtube.com/watch?v=CnlVgKkj3C4"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div><br />
                <p class="bg-yellow-600 rounded-lg border text-center border-white p-2"><strong>IMPORTANT:</strong> the "Header" attribute has been renamed to "DisplayText". It's functionality remains the same. </p>

                <p className="text-xl my-8">
                  <b>What you’ll learn:</b>
                  <ul style={{padding: 20}} class="list-decimal">
                  <li>How to use different Unity environments on a <i>Trial-by-Trial</i> basis </li>
                  <li>How to display text to a participant while they navigate an environment </li>
                  <li>How to define the participant starting position within the environment </li>
                  </ul>
                <br />

                
                </p>

                <div id="taskObjects"></div>
                <h2 className="font-medium text-5xl my-2"><i>Task Trial Goals/Landmarks</i></h2>

                <div className=" ">
                  <ReactPlayer
                    url={"https://youtu.be/sSOWmIR7dWA"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="text-xl my-8">
                  <b>What you’ll learn:</b>
                  <ul style={{padding: 20}} class="list-decimal">
                  <li> How to add visible collision activated <i>Goal</i> objects to an environment</li>
                  <li> How to add invisible collision activated <i>Goal</i> objects to an environment</li>
                  <li> How to ddd <i>Landmarks</i> to your environment</li>
                  <li> How to set collision activation quotas to initiate the end of a <i>Trial</i></li>
                  <li> How to add visible <i>Goals</i> that do not respond to collision</li>
                  </ul>
 
                </p>

                <h2 id="goalLandmarks" className="font-medium text-5xl my-2"><i>Goals/Landmarks</i></h2>


                <div className=" ">
                  <ReactPlayer
                    url={
                      "https://www.youtube.com/watch?v=20UysrQwdgU&feature=youtu.be"
                    }
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <br />
                <p class="bg-grey-600 rounded-lg border text-center border-white p-2"><strong>Note:</strong> Landmarks can be created in the exact same way Goals are created in this video. </p>
                <p className="text-xl my-8">
                  <b> What you’ll learn:</b>
                  <ul style={{padding: 20}} class="list-decimal">
                  <li>How to define <i>Goal </i>objects in the Configuration File </li>
                  <li>How to manipulate <i>Goal</i> object characteristics </li>
                  <li>How to place <i>Goal</i> Objects within your 3D environment on a <i>Trial-by-Trial</i> basis </li>
                  <li>How to import 3D Models and use them as <i>Goal</i> objects </li>
                  <li>How to import 2D Images and use them as <i>Goal</i> objects </li>
                  <li>How to import Audio files and assign them to <i>Goal</i> objects</li>
                  </ul>
                  <br />
                </p>

                <div id="enclosures"></div>
              
                <h2 className="font-medium text-5xl my-2"><i>Enclosures</i></h2>

                <div className=" ">
                  <ReactPlayer
                    url={
                      "https://www.youtube.com/watch?v=DTH-Bc1m_wc&feature=youtu.be"
                    }
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="text-xl my-8">
                  <b>What you’ll learn:</b>
                  <ul style={{padding: 20}} class="list-decimal ">
                  <li>How to call <i>Enclosures</i> on a <i>Trial-by-Trial</i> basis</li> 
                  <li>How to customize <i>Enclosures</i></li> 
                  <li>How to use <i>Enclosures</i> to manipulate global-local environment cues</li> 
                  <li>how to create invisible <i>Enclosures</i></li> 
                  </ul>
                </p>
              </div>


              <div id="testData" className={`text-white  border-tutorial-yellow border-t-8 md:border-b-8 md:border-l-8 border-r-8 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}>
              <h2  className="font-medium text-center text-5xl my-2">Testing and Data</h2><br/>

                <div className=" ">
                  <ReactPlayer
                    url={"https://www.youtube.com/watch?v=tCW9fgpGmww&list=PLppXGUtW-XlIuTh-lW6URgm5Cim_DH4gL&index=10&t=0s"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="text-xl my-8">
                  <b>What you’ll learn:</b>
                  <ul style={{padding: 20}} class="list-decimal ">
                  <li>How to change start screen input fields </li> 
                  <li>Where to find the output data for your experiment</li>
                  <li>What each column of the output data tells you</li>
                  <li>How to change the column names of your output data files</li>
                  </ul>
                </p>
              </div>
              

              <div
                id="export"
                className={`text-white border-tutorial-cyan border-t-8 md:border-b-8 md:border-l-8 border-r-8 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}
              >
                <h2  className="font-medium text-center text-5xl my-2">Experiment Applications</h2><br/>
               
                <br />
                <div className=" ">
                  <ReactPlayer
                    url={"https://youtu.be/0Is5iyt75Wg"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="text-xl my-8">
                  <b>What you’ll learn:</b>
                  <ul style={{padding: 20}} class="list-decimal ">
                  <li>How to add build platforms through the Unity Hub</li>
                  <li>How to build your experiment for Mac and Windows systems using the Unity Editor</li>
                  <li>How to run experiment applications</li>
                  <li>How to transfer experiment applications to other computers (e.g. Windows to macOS)</li>
                  
                  </ul>
                </p>
              </div>

              <div
                id="online"
                className={`text-white border-white border-t-8 md:border-b-8 md:border-l-8 md:border-r-8 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}
              >
                <h2  className="font-medium text-center text-5xl my-2">Online Experiments</h2><br/><br/>

                <h2 className="font-medium text-3xl my-2">Uploading/Downloading Windows Applications</h2>

               
                <br />
                <div className=" ">
                  <ReactPlayer
                    url={"https://youtu.be/i4RKxMHjUvM"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="text-xl my-8">
                  <b>What you’ll learn:</b> 
                  <ul style={{padding: 20}} class="list-decimal ">
                  <li>How to upload a Windows compatible experiment application to Google Drive</li>
                  <li>How To create a download link that can be used by anyone to download your Windows experiment application</li>  
                  </ul>
                </p>

                <br /><h2 className="font-medium text-3xl my-2">Uploading/Downloading macOS Applications</h2>

               
                <br />
                <div className=" ">
                  <ReactPlayer
                    url={"https://youtu.be/i4RKxMHjUvM"}
                    width="100%"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </div>
                <p className="text-xl my-2">
                  <br/><b>What you’ll learn:</b> 
                  <ul style={{padding: 20}} class="list-decimal ">
                    <li>How to upload a macOS compatible experiment application to Google Drive</li>
                    <li>How to create a download link that can be used by anyone to download your macOS experiment</li>  
                  </ul>
                  
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
              <div className=" ">
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
