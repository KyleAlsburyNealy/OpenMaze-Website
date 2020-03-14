import Layout from "../components/layout";
import DocumentSection from "../components/documentSection";
import DocsTable from "../components/docsTable";
import ReactPlayer from 'react-player'
import ConfigurationHeirarchy from '../public/ConfigurationHierarchy.png';
import BlocksCode from '../public/BlocksCode.png';
import EnclosuresCode from '../public/EnclosuresCode.png';
import GoalsCode from '../public/GoalsCode.png';
import LandmarksCode from '../public/LandmarksCode.png';
import TrialsCode from '../public/TrialsCode.png';
import { Component } from "react";

const sectionLinkStyle = "block py-2 text-lg";
const subSectionLinkStyle = "block py-2 text-lg ml-6 font-thin";

const sectionData = [
  {
    id: "introduction",
    subtitle: "Welcome",
    title: "Introduction",
    description: `The advent of 3D virtual environments has given researchers the ability to study human cognition 
      in novel ways, providing insight into many important scientific questions. OpenMaze is an open source 
      software package that provides and easy an intuitive platform to quickly create 3D environment tasks 
      without programming expertise.`
  },
  {
    id: "overview",
    subtitle: "Configuration File",
    title: "Overview",
    description: `The configuration file is the most important file in the OpenMaze codebase when it comes to 
    designing your own experiments. Here you can change up almost everything about how OpenMaze works just by 
    changing a few numbers or words! The following section demonstrates exactly how to accomplish this.`
  },
  {
    id: "overview",
    subtitle: "Configuration File",
    title: "Overview",
    description: `The configuration file is the most important file in the OpenMaze codebase when it comes to 
    designing your own experiments. Here you can change up almost everything about how OpenMaze works just by 
    changing a few numbers or words! The following section demonstrates exactly how to accomplish this.`
  },
  {
    id: "overview",
    subtitle: "Configuration File",
    title: "Overview",
    description: `The configuration file is the most important file in the OpenMaze codebase when it comes to 
    designing your own experiments. Here you can change up almost everything about how OpenMaze works just by 
    changing a few numbers or words! The following section demonstrates exactly how to accomplish this.`
  }
];

class Documentation extends Component {
  state = {
    // start with the menu closed
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false
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
  stepSixOpen = () => {
    this.setState({ step6: !this.state.step6 });
  };
  stepSevenOpen = () => {
    this.setState({ step7: !this.state.step7 });
  };

  render() {
    return (
      <>
        <div className="z-neg hidden md:block bg-dark-light fixed left-0 w-64 h-screen text-white"></div>
        <Layout docs="true">
          <div className="flex flex-wrap justify-center m-0 mx-4 md:mx-0">
            <div className="text-white bg-dark-light p-4 rounded-lg w-screen md:w-64 md:left-0">
              <div className="md:sticky md:top-0 pt-4 text-left">
                {/* <p className="opacity-75 text-sm font-thin">Getting Started</p> */}
                <button
                  onClick={this.stepOneOpen}
                  className=""
                >
                  <p className={sectionLinkStyle}>
                    Introduction
                </p>

                </button>
                {this.state.step1 &&
                  <div>
                    <a href="#introduction" className={subSectionLinkStyle}>
                      Get Involved
              </a>
                    <a href="#softwareSetup" className={subSectionLinkStyle}>
                      Software Setup
              </a>
                    <a href="#videoTutorials" className={subSectionLinkStyle}>
                      Video Tutorials
              </a>
                  </div>

                }
                <br />
                <button
                  onClick={this.stepTwoOpen}
                  className=""
                >
                  <p className={sectionLinkStyle}>
                    Experiment Stimuli
                </p>

                </button>
                {this.state.step2 &&
                  <>
                    <a href="#3DEnvironments" className={subSectionLinkStyle}>
                      3D Environments
              </a>
                    <a href="#building3DEnvironments" className={subSectionLinkStyle}>
                      Building 3D Environments
        </a>
        <a href="#3DObjects" className={subSectionLinkStyle}>
                      3D Objects
        </a>
                    <a href="#imageFiles" className={subSectionLinkStyle}>
                      Image Files
                    </a>
                    <a href="#audioFiles" className={subSectionLinkStyle}>
                      Audio Files
                    </a>
                  </>
                }
                <br />
                <button
                  onClick={this.stepThreeOpen}
                  className="text-left"
                >
                  <p className={sectionLinkStyle}>
                    Experiment Configuration Files
                </p>

                </button>
                {this.state.step3 &&
                  <>
                    
                    <a href="#jsonFiles" className={subSectionLinkStyle}>
                      JSON Files
                    </a>
                    <a href="#configurationFileOverview" className={subSectionLinkStyle}>
                      Configuration File Overview
                    </a>
                    
                  </>
                }
                <br />
                <button
                  onClick={this.stepFourOpen}
                  className=""
                >
                  <p className={sectionLinkStyle}>
                    Configuration File Sections
                </p>

                </button>
                {this.state.step4 &&
                  <>
                    <a href="#settings" className={subSectionLinkStyle}>
                      Settings
              </a>
                    <a href="#blocks" className={subSectionLinkStyle}>
                      Blocks
        </a>
                    <a href="#trials" className={subSectionLinkStyle}>
                      Trials
                    </a>  
                    <a href="#goalsLandmarks" className={subSectionLinkStyle}>
                      Goals & Landmarks
                    </a>  
                    <a href="#enclosures" className={subSectionLinkStyle}>
                      Enclosures
                    </a>  
                  </>
                }
                <br />
                <button
                  onClick={this.stepSevenOpen}
                  className=""
                >
                  <p className={sectionLinkStyle}>
                    Input Devices
                </p>

                </button>
                {this.state.step7 &&
                  <>
                    <a href="#overview" className={subSectionLinkStyle}>
                      Overview
              </a>
                    <a href="#specializedDevices" className={subSectionLinkStyle}>
                      Specialized Devices
        </a>
                  </>
                }
                <br />
                <button
                  onClick={this.stepFiveOpen}
                  className=""
                >
                  <p className={sectionLinkStyle}>
                    Output Data
                </p>

                </button>
                {this.state.step5 &&
                  <>
                    <a href="#outputFiles" className={subSectionLinkStyle}>
                      Output Files
              </a>
                    <a href="#outputTiming" className={subSectionLinkStyle}>
                      Output Timing
        </a>
                  </>
                }
                <br />
                <button
                  onClick={this.stepSixOpen}
                  className=""
                >
                  <p className={sectionLinkStyle}>
                    Building Your Experiment
                </p>

                </button>
                {this.state.step6 &&
                  <>
                    <a href="#buildingOverview" className={subSectionLinkStyle}>
                      Overview
                    </a>
                    <a href="#platformSupport" className={subSectionLinkStyle}>
                      Platform Support
                    </a>
                    <a href="#buildInstructions" className={subSectionLinkStyle}>
                      Build Instructions
                    </a>
                    <a href="#postBuildChanges" className={subSectionLinkStyle}>
                      Post-Build Changes
                    </a>
                  </>
                }

              </div>
            </div>
            <div className="flex-1 w-full flex flex-wrap flex-col items-center mt-6 md:mt-0">
              {/* {sectionData.map(section => (
              <div id={section.id} className="pt-6">
                <DocumentSection
                  subtitle={section.subtitle}
                  title={section.title}
                  description={section.description}
                />
              </div>
            ))} */}
              {/* <DocsTable /> */}

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="introduction">
                <p className="font-sm font-hairline opacity-75">Introduction</p>
                <h1 id="getInvolved" className="font-medium text-3xl my-4">Get Involved!</h1>
                <p>
                  It is our hope that OpenMaze will be seen not only as a toolbox, but also as a development platform, and we encourage other experimenters to become involved in the development process. In this pursuit, we are committed to keeping OpenMaze free and open source. All future development of the OpenMaze toolbox will be governed through feedback and community collaboration. With your help, our goal is to identify generalizable experiment design tools that can meet the needs of a larger community of researchers. If you’ve got a great idea for new functionality, or have added anything to the source code that you think would benefit other researchers, please share it!
                <br /><br />
                  Feature Request, Issue Reporting and Support:
                <br /><br />
                  To submit a feature request or report an issue in the code base, please visit the <a href="https://github.com/DuncanLab/OpenMaze/issues" target="_blank" className="underline">OpenMaze GitHub issues page</a> and create a New issue. When submitting a request, ensure that you attach the appropriate label to it (e.g. feature request, bug, help wanted, etc.).
                  <br /><br />
                  Adding or Making Changes to the OpenMaze Source Code
                  <br /><br />
                  Through the <a href="https://github.com/DuncanLab/OpenMaze" target="_blank" className="underline">OpenMaze GitHub page</a> you can clone, or fork the OpenMaze project. This will allow you to submit your changes to the OpenMaze team by submitting a GitHub pull request. Upon receiving a pull request, the OpenMaze development team will review your changes and coordinate their implementation with you. Note: before developing larger changes to the source code or adding functionality, we encourage you to reach out to the OpenMaze development team for guidance to ensure that the final implementation process is quick-and-easy!
                </p>
                <h1 id="softwareSetup" className="font-medium text-3xl my-4">Software Setup</h1>
                <p>
                  Getting OpenMaze set up on your machine is easy! Please follow the instructions provided on the <a href="https://github.com/DuncanLab/OpenMaze/blob/master/README.md" target="_blank" className="underline">OpenMaze GitHub Repository</a> or check out our step-by-step <a href="https://openmaze.duncanlab.org/tutorials#step1" target="_blank" className="underline">tutorial video</a>!
                </p>
                <h1 id="videoTutorials" className="font-medium text-3xl my-4">Video Tutorials</h1>
                <p>
                  If you’re a first time OpenMaze user, we strongly recommend following along with our <a href="https://openmaze.duncanlab.org/tutorials" target="_blank" className="underline">Learn OpenMaze</a> video Tutorial series. These tutorials provide a step-by-step, hands-on approach to learning the ins-and-outs of the OpenMaze toolbox.
                </p>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="experimentStimuli">
                <p className="font-sm font-hairline opacity-75">Experiment Stimuli</p>
                <h1 id="3DEnvironments" className="font-medium text-3xl my-4">3D Environments</h1>
                <p>
                  OpenMaze allows you to use any Unity 3D Environment Scene, as long as it contains the required OpenMaze Scene objects. These Scene objects have already been added to the 3D Environment Scene included in the OpenMaze project (found in the _Scenes folder of the OpenMaze project) and we recommend using and/or duplicating the 3D Environment Scene when creating new Environments for your experiment. Alternatively, objects from the 3D Environment Scene can be copied and pasted into other Scenes through the Unity editor Hierarchy window.
                <br /><br />
                  To use Scenes in the configuration file, they must be added to the project build via the Unity editor. This can be done by opening the Scene in the Unity editor, then navigating to the project Build Settings (File -> Build Settings…) and clicking the Add Open Scenes button. The Scene number can be found beside the name of the Scene in the Scenes In Build box contained within the Build Settings window. These numbers are used to reference the Scene in the configuration file (see Trials section below).  <b>Note</b>: It is important that +Launch Experiment and Loading Scene always occupy Scene numbers 0 and 1 respectively.
                </p>
                <h1 id="building3DEnvironments" className="font-medium text-3xl my-4">Building 3D Environments
                </h1>
                <p>
                  OpenMaze does not come with any pre-built environments beyond those that are used in the <a href="https://openmaze.duncanlab.org/tutorials" target="_blank" className="underline">Learn OpenMaze</a> video tutorial series. Instead, OpenMaze allows you to create any number of custom environments that you require for your experiment using the Unity editor.
                <br /><br />
                  If you’re new to building 3D environments, don’t worry! Building environments in the Unity editor is easy and fun! In addition to the intuitive drag-and-drop/point-and-click environment building tools that come with the Unity editor, the Unity asset store allows you to quickly search and import any 3D objects you may need. Further, because Unity has such an extensive user base, a quick google search returns a plethora of resources if you ever need help! To get started check out the links below:
                <br /><br />
                  Building OpenMaze Compatible Environments: <a href="https://openmaze.duncanlab.org/tutorials#step2" target="_blank" className="underline">Video Tutorial</a>
                  <br /><br />
                  Terrain Building Tools: <a href="https://blogs.unity3d.com/2019/05/28/speed-up-your-work-with-the-new-terrain-tools-package/" target="_blank" className="underline">Unity Blog Post</a>
                  <br /><br />
                  The Unity Asset Store: <a href="https://assetstore.unity.com/3d" target="_blank" className="underline">Click here</a>
                </p>
                <h1 id="3DObjects" className="font-medium text-3xl my-4">3D Objects</h1>
                <p>
                  Beyond using 3D objects found in the Unity asset store, users may also want to import 3D objects created using third party software. Luckily, Unity provides import support for a wide range of 3D <a href="https://docs.unity3d.com/Manual/3D-formats.html" target="_blank" className="underline">object file types</a>.

                  Once added to the OpenMaze project, 3D objects can be added to Scenes or referenced in the configuration file. When using a 3D object to build an environment, the location it’s saved within the project does not matter. However, any 3D object that is being referenced in the configuration file, must be saved in the 3D_Objects folder or subfolder (OpenMaze -> Assets -> Resources -> 3D_Objects).

                  To use a 3D object as a Goal or Landmark object, you must add a Collider component to it. This can be done in the Unity editor once the object has been added to the 3D_Objects folder. Navigate to the object in the project window and double click it to open it. Once open, click the Add Component button found at the bottom of the inspector window. When prompted with the Add Component window, enter “Collider” into the search field and select the appropriate 3D collider. Once a collider is added the object will behave as expected when you define it as a Goal or Landmark in the configuration file.

                  Click <a href="https://www.youtube.com/watch?v=20UysrQwdgU&feature=youtu.be" target="_blank" className="underline">here</a> for step-by-step video tutorial on how to add 3D objects to your projects and use them as Goals/Landmarks.
                </p>
                <h1 id="imageFiles" className="font-medium text-3xl my-4">Image Files</h1>
                <p>
                Image files can also be imported into an OpenMaze project to be used as instruction screens or Goal and Landmark objects by referencing them in the configuration file. All image files referenced in the configuration file must be added to the 2D_Objects folder or subfolder (OpenMaze -> Assets -> StreamingAssets -> 2D_Objects). While we have extensively tested .png files and recommend their use when building an OpenMaze experiment, Unity does support a wide range of image  <a href="https://docs.unity3d.com/Manual/ImportingTextures.html" target="_blank" className="underline">file formats</a>.
                </p>
                <h1 id="audioFiles" className="font-medium text-3xl my-4">Audio Files</h1>
                <p>
                Audio files can be added to Goal objects to provide feedback to your participant when they have been collected. All sound files referenced in the configuration file must be added to the Sounds folder or subfolder (OpenMaze -> Assets -> Resources -> Sounds). While we have extensively tested .wav files and recommend their use when building an OpenMaze experiment, Unity does support a wide range of <a href="https://docs.unity3d.com/Manual/AudioFiles.html" target="_blank" className="underline">audio file formats</a>.
                </p>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="introduction">
                <p className="font-sm font-hairline opacity-75">Experiment Configuration Files</p>
                <h1 id="jsonFiles" className="font-medium text-3xl my-4">JSON Files</h1>
                <p>
                OpenMaze uses JavaScript Object Notation (JSON) files for scripting experiments. JSON files store simple data structures and objects using an intuitive parameterization system, allowing you to create a 3D experiment without any prior coding experience. Further, Multiple configuration files can be created for the same experiment to provide counterbalancing or accommodate multiple experiment conditions. Upon launching an experiment in the Unity editor or via an experiment application file (see Building Your Experiment below) you will be prompted to select a configuration file of your choosing.
                <br />
                <br />
                Note: configuration files must comply with .json syntax. If you encounter an unexpected error when attempting to run a configuration file, test to ensure that it is a valid .json file. To do this we recommend adding a .json <a href="https://en.wikipedia.org/wiki/Lint_(software)" target="_blank" className="underline">lint></a> to the text editing software you are using to create/edit configuration files (for <a href="https://packagecontrol.io/packages/Pretty%20JSON" target="_blank" className="underline">sublime</a>). Alternatively, you can copy and paste your .json file text into an <a href="https://jsonlint.com/" target="_blank" className="underline">online .json lint</a>.

                
                </p>
                <h1 id="configurationFileOverview" className="font-medium text-3xl my-4">Configuration File Overview</h1>
                <p>
                The configuration file is broken into 6 main sections: Settings, Blocks, Trials, Goals, Landmarks, and Enclosures. The Settings section provides a set of parameters that allows you to make quick changes to the overall experiment. The latter 5 sections are organized in a hierarchical structure such that Blocks are created to dictate Trial presentation order, and Trials reference Goal, Landmark and Enclosure objects to create experiment tasks. See the corresponding sections below for a detailed review.
                <br /><br />
                Note: A configuration file template can be found in the OpenMaze project folder (OpenMaze -> Configuration_Files -> Configuration Template)
                </p>
                <img src={ConfigurationHeirarchy} alt="" className="w-full my-4" />
              </div>


              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="introduction">
                <p className="font-sm font-hairline opacity-75">Configuration File Sections</p>
                <h1 id="settings" className="font-medium text-3xl my-4">Settings</h1>
                <p>
                The setting section provides a small number of parameters which can be used to change data recording frequency, ignore input form the user upon trial onset, turn on/off timing analysis features, or manipulate characteristics of how participants view and move within the environment. 

                </p>
                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr>
                        <th className="p-4">Parameter Name</th>
                        <th className="p-4">Parameter Definition Format</th>
                        <th className="p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2">“OutputTimesPerSecond”:</td>
                        <td className=" px-4 py-2">30</td>
                        <td className=" px-4 py-2">Used to adjust how often per second the experiment records a new line of data to the output file. Output is intrinsically linked to the Unity update function which is called during each render cycle (see Output Timing below) This number can be used to reduce the output rate below the update cycle rate, but not above.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“IgnoreUserInputDelay”</td>
                        <td className=" px-4 py-2">0.5</td>
                        <td className=" px-4 py-2">Time in seconds after each trial onset that input will be ignored. We recommend setting this variable to > 0 to ensure that accidental key presses do not cause trials to be skipped when consecutive trials use the same TrialEndKey (see Trials section below).</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“TimingVerification”</td>
                        <td className=" px-4 py-2">True or False</td>
                        <td className=" px-4 py-2">When set to true, a small box will be added to the bottom corner of the experiment which will alternate between white and black upon trial onsets. Using a photodiode experimenters can compare visual onset to the onset time recorded in the output file. (See Output Timing)</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“CharacterData”</td>
                        <td className=" px-4 py-2">{'{“Height”: 2,...}'}</td>
                        <td className=" px-4 py-2">A set of parameters used to set the virtual characteristics of your participants avatar.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“Height”</td>
                        <td className=" px-4 py-2">2</td>
                        <td className=" px-4 py-2">The height of the participants viewing angle within the environment.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“MovementSpeed”</td>
                        <td className=" px-4 py-2">5</td>
                        <td className=" px-4 py-2">How fast the participant moves within the environment when pressing the forward and backward movement input keys.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“RotationSpeed”</td>
                        <td className=" px-4 py-2">75</td>
                        <td className=" px-4 py-2">How fast the participant rotates within the environment when pressing the left and right rotation input keys.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“DistancePickup”</td>
                        <td className=" px-4 py-2">2</td>
                        <td className=" px-4 py-2">Can be used for tasks that place participants randomly within an Enclosure. This will ensure the participant is placed no closer than the number defined to a Goal object.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“GoalRotationSpeed”</td>
                        <td className=" px-4 py-2">0</td>
                        <td className=" px-4 py-2">When 3D Goals are placed into an environment they will rotated 360 degrees per the value of time (in seconds) set by this parameter. When set to 0 3D goals will not rotate.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h1 id="blocks" className="font-medium text-3xl my-4">Blocks</h1>
                <p>
                  Click <a href="https://www.youtube.com/watch?v=Nqj0VUgi4gE" target="_blank" className="underline">Here</a> for a step-by-step video tutorial on how to create Blocks in the configuration file.
                  <br /><br />

                  <b>Overview</b>
                  <br /><br />
                  The “BlockOrder” provides the overarching organizational structure for the experiment by dictating the order in which Blocks of Trials are called. The numbers in the “BlockOrder” refer to Block index numbers. In the example below, the Block with index = 1 is called, followed by the Block with index = 3, followed by the Block with index = 2.
                  <br /><br />
                  “BlockOrder”: [1,3,2]
                  <br /><br />
                  Each Blocks is defined within the “Blocks” list using a curly set of brackets {}. The parameters contained within the {} dictate how it will function when it is called in “BlockOrder”. Indices are automatically assigned to Blocks based on the order they are defined and begin at 1. At minimum each Block definition must contain a “TrialOrder” list which dictates the order in which Trials are called when the Block is executed. In the example below three blocks have been defined and can be called in the “BlockOrder” by referencing their index.
                  
                  


                 
                </p>
                <div className="rounded-lg my-8 overflow-x-auto text-center">
                  <table className="table-auto">
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2">“Blocks” : </td>
                        <td className=" px-4 py-2">{'[{“TrialOrder” : [1,2]},'}</td>
                        <td className=" px-4 py-2">{'{“TrialOrder” : [3,4]},'}</td>
                        <td className=" px-4 py-2">{'{“TrialOrder” : [5]}]'}</td>
                      </tr>
                      <tr className="font-bold">
                        <td className=" px-4 py-2"></td>
                        <td className=" px-4 py-2">Index = 1</td>
                        <td className=" px-4 py-2">Index = 2</td>
                        <td className=" px-4 py-2">Index = 3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                In addition to the “TrialOrder” list, other parameters can be defined within a Block definition to augment it’s functionality, for example allowing you to randomize the order Trials are presented to your participants. It is important to note that each parameter contained in a Block definition must be separated by a comma. We review these additional parameters in detail below.
                <br /> <br />
                <b>Configuration File Example</b>
                </p>
                <img src={BlocksCode} alt="" className="w-full my-4" />
                <b>Block Parameters</b>
                <br />
              
              <div className="border text-white border-white rounded-lg my-8 overflow-x-auto">
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr>
                        <th className="p-4">Parameter Name</th>
                        <th className="p-4">Parameter Definition Format</th>
                        <th className="p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2">“BlockOrder”</td>
                        <td className=" px-4 py-2">[1,2,2,...]</td>
                        <td className=" px-4 py-2">Dictates the order in which Blocks will be presented when the experiment is launched. Numbers in this list correspond to the indice of the Block as it is defined in “Blocks”: {`[{1},{2},..,{n}]`}. Blocks can be presented in any order and called multiple times within the BlockOrder list.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Blocks”</td>
                        <td className=" px-4 py-2">
                          {`[{“TrialOrder”:[1,3,4],...},`} <br />
                            …, <br />
                          {`{“TrialOrder”:[3,2,1],...}]`}
                          </td>
                        <td className=" px-4 py-2">An ordered list of Block definitions. Indexing begins at 1 with the first Block defined. Each Block is defined within a set of curly brackets {} and must contain the “TrialOrder” parameter to function. Other parameters described below can be added to provide additional functionality.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“Block #” 
where # can be replaced with the Block index
</td>
                        <td className=" px-4 py-2">“Description”</td>
                        <td className=" px-4 py-2">A descriptive parameter that can be added to a Block definition to help track indices and describe the function of the Block. Note: any parameter of the format “String” : variable, can be added to a Block  definition to serve as a marker within the configuration file as long as the String is not already defined as another parameter.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“TrialOrder”</td>
                        <td className=" px-4 py-2">[1,4,5,5,...]</td>
                        <td className=" px-4 py-2">An ordered list of Trial indices. Trials can be presented in any order and called multiple times within the TrialOrder list.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“Replacement”</td>
                        <td className=" px-4 py-2">0 or 1</td>
                        <td className=" px-4 py-2">Random selection is executed with replacement (1) or without replacement (0)</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“RandomlySelect”</td>
                        <td className=" px-4 py-2">
                          {`[{“Order”: [1,2]},
                          …,
                          {“Order”: [3,4]}] `}</td>
                        <td className=" px-4 py-2">A list of Trial orders. WhenTrial index 0 is called in “TrialOrder'' one of the “Order” lists is randomly selected. When an “Order” is selected, Trials are presented in the order they are defined in the “Order” list.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“Order”</td>
                        <td className=" px-4 py-2">[1,4,5,...]</td>
                        <td className=" px-4 py-2">An ordered list of trial indices. Each list must contain at least 1 trial, with no upper limit.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h1 id="trials" className="font-medium text-3xl my-4">Trials</h1>
                <p>
                  Click <a href="https://www.youtube.com/watch?v=Nqj0VUgi4gE" target="_blank" className="underline">Here</a> for a step-by-step video tutorial on how to create Blocks in the configuration file.
                  <br /><br />
                  <b>Overview</b>
                  <br /><br />
                  Trials are defined within the “Trials” list parameter in the configuration file. Like Blocks, each Trial is defined by providing a set of parameter definitions within a set of curly brackets {`{}`}. Trial indices - used to call the trial in the Blocks section -  correspond to the order in which Trials are defined in the “Trials” list, with indexing starting at 1.
                  <br /><br />
                  Currently, OpenMaze allows experimenters to create two types of Trials:
                  <ol class="list-decimal list-outside p-4">
                    <li>Instruction Trials
                    <br /><br />
                    Instructional Trials display image files (.png, .jpeg, etc.) to the participant and can be used for presenting instructions, cues, or other static 2D stimuli. Instructional Trials must contain the parameters “Instructional” and “FileLocation” (see below for more information). Click Here for a step-by-step video tutorial on how to create Instruction Trials in the configuration file.
                    <br /><br />
                    </li>
                    <li>3D Trials
                    <br /><br />
                    3D Trials provide the infrastructure for your participants to navigate and perform tasks within the 3D environments you’ve created in Unity. A variety of parameters can be added and defined within a Trial definition to customize it’s functionality. These parameters and their functions are described in detail below. Click <a href="https://www.youtube.com/watch?v=Nqj0VUgi4gE" target="_blank" className="underline">Here</a> for step-by-step video tutorials on how to create 3D Trials in the configuration file.
                    </li>
                  </ol>
                  <br /><br />
                  <b>Configuration File Example</b>
                  <img src={TrialsCode} alt="" className="w-full my-4" />
                  <b>Parameters Shared By Both Instructional and 3D Trials</b>
                  <div className="border border-white rounded-lg my-8 overflow-x-auto">
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr>
                        <th className="p-4">Parameter Name</th>
                        <th className="p-4">Parameter Definition Format</th>
                        <th className="p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2">“Trials”</td>
                        <td className=" px-4 py-2">
                          {`[{“TrialTime”: 3,...}, 
                          …, 
                          {“TrialTime”: 60,...}]`}</td>
                        <td className=" px-4 py-2">An ordered list of defined Trials. Trial indices are automatically assigned based on the order in which the Trials are defined in this list, with indexing beginning at 1. Indices are used when defining experiment Blocks.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Trial # - where # can be replaced with the Trial index”</td>
                        <td className=" px-4 py-2">“Description”</td>
                        <td className=" px-4 py-2">A descriptive parameter that can be added to a Trial definition to help track indices and describe the function of the Trial. Note: any parameter of the format “String” : variable, can be added to a Trial  definition to serve as a marker within the configuration file as long as the String is not already defined as another parameter.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“TrialTime”</td>
                        <td className=" px-4 py-2">60</td>
                        <td className=" px-4 py-2">Length of trial in seconds. Trial will time out if “Quota” parameter value is not met and “TrialEndKey” is not pressed. Upon timeout the experiment will proceed to the next Trial as defined in the Block section.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“TrialEndKey”</td>
                        <td className=" px-4 py-2">“Space”</td>
                        <td className=" px-4 py-2"><a href="https://docs.unity3d.com/ScriptReference/KeyCode.html" target="_blank" className="underline">Unity API key code</a>. When the defined key is pressed the experiment will proceed to the next Trial as defined in the Block section.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <b className="mt-8">3D Trial - Specific Parameters</b>
                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr>
                        <th className="p-4">Parameter Name</th>
                        <th className="p-4">Parameter Definition Format</th>
                        <th className="p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className=" px-4 py-2">“Scene”</td>
                        <td className=" px-4 py-2">3</td>
                        <td className=" px-4 py-2">This number refers to the Scene build number of the 3D environment you wish to use for the Trial. 
Scene numbers can be found beside the name of the Scene  in the Unity editor Build Settings (File -> Build Settings…). To add new Scenes click the “Add Open Scenes” button in the Build Settings window when the Scene is open in the Unity editor. Note: It is important that +Launch Experiment and Loading Scene always occupy Scenes 0 and 1 respectively.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Header”</td>
                        <td className=" px-4 py-2">“Display This Text”</td>
                        <td className=" px-4 py-2">The string provided will be displayed at the top of the screen for the participant for the duration of the Trial.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">StartPosition</td>
                        <td className=" px-4 py-2">[0,0]</td>
                        <td className=" px-4 py-2">Defines the starting position of the participant within the Scene in the format [x,z] which corresponds to the x and z position within the Unity environment.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">StartFacing</td>
                        <td className=" px-4 py-2">60</td>
                        <td className=" px-4 py-2">Defines the direction that the participant will be facing in the environment when the trial begins. This corresponds to the y rotation parameter within the Unity environment.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">ActiveGoals</td>
                        <td className=" px-4 py-2">[1,3,...]</td>
                        <td className=" px-4 py-2">Numbers in this list correspond to the indices of Goals as they are defined in the “Goals” list of the configuration file. Goals included in this list will be visible to the participant and will be collected when collided with by the participant. The order of indices has no impact on how the Goals are called into the Trial.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">InactiveGoals</td>
                        <td className=" px-4 py-2">[1,3,...]</td>
                        <td className=" px-4 py-2">Numbers in this list correspond to the indices of Goals as they are defined in the “Goals” list of the configuration file. Goals included in this list will be visible to the participant but cannot be collected.The order of indices has no impact on how the Goals are called into the Trial.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">InvisibleGoals</td>
                        <td className=" px-4 py-2">[1,3,...]</td>
                        <td className=" px-4 py-2">Numbers in this list correspond to the indices of Goals as they are defined in the “Goals” list of the configuration file. Goals in this list will be placed into the environment but remain  invisible to the participant. These Goals will be collected when collided with by the participant.The order of indices  has no impact on how the Goals are called into the Trial.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">Quota</td>
                        <td className=" px-4 py-2">5</td>
                        <td className=" px-4 py-2">This number corresponds to the number of ActiveGoals or InvisibleGoals that must be collected to trigger the end of the Trial. Upon reaching the collection Quota the experiment will proceed to the next Trial as defined in the Block section.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“LandMarks”</td>
                        <td className=" px-4 py-2">[1,3,...]</td>
                        <td className=" px-4 py-2">Numbers in this list correspond to the indices of Landmarks as they are defined in the “Landmarks” list in the configuration file. Landmarks included in this list will be visible to the participant but cannot be collected. Note: this parameter must be entered with capitalization of the “L” and the “M”. This is due to the “Landmarks” list parameter used to define Landmarks.The order of indices has no impact on how the Landmarks are called into the Trial.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Enclosure”</td>
                        <td className=" px-4 py-2">1</td>
                        <td className=" px-4 py-2">A single number which corresponds to the index of an Enclosure defined in the “Enclosures” list. Use this parameter to instantiate the desired Enclosure within the environment.When this parameter is left out of a Trial definition, no enclosure will be added to the environment.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                </p>
                <h1 id="goalsLandmarks" className="font-medium text-3xl my-4">Goals & Landmarks</h1>
                <p>
                  <b>Overview</b>
                  <br /><br />
                  Goals/Landmarks are defined within the “Goals”/“Landmarks” list parameter in the configuration file. Like Blocks and Trials, each Goal/Landmark is defined by providing a set of parameter definitions within a set of curly brackets {}. Goal/Landmark indices - used to call them within a Trial definition -  correspond to the order in which they are defined within their respective list with indexing beginning at 1. 
                  <br /><br />
                  To ensure accurate presentation of Goal/Landmark objects within your environments it is recommended that you place the object within the Scene at the desired location using the Scene View window. This will allow you to adjust the object's Position, Rotation, and Scale using the object manipulation tools found in the top left of the Unity editor. Once the object is placed correctly in the Scene, record the object's Position, Rotation, and Scale parameters (found in the Unity editor Inspector window when the object is selected) into the corresponding fields in the configuration file definition. Once this is complete you can delete the object from the Scene and call it on a trial-by-trial basis using the configuration file.
                  <br /><br />
                  Note: When 2D images are defined as Goals/Landmarks they rotate dynamically to ensure that they always face the participants viewing angle. 2D object definitions do not require the Rotation parameter.
                  <br /><br />
                  <b>Configuration File Example: Goals</b>
                </p>
                <img src={GoalsCode} alt="" className="w-full my-4" />
                <p>
                  <b>Using Goals to Create Experiment Tasks</b>
                  <br /><br />
                  Goals provide a flexible tool for creating a variety of experiment task designs. Some examples include:
                  <br /><br />
                  <b>Forming object-place associations</b>
                  <br /><br />
                  Visible Goals (i.e. AcitveGoals) can first be used to teach object-location associations that are later tested using invisible Goals (i.e. InvisibleGoals).
                  <br /><br />
                  <b>Creating waypoints</b>
                  <br /><br />
                  For navigation tasks, invisible Goal (i.e. InvisibleGoals) shapes can serve as waypoints that terminate the Trial or provide feedback once reached.
                  <br /><br />
                  <b>Create spatial reward distributions</b>
                  <br /><br />
                  The same object can be defined as multiple Goal objects and called multiple times within the same trial and in different locations allowing experimenters to create location distributions.
                  <br /><br />
                  <b>Calling multiple Goals</b>
                  <br /><br />
                  Experimenters can include multiple Goals of any type (Active, Inactive, Invisible) in a scene to assess, for example, foraging behavior or multi-option decision making.          
                </p>
                <img src={LandmarksCode} alt="" className="w-full my-4" />
                <p>
                  <b>Landmark Uses</b>
                  <br/> <br/> 
                  Landmark objects are called into a Scene as passive stimuli (i.e., participants cannot interact with them). This allows you to easily manipulate environment conditions and/or counterbalance the placement of objects. Further, you can use Landmark objects to add or remove environment cues during different phases of the experiment (e.g., learning vs. testing). You may also choose to create custom 3D model mazes (e.g.: ., radial, T-maze, etc.). These maze models can then be defined as Landmarks in the configuration file allowing them to be manipulated (e.g.: ., color, rotation, position) and called it into any Scene.
                  <br/> <br/> 
                  <b>Parameters shared by both Goals and Landmarks</b>
                </p>
                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr>
                        <th className="p-4">Parameter Name</th>
                        <th className="p-4">Parameter Definition Format</th>
                        <th className="p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2">“Goals” / ”Landmarks”</td>
                        <td className=" px-4 py-2">{
                        `[{“Type”: “3D”,...},
                          ….,
                          {“Type”: “3D”,...}]`
                          }</td>
                        <td className=" px-4 py-2">Ordered list of defined Goals/Landmarks. Indices are used when defining Trials to place Goals/Landmarks into an environment via the corresponding Trial parameter. Indexing begins at 1</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Goal  #” / ”Landmark #” 
where # can be replaced with the Goal/Landmark index</td>
                        <td className=" px-4 py-2">“Description”</td>
                        <td className=" px-4 py-2">Descriptive parameter that can be added to a Goal/Landmark definition to help track indices and describe the function of the object. Note: any parameter of the format “String” : variable, can be added to a Goal/Landmark definition to serve as a marker within the configuration file as long as the String is not already defined as another parameter.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">Type</td>
                        <td className=" px-4 py-2">“3D” or “2D”</td>
                        <td className=" px-4 py-2">Defines whether the object being defined is a 3D object or a 2D image. Directs OpenMaze to look for the object in the associated folder (i.e. Assets -> Resources -> 3D_Objects, or Assets->StreamingAssets->2D_Objects).</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">Object</td>
                        <td className=" px-4 py-2">“3D_Model”
“Image.png”
</td>
                        <td className=" px-4 py-2">The name of the Object is saved as in the folder. Objects contained in subfolders within the 2D_Object or 3D_Objects folders can be used by including the directory extension (e.g. “subfoldername/Apple.png”). Note: file extensions (e.g. .png, .jpg, etc.) must be attached to the file name when defining 2D Objects.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">Color</td>
                        <td className=" px-4 py-2">“ffffff”</td>
                        <td className=" px-4 py-2">A 6 digit HEX color code. When instantiated into the Environment Scene the object will appear as the color defined here. Click <a href="" target="_blank" className="underline">here</a> to find HEX color codes for your objects.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">Position</td>
                        <td className=" px-4 py-2">[0,0,0]</td>
                        <td className=" px-4 py-2">The placement position of the object within the environment. Corresponds to [x,y,z] Position parameters in Unity Scene.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">Rotation</td>
                        <td className=" px-4 py-2">[30,60,90]</td>
                        <td className=" px-4 py-2">The placement orientation of the object within the environment. Corresponding to Rotation about the corresponding [x,y,z] axis of the object. Note: This parameter is not used when type is set to  “2D”, as 2D objects dynamically rotate to always face the participant.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">Scale</td>
                        <td className=" px-4 py-2">[1,1,1]</td>
                        <td className=" px-4 py-2">Size of the goal. Corresponds to [x,y,z] Scale parameters in of the object within the Unity Scene.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <b className="mt-8">Goals - Specific Parameter</b>
                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr>
                        <th className="p-4">Parameter Name</th>
                        <th className="p-4">Parameter Definition Format</th>
                        <th className="p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2">Sound</td>
                        <td className=" px-4 py-2">“sound”</td>
                        <td className=" px-4 py-2">The name of the sound file in the Sounds folder (Assets->Resources->Sounds). Upon collision with the Goal the sound file will play. Sound files contained in subfolders within the Sounds folder can be used by including the directory extension (e.g. “subfoldername/sound”). </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                <p>
                <h1 id="enclosures" className="font-medium text-3xl my-4">Enclosures</h1>
                  <br />
                  Enclosures are defined within the “Enclosures” list parameter in the configuration file. Each Enclosure is defined by providing a set of parameter definitions within a set of curly brackets {`{}`}. Enclosure indices - used to call them within a Trial definition -  correspond to the order in which they are defined with indexing beginning at 1.
                  <br /><br />
                  <b>Configuration File Example</b>
                  <img src={EnclosuresCode} alt="" className="w-full my-4" />
                  <b>Enclosure Uses</b>
                  <br /><br />
                  Enclosures can be used as an alternative to building custom 3D models to serve as mazes. Enclosures can be used to restrict participant movement within a simple shape within the environment. Enclosures can be customized in several ways, including their size, number of walls, wall height/colour, and ground pattern/colour. With this level of customization, Enclosures can be parametrically morphed between two endpoints.
                  <br /><br />
                  <b>Enclosure Parameters</b>
                </p>
                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr>
                      <th className="p-4">Parameter Name</th>
                        <th className="p-4">Parameter Definition Format</th>
                        <th className="p-4">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-dark-light">
                        <td className="p-4">“Enclosures”</td>
                        <td className="p-4">{`[{“Sides”:4,...},
                        .... [{“Sides”:6,...}]`}</td>
                        <td className="p-4">Ordered list of defined Enclosures. Indices are used when defining a Trial to instantiate an Enclosure into a Scene.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">”Enclosure #” <br />where # can be replaced with the Trial index</td>
                        <td className=" px-4 py-2">“Description”</td>
                        <td className=" px-4 py-2">Descriptive parameter that can be added to an Enclosure definition to help track indices and describe the Enclosure. Note: any parameter of the format “String” : variable, can be added to an Enclosure definition to serve as a marker within the configuration file as long as the String is not already defined as another parameter.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Sides”</td>
                        <td className=" px-4 py-2">5</td>
                        <td className=" px-4 py-2">The number of sides of the enclosure which defines its shape (ex. 4 = square, 5 = pentagon, 6 = hexagon, etc.).</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“Radius”</td>
                        <td className=" px-4 py-2">15</td>
                        <td className=" px-4 py-2">Used to set the size of the Enclosure. Walls are created tangent to the circle defined by the radius parameter.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“WallHeight”</td>
                        <td className=" px-4 py-2">4.5</td>
                        <td className=" px-4 py-2">Sets the height of the Enclosure walls.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“WallColor”</td>
                        <td className=" px-4 py-2">“00ff00”</td>
                        <td className=" px-4 py-2">A 6 digit HEX color code which defines the color of the Enclosure walls. Enclosures can be made invisible to the participant by setting this parameter to “ffffff00”.  Click here to find HEX color codes.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“GroundTileSides”</td>
                        <td className=" px-4 py-2">40</td>
                        <td className=" px-4 py-2">Works similar to “Sides” parameter. Allows experimenters to customize the shape of the Enclosure floor tiles.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">GroundTileSize</td>
                        <td className=" px-4 py-2">0.5</td>
                        <td className=" px-4 py-2">A number between 0-1 which manipulates the size of each ground tile. Setting this parameter to 0 will remove tiling from the enclosure floor.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">GroundColor</td>
                        <td className=" px-4 py-2">“ff0000”</td>
                        <td className=" px-4 py-2">A 6 digit HEX color code which defines the color of the Enclosure tiles. The Enclosures floor can be made transparent by setting this parameter to “ffffff00”. Click here  to find HEX color codes.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>

                <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="introduction">
                <p className="font-sm font-hairline opacity-75">Input Devices</p>
                <h1 id="overview" className="font-medium text-3xl my-4">Overview</h1>
                <p>
                By default, OpenMaze restricts participant movement to forward, backward and left/right rotation using input from the Up, Down, Left, and Right arrows found on a standard keyboard. However, these settings can be easily adjusted in the Unity editor Project Settings (Edit ->  Project Settings) under the Input tab. Additionally, input controls can be adjusted after the project is built by clicking the Input tab on the run settings window after launching the experiment application (see Building Your Experiment section below). Beyond using a keyboard for input, Unity can be calibrated to receive input from a variety of other <a href="https://docs.unity3d.com/Manual/Input.html" target="_blank" className="underline">devices</a>.
                  
                  
                </p>
                <h1 id="specializedDevices" className="font-medium text-3xl my-4">Specialized Devices</h1>
                <p>
                MR input devices:
Calibration of MR devices can be done by adapting the controller inputs in the Project Settings before the experiment is built or by making changes to the input responses upon launching an experiment application by clicking on the Input tab.
 <br /><br />
While Unity does provide support for other specialized input devices - for example VR - It may be necessary to download support packages for these devices from the Unity asset store. It is likely that such specialized input devices will require changes to the OpenMaze source code. If you have made changes to the OpenMaze source code to accommodate specialized input devices, we encourage you to share your code so that such functionality can be added and used by other experimenters.  

                </p>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="introduction">
                <p className="font-sm font-hairline opacity-75">Output Data</p>
                <h1 id="outputFiles" className="font-medium text-3xl my-4">Output Files</h1>
                <p>
                  
                  OpenMaze output is captured by Comma Separated Values (.csv) files. Each time the experiment is executed a .csv file is created and named with the concatenated variables entered in the +Launch Experiment Scene fields and a time stamp in the following format:
                  <br /><br />
                  <b className="text-center">StartField1_StartField2_StartField3_StartField4_TimeStamp.csv</b>
                  <br /><br />
                  By default, output includes: Sessional data entered in the start fields; Block and Trial indices and order; Scene indices; Goals position; Goal collision; participant Position (x,y,z) and Facing (y rotation); and Key Presses. Each output line is marked with a timestamp generated by the internal computer system time.
                
                </p>
                <h1 id="outputTiming" className="font-medium text-3xl my-4">Output Timing</h1>
                <p>
                OpenMaze data recording is intrinsically tied to the <a href="https://docs.unity3d.com/ScriptReference/MonoBehaviour.Update.html" target="_blank" className="underline">Unity Update() function</a>. By default Unity uses VSync, which executes the Update() function between each screen refresh. This ensures that the data captured by the output file is synced as closely as possible to what is being presented on the screen to the participant. It should be noted that refresh rate is dictated not only by the monitor being used, but also by the GPU and/or CPU of the computer running the experiment. To ensure that output is being recorded at a rate suitable for analysis we recommend running your experiment on the computers you intend on using to run participants and analyzing the data files that are produced. Please refer to the Timing Analysis section of the OpenMaze publication for more details regarding experiment output. 
                <br /><br />
Note: For experimenters using untested platforms or input devices, we recommend using the methods described <a href="https://github.com/DuncanLab/OpenMaze-Timing" target="_blank" className="underline">here</a> to ensure that output is being accurately recorded.

                  </p>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="introduction">
                <p className="font-sm font-hairline opacity-75">Building Your Experiment</p>
                <h1 id="buildingOverview" className="font-medium text-3xl my-4">Overview</h1>
                <p>
                  
                  While it is possible to run your experiment exclusively through the Unity editor, this is not recommended as it is computational expensive and requires that Unity be installed on all testing computers. Instead, once an experiment has been created and tested in the Unity editor, it can be built into an application that can be run independent of any software (including Unity). Building an experiment is a simple process that can be done through the Unity editor Build Settings (File -> Build Settings…). Conveniently, Unity allows you to build your experiment application for a variety of platforms, regardless of the platform you’ve been using to design the experiment. This allows you to, for example, code the experiment using a windows device and export it as an application that can be run on a Mac machine, or vice-versa. Built Applications perform the same way they appear in the Game View window when pressing the play button when the +Launch Experiment Scene is open in the Unity editor. Upon executing the application you will be prompted with a file explore allowing you to choose the configuration file of your choosing. Upon choosing a configuration and using the Spacebar to proceed past the start screen, an output file will be automatically generated and data will be recorded until the application is closed. 

                </p>
                <h1 id="platformSupport" className="font-medium text-3xl my-4">Platform Support</h1>
                <p>
                At this time, OpenMaze experiment applications have  been extensively tested on the macOS, Windows operating systems. However, you should be aware that Unity supports a variety of additional build platforms. These include: iOS, Android, WebGL, PlayStation 4, PlayStation Vita, Xbox One, Wii U, 3DS, Oculus Rift, Google Cardboard, SteamVR, PlayStation VR, Gear VR, Windows Mixed Reality, Daydream, Android TV, Samsung Smart TV, tvOS, Nintendo Switch, Fire OS, Facebook Gameroom, Apple's ARKit, Google's ARCore, and Vuforia. While we expect that exporting OpenMaze experiments for any of the untested platforms may require changes to the Unity project settings or perhaps the OpenMaze codebase, we look forward to feedback from users exploring these build options. 
                </p>
                <h1 id="buildInstructions" className="font-medium text-3xl my-4">Build Instructions</h1>
                <p>
                To build your experiment, please follow the detailed instructions below or watch our experiment building <a href="https://openmaze.duncanlab.org/tutorials#step5" target="_blank" className="underline">tutorial video</a>.
                </p>
                <br />
                <p>
                <b>Step 1</b>: Check that the build platform support you require has been installed in Unity. To do this open the Unity Hub application and click on the Installations tab. If the build platform has been installed the build platform will be within the box labelled with the the Unity install version you have been using to code your experiment. If the build platform icon is not present, click the three dots ⋮
located in the top right corner of the box and click add modules. When prompted, select the target build platform you wish to build your application for and click next. 
                </p>
                <br />
                <p>
                <b>Step 2</b>: Create an empty folder naming it whatever you’d like. This will be used to store your experiment application and other folders necessary for running the application.
                </p>
                <br />
                <p>
                <b>Step 3</b>: Open your experiment project in the Unity editor and open the  Build Settings (File -> Build Settings…). 

                </p>
                <br />
                <p>
                <b>Step 4</b>: Ensure that the proper build platform is selected from the Target Platform dropdown menu.

                </p>
                <br />
                <p>
                <b>Step 5</b>: Click the Build button at the bottom of the Build Settings menu and select the empty folder you created when prompted with the file browser window. 

                </p>
                <br />
                <p>
                <b>Step 6</b>: Once the application file is built, ensure that it appears in the empty folder you have created. In some cases the application may appear in the folder containing the empty folder you created. If this is the case simply move the application into the folder you created. 
                </p>
                <br />
                <p>
                <b>Step 7</b>: copy and paste the Configuration_Files folder from the OpenMaze project folder into the folder containing your newly built application. Note: the folder containing your configuration files must be named Configuration_Files to be promoted into the folder upon launching the application.

                </p>
                <br />
                <p>
                <b>Step 8 (for macOS application)</b>: Copy the StreamingAssets folder found in the OpenMaze Project folder (Assets -> StreamingAssets) and navigate back to the folder containing the application and Configuration_Files folder. If you are using a Mac machine right-click the application and select Show Contents this will reveal a sub folder named Contents, paste the StreamingAssets folder into the Contents folder. If you have built the Mac application on a Windows device, open the application folder created by the build. Open the folder labelled contents and paste the StreamingAssets folder inside. 

                </p>
                <br />
                <p>
                <b>Step 8 (for Windows applications)</b>: Copy the StreamingAssets folder found in the OpenMaze Project folder (Assets -> StreamingAssets) and paste it into the folder containing your experiment application. 

                </p>
                <br />
                <p>
                <b>Step 9</b>: Test the application on a device running the target platform by double-clicking it. If you have followed the instruction above correctly the +Launch Experiment start screen will be displayed full screen and  you will be prompted with a file browser displaying the Configuration_Files folder. Select your experiment configuration file you wish to run. Enter in any information you wish to in the StartFields provided and click the spacebar. If upon pressing the spacebar you are met with a blank screen rather than the expected instruction screen, review and ensure that you have completed Step 8 correctly.   
                </p>
                <br />
                <p>
                <b>Step 10</b>: After running the experiment navigate back to the folder containing the application. There should now be a folder named Assets that was not there prior to launching the experiment the first time. Within this folder is a folder named Outputfiles~ this folder should contain the data file that was created by running the experiment in Step 9. 
                </p>
                <br />
                <p>
                  <b>
                Congrats! You have just built your experiment application folder. You can now copy the file folder you created onto any compatible computer and run your experiment independently of any other software.
                </b>
                </p>
                <br />
                <p>
                  <b>
                Note: we have encountered issues when application file folders are zipped or compressed and then expanded. It is recommended that you never zip or compress your application folder when transferring it between devices.
                </b>
                </p>
                <h1 id="postBuildChanges" className="font-medium text-3xl my-4">Post-Build Changes</h1>
                <p>It should be noted that once exported, the ability to make changes to the experiment is limited. While changes to any 2D image stimuli, are possible using the StreamingAssets folder changes to Scenes, 3D objects, and sound files cannot be made. Changing or creating new configuration files is also possible as long as changes do not require Scenes that were not added in the build settings, or 3D objects and sounds that were not present in the OpenMaze project folder at the time the application was built. 
</p>
              </div>


              

              {/* Section Template */}
              {/* <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="introduction">
                <p className="font-sm font-hairline opacity-75">Introduction</p>
                <h1 className="font-medium text-3xl my-4">Get Involved!</h1>
                <p>
                  <a href="" target="_blank" className="underline"></a>
                  <div className="border border-white rounded-lg my-8 overflow-x-auto">
                  <table className="table-auto">
                    <thead className="border-b">
                    <tr>
                        <th className="p-4"></th>
                        <th className="p-4"></th>
                        <th className="p-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2"></td>
                        <td className=" px-4 py-2"></td>
                        <td className=" px-4 py-2"></td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2"></td>
                        <td className=" px-4 py-2"></td>
                        <td className=" px-4 py-2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </p>
              </div> */}

              


            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default Documentation;