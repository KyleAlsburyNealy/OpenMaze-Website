import Layout from "../components/layout";
import DocumentSection from "../components/documentSection";
import DocsTable from "../components/docsTable";
import ReactPlayer from 'react-player'
import Openmaze from "../public/WebsiteLogoFinal.png";
import SceneSpace from '../public/SceneSpace.png';
import ConfigFile from '../public/ConfigFile.png';
import JSON from '../public/JSON.png';
import Unity from '../public/Unity.png';
import Blocks from '../public/Blocks.png';
import Enclosures from '../public/Enclosures.png';
import Goals from '../public/Goals.png';
import Landmarks from '../public/Landmarks.png';
import InstructionTrial from '../public/InstructionTrial.png';
import TaskTrial from '../public/TaskTrial.png';
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
    description: `The Configuration File is the most important file in the OpenMaze codebase when it comes to 
    designing your own experiments. Here you can change up almost everything about how OpenMaze works just by 
    changing a few numbers or words! The following section demonstrates exactly how to accomplish this.`
  },
  {
    id: "overview",
    subtitle: "Configuration File",
    title: "Overview",
    description: `The Configuration File is the most important file in the OpenMaze codebase when it comes to 
    designing your own experiments. Here you can change up almost everything about how OpenMaze works just by 
    changing a few numbers or words! The following section demonstrates exactly how to accomplish this.`
  },
  {
    id: "overview",
    subtitle: "Configuration File",
    title: "Overview",
    description: `The Configuration File is the most important file in the OpenMaze codebase when it comes to 
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
    step7: false,
    step8: false,
    step9: false
  };
  stepZeroOpen = () => {
    this.setState({ 
      step1: false,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      step6: false,
      step7: false,
      step8: false,
      step9: false 
    
    });

  };
  stepOneOpen = () => {
    this.setState({ 
      step1: !this.state.step1,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      step6: false,
      step7: false,
      step8: false,
      step9: false 
    
    });

  };
  stepTwoOpen = () => {
    this.setState({ 
      step1: false, 
      step2: !this.state.step2,
      step3: false,
      step4: false,
      step5: false,
      step6: false,
      step7: false,
      step8: false,
      step9: false });
  };
  stepThreeOpen = () => {
    this.setState({ 
      step1: false,
      step2: false,
      step3: !this.state.step3, 
      step4: false,
      step5: false,
      step6: false,
      step7: false,
      step8: false,
      step9: false });
  };
  stepFourOpen = () => {
    this.setState({       
      step1: false,
      step2: false,
      step3: false, 
      step4: !this.state.step4,
      step5: false,
      step6: false,
      step7: false,
      step8: false,
      step9: false });
  };
  stepFiveOpen = () => {
    this.setState({       
      step1: false,
      step2: false,
      step3: false, 
      step4: false,
      step5: !this.state.step5,
      step6: false,
      step7: false,
      step8: false,
      step9: false});
  };
  stepSixOpen = () => {
    this.setState({       
      step1: false,
      step2: false,
      step3: false, 
      step4: false,
      step5: false,
      step6: !this.state.step6,
      step7: false,
      step8: false,
      step9: false});
  };
  stepSevenOpen = () => {
    this.setState({       
      step1: false,
      step2: false,
      step3: false, 
      step4: false,
      step6: false,
      step6: false,
      step7: !this.state.step7,
      step8: false,
      step9: false});
  };
  stepEightOpen = () => {
    this.setState({ step1: false,
      step2: false,
      step3: false, 
      step4: false,
      step6: false,
      step6: false,
      step7: false,
      step8: !this.state.step8,
      step9: false});
  };
  stepNineOpen = () => {
    this.setState({ step1: false,
      step2: false,
      step3: false, 
      step4: false,
      step6: false,
      step6: false,
      step7: false,
      step8: false,
      step9: !this.state.step9});
  };

  render() {
    return (
      <>
        <div className="z-neg hidden md:block bg-dark-light fixed left-0 w-64 h-screen text-white"></div>
        <Layout docs="true">
          <div className="flex flex-wrap justify-center m-0 mx-4 md:mx-0">
            <div className="text-white bg-dark-light p-4 overflow-auto rounded-lg w-screen md:w-64 md:left-0">
              <div className="md:fixed   md:top-0 pt-4 text-left">
                {/* <p className="opacity-75 text-sm font-thin">Getting Started</p> */}
                <div className = "lg:overflow-auto h-screen">
                
                <a href = "/">
                <img  src={Openmaze} alt="" className="w-48 sm:w-56" /></a><br/>
                <p className="text-center text-gray-300 text-2xl">
                  <b>Contents</b>
              </p>

                <button onClick={this.stepZeroOpen} className="">
                <p className={sectionLinkStyle}>
                  <a href="#about">About</a>
                </p>
                </button><br />

                <button onClick={this.stepOneOpen} className="">
                <p className={sectionLinkStyle}>
                  <a href="#software">Software Setup</a>
                </p>
                </button>

                {this.state.step1 &&
                  <div>
                    <a href="#softwareS" className={subSectionLinkStyle}>Download and Setup</a>
                    <a href="#softwareU" className={subSectionLinkStyle}>The Unity Editor</a>
                  </div>
                }<br />

                <button onClick={this.stepTwoOpen} className="">
                <p className={sectionLinkStyle}>
                <a href="#scenes">Scenes</a>
                </p>
                </button>

                {this.state.step2 &&
                  <div>
                    <a href="#scenesAbout" className={subSectionLinkStyle}>What is a Scene?</a>
                    <a href="#scenesCreate" className={subSectionLinkStyle}>Creating a New Scene</a>
                    <a href="#scenesBuild" className={subSectionLinkStyle}>Building 3D Environments</a>
                    <a href="#scenesSpace" className={subSectionLinkStyle}>Scene Space</a>
                    <a href="#scenesNon" className={subSectionLinkStyle}>Scene Compatibility</a>
                    <a href="#scenesUse" className={subSectionLinkStyle}>Using Scenes</a>
                  </div>
                }<br />

                <button onClick={this.stepThreeOpen} className="">
                <p className={sectionLinkStyle}>
                <a href="#config">Configuration Files</a>
                </p>
                </button>

                {this.state.step3 &&
                  <div>
                    <a href="#config0" className={subSectionLinkStyle}>Overview</a>
                    <a href="#configSec" className={subSectionLinkStyle}>Sections</a>
                    <a href="#configEO" className={subSectionLinkStyle}>Formatting</a>
                    <a href="#configTemp" className={subSectionLinkStyle}>Configuration File <br/>Template</a>
                  </div>
                }<br />

              <button onClick={this.stepFourOpen} className="">
                <p className={sectionLinkStyle}>
                <a href="#experiments">Creating Experiments</a>
                </p>
                </button>

                {this.state.step4 &&
                  <div>
                    <a href="#configHeirarchy" className={subSectionLinkStyle}>Object Hierarchy</a>
                    <a href="#configG" className={subSectionLinkStyle}>Goals and Landmarks</a>
                    <a href="#configE" className={subSectionLinkStyle}>Enclosures</a>
                    <a href="#configT" className={subSectionLinkStyle}>Task Trials</a>
                    <a href="#configTasks" className={subSectionLinkStyle}>Experiment Design Ideas</a>
                    <a href="#configI" className={subSectionLinkStyle}>Instruction/Cue Screen <br/> Trials</a>
                    <a href="#configB" className={subSectionLinkStyle}>Blocks</a>
                    <a href="#configS" className={subSectionLinkStyle}>Settings</a>
                  </div>
                }<br />

                <button onClick={this.stepFiveOpen} className="">
                <p className={sectionLinkStyle}>
                <a href="#test">Testing Experiments</a>
                </p>
                </button>

                {this.state.step5 &&
                  <div>
                    <a href="#testC" className={subSectionLinkStyle}>Running <br/>Configuration Files</a>
                    <a href="#testU" className={subSectionLinkStyle}>Testing Experiments <br/> in the Unity Editor</a>
                    <a href="#testT" className={subSectionLinkStyle}>Troubleshooting</a>
                  </div>
                }<br />

                <button onClick={this.stepSixOpen} className="">
                <p className={sectionLinkStyle}>
                <a href="#export">Exporting Experiments</a>
                </p>
                </button>

                {this.state.step6 &&
                  <div>
                    <a href="#exportE" className={subSectionLinkStyle}>Experiment Applications</a>
                    <a href="#exportP" className={subSectionLinkStyle}>Platform Support</a>
                    <a href="#exportB" className={subSectionLinkStyle}>Building an Application</a>
                    <a href="#exportR" className={subSectionLinkStyle}>Running Applications</a>
                    <a href="#exportC" className={subSectionLinkStyle}>Post Build Changes</a>
                    <a href="#exportS" className={subSectionLinkStyle}>Sharing Applications</a>
                  </div>
                }<br />

                
                <button onClick={this.stepSevenOpen} className="">
                <p className={sectionLinkStyle}>
                <a href="#output">Output Data</a>
                </p>
                </button>

                {this.state.step7 &&
                  <div>
                    <a href="#outputF" className={subSectionLinkStyle}>Data Files</a>
                    <a href="#outputC" className={subSectionLinkStyle}>Customizing Start Fields</a>
                    <a href="#outputT" className={subSectionLinkStyle}>Output Timing</a>
                  </div>
                }<br />

                <p className={sectionLinkStyle}>
                  <a href="#control">Controls and Input Devices</a>
                </p>

                <button onClick={this.stepEightOpen} className="">
                <p className={sectionLinkStyle}>
                <a href="#online">Online Experiments</a>
                </p>
                </button>

                {this.state.step8 &&
                  <div>
                    <a href="#onlineUD" className={subSectionLinkStyle}>Uploading and <br/> Downloading</a>
                    <a href="#onlineS" className={subSectionLinkStyle}>Recommended Settings</a>
                  </div>
                }<br />

                <button onClick={this.stepNineOpen} className="">
                <p className={sectionLinkStyle}>
                   <a href ="#develop"> Developing OpenMaze</a>
                </p>
                </button>

                {this.state.step9 &&
                  <div>
                    <a href="#developR" className={subSectionLinkStyle}>Feature Request and <br/>Issue Reporting</a>
                    <a href="#developS" className={subSectionLinkStyle}>Sharing Changes</a>
                    <a href="#developF" className={subSectionLinkStyle}>Feature Diagnostics</a>
                  </div>
                }<br />

                <br/><br/>

                <div className="flex justify-center">     
                  <a target={"_blank"} href="https://www.facebook.com/OpenMaze/">
                    <i className="justify-center fab fa-lg fa-facebook-f mr-6 my-2 sm:my-3 opacity-53 hover:opacity-90"></i>
                  </a>
                  <a target={"_blank"} href="https://twitter.com/K_B_Nealy">
                    <i className="justify-center fab fa-lg fa-twitter mr-6 my-2 sm:my-3 opacity-53 hover:opacity-90"></i>
                  </a>
                  <a target={"_blank"} href="https://www.youtube.com/channel/UC1fKw1vt0YQyMfDg34ugHQA">
                    <i className="justify-center fab fa-lg fa-youtube mr-6 my-2 sm:my-3 opacity-53 hover:opacity-90"></i>
                  </a>
                </div><br/><br/>
                </div>
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



              
              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="about">
              
              
              
              <br /><br /><img src={Openmaze} alt="" className="w-full" />
              <p id="creatingScenes" className="font-bold text-center text-6xl">User Manual</p><br/><br/>

                <p id="creatingScenes" className="font-medium text-3xl">About</p>
                  <p>OpenMaze is a general-purpose 3D experiment building toolbox, developed for use with Unity Software. OpenMaze is easy-to-use and requires no prior coding experience, allowing you to spend less time hacking and more time experimenting! This User Manual contains everything that you need to know about building experiments in OpenMaze. </p>
                  <br />

                  <p id="creatingScenes" className="font-medium text-3xl">Get Involved!</p>
                  <p>It is our hope that OpenMaze will be seen not only as a toolbox, but also as a development platform, and we encourage you to become involved in the development process. In this pursuit, we are committed to keeping OpenMaze free and open source. All future development of the OpenMaze toolbox will be governed through feedback and community collaboration. With your help, our goal is to identify generalizable experiment design tools that can meet the needs of a larger community of researchers. If you have a great idea for new functionality or have added to the source code in ways that would benefit others, please share it!</p><br />

                  <p id="creatingScenes" className="font-medium text-3xl">Video Tutorials</p>
                  <p>If you haven't used OpenMaze before, we strongly recommend following along with our <b>Learn OpenMaze</b> video tutorial series. These tutorials provide a hands-on, step-by-step approach to learning the ins-and-outs of the OpenMaze toolbox.</p>
                  <br />
                  
                  <p class="text-center bg-green-600 rounded-lg justify-center border border-white p-2">
                  <a href="https://openmaze.duncanlab.org/tutorials"  target="_blank"><b>Click Here!</b> To check out the OpenMaze <strong>Video Tutorials</strong> page</a></p> 
                  
                  </div>
                  <div id="software"></div><br/>
                  <div  className={`max-w-sm md:max-w-lg lg:max-w-2xl mb-16 text-white  border-white border-t-8 md:border-b-8 md:border-l-0 border-r-0 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}>
              <h2 className="font-medium text-center text-6xl my-2">Software Setup</h2>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="softwareS">
              <h1 className="font-medium text-5xl my-4">Download and Setup</h1>
                <p>To get started, you will need three pieces of software: The OpenMaze Source Code, the Unity Hub, and a text editor! Follow the steps below to get setup with everything you need:</p>
                
                <p style={{padding: 20}}>
                  <strong>Step 1: Download the OpenMaze Source Code</strong>
                  <p><a href="https://github.com/DuncanLab/OpenMaze/releases" target="_blank"><u>Click here</u></a> and select the latest release. 
                  Then scroll to the bottom of the page and click <strong>Source Code (zip)</strong>. Once downloaded, extract (or unzip) the folder in an easily accessible directory - we recommend your <b>Documents</b> or <b>Desktop</b> folder.</p>
                  <br />

                  <b>Step 2: Download the Unity Hub</b>
                  <p><a href="https://store.unity.com/download?ref=personal" target="_blank"><u>Click here</u></a> to download the Unity Hub. If you don't already have one, you'll need to create a Unity Software account and select a Unity Software plan. OpenMaze works with any plan type, including free <b>Personal</b> and <b>Student</b> plans.</p>
                  <br />

                  <b>Step 3: Set up OpenMaze in Unity Software</b>
                  <p>Open the <b>Unity Hub</b> application, sign in, and ensure that you have a license (it's free too!). Once signed in, click the <strong>Add</strong> button in the top right of the <strong>Projects</strong> page. 
                  When prompted select the unzipped OpenMaze folder from <strong>Step 1</strong>. When OpenMaze appears in the Hub, click the small yellow triangle beside <strong>Unity Software Version</strong>. 
                  This will prompt you to download the correct version of Unity Software (this takes a while - be patient or take a quick nap!). 
                  Once installed, navigate back to the <strong>Projects</strong> page. The yellow triangle should be replaced with a Unity Software Version number.
                  You can now click the OpenMaze project to open it. You may be asked if you would like to update Unity Software - click no.</p>
                  <br />

                  <b>Step 4: Choosing a Text Editor</b>
                  <p> You will also need a text editor for creating and editing OpenMaze Configuration Files. Configuration Files are formatted in JavaScript Object Notation (JSON) and must be formatted correctly to run. For this reason, we recommend using a text editor with a JSON <a href="https://en.wikipedia.org/wiki/Lint_(software)" target="_blank"><u>lint tool</u></a> which will alert you if your formatting is incorrect. We recommend using <a href="https://www.sublimetext.com/" target="_blank"><u><b>Sublime Text</b></u></a> or <a href="https://atom.io/"  target="_blank"><u><b>Atom</b></u></a>; 
                    both of which can be augmented with JSON lint packages.</p>            

                </p>
                <br />

                <p class="text-center bg-green-600 rounded-lg justify-center border border-white p-2">
                  <a href="https://youtu.be/_MwF2JgmraY"  target="_blank">
                    <b>Click Here!</b> To follow along with a video tutorial on how to set up OpenMaze</a></p><br />

                <h1 className="font-medium text-5xl my-4" id="softwareU">The Unity Editor</h1> 
                <p>We'll be referencing different components of the Unity Editor throughout the User Manual; you can use the figure below as a quick reference. </p>
                <img src={Unity} alt="" className="w-full my-4" /><br />

                <p class="text-center bg-green-600 rounded-lg border border-white p-2">
                     <a href="https://docs.unity3d.com/Manual/UsingTheEditor.html"  target="_blank">
                     <strong>Click Here!</strong> For more information about the Unity Software interface</a></p><br />
                  
              </div>

              <div id="scenes"></div><br/>

              <div  className={`max-w-sm md:max-w-lg lg:max-w-2xl mb-16 text-white  border-white border-t-8 md:border-b-8 md:border-l-0 border-r-0 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}>
              <h2  className="font-medium text-center text-6xl my-2">Scenes</h2>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesAbout">
              <h2 className="font-medium text-5xl my-2">What is a Scene?</h2>
                    <p>When building an experiment using OpenMaze, Unity Scenes will contain the portion of the 3D navigation environment that will remained fixed throughout the entire experiment (e.g. a city, or a farm).
                      Any number of unique Scenes can be created and then later augmented with  additional objects allowing you change important environment features and create interactive tasks on a trial-by-trial basis (See <b><a href="#experiments">Creating Experiments</a></b>).  
                     <br /><br />Each new Scene begins as a blank canvas on which 3D Models can be placed, manipulated, and arranged using intuitive point-and-click/drag-and-drop tools that are provided within the Unity Editor. 
                    Below we detail how to create a new OpenMaze compatible 3D Scene, then describe how to build a 3D environment within it. </p>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesCreate">
                <h2 className="font-medium text-5xl">Creating a New Scene</h2>
                <p>OpenMaze comes with one OpenMaze compatible 3D Scene which can itself be used to create a 3D navigation environment or duplicated to provide additional OpenMaze compatible Scenes. Follow the steps below to create a new OpenMaze compatible 3D Scene. 
                </p>

                <p style={{padding: 20}}>
                <b>Step 1: Open the 3D Environment Scene</b>
                    <p>Navigate to the <strong>Project</strong> window and expand the <strong>Assets</strong> folder. 
                    Double click the <strong>_Scenes</strong> folder to open it. The contents of the folder will be displayed in the adjacent window to the right. 
                    Double click the <strong>3D Environment</strong> Scene icon to open it in the Unity Editor. It will appear in both the <strong>Scene</strong> and <strong>Game</strong> windows. </p>
                  <br />

                  <b>Step 2: Duplicate the 3D Environment Scene</b>
                    <p>Click the <strong>Edit</strong> drop-down menu at the top of screen and select <strong>Duplicate</strong>. You may rename the duplicated Scene to any name you would like.</p>
                  </p><br />

                  <p class="text-center bg-green-600 rounded-lg justify-center border border-white p-2">
                      <a href="https://youtu.be/JrkyJqnzS4o"  target="_blank"><b>Click Here!</b> To watch our video tutorial on creating OpenMaze Compatible Scenes</a></p> 
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesBuild">
                <h2 className="font-medium text-5xl my-2">Building 3D Environments</h2>
                <p>As you will notice, the 3D Environment Scene is empty. That’s because OpenMaze does not come with any pre-built 3D navigation environments. Instead, we have left up it to you to create 3D navigation environments that are perfectly suited to the needs of your experiment design. Thus, you can think of each new duplication of the 3D Environment Scene as a blank canvas, on which you can put your imagination to the test!</p><br />
                
                <h3 className="font-medium text-3xl">Importing 3D Models</h3>
                <p>To get started, you will need to import 3D Models into your OpenMaze project, perhaps some buildings, or trees and paths, or an interior facade and furnishings. There are two methods for importing 3D Models into your OpenMaze project:</p> 
                    <p style={{padding: 20}}>
                      <h4 class="font-medium text-2xl">Method 1: The Unity Asset Store</h4>
                      <p style={{padding: 20}}>
                      The Unity Asset Store can be accessed directly within the Unity Editor by clicking on the <strong>Asset Store</strong> tab (check beside the Scene window tab). Use the search tool to find the Assets you require for your experiment! Once you find something you like, all you need to do is click the <strong>Download</strong> button. 
                      Then, when prompted, click the <strong>Import</strong> button. Once imported the 3D Models will be accessible in the <strong>Project</strong> window.
                      <br /></p>
                       
                      <h4 class="font-medium text-2xl">Method 2: Importing third-party 3D Models</h4>
                      <p style={{padding: 20}}>
                      You can also add 3D Models created using third-party software. 
                      The Unity Editor provides import support for a wide range of <a href="https://docs.unity3d.com/Manual/ImportingModelFiles.html"  target="_blank"><u>3D Model file types</u></a>. 
                      Files can simply be dragged-and-dropped into the desired folder within the <strong>Project </strong>window.</p>
                    </p>
                  
                  <h3 className="font-medium text-3xl">Adding 3D Models to Scenes</h3>
                  <p style={{padding: 20}}>
                  <b>Step 1: Open your Scene</b>
                    <p>Using the <strong>Project</strong> window, navigate to and open the Scene you wish to develop.</p>

                    <b>Step 2: Add 3D Models to the Scene</b>
                    <p>Staying within the <strong>Project</strong> window, navigate to the folder containing the 3D Model(s) you wish to use. Drag-and-drop the 3D Model(s) into the <strong>Scene</strong> window.</p> <br />
                    
                    <b>Step 3: Arrange the 3D Models</b>
                    <p>Use the Transform tools in the top left of the Unity Editor to change the Position, Rotation, and Scale Components of the 3D Model.</p><br /> 

                    <p class="text-center bg-green-600 rounded-lg border border-white p-2">
                    <strong>Click Here!</strong> <a href="http://gyanendushekhar.com/2017/08/20/learning-transform-tools-unity-tutorial/" target="_blank">
                      For an in-depth demonstration of the Unity Transform tools</a></p><br />

                  
                  
                    <b>Step 4: Add Collider Components</b>
                    <p>A Collider Component can be added to 3D Models to ensure that your participant cannot walk straight through them. 
                    Select the 3D Model in the <b>Scene</b> window, then click the <strong>Add Component</strong> button in the <strong>Inspector</strong> window.
                    Search "collider" and select the Collider Component that suits the 3D Model best. </p>
                  </p>
                </div>

                <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesSpace">
                  <h3 className="font-medium text-5xl my-2">Scene Space</h3>
                  <p>We'll be referencing the Scene axis' as well as the Transform Components of 3D Models throughout the User Manual; use the figure below as a quick reference when needed. </p>
                  <br/><img src={SceneSpace} alt="" className="w-full my-4" />
                </div>
                

                <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesSpace">
                  <h3 id = "scenesNon" className="font-medium text-5xl my-2">Scene Compatibility</h3>
                    <p>Many Unity Asset Store packages will come with prefabricated 3D environment Scenes. These can serve as a base for your experiment environments however you must ensure that they are compatible with OpenMaze. Any Scene can be made compatible with OpenMaze by adding the necessary OpenMaze <a href = "https://docs.unity3d.com/Manual/GameObjects.html"  target="_blank"><b>GameObjects</b></a> to it. To do so, follow these steps:</p>
                      <p style={{padding: 20}}>
                        <b>Step 1: Copy the OpenMaze GameObjects</b><br/>
                        <p>With the <b>3D Environment</b> Scene opened in the Unity Editor,  
                        select all the GameObjects contained within the <b>Hierarchy</b> window. 
                        Right-click the selected GameObjects and select <b>Copy</b>.</p><br/>
                        
                        <b>Step 2: Add the OpenMaze GameObjects to the non-OpenMaze Scene</b><br/>
                        <p>Open the non-OpenMaze Scene in the Unity Editor, right-click within the <b>Hierarchy</b> window and select <b>Paste</b>. 
                        The Scene will now be compatible with OpenMaze.</p>
                      </p> 
                </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesUse">
              <h3 className="font-medium text-5xl my-2">Using Scenes</h3>
              <p style={{padding: 20}}>
              <h3 className="font-medium text-3xl my-2">Adding Scenes to the Project Build</h3>
                <p>Scenes must be added to the Project Build before they can be utilized by OpenMaze Configuration Files. 
                  Use the following steps to add a Scene to the Project Build:</p>
                  <p style={{padding: 20}}>
                      <b>Step 1:</b> Open the Scene in the Unity Editor<br/>
                      <b>Step 2:</b> Click <b>File</b> and select <b>Build Settings</b><br/>
                      <b>Step 3:</b> Within the <b>Build Settings</b> window, click the <b>Add Open Scene</b> button
                  </p>

                <h3 className="font-medium text-3xl my-2">Scenes In Build</h3>
                <p>Within the <b>Build Settings</b> window, the <b>Scenes In Build</b> subwindow displays all of the Scenes that are currently in the Project Build. 
                  You may add, remove, or rearrange Scenes within this window, but you must always ensure that the <b>+Launch Experiment</b> and <b>Loading Screen</b> Scenes occupy the first and second rows, respectively.</p>
                <br />

                <h3 className="font-medium text-3xl my-2">Scene Numbers</h3>
                <p>When a Scene is added to the Project Build it is assigned a Scene Number. Scene Numbers appear next to the Scene Names of the Scenes the <b>Scenes In Build</b> subwindow. Scene Numbers are used when creating <a href = "configT"><i><u>Task Trials</u></i></a> in OpenMaze Configuration Files. You can return to the <b>Build Settings</b> window at any time to add new Scenes or reference Scene Numbers when creating a Configuration File.</p>
                  </p>
              </div>
              
              <div id="config"></div><br/>

              <div className={`max-w-sm md:max-w-lg lg:max-w-2xl mb-16 text-white  border-white border-t-8 md:border-b-8 md:border-l-0 border-r-0 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}>
              <h2 className="font-medium text-center text-6xl my-2">Configuration Files</h2>
              </div>
                
              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesUse">
                <h1 id = "config0" className="font-medium text-5xl my-4">Overview</h1>
                <p> OpenMaze Configuration Files provide the infrastructure to create tasks within your Scene(s) and orchestrate all other aspects of your experiment. Each Configuration File can be thought of as an experiment session. Much like sessions in a typical behavioural experiment each Configuration File consists of experiment blocks which contain instructions and trials. Additionally, Configuration files contain key experiment settings allowing you to make quick changes when necessary. Conveniently, any number of Configuration Files can be created for your Scene(s) each one with a different set of blocks, instructions, and trials. This provides tremendous flexibility allowing you to quickly create multi-session studies, follow-up experiments, and design completely new experiments within the same Scene(s).  
                  </p>

                  <h1 id = "configSec" className="font-medium text-5xl my-4">Sections</h1>
                  <p>Each Configuration File includes a Settings section and five <i>Experiment Object</i> Sections: (1) <i>Blocks</i>; (2) <i>Trials</i>; (3) <i>Goals</i>; (4) <i>Landmarks</i>; and (5) <i>Enclosures</i>.</p>


                <div className="border border-white rounded-lg my-8 overflow-hidden">
                    <div class="bg-gray-800 rounded-t-lg border border-white p-4">
                      <p class="text-center"><b>The 6 Sections of OpenMaze Configuration Files</b></p>
                    </div>
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr>
                        <th className="text-center p-4">Section</th>
                        <th className="text-center p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-l-12 border-r-12 border-gray-800">
                        <td className=" px-4 py-2"><a href = "#configS">Settings</a></td>
                        <td className="px-4 py-2"><a href = "#configS">Settings allow you to make quick changes to the overall experiment (e.g. character height and movement speed).</a></td>
                      </tr>
                      <tr className="bg-dark-light border-l-12 border-r-12 border-tutorial-yellow">
                        <td className=" px-4 py-2"><a href = "#configB"><i>Blocks</i></a></td>
                        <td className="px-4 py-2"><a href = "#configB"><i>Blocks</i> are used to create <i>Trial</i> presentation sequences (both serial and random) and define performance criterion.</a></td>
                      </tr>
                      <tr className = "border-l-12 border-r-12 border-tutorial-brown">
                        <td className=" px-4 py-2"><a href = "#configT"><i>Trials</i></a></td>
                        <td className="px-4 py-2"><a href = "#configT"><i>Trials</i> are used to present instructions and cue screens to participants as well as create navigation tasks within Scenes.</a></td>
                      </tr>
                      <tr className="border-l-12 border-r-12 border-tutorial-blue bg-dark-light">
                        <td className=" px-4 py-2"><a href = "#configG"><i>Goals</i></a></td>
                        <td className="px-4 py-2"><a href = "#configG"><i>Goals</i> are interactive objects that can be placed into Scenes on a trial-by-trial basis to create navigation tasks.</a></td>
                      </tr>
                      <tr className="border-l-12 border-r-12 border-tutorial-red">
                        <td className=" px-4 py-2"><a href = "#configG"><i>Landmarks</i></a></td>
                        <td className=" px-4 py-2"><a href = "#configG"><i>Landmarks</i> are non-interactive objects (e.g. buildings) that can be used to change the Scene characterstics on a trial-by-trial basis.</a></td>
                      </tr>
                      <tr className="border-l-12 border-r-12 border-tutorial-cyan bg-dark-light">
                        <td className=" px-4 py-2"><a href = "#configE"><i>Enclosures</i></a></td>
                        <td className="px-4 py-2"><a href = "#configE"><i>Enclosures</i> are custom open field mazes that can be added to Scenes on a trial-by-trial basis.</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                
                <h3 id="configEO" className="font-medium text-5xl">Formatting</h3>
                <p>Experiment Configuration Files are written in the JavaScript Object Notation (JSON) file format. JSON files provide a simple, human-readable text that stores Arrays of Objects (<b>Object Arrays</b>). Each <b>Object</b> within an Array is defined by a series of <b>Attribute-Value Pairs</b>.</p> 
                <br/>
                <p style={{padding: 20}}>
                <h3 id="configEO" className="font-medium text-2xl">Object Arrays</h3>
                <p>When talking about OpenMaze Configuration Files we refer to Object Arrays as Sections and will refer to Sections by their Object type (i.e the <i>Blocks</i> Section, the <i>Trials</i> Section, the <i>Goals</i> Section, the <i>Landmarks</i> Section, and the <i>Enclosures</i> Section). Each Section is defined by a list of Objects contained within a set of square brackets <b>[ ]</b> and Sections are separated by a comma.</p>  
                <br/>
                <h3 id="configEO" className="font-medium text-2xl">Objects</h3>
                <p>We will refer to Objects as <i>Experiment Objects</i> or simply by their type (i.e. <i>Block(s), Trial(s), Goal(s), Landmark(s), Enclosure(s)</i>). Each <i>Experiment Object</i> is implicitly assigned an index number based on the order that it is defined within its Section starting at <b>1</b>. Each <i>Experiment Object</i> is defined by a series of Attribute-Value Pairs contained within a set of curly brackets <b>&#123; &#125;</b> and <i>Experiment Objects</i> within the same Section are separated by a comma.</p> 
                <br/>
                <h3 id="configEO" className="font-medium text-2xl">Attribute-Value Pairs</h3>
                <p>Each <i>Experiment Object</i> type has a unique set of Attribute-Value Pairs; for example, <i>Goals</i> are defined by a different set of Attribute-Value Pairs than <i>Trials</i>. While some Attribute-Value Pairs are necessary, others are
                optional; for example, Attribute-Value Pairs can be added to a <i>Block</i> to augment the <i>Block</i> with performance criterion. Attribute names must be contained within a set of quotation marks (i.e. "AttributeName") and the Value formatting depends on the data type required by the Attribute (i.e. string, boolean, float, integer, list, or vector). Attribute-Value Pairs contained within the same <i>Experiment Object</i> are separated by a semicolon.</p><p/><br/>

                <p class="bg-gray-600 rounded-lg border text-center border-white p-2">
                  <strong>Note:</strong> The order that Attribute-Value Pairs are defined within an <i>Experiment Object</i> does not impact their function</p><br />
                </p>
                <img src={JSON} alt="" className="w-full my-4" /><br/>


                <div>
                  <h3 id="configTemp" className="font-medium text-5xl">Configuration File template</h3>
                  <p>OpenMaze provides a Configuration File template that has examples for each <i>Experiment Object</i> type. When creating a new Configuration File, we recommend using a copy of this template. This will allow you to copy and paste <i>Experiment Object</i> examples and simply customize their values to suit your needs. You can find the Configuration File template in the OpenMaze project folder: <strong><i>OpenMaze/Configuration_Files/Configuration_Template</i></strong></p>
                </div><br/><br/>

                <div id="experiments"></div><br/>
                
                <div className={`max-w-sm md:max-w-lg lg:max-w-2xl mb-16 text-white  border-white border-t-8 md:border-b-8 md:border-l-0 border-r-0 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}>
              <h2 className="font-medium text-center text-6xl my-2">Creating Experiments</h2>
              </div>

              <h3 id="configHeirarchy" className="font-medium text-5xl">Object Hierarchy</h3>
                  <p>Experiments are designed by creating and combining <i>Experiment Objects</i> in a hierarchical structure such that: 
                  <i> Goals, Landmarks,</i> and <i>Enclosures</i> are used to create <i>Trials</i>; and <i>Trials</i> are used to create <i>Blocks</i>.</p> 
                  <img src={ConfigFile} alt="" className="w-full my-4" />
                <br />
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="configG">
                <h2 className="font-medium text-5xl my-4"><i>Goals</i> and <i>Landmarks</i></h2>
                  <p><i>Goals/Landmarks</i> are 3D Models or Image Files that can be placed into Scenes on a trial-by-trial basis. <i>Goals</i> are objects which are capable of triggering events when participants interact with them. <i>Landmarks</i> are objects that can be used to change the characteristics of the environment. To create a new <i>Goal/Landmark</i> follow the instructions below.</p>
                  <br />
                
                  <h3 id="glMaterials" className="font-medium text-3xl">Importing <i>Goal/Landmark</i> Materials</h3>
                  <p>Both <i>Goals</i> and <i>Landmarks</i> are created from 3D Models or Images Files and Audio Files can be added to <i>Goals</i>. Before defining <i>Goals/Landmarks</i> in the Configuration File these necessary files must be added to the correct project folders:</p>

                    <p style={{padding: 20}}>
                    3D Models = <strong>OpenMaze/Assets/Resources/3D_Objects</strong>

                    <br />Image Files = <strong>OpenMaze/Assets/StreamingAssets/2D_Objects</strong>

                    <br />Audio Files = <strong>OpenMaze/Assets/Resources/Sounds</strong></p>

                    <p class="bg-yellow-600 rounded-lg border text-center border-white p-2"><strong>IMPORTANT!</strong> You must add a Collider Component to 3D Models. To do this, open the 3D Model in the Unity Editor, then click the <strong>Add Component</strong> button in the <strong>Inspector</strong> window, search "collider" and select a Collider Component that best suits the 3D Model. </p>

                  <br />

                  <h3 id="glCreate" className="font-medium text-3xl">Creating <i>Goals</i> and <i>Landmarks</i></h3>
                  <p>Once you have added the necessary materials, you can use them to create <i>Goals/Landmarks</i> in the Configuration File. </p> 
                
                <div style={{padding: 20}}>
                  <b>Step 1. Create a New <i>Goal</i> or <i>Landmark</i></b>
                  <p>Both <i>Goals</i> and <i>Landmarks</i> are defined by a similar set of Attribute-Value Pairs. To create a new <i>Goal/Landmark</i>, we recommend copying and pasting a premade <i>Goal/Landmark</i> object from the Configuration File template and simply customizing its Attribute-Value Pairs to suit your needs.</p><br />

                  <b>Step 2. Add Index/Description</b>
                  <p>We recommend including a description Attribute in your definitions in the form: “Goal #”: “Description” ("Landmark #": "Description"). The "#" corresponds to the <i>Experiment Object's</i> index number which will be used when creating <i>Trials</i>. "Description" can be replaced with identifying information of your choosing. </p><br />

                  <b>Step 3. Assign a 3D Model or Image File</b>
                  <p>You can create a <i>Goal/Landmark</i> from a 3D Model or Image by setting the Value of the Type Attribute to “3D” or "2D", respectively and setting the value of the Object Attribute to the name of the 3D Model or Image File</p><br />

                  <b>Step 4. Transform Attributes</b>
                  <p>The  “Position”, “Rotation”, and “Scale” Attributes prescribe the Transform Components that will be used to place the <i>Goal/Landmark</i> in the Scene.</p><br /> 

                  <p class="bg-gray-600 rounded-lg border text-center border-white p-2">
                  <strong>Note:</strong> Image File <i>Goals</i> rotate dynamically to ensure that they always face the participant’s viewing angle and thus do not require a “Rotation” Attribute-Value Pair.</p><br />

                  <b>Step 5. Adding Sounds to <i>Goals</i></b>
                  <p>Use the Sound Attribute to assign an Audio File to a <i>Goal</i> using the name of the Audio File as it's Value.</p>
                  <br />

                  <div class="bg-red-600 rounded-lg border text-center border-white p-2">
                  <p><strong>Tip:</strong> Place the 3D Model you're using to create your <i>Goal/Landmark</i> into the Scene at the location you want it to appear. 
                  Then copy the Position, Rotation, and Scale Component values from the <strong>Inspector</strong> window before once again deleting the 3D Model from the Scene. 
                  Images cannot be placed directly into a Scene. Instead, use a 3D Model as a stand-in.</p>
                  </div><br />
                

                  <div class="bg-green-600 rounded-lg justify-center border border-white p-2">
                  <p class="text-center"><a href="https://youtu.be/20UysrQwdgU"  target="_blank"><b>Click Here!</b> To follow along with a video tutorial</a></p> 
                  </div><br />
                </div>

                <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="gExamples">
                  <h3 className="font-medium text-3xl"><i>Goals</i> Configuration File Example</h3>
                  <img src={Goals} alt="" className="w-full my-4" />

                  <h3 id="About" className="font-medium text-3xl"><i>Landmarks</i> Configuration File Example</h3>
                  <img src={Landmarks} alt="" className="w-full my-4" />
                </div>

                 
              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="gExamples">
                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                <div class="bg-tutorial-red rounded-t-lg border border-white p-4">
                      <p class="text-center"><b><i>Goals/Landmarks</i> Attribute-Value Pairs</b></p>
                    </div>
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr>
                        <th className="p-4">Attribute</th>
                        <th className="p-4">Example Value</th>
                        <th className="p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2">Goal/Landmark #</td>
                        <td className=" px-4 py-2">“Description”</td>
                        <td className=" px-4 py-2">A descriptive attribute that can be added to a Goal definition to help track indices 
                        and describe the function of the object.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">Type</td>
                        <td className=" px-4 py-2">“3D” or “2D”</td>
                        <td className=" px-4 py-2">Defines whether the object is a 3D Model or an Image File. Directs OpenMaze to look for the object in the associated folder (i.e. 3D_Objects, 2D_Objects).</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">Object</td>
                        <td className=" px-4 py-2">“Image.png”</td>
                        <td className=" px-4 py-2">The name of the object file in the 3D_Objects or 2D_Objects folder respectively. Object files contained in subfolders within the 3D_objects/2D_objects folder can be used by including the directory extension (e.g. <strong>subfoldername/Apple.png</strong> ). File extensions (e.g. .png, .jpg, etc.) must be attached to the file name when defining 2D Objects.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">Position</td>
                        <td className=" px-4 py-2">[0,0,0]</td>
                        <td className=" px-4 py-2">Corresponds to [x,y,z] Position Component of the <i>Goal/Landmark</i> within a Scene.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">Rotation</td>
                        <td className=" px-4 py-2">[30,60,90]</td>
                        <td className=" px-4 py-2">Corresponds to [x,y,z] Rotation Component of the <i>Goal/Landmark</i> within a Scene. <b>Note:</b> Not used for Image Files which dynamically rotate to always face the participant.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Scale”</td>
                        <td className=" px-4 py-2">[1,1,1]</td>
                        <td className=" px-4 py-2">Corresponds to [x,y,z] Scale Component of the <i>Goal/Landmark</i> within a Scene.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“Color”</td>
                        <td className=" px-4 py-2">“ffffff”</td>
                        <td className=" px-4 py-2">A 6-digit HEX color code. Can be used for simple geometric 3D Models to change their color. Click <a href="https://htmlcolorcodes.com/" target="_blank" className="underline"><u>here</u></a> to find HEX color codes for your objects.</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="bg-tutorial-blue border border-white p-4">
                      <p class="text-center"><b><i>Goals</i> Only</b></p>
                    </div>
                  <table className="table-auto">
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2">“Sound”</td>
                        <td className=" px-4 py-2">“Bing.wav”</td>
                        <td className=" px-4 py-2">Upon collision with the Goal the Audio File will play. Can use directory extensions within the <b>Sound</b> folder (e.g. <b>subfoldername/Bing.wav</b>). </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
               </div>

               <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="configE">
                  <h2 className="font-medium text-5xl my-4"><i>Enclosures</i></h2>
                  <p>OpenMaze provides a simple tool for creating custom open field mazes which can be added to <i>Scenes</i> on a trial-by-trial basis. <i>Enclosures</i> do not require any additional materials and are created solely by defining Attribute-Value Pairs. Do so using the following steps: </p>                
                  <br />
                  <h3 id="About" className="font-medium text-3xl">Creating an <i>Enclosure</i></h3>

                  <div style={{padding: 20}}>
                    <b>Step 1. Create a new <i>Enclosure</i> Object:</b>
                    <p>We recommend copying and pasting an <i>Enclosure</i> from the Configuration File template and simply customizing the Attribute-Value Pairs to suit your needs. </p>
                    <br />

                    <b>Step 2. Add Index/Description</b>
                    <p>We recommend including a description Attribute in your definitions in the form: “Enclosure #”: “Description”. The "#" corresponds to the <i>Enclosure's</i> index number which will be used when creating <i>Trials</i>. "Description" can be replaced with identifying information of your choosing. </p><br />
                    <br />

                    <b>Step 3. Size, Shape and Color</b>
                    <p><i>Enclosures</i> are created by connecting walls that are placed tangent to a circular area. Thus, the size of an <i>Enclosure</i> is described using the Radius Attribute and the shape is dictated by the Sides Attribute (i.e. number of walls). To customize the walls use the WallHeight and WallColor Attributes.</p>
                    <br />

                    <b>Step 4. <i>Enclosure</i> Floors</b>
                    <p>Enclosures can be created with a simple geometric tiled floor which provides greater depth perception for participants. Manipulate the size, shape and colors of the tiles using the GroundTileSize, GroundTileSides, and GroundColor Attributes respectively. </p>
                    <br />

                    <b>Step 5. <i>Enclosure</i> Placement</b>
                    <p>The Position value assigned to the Position Attribute corresponds to the Position Component the Enclosure's center within a Scene and the Rotation Attribute can be used to rotate the Enclosure about the y-axis.</p>
                  </div>
                  
                  <p class="bg-green-600 text-center rounded-lg justify-center border border-white p-2">
                  <a href="https://youtu.be/DTH-Bc1m_wc"  target="_blank"><strong>Click Here!</strong> To Follow Along With Our <i>Enclosures</i> Tutorial Video</a></p> <br />
                
                

                <h3 id="About" className="font-medium text-3xl"><i>Enclosures</i> Configuration File Example</h3>
                  <img src={Enclosures} alt="" className="w-full my-4" />

                <br/>

                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                <div class="bg-tutorial-cyan rounded-t-lg border border-white p-4">
                      <p class="text-center"><b><i>Enclosures</i> Attribute-Value Pairs</b></p>
                    </div>
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr>
                      <th className="p-4">Attribute</th>
                        <th className="p-4">Example Value</th>
                        <th className="p-4">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2">Enclosure #</td>
                        <td className=" px-4 py-2">“Description”</td>
                        <td className=" px-4 py-2">Descriptive parameter that can be added to an Enclosure definition to help track indices and describe the Enclosure.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">Sides</td>
                        <td className=" px-4 py-2">5</td>
                        <td className=" px-4 py-2">The number of walls that will be used to create the <i>Enclosure</i>. Used to define the <i>Enclosures</i> shape (e.g. 4 = square, 5 = pentagon, 6 = hexagon).</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">Radius</td>
                        <td className=" px-4 py-2">15</td>
                        <td className=" px-4 py-2">Defines the size of the <i>Enclosure</i>. Walls are created tangent to the circle defined by the radius parameter.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">WallHeight</td>
                        <td className=" px-4 py-2">4.5</td>
                        <td className=" px-4 py-2">Sets the height of the <i>Enclosure</i> walls.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">WallColor</td>
                        <td className=" px-4 py-2">“00ff00”</td>
                        <td className=" px-4 py-2">A 6-digit HEX color code which defines the color of the Enclosure walls. Enclosures can be made invisible to the participant by setting this parameter to “ffffff00”.  Click <a href="https://htmlcolorcodes.com/" target="_blank" className="underline"><u>here</u></a> to find HEX color codes.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">GroundTileSides</td>
                        <td className=" px-4 py-2">40</td>
                        <td className=" px-4 py-2">Works similar to “Sides” parameter. Allows experimenters to customize the shape of the <i>Enclosure</i> floor tiles.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">GroundTileSize</td>
                        <td className=" px-4 py-2">0.5</td>
                        <td className=" px-4 py-2">A number between 0-1 which manipulates the size of the ground tiles. Setting this parameter to 0 will remove tiling from the Enclosure floor.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">GroundColor</td>
                        <td className=" px-4 py-2">“ff0000”</td>
                        <td className=" px-4 py-2">A 6-digit HEX color code which defines the color of the Enclosure tiles. The Enclosure's floor can be made transparent by setting this parameter to “ffffff00”. Click <a href="https://htmlcolorcodes.com/" target="_blank" className="underline"><u>here</u></a> to find HEX color codes.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>

                <h1 id="configT" className="font-medium text-5xl my-4"><i>Task Trials</i></h1>

                <p><i>Task Trials</i> are used to create unique navigation epochs. <i>Task Trials</i> create unique <i>Trial</i> navigation environment and task demand for participants by placing different combinations of <i>Goals, Landmarks</i> and <i>Enclosures</i> into Scenes.
                <br/><br/></p>
                  
                <h3 id="About" className="font-medium text-3xl"><i>Trial</i> Indexing</h3>
                  <p>Both <i>Task Trials</i> and <i>Instruction/Cue Screen Trials</i> are defined within the <i>Trials</i> section of the Configuration File. 
                    Each <i>Trial</i>, regardless of its type (i.e. Task or Instruction/Cue) is implicitly assigned an index number based on the order that it is defined within the <i>Trials</i> section. 
                    The <i>Trial</i> defined at the top is assigned the index = 1, the one below it is assigned index = 2, and so on. <i>Trial</i> indices are used to create <i>Blocks</i>.</p><br/>
               

                  <h3 id="About" className="font-medium text-3xl">Creating a <i>Task Trial</i></h3>
                  

                  <div style={{padding: 20}}>
                    <b>Step 1. Create a New <i>Task Trial</i></b>
                    <p>We recommend copying and pasting a <i>Task Trial</i> definition from the Configuration File template and simply customizing the Attribute-Value Pairs to suit your needs.</p>
                    <br/>

                    <b>Step 2. Add Index/Description</b>
                    <p>We recommend including a description Attribute in your definitions in the form: “Trail #”: “Description”. The "#" corresponds to the <i>Trial's</i> index number which will be used when creating <i>Blocks</i>. "Description" can be replaced with identifying information of your choosing. </p>
                    <br />

                    <b>Step 3. Select a Scene</b>
                    <p>Set the Value of the Scene Attribute to the <a href = "#sceneUse"><u>Scene Number</u></a> of the Scene the <i>Task Trial</i> will take place in.</p>
                    <br/>

                    <b>Step 4. Participant Placement</b>
                    <p>Use the StartPosition Attributes to dictate the participants x,z Position Component coordinates and the StartFacing Attribute to dictate the participants Rotation about the y-axis within the Scene.</p><br/>
                    <br/>

                    <b>Step 5. Trial Termination</b>
                    <p>The TrialTime dictates the duration of the <i>Task Trial</i> (in seconds). The <i>Task Trial</i> will also terminate  When the TrialEndKey is pressed or if the participant reaches the <i>Task Trial</i> Quota. (see Step 7 below)</p><br/>

                    <p class="bg-gray-600 rounded-lg border text-center border-white p-4">
                    <strong>Note:</strong> The remaining steps are all optional. It is not necessary to add any <i>Goals, Landmarks,</i> or an <i>Enclosure</i> to a <i>Task Trial</i> for it to function. </p><br/>
                    
                    <div class="bg-green-600 rounded-lg justify-center border border-white p-2">
                      <p class="text-center"><a href="https://youtu.be/CnlVgKkj3C4"  target="_blank"><strong>Click Here</strong> To Watch A Video On <i>Task Trial</i> Basics!</a></p>  
                    </div>
                    <br/>
                    <b>Step 6. Adding <i>Goals</i></b>
                    <p>A <i>Goal</i> can be added to a Scene by including its index number in either the ActiveGoals, InvisibleGoals, or InactiveGoals Attribute lists.</p><br/>
                      <p class="bg-gray-600 rounded-lg border text-center border-white p-4">
                      <strong>Note:</strong> Each <i>Goal</i> can only appear in one Attribute list per <i>Task Trial</i>.</p>
                    <div style={{padding: 20}}>
                      <b>Active <i>Goals</i></b>
                      <p>When a <i>Goal</i> index is added to the ActiveGoals Attribute list,  it will be placed into the Scene as prescribed by the transform attributes used to define the <i>Goal</i>. The 3D Model or Image File will be visible to the participant and the participant will collect the <i>Goal</i> upon colliding with it. Upon collision, the <i>Goal</i> will disappear, the <i>Goal </i>Sound will play, and it will be counted toward the <i>Trial</i> Quota.</p>
                      <br/>
                      <b>Invisible <i>Goals</i></b>
                      <p>When a <i>Goal</i> index is added to the InvisibleGoals Attribute list, it will be placed into the Scene as prescribed by the transform attributes used to define the <i>Goal</i>. However, unlike Active <i>Goals</i> the 3D Model or Image File will not be visible to the participant. The participant will still collect the <i>Goal</i> upon colliding with it, the <i>Goal</i> Sound will play, and it will be counted toward the <i>Trial</i> Quota.</p>
                      <br/>
                      <b>Inactive <i>Goals</i></b>
                      <p>When a <i>Goal</i> index is added to the InactiveGoals Attribute list, it will be placed into the Scene as prescribed by the transform attributes used to define the <i>Goal</i>. Like Active <i>Goals</i> the 3D Model or Image File will be visible to the participant. However, the participant will not be able to collect the <i>Goal</i>. Instead, the participant will simply pass through the <i>Goal</i>, the associated sound will not play, and it will not be counted toward the <i>Trial</i> Quota.</p>
                    </div>

                    <b>Step 7. Set a Quota</b>
                    <p><i>Tasks</i> are created by adding <i>Goals</i> to the Scene and prescribing a Quota. Participants collect <i>Goals</i> by simply colliding with them. Upon reaching the Quota the <i>Trial</i> will terminate.</p>  
                    <br/>
                    <p>If the Quota is not reached by the end of the prescribed TrialTime, the <i>Task Trial</i> will terminate. If the value for the Quota Attribute is not included, the <i>Task Trial</i> will terminate upon collecting a single <i>Goal</i>.</p> 
                    <br/>
                    <div class="bg-red-600 rounded-lg border text-center border-white p-4">
                        <p><strong>Tip:</strong> If you wish for the <i>Task Trial</i> to continue until the Quota is met, set TrialTime to an arbitrarily large value. Alternatively, if you want the <i>Task Trial</i> to continue until timeout, regardless of the number of <i>Goals</i> collected, set the Quota to a number larger than the amount of collectable <i>Goals</i>.</p>
                    </div>
                    <br/>

                    <b>Step 8. Adding <i>Landmarks</i></b>
                    <p><i>Landmarks</i> indices included in the Landmarks Attribute list will be placed into the Scene as solid objects, such that participants will not be able to move through them. </p>
                    <br/>

                    <b>Step 9. Adding <i>Enclosures</i></b>
                    <p>Add an <i>Enclosure</i> to the Scene by including the Enclosure Attribute and assigning it an <i>Enclosure</i> index number.</p><br/>

                    <b>Step 10. Adding Heads Up Display (HUD) Information</b>
                    <p>HUD Attribute-Value Pairs can be added to any <i>Task Trial</i> allowing you to display text and images to your participant as they navigate through the environment. There are several HUD options that allow text, images and performance metrics to be displayed to the participant (see Attribute-Value Pair cheat sheet below)
                      </p><br/>

                      <div class="bg-green-600 rounded-lg justify-center border border-white p-2">
                      <p class="text-center"><a href="https://youtu.be/sSOWmIR7dWA"  target="_blank"><strong>Click Here!</strong> to Watch Our Video on Creating <i>Task Trials</i>!</a></p>  
                    </div>
                    </div>

                    <h3 id="About" className="font-medium text-3xl"><i>Task Trial</i> Example</h3>
                  <img  src={TaskTrial} alt="" className="w-full my-4" />


                    <br/>

                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                  <div class="bg-tutorial-brown border border-white p-4">
                      <p class="text-center"><b><i>Task Trial</i> Attribute-Value Pairs</b></p>
                    </div>
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr>
                        <th className="p-4">Attribute</th>
                        <th className="p-4">Example Value</th>
                        <th className="p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr >
                        <td className=" px-4 py-2">Trial #</td>
                        <td className=" px-4 py-2">“Description”</td>
                        <td className=" px-4 py-2">A descriptive parameter that can be added to a Trial definition to help track indices and describe the function of the Trial.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">Scene</td>
                        <td className=" px-4 py-2">3</td>
                        <td className=" px-4 py-2">This number refers to the Scene build number of the 3D environment you wish to use for the Trial. Scene numbers can be found beside the Scene Name in the Unity Editor Build Settings (File -{">"} Build Settings…).</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">StartPosition</td>
                        <td className=" px-4 py-2">[0,0]</td>
                        <td className=" px-4 py-2">Defines the [x,z] coordinates of the participants Position Component within the Scene when the <i>Task Trial</i> begins.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">StartFacing</td>
                        <td className=" px-4 py-2">60</td>
                        <td className=" px-4 py-2">Defines the y value of the participants Rotation Component, dictating the angle that the participant will be facing within the Scene when the <i>Task Trial</i> begins. </td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">TrialTime</td>
                        <td className=" px-4 py-2">60</td>
                        <td className=" px-4 py-2">Length of Trial in seconds. Trial will time out if Quota is not met and TrialEndKey is not pressed. Upon timeout the experiment will proceed to the next Trial as defined in the Block section.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">TrialEndKey</td>
                        <td className=" px-4 py-2">“Space”</td>
                        <td className=" px-4 py-2"><a href="https://docs.unity3d.com/ScriptReference/KeyCode.html" target="_blank" className="underline">Unity API key code</a>. When pressed the <i>Trial</i> will terminate.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">ActiveGoals</td>
                        <td className=" px-4 py-2">[1,3,...]</td>
                        <td className=" px-4 py-2">Numbers in this list correspond to the indices of <i>Goals</i>. <i>Goals</i> included in this list will be visible to the participant and will be collected when collided with.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">InactiveGoals</td>
                        <td className=" px-4 py-2">[1,3,...]</td>
                        <td className=" px-4 py-2">Numbers in this list correspond to the indices of <i>Goals</i>. <i>Goals</i> included in this list will be visible to the participant but cannot be collected.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">InvisibleGoals</td>
                        <td className=" px-4 py-2">[1,3,...]</td>
                        <td className=" px-4 py-2">Numbers in this list correspond to the indices of <i>Goals</i>. <i>Goals</i> in this list will be collected when collided with, however they will not be visible to the participant.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">Quota</td>
                        <td className=" px-4 py-2">5</td>
                        <td className=" px-4 py-2">The number of Active <i>Goals</i> or Invisible <i>Goals</i> that must be collected to trigger the termination of the Trial.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">Landmarks</td>
                        <td className=" px-4 py-2">[1,3,...]</td>
                        <td className=" px-4 py-2">Numbers in this list correspond to the indices of <i>Landmarks</i>. Landmarks included in this list will be added to the Scene.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">Enclosure</td>
                        <td className=" px-4 py-2">1</td>
                        <td className=" px-4 py-2">A single number which corresponds to the index of an <i>Enclosure</i> to be added to the Scene. When this parameter is left out of a Trial definition, no enclosure will be added to the environment.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">DisplayText</td>
                        <td className=" px-4 py-2">“Display This Text”</td>
                        <td className=" px-4 py-2">The string provided will be displayed at the top of the screen for the duration of the <i>Task Trial</i>.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">DisplayImage</td>
                        <td className=" px-4 py-2">“Image.png”</td>
                        <td className=" px-4 py-2">The name of the Image File as it appears in the 2D_Object folder. 
                        Images contained in subfolders can be used by including the directory extension (e.g. <b>subfoldername/Image.png</b>). File extensions (e.g. .png, .jpg, etc.) must be included. The Image File will be displayed at the top of the screen  for the duration of the <i>Task Trial</i>.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">ShowTrialTotal</td>
                        <td className=" px-4 py-2"><i>true</i></td>
                        <td className=" px-4 py-2">When set to <i>true</i> the number of <i>Goals</i> collected in the current <i>Task Trial</i> will be displayed for the duration of the <i>Task Trial</i></td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">ShowBlockTotal</td>
                        <td className=" px-4 py-2"><i>true</i></td>
                        <td className=" px-4 py-2">When set to <i>true</i> the number of <i>Goals</i> collected in the current <i>Block</i> will be displayed for the duration of the <i>Task Trial</i></td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">ShowNumSuccesses</td>
                        <td className=" px-4 py-2"><i>true</i></td>
                        <td className=" px-4 py-2">When set to <i>true</i> the number of successful <i>Task Trials</i> in the current <i>Block</i> will be displayed for the duration of the <i>Task Trial</i> (a <i>Task Trial</i> is counted successful when a participant meets the Quota)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>


                    <h3 id="configTasks" className="font-medium text-5xl">Experiment Design Ideas</h3>
                    <p><i>Task Trials</i> can accommodate a HUGE variety of experiment designs. Below we review just some of the designs that we've thought of. Can you think of others?</p>
                    <br/>

                    <div class="rounded-t-lg bg-tutorial-blue border border-white p-4">
                      <p class="text-center"><b>Using <i>Goals</i></b></p>
                    </div>
                    <div class="border border-white p-4">
                      <b>Forming object-location associations</b>
                      <div style={{padding: 20}}>
                        <p>Include <i>Goals</i> in the ActiveGoals list during the learning phase of an experiment, to teach object-location associations. Include the same <i>Goals</i> in the InvisibleGoals list during the test phase, to assess participant memory for the object-location associations for the object-location to be assessed.</p>
                      </div>

                      <b>Creating waypoints </b>
                      <div style={{padding: 20}}>
                        <p>Invisible <i>Goals</i> can be placed at the location that the participant is instructed to navigate to, thus terminating the <i>Trial</i> once the destination is reached.</p>
                      </div>

                      <b>Creating spatial distributions</b>
                      <div style={{padding: 20}}>
                        <p>Item distributions can be created using a single 3D Model or Image File to define multiple <i>Goals</i>, allowing it to be instantiated in different locations within the same Scene during the same <i>Trial</i>, or across multiple <i>Trials</i>. The InvisibleGoals attribute may also be used, allowing reward zones to be learned simply from audio feedback cues.</p>
                      </div>

                      <b>Assessing decision making</b>
                      <div style={{padding: 20}}>
                        <p>Multiple <i>Goals</i> may be placed into a Scene to assess, for example, foraging behavior or multi-option decision making.</p>
                      </div>

                      <b>Creating lures</b>
                      <div style={{padding: 20}}>
                        <p>Inactive <i>Goals</i> can be placed alongside Active <i>Goals</i> to act as lures.</p>
                      </div>
                    </div>

                    <div class="bg-tutorial-red border border-white p-4">
                      <p class="text-center"><b>Using <i>Landmarks</i></b></p>
                    </div>
                    <div class=" border border-white p-4">

                      <b>Manipulating environment cues</b>
                      <div style={{padding: 20}}>
                        <p>Adding or removing contextual cues during different phases of the experiment.</p>
                      </div>

                      <b>Creating wayfinding tasks</b>
                      <div style={{padding: 20}}>
                        <p>During the learning <i>Trials</i>, <i>Landmarks</i> can be included to guide the participant along a specified route then excluded from <i>Trials</i> to test performance. Importantly, multiple objects can be combined into a single prefab that can be used as a <i>Landmark</i>. This allows, for example, creating <i>Landmarks</i> which each mark a different route through the environment (e.g. pylons). This allows routes to be marked on some <i>Trials</i> and not others.</p>
                      </div>

                      <b>Custom mazes</b>
                      <div style={{padding: 20}}>
                        <p>Custom 3D Model mazes (e.g., t-mazes, radial mazes) can be created in the Unity Editor, or third-party software, and then defined as <i>Landmarks</i> allowing them to be instantiated into any Scene on a <i>Trial-by-Trial</i> basis.</p>
                        <br></br>


                        <div class="bg-red-600 rounded-lg border text-center border-white p-2">
                          <p><b>Tip:</b> Download the free ProBuilder tool from the Unity Asset Store to easily create custom mazes and other 3D Models. After creating the 3D Model, define it as a <i>Landmark</i> and use it on a trial-by-trial basis.</p>
                        </div><br />
                        
                      </div>

                      <b>Barricading sections of the Scene</b>
                      <div style={{padding: 20}}>
                        <p>Invisible cuboids may also be defined as <i>Landmarks</i> and placed into a Scene to act as invisible barricades. This allows the participants access to areas of the Scene to change from one <i>Trial</i> to the next. A technique that could be used to, perhaps, teach specific routes through a Scene.</p>
                      </div>
                    </div>

                    <div class="bg-tutorial-cyan border border-white p-4">
                      <p class="text-center"><b>Using <i>Enclosures</i></b></p>
                    </div>
                    <div class="rounded-b-lg border border-white p-4">
                    <b>Open field maze tasks</b>
                      <div style={{padding: 20}}>
                        <p><i>Enclosures</i> allow you to quickly create any number of open field maze tasks within any Scene.</p>
                      </div>

                      <b>Manipulating local and global environment features</b>
                      <div style={{padding: 20}}>
                        <p><i>Enclosures</i> allow the features of the movement area to be manipulated while holding the fixed Scene environment constant, or vice versa.</p>
                      </div>

                      <b>Parametric morphing</b>
                      <div style={{padding: 20}}>
                        <p><i>Enclosure</i> customization allows for parametric morphing between two end points (e.g. from a square <i>Enclosure</i> to circular <i>Enclosure</i>); a technique that has proven fruitful when applied to rodents.</p>
                      </div>

                      <b>Participant placement randomization</b>
                      <div style={{padding: 20}}>
                        <p>When an <i>Enclosure</i> is included in the <i>Trial</i> definition, the participant can be placed randomly within the <i>Enclosure</i> at the start of each <i>Trial</i> by leaving the StartPosition list empty and setting the StartFacing Value to <strong>-1</strong>.</p>
                      </div>

                    </div>
                    <br/>
                  <div/>
               




                  <h1 id="configI" className="font-medium text-5xl my-4"><i>Instruction/Cue Screen Trials</i></h1>
                <p>Image Files can be used to create <i>Instruction/Cue Screen Trials</i>, allowing them to be presented to the participant.</p>
                  <br/>
                  <h3 id="About" className="font-medium text-3xl">Importing Images for <i>Instruction/Cue Screen Trials</i></h3>
                <div style={{padding: 20}}>
                  <p>Image Files must first be placed into the <strong>2D_Objects folder</strong>: <strong>OpenMaze/Assets/StreamingAssets/2D_Objects</strong></p>
                  <br/>
                  <div class="bg-red-600 rounded-lg border border-white p-4">
                    <p><strong>Tip:</strong> Create Image Files for <i>Instruction/Cue Screen Trials</i> by using a presentation software program (e.g. PowerPoint, KeyNote). You can then export your slides as individual Image Files.</p>
                  </div>
                </div>
                
                <h3 id="About" className="font-medium text-3xl">Creating <i>Instruction/Cue Screen Trials</i></h3>

                <div style={{padding: 20}}>
                <b>Step 1. Create a New <i>Instruction/Cue Screen Trial</i></b>
                    <p>We recommend copying and pasting an <i>Instruction/Cue Screen Trial</i> definition from the Configuration File template and simply customizing the Attribute-Value Pairs to suit your needs.</p>
                    <br/>

                <b>Step 2. Add Index/Description</b>
                <p>We recommend including a description Attribute in your definitions in the form: “Trail #”: “Description”. The "#" corresponds to the <i>Trial's</i> index number which will be used when creating <i>Blocks</i>. "Description" can be replaced with identifying information of your choosing. </p>
                <br />

                <b>Step 3. Assign an Image File</b>
                <p>Set the "FileLocation" attribute to the name of the Image File you wish to use, as it appears in the folder. File extensions (e.g. .png, .jpg, etc.) must be attached to the file name when defining Images.</p>
                <br/>

                <b>Step 4. Define the Presentation Time</b>
                <p>Set the duration the Instruction/Cue screen will be displayed for by changing the value of the  “TrialTime” attribute to the desired length of time in seconds. </p>
                <br/>

                <b>Step 5. Assign a Termination Key</b>
                <p>Optionally, you may also assign a specific key to end the <i>Instruction/Cue Screen Trial</i> when pressed by modifying the value of “TrialEndKey” attribute to the desired key.</p>
                <br/>

                <div class="bg-gray-600 rounded-lg border text-center border-white p-4">
                    <p><strong>Note:</strong> you may also add an end experiment button to the Screen by adding - "EndButton": <i>true</i> - to any <i>Instruction/Cue Screen Trial</i> object. We discuss the functionality of this button in more detail in the <a href="#online"><b>Online Experiments</b></a> section below.</p>
                  </div>
                  <br/>
                  <div class="bg-green-600 rounded-lg justify-center border border-white p-2">
                      <p class="text-center"><a href="https://youtu.be/64lVb1U0KIg"  target="_blank"><strong>Click Here!</strong> To Watch Our Video Tutorial On <i>Instructions/Cue Screen Trials</i></a></p>  
                </div>
                </div>

                <h3 id="About" className="font-medium text-3xl"><i>Instruction/Cue Screen</i> Configuration File Example</h3>
                  <img  src={InstructionTrial} alt="" className="w-full my-4" />
                    <br/>

                  <div className="border border-white rounded-lg my-8 overflow-x-auto">
                  <div class="bg-tutorial-brown rounded-t-lg border border-white p-4">
                      <p class="text-center"><b><i>Instruction/Cue Screen Trials</i> Attribute-Values</b></p>
                    </div>
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr>
                        <th className="p-4">Attribute</th>
                        <th className="p-4">Example Value</th>
                        <th className="p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2">“Trial #”</td>
                        <td className=" px-4 py-2">“Description”</td>
                        <td className=" px-4 py-2">A descriptive parameter that can be added to a Trial definition to help track indices and describe the function of the Trial.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Instructional”</td>
                        <td className=" px-4 py-2">1</td>
                        <td className=" px-4 py-2">Must be set to 1 <i>for Instruction/Cue Screen Trials</i>.</td>
                      </tr>
                      <tr >
                        <td className=" px-4 py-2">“FileLocation”</td>
                        <td className=" px-4 py-2">"Image.png"</td>
                        <td className=" px-4 py-2">The name of the the Image File is saved as in the 2D_Objects folder. May including the directory extension (e.g. <b>subfoldername/Apple.png</b>). File extensions (e.g. .png, .jpg, etc.) must be attached to the file name.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“TrialEndKey”</td>
                        <td className=" px-4 py-2">“Space”</td>
                        <td className=" px-4 py-2"><a href="https://docs.unity3d.com/ScriptReference/KeyCode.html" target="_blank" className="underline">Unity API key code</a>. When the defined key is pressed the experiment will proceed to the next Trial as defined in the Block section.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“TrialTime”</td>
                        <td className=" px-4 py-2">60</td>
                        <td className=" px-4 py-2">Length of Trial in seconds. Trial will time out if “Quota” parameter value is not met and “TrialEndKey” is not pressed. Upon timeout the experiment will proceed to the next Trial as defined in the Block section.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“EndButton”</td>
                        <td className=" px-4 py-2"><i>true</i></td>
                        <td className=" px-4 py-2">When set to <i>true</i> a button labeled "End Experiment" is added to the screen. When pressed the experiment application will close. Only works when running a Built Application.</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  
                  <h1 id="configB" className="font-medium text-5xl my-4"><i>Blocks</i></h1>
                <p><i>Blocks</i> prescribe the sequence that <i>Trials</i> will be presented in. <i>Blocks</i> allow <i>Trials</i> to be presented in a serial or randomized order. You may also add functions to <i>Blocks</i> to create performance criterion for your participants.</p> 
                <br/>
                <div class="bg-red-600 rounded-lg border text-center border-white p-4">
                    <p><strong>Tip:</strong> Use <i>Blocks</i> to divide your experiment into analysis chunks. You can then use the <b>BlockIndex</b> column in the output file to segment the data during analysis!</p>
                </div>
                <br/>
                <h3 id="About" className="font-medium text-4xl">Creating a New <i>Block</i></h3>
                <p>Like all other <i>Experiment Object</i> types, each <i>Block</i> is created by defining a series of Attribute-Value Pairs 
                <br/><br/>You'll find examples of each type of <i>Block</i> described below in the Configuration Template file. We recommend simply copying the <i>Block</i> type you require and customizing it to suit your needs. We also recommend adding a "Block #": "Description" Attribute-Value Pair to every <i>Block</i>. The "#" corresponds to the <i>Block's</i> index number which will be used when creating <i>Blocks</i>. "Description" can be replaced with identifying information of your choosing.</p>
                <br/>

                <h3 id="About" className="font-medium text-4xl">Presenting <i>Trials</i> in Serial Order</h3>
                <p>A <i>Block</i>, in its most basic form, only requires the TrialOrder Attribute-Value Pair. The TrialOrder Attribute is defined by an ordered list of <i>Trial</i> indices. When the <i>Block</i> is executed it will display <i>Trials</i> in the order of this list. Upon termination of the last <i>Trial</i>, the <i>Block</i> will also terminate, and the next <i>Block</i> in the BlockOrder list will begin.</p>
                <br/>

                <h3 id="About" className="font-medium text-4xl">Presenting <i>Trials</i> in Random Order</h3>
                <br/><p className="font-medium text-2xl">The RandomlySelect Attribute-Value Pair</p>
                <div style={{padding: 20}}>
                <ul class="list-disc">
  
                <li>To present <i>Trials</i> in random orders, you must add the RandomlySelect Attribute-Value Pair to the <i>Block Object</i>.</li>
                <br/>
                <li>The RandomlySelect Attribute is defined by a list of Orders with each Order being assigned list of <i>Trial</i> indicies.</li>  
                <br/>
                <li>When the RandomlySelect Attribute-Value Pair is added to a <i>Block</i>, the Trial Index <b>0</b> (zero) can be used in the TrialOrder Attribute list.</li>  
                <br/>
                <li>When the <i>Block</i> executes the <i>Trial</i> index 0 (zero), the <i>Block</i> will randomly select an Order from the RandomlySelect Attribute list.</li>  
                <br/>
                <li>The <i>Block</i> will execute each of the <i>Trials</i> contained within the selected Order, in their defined sequence.</li>  
                <br/>
                <li>Upon the termination of the last <i>Trial</i> contained in the selected Order, the <i>Block</i> will return to the TrialOrder list and execute the next <i>Trial</i>.</li> 
                </ul>
                </div>
                <p className="font-medium text-2xl">The Replacement Attribute-Value Pair</p>
                <div style={{padding: 20}}>
                By default, after an Order is executed it is replaced and can be called at random next time the <i>Block</i> encounters the 0 (zero) <i>Trial</i> index in the TrialOrder. To remove an Order after it has been selected, set the Value of the Replacement Attribute to 0. 
                </div>

                <div class="bg-yellow-600 rounded-lg border text-center border-white p-4">
                    <p><strong>IMPORTANT!</strong> When the Replacement Attribute is set to 0, the number of 0 indexes contained in the TrialOrder Attribute-Value Pair cannot exceed the number of Orders defined in the RandomlySelect Attribute-Value Pair.</p>
                </div><br/>
                
                <div class="bg-green-600 rounded-lg justify-center border border-white p-2">
                      <p class="text-center"><a href="https://youtu.be/Nqj0VUgi4gE" target="_blank"><strong>Click Here!</strong> To Watch Our Video Tutorial About Serial and Random Trial Order</a></p>  
                </div>
                <br/>

                <h3 id="About" className="font-medium text-4xl">Adding Task Criterion</h3>
                <p>During the execution of a <i>Block</i>, several performance values are tracked and can be used to assess whether participants have reached the set performance criterion. Performance criterion can be set and evaluated either at the <i>Block</i> or <i>Trial</i> level, such that a <i>Block</i> will repeat (<i>Block</i> criteria) or <i>Trials</i> will continue (<i>Trials</i> criteria) until the set level of performance is reached.</p>
                <br/><h3 id="About" className="font-medium text-2xl"><i>Block</i> and <i>Trial</i> Functions</h3>
                <p>C# functions are used to determine whether a criterione has been reach. These functions must return <i>true</i> or <i>false</i> and can be attached to <i>Blocks</i> by assigning the function name to the TrialFunction and/or BlockFunction attribute, and assigning the function arguments to the 
                TrialGoal Attribute (used by the TrialFunction), or the BlockGoal Attribute (used by the BlockFunction). A criterion is met when the function returns <i>true</i>.</p>
                
                <div style={{padding: 20}}>
                  <h3 id="About" className="font-medium text-xl"><i>Trial</i> Criterion</h3>
                  <p>When a function is attached to a <i>Block</i> using the "TrialFunction" the function will be called after each <i>Task Trial</i> in the <i>Block</i>. When <i>false</i> is returned by the function
                  the <i>Block</i> will continue to the next trial as usual. When <i>true</i> is returned by the function the <i>Block</i> will immediately terminate and the experiment will proceed to the next <i>Block</i> in the BlockList.
                  </p><br/>

                  <h3 id="About" className="font-medium text-xl"><i>Block</i> Criterion</h3>
                  <p>When a function is attached to a <i>Block</i> using the BlockFunction the function will be called only after the very last <i>Trial</i> in the <i>Block</i>. When <i>false</i> is returned by the 
                  function the <i>Block</i> will repeat from the very beginning. When <i>true</i> is returned by the function the <i>Block</i> will terminate, and the experiment will proceed to the next <i>Block</i> in the BlockList.   
                  </p><br/>

                  <h3 id="About" className="font-medium text-xl"><i>Block</i> AND <i>Trial</i> Criterion</h3>
                  <p>Importantly, functions can be assigned to both TrialFunction and BlockFunction in the within the same <i>Block</i>. This allows <i>Blocks</i> to terminate early if the criterion has been met before the <i>Block</i> is complete (TrialFunction) 
                  and repeat if the criterion is not met by the end of the <i>Block</i> (BlockFunction).</p>
                </div>
                
                <h3 id="About" className="font-medium text-2xl">The Built-in SuccessesCriterion Function</h3>
                <p>OpenMaze comes with a built-in function named SuccessesCriterion which can be assigned to the TrialFunction Attribute or the BlockFunction Attribute or both at the same time! We describe this function in detail and provide
                  a visual representation below.</p>
                <div style={{padding: 20}}>
                  <h3 id="About" className="font-medium text-xl">Assigning SuccessesCriterion to the TrialFunction Attribute</h3>
                  <p>When assigned to the TrialFunction Attribute, SuccessesCriterion will be called after each <i>Task Trial</i> in the 
                  <i> Block</i> to determine whether the participant has successfully completed a number of <i>Trials</i> equal to the Value assigned to the TrialGoal Attribute. 
                  If <i>true</i>, the <i>Block</i> will immediately terminate and the experiment will continue to the next <i>Block</i> listed in the BlockOrder Attribute. If <i>false</i>, the <i>Block</i> will continue to the next <i>Trial </i>
                  defined in the TrialOrder Attribute.
                  </p><br/>
                  
                  <p><h3 id="About" className="font-medium text-xl">Assigning SuccessesCriterion to the BlockFunction Attribute</h3>
                  When assigned to the BlockFunction Attribute, SuccessesCriterion will be called after the very last <i>Trial</i> in the <i>Block</i> to determine whether 
                  the participant has successfully completed a number of <i>Trials</i> equal to the Value assigned to the BlockGoal Attribute. If true, the <i>Block</i> will 
                  terminate and the experiment will continue to the next <i>Block</i> listed in the BlockOrder Attribute. 
                  If <i>false</i>, the <i>Block</i> will be repeated starting again at the first <i>Trial</i> listed in the TrialOrder Attribute.</p><br/>
                  
                  <h3 id="About" className="font-medium text-xl">Assigning SuccessesCriterion to Both Attributes</h3>
                  <p>When SuccessessCriterion is assigned to both the TrialFunction and BlockFunction Attributes in the SAME <i>Block</i> participant performance can dictate both if the <i>Block</i> should end after each <i>Trial</i> based on the TrialGoal Attribute AND 
                  if the <i>Block</i> should be repeated based on the BlockGoal Attribute. Notice that the TrialGoal Attribute, may differ from the BlockGoal Attribute.</p> 
                </div>

                <h3 id="About" className="font-medium text-2xl">Creating Custom Functions</h3>
                <p>Custom functions can be created within the <b>Functions.cs</b> script found in the OpenMaze source code folder: <b>OpenMaze/Assets/Scripts/Main</b>. Functions must be written in C# and
                may only return <i>true</i> or <i>false</i>.</p><br/>

                <div class="bg-red-600 rounded-lg border text-center border-white p-4">
                    <p><strong>Tip:</strong> If you are unfamiliar with C#, don't worry, you can use the SuccessesCriterion function already contained in the <b>Function.cs</b> script as a template for creating your own function.</p>
                </div><br/>

                
                <h3 id="About" className="font-medium text-3xl"><i>Block</i> Order</h3>
                <p>Once the experiment <i>Blocks</i> have been created, their order of execution is defined by the BlockOrder Attribute which is itself defined by an ordered list of <i>Block</i> indices. <i>Blocks</i> can be executed multiple times and in any order.</p>
                <br/>
                <h3 id="About" className="font-medium text-3xl"><i>Blocks</i> Configuration File Example</h3>
                  <img src={Blocks} alt="" className="w-full my-4" /><br/>
                
                <div className="border text-white border-white rounded-lg my-8 overflow-x-auto">
                <div class="bg-yellow-600 rounded-t-lg border border-white p-4">
                      <p class="text-center"><b><i>Blocks</i> Attribute-Value Pairs</b></p>
                    </div>
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr>
                        <th className="p-4">Attribute</th>
                        <th className="p-4">Example Value</th>
                        <th className="p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2">BlockOrder</td>
                        <td className=" px-4 py-2">[1,2,2,...]</td>
                        <td className=" px-4 py-2">Dictates the order in which <i>Blocks</i> will be presented when the experiment is launched. Each number in this list corresponds to the index of a <i>Block</i> as it is defined in “Blocks”: {`[{1},{2},..,{n}]`}. <i>Blocks</i> can be presented in any order and called multiple times within the BlockOrder list.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">Block #</td>
                        <td className=" px-4 py-2">“Description”</td>
                        <td className=" px-4 py-2">A descriptive parameter that can be added to a <i>Block</i> definition to help track indices and describe the function of the <i>Block</i>.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">TrialOrder</td>
                        <td className=" px-4 py-2">[1,4,5,5,...]</td>
                        <td className=" px-4 py-2">An ordered list of <i>Trial</i> indices. <i>Trials</i> can be presented in any order and called multiple times within the TrialOrder list.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">Replacement</td>
                        <td className=" px-4 py-2">0 or 1</td>
                        <td className=" px-4 py-2">Random selection is executed with replacement (1) or without replacement (0).</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">RandomlySelect</td>
                        <td className=" px-4 py-2">
                          {`[{“Order”: [1,2]},
                          …,
                          {“Order”: [3,4]}] `}</td>
                        <td className=" px-4 py-2">A list of <i>Trial</i> orders. When <i>Trial</i> index 0 is called in TrialOrder one of the Order lists is randomly selected. When an Order is selected, <i>Trial</i> are presented in the order they are defined in the Order list.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">Order</td>
                        <td className=" px-4 py-2">[1,4,5,...]</td>
                        <td className=" px-4 py-2">An ordered list of <i>Trial</i> indices. Each list must contain at least 1 <i>Trial</i>, with no upper limit.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">TrialFunction</td>
                        <td className=" px-4 py-2">"SuccessCriterion"</td>
                        <td className=" px-4 py-2">Refers to the name of a function written in the Functions.cs script of the OpenMaze source code. 
                        The function will be called at the end of each <i>Trial</i> to determine whether the <i>Block</i> should be terminated or continue.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">TrialGoal</td>
                        <td className=" px-4 py-2">"5"</td>
                        <td className=" px-4 py-2">Contains any variables needed to run the <i>Block</i> Function.</td>
                      </tr >
                      <tr>
                        <td className=" px-4 py-2">BlockFunction</td>
                        <td className=" px-4 py-2">"SuccessCriterion"</td>
                        <td className=" px-4 py-2">Refers to the name of a function written in the Functions.cs script of the OpenMaze source code. 
                        The function will be called at the end of each the <i>Block</i> to determine whether the <i>Block</i> should be terminated or repeated.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">BlockGoal</td>
                        <td className=" px-4 py-2">"3"</td>
                        <td className=" px-4 py-2">Contains any variables needed to run the <i>Block</i> Function.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">DisplayText</td>
                        <td className=" px-4 py-2">“Display This Text”</td>
                        <td className=" px-4 py-2">The string provided will be displayed at the top of the screen during each <i>Task Trial</i> in the <i>Block</i>.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">ShowTrialTotal</td>
                        <td className=" px-4 py-2"><i>true</i></td>
                        <td className=" px-4 py-2">When set to <i>true</i> the number of <i>Goals</i> collected in the current <i>Trial</i> will be displayed. </td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">ShowBlockTotal</td>
                        <td className=" px-4 py-2"><i>true</i></td>
                        <td className=" px-4 py-2">When set to <i>true</i> the number of <i>Goals</i> collected in the current <i>Block</i> will be displayed during every <i>Task Trial</i> in the <i>Block.</i></td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">ShowNumSuccesses</td>
                        <td className=" px-4 py-2"><i>true</i></td>
                        <td className=" px-4 py-2">When set to <i>true</i> the number of successful <i>Trials</i> in the current <i>Block</i> will be displayed during every <i>Task Trial</i> in the <i>Block</i> (a <i>Trial</i> is counted successful when a participant meets the Quota).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br/><br/>

                <h1 id="configS" className="font-medium text-5xl my-4">Settings</h1>
                <p>The Settings Section can be divided into two sections Experiment Settings and Character Settings.</p> 
                <h1 id="configS" className="font-medium text-3xl my-4">Experiment Settings</h1>
                <p>Experiment Settings provide a small number of Attribute-Value Pairs that can be used to change data recording frequency, ignore input from the user upon Trial onset, turn on/off timing analysis features.</p><br/>


                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                <div class="bg-gray-800 border border-white p-4">
                      <p class = "text-center"><strong>Experiment Settings</strong></p>
                </div>
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr  class="text-center">
                        <th className="p-4">Attribute</th>
                        <th className="p-4">Example Value</th>
                        <th className="w-3/4 p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2">“OutputTimesPerSecond”:</td>
                        <td className=" px-4 py-2">30</td>
                        <td className=" px-4 py-2">Used to adjust how often per second the experiment records a new line of data to the output file. Output is intrinsically linked to the Unity Software <b>Update()</b> function which is called during each render cycle (see Output Timing below) This number can be used to reduce the output rate below the update cycle rate, but not above.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“IgnoreUserInputDelay”</td>
                        <td className=" px-4 py-2">0.5</td>
                        <td className=" px-4 py-2">Time in seconds after each Trial onset that input will be ignored. We recommend setting this variable to {">"} 0 to ensure that accidental key presses do not cause trials to be skipped when consecutive trials use the same TrialEndKey (see Trials section below).</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“TimingVerification”</td>
                        <td className=" px-4 py-2"><i>true</i> or <i>false</i></td>
                        <td className=" px-4 py-2">When set to <i>true</i>, a small box will be added to the bottom corner of the experiment which will alternate between white and black upon Trial onsets. Using a photodiode, experimenters can compare visual onset to the onset time recorded in the output file. (See Output Timing)</td>
                      </tr>
                      </tbody>
                      </table>
                      </div>

                      <h1 id="configS" className="font-medium text-3xl my-4">Character Settings</h1>
                <p>Character Settings Attribute-Value Pairs are contained within the CharacterSettings object and can be used to make quick changes to characteristics of the participant experience.</p>

                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                      <div class="bg-gray-800 border border-white p-4">
                      <p class = "text-center"><strong>Character Settings</strong></p>
                      </div>
                      <table className="table-auto">
                      <thead className="border-b">
                      <tr class="text-center">
                        <th className="p-4">Attribute</th>
                        <th className="p-4">Example Value</th>
                        <th className="w-3/4 p-4">Description</th>
                      </tr>
                    </thead>
                      <tbody>
                      <tr>
                        <td className=" px-4 py-2">“Height”</td>
                        <td className="px-4 py-2">2</td>
                        <td className="px-4 py-2">The height of the participant's viewing angle within the environment.</td>
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
                        <td className=" px-4 py-2">When 3D <i>Goals</i> are placed into an environment, they will be rotated 360 degrees per the value of time (in seconds) set by this parameter. When set to 0 3D <i>Goals</i> will not rotate.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div id="test"></div><br/>
                
                <div className={`max-w-sm md:max-w-lg lg:max-w-2xl mb-16 text-white  border-white border-t-8 md:border-b-8 md:border-l-0 border-r-0 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}>
              <h2 className="font-medium text-center text-6xl my-2">Testing Experiments</h2>
              </div>

                <h1 id="testC" className="font-medium text-5xl my-4">Running Configuration Files</h1>
                <h1 id="testC" className="font-medium text-3xl my-4">Method 1: Manually Select</h1>
                <p>By default, OpenMaze will prompt you with a file browser each time the experiment is launched. This is true regardless of whether the experiment is launched in the Unity Editor or as an experiment application. 
                  Simply navigate to the folder where your Configuration File is saved, select it and click <strong>Open</strong>. You will always be prompted with the <strong>Configuration_Files</strong> folder contained within the <strong>OpenMaze</strong> project folder.</p><br />

                <h1 id="testC" className="font-medium text-3xl my-4">Method 2: AutoRun</h1>
                <p>You can have OpenMaze execute a specific Configuration File by moving the <strong>AutoRun_Config</strong> folder from the <strong>Configuration_Files</strong> folder to the <strong>StreamingAssets</strong> folder. The place holder Configuration File
                  contained in the <b>AutoRun_Config</b> folder can be used to make sure you have moved the folder to the proper location, before being replaced with a Configuration File of your choosing. Removing the <b>AutoRun_Config </b> 
                  folder from the <b>StreamingAssets</b> folder OR removing all the Configuration Files from the <b>AutoRun_Config</b> folder will allow you to manually select Configuration Files once again.</p><br />

                  <div class="bg-yellow-600 rounded-lg border text-center border-white p-4">
                    <p><strong>IMPORTANT!</strong> After moving the <strong>AutoRun_Config</strong> folder to the <strong>StreamingAssets</strong> folder it cannot be renamed, and it must contain only 1 Configuration File for it to function properly.</p>
                    </div><br />
                

                <h1 id="testU" className="font-medium text-5xl my-4">Testing Experiments in the Unity Editor</h1>
                
                <p>Experiments can be launched directly within the Unity Editor, allowing you to make sure everything is running properly before you export it as an application. Simply follow the steps below:</p>
                
                <div style={{padding: 20}}>
                    <b>Step 1. Validate Your JSON file</b>
                    <p>We recommend adding a JSON linter to your text editor which will allow you to verify whether your Configuration File is a valid JSON file 
                      via a menu option or a hot-key combination. You can also copy your entire Configuration File and paste it into an online linter like <b><a href="https://jsonlint.com/" target="_blank">https://jsonlint.com/</a></b>.</p>
                    <br/>

                    <b>Step 2. Save Your Changes</b>
                    <p>This sounds silly, but while testing your experiment you're likely to find yourself making small changes to the Configuration File before 
                      returning quickly to the Unity Editor to test them. CTRL+S is your friend!</p>
                    <br />

                    <b>Step 3. Open the +LaunchExperiment Scene in the Unity Editor</b>
                    <p>The experiment will not run if you have any other Scene open in the Unity Editor. </p>
                    <br />

                    <b>Step 4. Press the Play Button!</b>
                    <p>Pressing the <strong>Play</strong> button while the <b>+Launch Experiment</b> Scene is selected will launch the experiment in the editor.  </p>
                    <br />

                    <b>Step 5. Select Your Configuration File</b>
                    <p>Upon launching the experiment, you will be prompted with a <b>Choose configuration file</b> window. Select the Configuration File you wish to test and press the <strong>Open</strong> button.</p>
                    <br />

                    <div class="bg-gray-600 rounded-lg border text-center border-white p-4">
                    <p><strong>Note:</strong> If you are using the AutoRun Configuration File method described above, the AutoRun Configuration File will be automatically executed.</p>
                    </div><br />

                    <b>Step 6. Start the Experiment</b>
                    <p>Navigate to the <strong>Game</strong> window and press the <strong>Start Experiment</strong> button. The experiment Configuration File will now be executed in the <strong>Game</strong> window and you may complete the experiment exactly as 
                      a participant would.  </p>
                    <br />

                    <div class="bg-red-700 rounded-lg border text-center border-white p-4">
                    <p><strong>Tip:</strong> Click the <strong>Maximize On Play</strong> button in the top right of the <strong>Game</strong> window to experience the experiment in fullscreen.</p>
                    </div><br />

                    <b>Step 7. End Testing</b>
                    <p>Stop the experiment at any time by pressing the <strong>Play</strong> button again.  </p>
                    <br />
                  </div>

                  <h1  className="font-medium text-3xl my-4">Making Real Time Changes</h1>
                  <p>While an experiment Configuration File is being executed in the <strong>Game</strong> window, changes to the current <i>Trial</i> environment can be made within the <strong>Scene</strong> window, 
                    allowing the changes to be witnessed from the participant perspective in the <strong>Game</strong> window in real time. 
                    This can prove extremely helpful when trying to make minor tweaks to the environment. You can also pause the experiment at any time, allowing you to make changes
                    without having to worry about the <i>Trial</i> timing out.</p><br /> 

                  <h1  className="font-medium text-3xl my-4">Testing a <i>Trial</i> or <i>Block</i></h1>
                  <p>While specific <i>Trials</i> and <i>Blocks</i> cannot be selected for testing within a Configuration File, Configuration Files can be temporally edited so that specific events occur at the beginning of an experiment to facilitate the process. 
                  Specifically, you can add a <i>Block</i> index to the front of the BlockOrder or move a <i>Trial</i> index to the front of the TrialOrder within the first <i>Block</i> in the BlockOrder.
                  You can end your test at any time by pressing the <strong>Play</strong> button above the <strong>Scene</strong> window again.</p>

                  <h1 id="testT" className="font-medium text-5xl my-4">Troubleshooting</h1>
                  <p>If you run into any issues while running your experiment, try the following in the order they are prescribed:</p>
                  <div style={{padding: 20}}>
                  <b>Validate your Configuration File</b>
                  <p>Most commonly, if you encounter an unexpected error when attempting to run a Configuration File, it is likely a JSON formatting issue. 
                    Because of this we always recommend using a text editor with a JSON lint tool. This will allow you to press a hot key to check if your 
                    Configuration File has any issues. Alternatively, while much more tedious, you can copy and paste your JSON file text into an online JSON lint (e.g. 
                    <a href= "https://jsonlint.com/" target="_blank">https://jsonlint.com/</a>).</p><br />

                    <b>Check for Error Messages</b>
                  <p>Open the <strong>Console</strong> window within the Unity Editor and see if it displays any error messages. 
                    We have tried our best to create custom error messages for the most common errors that you may encounter when running an experiment. 
                    These messages will alert you to many issues. Some examples include: 
                    attempting to call an object that hasn’t been placed into the correct project folder, 
                    calling a Scene number that hasn’t been added to the Build, and many others.</p><br />

                    <b>Reach Out to the OpenMaze Team</b>
                    <p>If you’re having an issue that you cannot resolve, please feel free to contact us directly with your issue. You can get in touch with us via our website <a href="https://openmaze.duncanlab.org/contact"  target="_blank"><u>contact page</u></a> or <a href="https://github.com/DuncanLab/OpenMaze"  target="_blank"><u>GitHub</u></a></p>

                    </div>
                  <p></p>
                  <br/>

                  <div id="export"></div><br/>

                  <div className={`max-w-sm md:max-w-lg lg:max-w-2xl mb-16 text-white  border-white border-t-8 md:border-b-8 md:border-l-0 border-r-0 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}>
              <h2 className="font-medium text-center text-6xl my-2">Exporting Experiments</h2>
              </div>

                <h1 id="exportE" className="font-medium text-5xl my-4">Experiment Applications</h1>
                <p>While you can run your experiments through the Unity Editor, it is not recommended due to how computationally expensive it is, 
                  and because it requires the Unity Editor to be installed on all testing computers. 
                  Instead, once you have created and tested your experiment in the Unity Editor, 
                  it can be built into an application that can run independent of any software (including the Unity Editor).</p>
                  
                  <br /><p>Unity allows you to build your experiment application for a variety of platforms, 
                  regardless of the platform you’ve been using to design the experiment. 
                  This allows you to, for example, code the experiment using a Windows device and export it 
                  as an application that can be run on macOS, or vice-versa.</p><br />

                <h1 id="exportP" className="font-medium text-5xl my-4">Platform Support</h1>
                <p>At this time, OpenMaze experiment applications have been extensively tested on the macOS and Windows operating systems. 
                  However, you should be aware that Unity software supports a variety of additional build platforms. 
                  These include: iOS, Android, WebGL, PlayStation 4, PlayStation Vita, Xbox One, Wii U, 3DS, 
                  Oculus Rift, Google Cardboard, SteamVR, PlayStation VR, Gear VR, Windows Mixed Reality, 
                  Daydream, Android TV, Samsung Smart TV, tvOS, Nintendo Switch, Fire OS, Facebook Gameroom, 
                  Apple's ARKit, Google's ARCore, and Vuforia. We expect that exporting OpenMaze experiments 
                  for any of the untested platforms may require changes to the Unity Editor <b>Project Settings</b> or perhaps 
                  the OpenMaze codebase.</p><br />
                
                
                <h1 id="exportB" className="font-medium text-5xl my-4">Building an Application</h1>
                <div style={{padding: 20}}>
                    <b>Step 1. Install the Build Support for your Target Platform</b>
                    <p>Check that the <b>Build Support</b> for your Target Platform has been installed. 
                      To do this, open the Unity Hub application and click on the <strong>Installs</strong> tab. 
                      If installed, the icon of the Target Platform will appear in the box labelled with the Unity software install 
                      version you have used to code your experiment. If the Target Platform icon is not present, 
                      click the three dots <b>⋮</b> located in the top right corner of the box and click <strong>Add Modules</strong>. 
                      When prompted, select your Target Platform and click <strong>Next</strong>. </p>
                    <br/>

                    <b>Step 2. Create an empty folder</b>
                    <p>Create a folder within the directory you would like to save your application, you can name it whatever you'd like. This will be used to store your experiment application and the other folders necessary for running the application.</p>
                    <br />

                    <b>Step 3. Open the Build Settings</b>
                    <p>Click the <b>File</b> tab at the top of the Unity Editor and select <b>Build Settings</b>.</p>
                    <br />

                    <b>Step 4. Select the Target Platform</b>
                    <p>Select the platform you intend to run the built application on (e.g. Windows, Mac OS X) from the <b>Target Platform</b> drop-down menu in the <strong>Build Settings</strong> window. 
                      If your desired Target Platform does not appear in the drop-down refer to <b>Step 1.</b>
              
                    </p>
                    <br />

                    <b>Step 5. Build the application</b>
                    <p>Click the <b>Build</b> button and select the folder you created in <b>Step 2.</b></p>
                    <br />

                    <div class="bg-gray-600 rounded-lg border text-center border-white p-4">
                    <p><strong>Note:</strong> You may be prompted with a <strong>Missing Project ID</strong> window. Click <b>Yes</b> to continue.</p>
                    </div><br />

                    <b>Step 6. Add Configuration Files</b>
                    <p>Built applications will not contain the <b>Configuration_Files</b> folder. Placing the <b>Configuration_Files</b> folder in the 
                    folder containing the experiment application will ensure that it is prompted when the application is launched.</p>
                    <br />

                    <div class="bg-red-700 rounded-lg border text-center border-white p-4">
                    <p><strong>Note:</strong> If you built your application using an AutoRun Configuration File, the application will automatically run this Configuration File.</p>
                    </div><br />
                  </div>

                <h1 id="exportR" className="font-medium text-5xl my-4">Running Applications</h1>
                <div style={{padding: 20}}>
                    <b>Step 1. Run the application</b>
                    <p>Applications must be run on a device with the same Target Platform that was selected when it was built. Upon launching the application, it will be displayed full screen and should run
                      exactly as it had in the <b>Game</b> window in the Unity Editor.</p>
                    <br />

                    <div class="bg-yellow-600 rounded-lg border text-center border-white p-4">
                    <p><strong>IMPORTANT!</strong> You must place the <strong>Configuration_File</strong> folder into the same folder as the application for it to auto prompt. If you are using 
                    an AutoRun Configuration File you can replace or make changes to it by navigating to the <b>StreamingAssets</b> subfolder.</p>
                    </div><br />

                    <b>Step 2. Data Files</b>
                    <p>After running the experiment, navigate back to the folder containing the application. There should now be a folder named <b>Assets</b> that was not there prior to launching the experiment the first time. Within this folder is a subfolder named <b>Outputfiles~</b>.  This folder will store data files every time the application is run.</p>
                    <br />
                  </div>

                <h1 id="exportC" className="font-medium text-5xl my-4">Post Build Changes</h1>

                <p>It should be noted that once exported, the ability to make changes to the experiment is limited. 
                  Changes can be made to any files that are contained within the <strong>StreamingAssets</strong> folder allowing you to add 
                  or change Image Files used for <i>Instruction/Cue Screen Trials</i> or <i>Landmarks/Goals</i> and make changes to 
                  or replace the AutoRun Configuration File. However, changes to Scenes, 3D Models, and Audio Files cannot be made. 
                  Changing or creating new Configuration Files is also possible if they do not require Scenes, 
                  3D Models, or Audio Files that were not present within the project at the time the application was built.</p>

                <h1 id="exportS" className="font-medium text-5xl my-4">Sharing Applications</h1>
                <p>Exporting your experiment as an application makes it easy to share with friends and colleagues. Due to their file size, we recommend using a cloud service (e.g. Dropbox, Google Drive). Windows application folders can be uploaded in their full form or as a zip file. macOS applications however must be converted into a Disk Image (.dmg file type) and the Disk Image must be uploaded and downloaded. We provide detailed instructions for this procedure in the <a href="#online"><b>Online Experiments</b></a> section below.</p>

                  <br/><div id="output"></div><br/>
                  
                   <div className={`max-w-sm md:max-w-lg lg:max-w-2xl mb-16 text-white  border-white border-t-8 md:border-b-8 md:border-l-0 border-r-0 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}>
              <h2 className="font-medium text-center text-6xl my-2">Output Data</h2>
              </div>

                <h1 id="outputF" className="font-medium text-5xl my-4">Data Files</h1>
                <p>OpenMaze output is written to Comma Separated Values (.csv) files. Each time the experiment is executed a .csv 
                file is created and named with the concatenated text entered in the experiment start screen (i.e. <b>+Launch Experiment</b> Scene) fields and a time stamp:
                <br /><br /><b class="text-center">StartField1_StartField2_StartField3_StartField4_TimeStamp.csv</b><br /><br /> 
                Output files record the participant's position (x, y, and z) and viewing angle (y rotation value), <i>Goal</i> collisions, and keystrokes. 
                Each row also includes the <i>Block</i> and <i>Trial</i> index, as well as a <i>Trial</i> sequence number identifying how many <i>Trials</i> have occurred in the <i>Block</i>. 
                Rows are also timestamped with the absolute system time of the device running the experiment.</p>

                <h1 id="outputC" className="font-medium text-5xl my-4">Customizing StartFields</h1>
                <p>You may wish to change the place holder text for your <b>StartFields</b>, perhaps to "Participant ID", "Session #", "Condition", "Version", etc. This can be done within the Unity Editor before exporting your experiment (These fields cannot be changed after the experiment has been built).</p>
                <div style={{padding: 20}}>
                    <b>Step 1. Open the <b>+Launch Experiment</b> Scene Canvas</b>
                    <p>Open the <b>+Launch Experiment</b> Scene in the Unity Editor, navigate to the <b>Hierarchy</b> window and click to expand the <b>Canvas</b>. 
                    </p><br />

                    <b>Step 2. Select the field</b>
                    <p>Contained within the <b>Canvas</b> are 4 <b>Field</b> objects that can be expanded to reveal 
                    <b> Text</b> and <b>Placeholder</b>; select <b>Placeholder</b>.    
                    </p><br />

                    <b>Step 3. Change the placeholder text</b>
                    <p>With the <b>Placeholder</b> object selected navigate to the <b>Inspector </b> 
                    window where you can change the text element to suit your needs.</p><br />

                    <div class="bg-red-600 rounded-lg border text-center border-white p-4">
                    <p><strong>Tip:</strong> To disable any of the <b>StartFields</b>, navigate to the <b>Hierarchy</b> window and click the <b>Canvas</b> GameObject to expand it. Click the <b>Field</b> with the number that corresponds to the <b>StartField</b> you wish to disable. Uncheck the checkbox next to the field name at the top of the <b>Inspector</b> window. Any <b>StartField</b> disabled in this manner will be removed from your <b>+Launch Experiment</b> scene but will still be available in the <b>Hierarchy</b> window under the <b>Canvas</b> GameObject should you wish to reenable it.</p>
                    </div><br />

                  </div>

                <h1 id="outputT" className="font-medium text-5xl my-4">Output Timing</h1>
                <p>By default, Unity software uses VSync, which calls the <b>Update()</b> function once per frame which is dictated by the refresh rate of the monitor running the experiment. This ensures the output is synced as closely as possible to the participant’s experience. Collisions with <i>Goals</i> are written to the output file whenever a collision is detected by the Unity <b>FixedUpdate()</b> function, which is called every 20ms, meaning that the output file will mark the time at which a <i>Goal</i> was collected within 20ms. </p>

                  <br/><div id="control"></div><br/>

                  <div className={`max-w-sm md:max-w-lg lg:max-w-2xl mb-16 text-white  border-white border-t-8 md:border-b-8 md:border-l-0 border-r-0 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}>
              <h2 className="font-medium text-center text-6xl my-2">Controls and Input Devices</h2>
              </div>
                
                <h1 className="font-medium text-3xl my-4">Movement Controls</h1>

                  <p>By default, OpenMaze is calibrated for use with the arrow keys of a standard keyboard, or a single joystick, allowing participants to move forward and backward and rotate in place left or right. However, controls can be easily changed through the Unity Editor's <b>Input Options</b> to include more complex movement controls: for example, allowing up/down/left/right head movement to be controlled with the mouse or a second joystick (e.g., gamepads with two joysticks). </p><br />
                    
                    <h1 className="font-medium text-3xl my-4">Input Devices</h1>
                    <p>Supported input devices include most digital (e.g., keyboards, 
                    digital controllers) or analog (e.g., joysticks, gamepads) devices supported by the local machine. The input device can be set within the Unity Editor's <b>Project</b> windows and input can be reassigned to different keys if necessary (e.g. when using MR compatible devices). While not supported by OpenMaze, Unity software is compatible with a variety of specialized input devices 
                    (e.g., VR headsets, touch screens) though add-on support packages. We note that augmented version of OpenMaze have been successfully used with the Oculus Rift headset.</p>

                    <br/><div id="online"></div><br/>
                <div className={`max-w-sm md:max-w-lg lg:max-w-2xl mb-16 text-white  border-white border-t-8 md:border-b-8 md:border-l-0 border-r-0 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}>
              <h2 className="font-medium text-center text-6xl my-2">Online Experiments</h2>
              </div>
                    <h1 id="onlineUD" className="font-medium text-5xl my-4">Uploading and Downloading</h1>
                    <p>OpenMaze has been designed to make it easy to upload and download applications across devices. This functionality allows experiments to be shared with participants online. We have created two short (~2min) tutorial videos which provide step-by-step instructions on how to package your experiments, upload them to the cloud, and create a URL that can be used by anyone to download your experiment. They also include instructions for how to download applications using the URL unpack them and run them.</p><br />

                      <div class="bg-yellow-600 rounded-lg border text-center border-white p-4">
                    <p><strong>IMPORTANT!</strong> There are key differences between uploading and downloading macOS vs. Windows experiment applications. Make sure to watch the corresponding video closely.</p>
                    </div><br />

                    <div className="">
                    <h1  className="font-medium text-3xl my-4">macOS Applications</h1>

                    
                  <ReactPlayer url={"https://youtu.be/H3dqHfPXTco"} width="100%" style={{ borderRadius: "0.5rem" }}/>
                    

                    <h1  className="font-medium text-3xl my-4">Windows Applications</h1>

                    
                  <ReactPlayer url={"https://youtu.be/i4RKxMHjUvM"} width="100%" style={{ borderRadius: "0.5rem" }}/>
                    

                    <h1 id="onlineS" className="font-medium text-5xl my-4">Recommended Settings</h1>
                    <h1 className="font-medium text-2xl my-4">1. Use an AutoRun Configuration File</h1>
                    <p>Instead of having to rely on your participants selecting a Configuration File when launching your experiment, we recommend using the AutoRun Configuration File feature. This is described
                      in detail in the <a href="#test"><b>Testing Experiments Section</b></a>.
                    </p>
                    <h1 className="font-medium text-2xl my-4">2. Experiment End Screen/Button</h1>
                    <p>Make sure that you include an experiment end screen <i>Trial</i> which includes the EndButton Attribute-Value Pair. This will allow the participant to press a button to exit the application (See:  <a href="#configI"><b>Instruction/Cue Screen Trials</b></a>).
                    </p>

                    <h1 className="font-medium text-2xl my-4">3. Add a URL to your End Button</h1>
                    <p>Follow the steps below to add a URL to your End Button. When the End Button is pressed, the experiment application will close, and a URL of your choosing will be opened in the participant's default internet browser. This is a useful tool for prompting the user with the website that they must use to upload their data file. 
                    </p>
                    <div style={{padding: 20}}>
                    <b>Step 1: Open the Loading Screen Scene</b>
                    <p>Open the <b>Loading Screen</b> Scene in the Unity Editor. It can be found in the <b>_Scenes</b> folder in the <b>Project</b> window.</p><br />  
                    <b>Step 2: The Exit Button GameObject</b>
                    <p>With the <b>Loading Screen</b> Scene open, expand the <b>Canvas</b> GameObject in the <b>Hierarchy</b> window to reveal the <b>Exit Button</b> GameObject and select it.</p><br />
                    <b>Step 3: Turn the URL function ON</b>
                    <p>With the <b>Exit Button</b> selected, navigate to the <b>Inspector</b> window and scroll down to the button's <b>On Click</b> options. Set <b>UrlOpener.Open</b> to <b>Editor and Runtime.</b></p> <br />
                    <b>Step 4: Set your custom URL</b>
                    <p>Below the <b>On Click</b> menu in the <b>Inspector</b> window, you'll find a subwindow titled <b>URL Opener (Script)</b>. Replace the default OpenMaze URL to a URL of your choosing.</p> <br />
                    <b>Step 5: Test it out</b>
                    <p>You can test whether your URL is working properly directly within the Unity Editor. Add the EndButton Attribute-Value Pair to an <i>Instruction/Cue Screen Trial</i> and run the run the experiment in the Unity Editor.</p> <br />
                    <p></p><br />
                    </div>

                    <br/><div id="develop"></div><br/>

                <div className={`max-w-sm md:max-w-lg lg:max-w-2xl mb-16 text-white  border-white border-t-8 md:border-b-8 md:border-l-0 border-r-0 w-full rounded-lg p-4 md:p-10 mb-8 md:mb-16 bg-dark-light m-auto`}>
              <h2  className="font-medium text-center text-6xl my-2">Developing OpenMaze</h2>
              </div>

                    <h1 id="developr" className="font-medium text-3xl my-4">Feature Request and Issue Reporting</h1>
                    <p>To submit a feature request or report an issue in the code base, please visit the <a href="https://github.com/DuncanLab/OpenMaze/issues" target="_blank"><u>OpenMaze GitHub Issues Page</u></a>  and create a new issue. 
                      When submitting a request, ensure that you attach the appropriate label to it (e.g. feature request, bug, help wanted).</p>

                      <h1 id="developS" className="font-medium text-3xl my-4">Sharing Changes</h1>
                      <p>Through the OpenMaze GitHub page you can clone or fork the OpenMaze project. 
                        This will allow you to submit your changes to the OpenMaze team by submitting a GitHub pull request. Upon receiving a pull request, the OpenMaze development 
                        team will review your changes and coordinate their implementation with you. <strong>Note:</strong> before developing larger changes to the source code or adding functionality, 
                        we encourage you to reach out to the OpenMaze development team for guidance to ensure that the final implementation process is quick-and-easy! 
                    </p>

                    <h1 id="developF" className="font-medium text-3xl my-4">Feature Diagnostics</h1>
                    <p>When making changes to any aspect of the OpenMaze source code it is important to ensure that your changes don't impact other functionality. We have made it easy to test this
                      by including a <b>Test_All_Features</b> Configuration File with OpenMaze. This Configuration File can be found in the <b>OpenMaze/Configuration_Files/FeatureTest</b> folder.
                      This Configuration File includes a test <i>Trial</i> for every OpenMaze feature and many combinations of features. Inspecting this Configuration File, you'll find that features are
                       divided into sections, which are then divided further into subsections using <i>Blocks</i>. You will also notice the sequential ordering of feature tests, with each feature 
                       being first tested on its own and then in combination with other features. This allows you to add and remove <i>Blocks</i> to test specific features or combinations of features
                       allowing you to pinpoint issues. 
                    </p>
        
        <br/><br/>

        <div className = "opacity-50">
          <p>This website and software is not sponsored by or affiliated with Unity Technologies or its 
        affiliates. Unity Trademarks are trademarks or registered trademarks of Unity Technologies 
        or its affiliates in the U.S. and elsewhere</p>
      
        </div>

                    </div>
              
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