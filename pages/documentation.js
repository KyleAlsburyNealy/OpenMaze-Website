import Layout from "../components/layout";
import DocumentSection from "../components/documentSection";
import DocsTable from "../components/docsTable";
import ReactPlayer from 'react-player'
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
    step8: false
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
      step8: false 
    
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
      step8: false });
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
      step8: false });
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
      step8: false });
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
      step8: false});
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
      step8: false});
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
      step8: false});
  };
  stepEightOpen = () => {
    this.setState({ step1: false,
      step2: false,
      step3: false, 
      step4: false,
      step6: false,
      step6: false,
      step7: false,
      step8: !this.state.step8});
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
                
                <p className={sectionLinkStyle}>
                  <a href="#about">About</a>
                </p>

                <button onClick={this.stepOneOpen} className="">
                <p className={sectionLinkStyle}>
                    Software Setup
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
                    Scenes
                </p>
                </button>

                {this.state.step2 &&
                  <div>
                    <a href="#scenesAbout" className={subSectionLinkStyle}>What is a Scene?</a>
                    <a href="#scenesCreate" className={subSectionLinkStyle}>Creating a New Scene</a>
                    <a href="#scenesBuild" className={subSectionLinkStyle}>Building 3D Environments</a>
                    <a href="#scenesSpace" className={subSectionLinkStyle}>Scene Space</a>
                    <a href="#scenesNon" className={subSectionLinkStyle}>Prebuilt Scenes</a>
                    <a href="#scenesUse" className={subSectionLinkStyle}>Scene Numbers</a>
                  </div>
                }<br />

                <button onClick={this.stepThreeOpen} className="">
                <p className={sectionLinkStyle}>
                    Designing Experiments
                </p>
                </button>

                {this.state.step3 &&
                  <div>
                    <a href="#configO" className={subSectionLinkStyle}>Configuration Files</a>
                    <a href="#configHeirarchy" className={subSectionLinkStyle}>Design Hierarchy</a>
                    <a href="#configG" className={subSectionLinkStyle}>Goals and Landmarks</a>
                    <a href="#configE" className={subSectionLinkStyle}>Enclosures</a>
                    <a href="#configT" className={subSectionLinkStyle}>Task Trials</a>
                    <a href="#configTasks" className={subSectionLinkStyle}>Task/Design Examlpes</a>
                    <a href="#configI" className={subSectionLinkStyle}>Instruction/Cue Trials</a>
                    <a href="#configB" className={subSectionLinkStyle}>Blocks</a>
                    <a href="#configS" className={subSectionLinkStyle}>Settings</a>
                  </div>
                }<br />

                <button onClick={this.stepFourOpen} className="">
                <p className={sectionLinkStyle}>
                    Testing Experiments
                </p>
                </button>

                {this.state.step4 &&
                  <div>
                    <a href="#testC" className={subSectionLinkStyle}>Running Configuration Files</a>
                    <a href="#testU" className={subSectionLinkStyle}>Testing in Unity</a>
                    <a href="#testT" className={subSectionLinkStyle}>Troubleshooting</a>
                  </div>
                }<br />

                <button onClick={this.stepFiveOpen} className="">
                <p className={sectionLinkStyle}>
                    Exporting Experiments
                </p>
                </button>

                {this.state.step5 &&
                  <div>
                    <a href="#exportE" className={subSectionLinkStyle}>Experiment Applications</a>
                    <a href="#exportP" className={subSectionLinkStyle}>Platform Support</a>
                    <a href="#exportB" className={subSectionLinkStyle}>Building an Application</a>
                    <a href="#exportR" className={subSectionLinkStyle}>Running Applications</a>
                    <a href="#exportC" className={subSectionLinkStyle}>Post Build Changes</a>
                    <a href="#exportS" className={subSectionLinkStyle}>Sharing Applicaitons</a>
                  </div>
                }<br />

                
                <button onClick={this.stepSixOpen} className="">
                <p className={sectionLinkStyle}>
                    Output Data
                </p>
                </button>

                {this.state.step6 &&
                  <div>
                    <a href="#outputF" className={subSectionLinkStyle}>Data Files</a>
                    <a href="#outputC" className={subSectionLinkStyle}>Customizing Start Fields</a>
                    <a href="#outputT" className={subSectionLinkStyle}>Output Timing</a>
                  </div>
                }<br />

                <p className={sectionLinkStyle}>
                  <a href="#controlD">Controls and Input Devices</a>
                </p>

                <button onClick={this.stepSevenOpen} className="">
                <p className={sectionLinkStyle}>
                    Online Experiments
                </p>
                </button>

                {this.state.step7 &&
                  <div>
                    <a href="#onlineUD" className={subSectionLinkStyle}>Uploading/Downloading Experiments</a>
                    <a href="#onlineS" className={subSectionLinkStyle}>Recommended Settings</a>
                  </div>
                }<br />

                <button onClick={this.stepEightOpen} className="">
                <p className={sectionLinkStyle}>
                    Developing OpenMaze
                </p>
                </button>

                {this.state.step8 &&
                  <div>
                    <a href="#developR" className={subSectionLinkStyle}>Feature Request and Issue Reporting</a>
                    <a href="#developS" className={subSectionLinkStyle}>Sharing Changes</a>
                    <a href="#developF" className={subSectionLinkStyle}>Feature Diagnostics</a>
                  </div>
                }<br />

  

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
              <h1 className="font-medium text-5xl my-4">Welcome To OpenMaze!</h1>
                <p id="creatingScenes" className="font-medium text-3xl">About</p>
                  <p>OpenMaze is a general-purpose 3D experiment building toolbox, developed for the Unity Engine. 
                    OpenMaze is easy-to-use and requires no prior coding experience, allowing you to spend less time hacking and more time experimenting! 
                    This manual contains everything you need to know about building experiments in OpenMaze. </p>
                  <br />

                  <p id="creatingScenes" className="font-medium text-3xl">Get Involved!</p>
                  <p>It is our hope that OpenMaze will be seen not only as a toolbox, but also as a development platform, and we encourage other experimenters to become involved in the development process. 
                  In this pursuit, we are committed to keeping OpenMaze free and open source. 
                  All future development of the OpenMaze toolbox will be governed through feedback and community collaboration. 
                  With your help, our goal is to identify generalizable experiment design tools that can meet the needs of a larger community of researchers. 
                  If you’ve got a great idea for new functionality, or have added to the source code in ways that would benefit other researchers, please share it!</p><br />

                  <p id="creatingScenes" className="font-medium text-3xl">Video Tutorials</p>
                  <p>If you’re a first-time OpenMaze user, we strongly recommend following along with our <b>Learn OpenMaze</b> video tutorial series. 
                  These tutorials provide a step-by-step, hands-on approach to learning the ins-and-outs of the OpenMaze toolbox.</p>
                  <br />
                  
                  <p class="text-center bg-green-600 rounded-lg justify-center border border-white p-2">
                  <a href="https://openmaze.duncanlab.org/tutorials"><b>Click Here!</b> To check out the OpenMaze <strong>Video Tutorials</strong> page.</a></p> 
                  
                  </div>


              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="softwareS">
              <h1 className="font-medium text-5xl my-4">Software Setup</h1>
              <h1 className="font-medium text-3xl my-4">Download and Install</h1>
                <p>To get started, you will need three pieces of software: The OpenMaze Source Code, The Unity Development Engine, and a text editor! Follow the steps below to get setup with everything you need:</p>
                
                <p style={{padding: 20}}>
                  <strong>Step 1: Download the OpenMaze Source Code</strong>
                  <p><a href="https://github.com/DuncanLab/OpenMaze/releases"><u>Click here</u></a> and select the latest release. 
                  Then scroll to the bottom of the page and click <strong>Source Code (zip)</strong>. Once downloaded, extract (or unzip) the folder in an easily accessible directory - we recommend your <b>Documents</b> or <b>Desktop</b> folder.</p>
                  <br />

                  <b>Step 2: Download and Install the Unity Hub</b>
                  <p><a href="https://store.unity.com/download?ref=personal"><u>Click here</u></a> to download the Unity Hub. If you don't have one already, you'll need to create a Unity account and select a Unity plan. 
                  Don't worry, OpenMaze works with any plan type, including free <b>Personal</b> or <b>Student</b> plans!</p>
                  <br />

                  <b>Step 3: Set up OpenMaze in Unity</b>
                  <p>Open the <b>Unity Hub</b> application, sign in, and ensure that you have a license (it's free too!). Once signed in, click the <strong>Add</strong> button in the top right of the <strong>Projects</strong> page. 
                  When prompted select the unzipped OpenMaze folder from <strong>Step 1</strong>. When OpenMaze appears in the Hub, click the small yellow triangle beside <strong>Unity Version</strong>. 
                  This will prompt you to download the correct version of Unity (this takes a while - be patient or take a quick nap!). 
                  Once installed, navigate back to the <strong>Projects</strong> page. The yellow triangle should be replaced with a Unity Version number.
                  You can now click the OpenMaze project to open it in Unity. You may be asked if you would like to update Unity - click no.</p>
                  <br />

                  <b>Step 4: Choosing a Text Editor</b>
                  <p> You will also need a text editor for creating and editing OpenMaze Configuration Files. 
                    As you will soon learn, these files are formatted in JavaScript Object Notation (JSON) and must be formatted correctly to run. 
                    For this reason, we recommend using a text editor with a JSON lint tool that will alert you if your formatting is incorrect!
                    We recommend using the <a href="https://www.sublimetext.com/"><u><b>Sublime Text Editor</b></u></a></p>            

                </p>
                <br />

                <p class="text-center bg-green-600 rounded-lg justify-center border border-white p-2">
                  <a href="https://youtu.be/yCcT8mvqCos">
                    <b>Click Here!</b> To follow along with a video tutorial on how to set up OpenMaze.</a></p><br />

                <h1 className="font-medium text-3xl my-4" id="softwareU">The Unity Editor</h1> 
                <p>Throughout this manual we'll be referencing different parts of the Unity Editor A LOT! If you're ever unsure, use the figure below as a quick reference. </p>
                <img src={Unity} alt="" className="w-full my-4" /><br />

                <p class="text-center bg-green-600 rounded-lg border border-white p-2">
                     <a href="https://docs.unity3d.com/Manual/UsingTheEditor.html">
                     <strong>Click Here!</strong> For more information about Unity's interface.</a></p><br />
                  
              </div>

              

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesAbout">
              <h1 className="font-medium text-5xl my-4">Scenes</h1>
              <h2 className="font-medium text-3xl my-2">What is a Scene?</h2>
                    <p>When building an experiment using OpenMaze, Unity Scenes house static 3D environments (e.g. a city, or a farm) that can be navigated by participants.
                      Any number of unique Scenes can be created and then later combined with other experiment objects to create any number of unique <i>Task Trials</i> (See <b><a href="#configO">Designing Experiments</a></b>). 
                      This innovative framework allows both the 3D navigation environment and the task within it to be easily manipulated on a Trial-by-Trial basis.  
                     <br /><br />Each new Scene begins as a blank canvas in which 3D Models can be placed, manipulated, and arranged using the flexible and intuitive point-and-click/drag-and-drop tools provided within the Unity Editor. 
                    Below we detail how to create a new blank Scene, then describe how to build a 3D environment within it. </p>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesCreate">
                <h2 className="font-medium text-3xl">Creating a New Scene</h2>

                <p style={{padding: 20}}>
                <b>Step 1: Open the 3D Environment Scene</b>
                    <p>Navigate to the <strong>Project</strong> window and expand the <strong>Assets</strong> folder. 
                    Double click the <strong>_Scenes</strong> folder to open it. The contents of the folder will be displayed in a window to the right of the Project window. 
                    Double click the <strong>3D Environment</strong> Scene icon. 
                    This will open the Scene in the editor, and it will appear in both the <strong>Scene</strong> and <strong>Game</strong> windows. </p>
                  <br />

                  <b>Step 2: Duplicate the 3D Environment Scene</b>
                    <p>Open the <strong>Edit </strong>drop-down menu at the top of screen and select <strong>Duplicate</strong>. You may rename the duplicated Scene to any name you’d like!</p>
                  <br />

                  <b>Step 3: Add your new Scene to the Project Build</b>
                    <p>With your new Scene opened in the Unity Editor, navigate to the <strong>File </strong>drop-down menu at the top of the screen and select <strong>Build Settings</strong>. 
                    Click the <strong>Add Open Scene</strong> button. If you've done this correctly the name of your new Scene will appear in the <strong>Scenes In Build </strong> 
                    window with an associated Scene number to the right of it. You're now the proud new owner of a new OpenMaze compatible Scene. Now for the fun stuff - Building 3D Environments! </p>
                  </p>
                  <p class="text-center bg-green-600 rounded-lg justify-center border border-white p-2">
                      <a href="https://youtu.be/JrkyJqnzS4o"><b>Click Here!</b> To watch our video tutorial on creating OpenMaze Scenes</a></p> 
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesBuild">
                <h2 className="font-medium text-3xl my-2">Building 3D Environments</h2>
                <p>As you will notice, the 3D Environment Scene is empty. That’s because OpenMaze does not come with any pre-built navigation environments. 
                  Instead, we have left up it to you to create navigation environments that are perfectly suited to the needs of your experiment design. 
                  Thus, you can think of each new duplication of the 3D Environment Scene as a blank canvas, on which you can put your imagination to the test!</p><br />
                
                <p className="font-medium text-2xl">Importing 3D Models</p>
                <p>To get started, you’ll need to import some 3D Models, perhaps some buildings, or trees and paths, or an interior facade and furnishings. 
                  There are two methods for importing 3D Models into your OpenMaze project:</p> 
                    <p style={{padding: 20}}>
                      <b class="font-medium text-xl">Method 1: The Unity Asset Store</b>
                      <p style={{padding: 20}}>
                      The Unity Asset Store can be accessed directly within the Unity Editor by clicking on the <strong>Asset Store</strong> tab (check beside the Scene window tab).
                      A quick search will turn up any 3D Model you should ever need! Once you find something you like, all you need to do is click the <strong>Download</strong> button. 
                      Then, when prompted, click the <strong>Import</strong> button. Once imported the 3D Models will be accessible through their folder in the <strong>Project </strong>window.
                      <br /></p>
                       
                      <b class="font-medium text-xl">Method 2: Importing Third-Party 3D Models</b>
                      <p style={{padding: 20}}>
                      You can also add 3D Models created using third-party software. 
                      The Unity Editor provides import support for a wide range of <a href="https://docs.unity3d.com/Manual/ImportingModelFiles.html"><u>3D Model file types</u></a>. 
                      Files can simply be dragged and dropped into the desired folder within the <strong>Project </strong>window</p>
                    </p>
                  
                  <p className="font-medium text-2xl">Adding 3D Models to Scenes</p>
                  <p style={{padding: 20}}>
                  <b>Step 1: Open Your Scene</b>
                    <p>Make sure that the Scene you want to place the model in is open in the Editor. 
                    To open a Scene find it in the <strong>Project </strong>window (usually in the <strong>_Scenes </strong>folder) 
                    and double-click to open it.</p><br />

                    <b>Step 2: Drag the 3D Model into the Scene</b>
                    <p>Find the 3D Model you want to use in the <strong>Project </strong>window, then simply drag-and-drop it into the <strong>Scene </strong>window.</p> <br />
                    
                    <b>Step 3: Place the 3D Model at the desired location</b>
                    <p>Use the Transformation tools in the top left of the Unity Editor window to change the Size, Shape, and Position of the 3D Model.</p><br /> 

                    <p class="text-center bg-green-600 rounded-lg border border-white p-2">
                    <strong>Click Here!</strong> <a href="http://gyanendushekhar.com/2017/08/20/learning-transform-tools-unity-tutorial/">
                      For an in depth demonstration of the Unity transformation tools</a></p><br />
                  
                  
                    <b>Step 4: Object Colliders</b>
                    <p>Object Colliders ensure that your participant cannot walk straight through the 3D Model. 
                      They can be added by clicking the <strong>Add Component</strong> button in the <strong>Inspector Window </strong>
                      when the 3D Model is selected.</p>
                  </p>
                </div>

                <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesSpace">
                  <h3 className="font-medium text-3xl my-2">Unity Scene Space</h3>
                  <p>We'll be referencing the Unit Scene x, y, and z planes/axis throughout the manual, use the figure below as a quick reference when needed. </p>
                    <img src={SceneSpace} alt="" className="w-full my-4" />
                </div>
                

                <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesSpace">
                  <h3 id = "scenesNon" className="font-medium text-3xl my-2">Using Prebuilt Scenes</h3>
                    <p>You are likely to discover that many of the asset packs that you download from the Unity Store come with prebuilt Scenes. 
                    To use a non-OpenMaze Scene all you need to do is copy the OpenMaze Scene objects contained in the OpenMaze 3D Environment Scene and paste them into the Scene you wish to use!
                    You can do this by opening the 3D Environment Scene in the Unity Editor and selecting the objects it contains in the <strong>Hierarchy </strong>window. Right-click to select <strong>Copy</strong>  then open your non-OpenMaze Scene and right-click in its <strong>Hierarchy</strong> window  
                    and select <strong>Paste</strong>. Make sure you add the Scene to the build!</p>
                </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesUse">
              <h3 className="font-medium text-3xl my-2">Scene Numbers</h3>
                <p>Scenes are referenced by their Scene number in the Configuration File. However, new Scenes are not given a Scene number until they are added to the project build. To add a Scene to the build, first open it in the Unity Editor. 
                Next, open the <strong>File</strong> drop-down menu and select <strong>Build Settings</strong>. Within the <strong>Build Settings</strong> window that appears, click the <strong>Add Open Scenes</strong> button. 
                In the <strong>Scenes in Build</strong> window you should now see the name of your Scene with a Scene number to the right of it. This is the number you will use to reference the Scene in the Configuration File 
                when designing your experiment.</p> 
                <br /><br />

                <p class="bg-yellow-600 rounded-lg border border-white p-3">
                  <strong>IMPORTANT:</strong> You may reorganize or delete Scenes within the <b>Scenes In Build</b> sub window, however the <b>+Launch Experiment</b> and <b>Loading Screen</b> MUST always occupy Scene numbers 0 and 1 respectively.
                </p>
              </div>
              
              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="configO">
                <h1 className="font-medium text-5xl my-4">Configuration Files</h1>
                <p>OpenMaze Configuration Files provide the infrastructure to create tasks within your Scenes and orchestrate all other aspects of your experiment. 
                    Each Configuration File includes a <i>Settings</i> section and five experiment object sections: (1) <i>Blocks</i>; (2) <i>Trials</i>; (3) <i>Goals</i>; (4) <i>Landmarks</i>; and (5) <i>Enclosures</i>.  
                  </p>


                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                    <div class="bg-gray-700 rounded-t-lg border border-white p-4">
                      <p class="text-center"><b>The 6 Sections of OpenMaze Configuration Files</b></p>
                    </div>
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr>
                        <th className="p-4">Section</th>
                        <th className="p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2"><a href = "#configS">Settings</a></td>
                        <td className="px-4 py-2"><a href = "#configS">Make quick changes to the overall experiment (e.g. character height and movement speed)</a></td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2"><a href = "#configB">Blocks</a></td>
                        <td className="px-4 py-2"><a href = "#configB">Blocks are used to create <i>Trial</i> presentation sequences (both serial and random). Can also be used to define performance criterion. </a></td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2"><a href = "#configT">Trials</a></td>
                        <td className="px-4 py-2"><a href = "#configT">Both Task Trials and Instruction/Cue Screen Trials are created within the Trials section. 
                        Task Trials are used to create navigation tasks and Instruction/Cue Screen Trials allow you present - can you guees? - instruction and cue screen images!</a></td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2"><a href = "#configG">Goals</a></td>
                        <td className="px-4 py-2"><a href = "#configG">You can create interactive objects from any 3D Model or Image file by defining them as <i>Goals</i>. 
                        <i> Goals</i> can be placed into any <i>Scene</i> on a <i>Trial-by-Trial</i> basis.</a></td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2"><a href = "#configG">Landmarks</a></td>
                        <td className=" px-4 py-2"><a href = "#configG">Define environment objects that you wish to add, remove or manipulate as <i>Landmarks</i> then use them on a <i>Trial-by-Trial</i> Basis. </a></td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2"><a href = "#configE">Enclosures</a></td>
                        <td className="px-4 py-2"><a href = "#configE">Create custom <i>Enclosures</i> to restrict participant's movmement (think Morris Water Maze) 
                        then manipulate <i>Enclosure-Scene</i> pairs on a <i>Trial-by-Trial</i> basis. </a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                
                <h3 id="configHeirarchy" className="font-medium text-5xl">Experiment Objects</h3>
                <p>Experiments are created by defining <i>Experiment Objects</i> within each of the five <b>Section Arrays</b> (we'll refer to them as just <b><i>Sections</i></b>). 
                Each <i>Experiment Objects</i> is created by assigning custom <b>Values</b> to <b>Attributes</b> that are specified by the <i>Object's</i> type.
                Namely, a <i>Goal Object</i> has a different set of <b>Attributes</b> than a <i>Trial Object</i>. 
                Each <i>Object's</i> <b>Attribute-Value Pairs</b> are contained within a set of curly brackets and all objects of the same type are contained within the section's square brackets and seperated by a comma.
                Each <i>Object</i> is implicitely assigned an index based on the order that it is defined within the section starting at <b>1</b>.</p><br />
                
                <p class="bg-gray-800 rounded-lg border border-white p-2 text-center">
                  <p><strong>Note:</strong> <i>Objects</i> will be refered to simply by their type in the remainder of this manual</p> <p> e.g. <i>Goal</i> == <i>Goal Object</i> </p></p><br />
                
                <img src={JSON} alt="" className="w-full my-4" /><br/>

                <h3 id="configHeirarchy" className="font-medium text-5xl">Experiment Design Hierarchy</h3>
                  <p>Experiments are designed by creating and combining <i>Experiment Objects</i> in a hierarchical structure such that: 
                  <i> Goals, Landmarks,</i> and <i>Enclosures</i> are combined with Scenes to create <i>Trials</i>; <i>Trials</i> are then used to created <i>Blocks</i>; 
                  finally <i>Blocks</i> are sequenced to create the experiment. In what folows we begin at the bottom of this hierarchy, 
                  first describing how to create <i>Goals, Landmarks</i> and <i>Enclosures</i> then describing how they are combined with Scenes to create <i>Trials</i> and 
                  then describing how <i>Blocks</i> are used to sequence <i>Trials</i> before being sequenced themselves to create the over arching organization structure of the experiment.</p> 
                  <img src={ConfigFile} alt="" className="w-full my-4" />
                <br />

                <div>
                  <h3 id="configTemplate" className="font-medium text-2xl">Configuration File Template</h3>
                  <p>OpenMaze provides a Configuration File template that has examples for each type of object that can be created. 
                    When creating an experiment we recommend using a copy of this template to create your experiment. 
                    This will allow you to simply copy and paste the object examples to create new objects that suit the needs of your experiment. 
                    You can find a Configuration File Template in the OpenMaze project folder: <strong><i>OpenMaze/Configuration_Files/Configuration_Template</i></strong></p>
                </div>

              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="configG">
                <h2 className="font-medium text-5xl my-4"><i>Goals and Landmarks</i></h2>
                  <p><i>Goals/Landmarks</i> are 3D Models or Images that can be placed into Scenes on a <i>Trial-by-Trial</i> basis. <i>Goals</i> are objects that can be interacted with by participants and are used to create experiment tasks by triggering events. <i>Landmarks</i>, on the other hand, are objects that can be added or removed to change the characteristics of the environment. Creating a new <i>Goal/Landmark</i> is easy!</p>
                  <br />
                
                  <h3 id="glMaterials" className="font-medium text-3xl">Importing <i>Goal/Landmark</i> Materials</h3>
                  <p>Both <i>Goals</i> and <i>Landmarks</i> are created from 3D Models or Images, and Audio files may also be assigned to <i>Goals</i>. Before defining your <i>Goals/Landmarks</i> in the Configuration File these files must be added to the correct project folders</p>

                    <p style={{padding: 20}}>
                    <b>3D Models</b> folder: <strong>OpenMaze/Assets/Resources/3D_Objects</strong>

                    <br /><b>Image files</b> folder: <strong>OpenMaze/Assets/StreamingAssets/2D_Objects</strong>

                    <br /><b>Audio files (<i>Goals</i> Only)</b> folder: <strong>OpenMaze/Assets/Resources/Sounds</strong></p>

                    <p class="bg-yellow-600 rounded-lg border border-white p-2"><strong>IMPORTANT:</strong> You must add a collider object to 3D Models. 
                    With the model open in the Unity Editor, click <strong>Add Component</strong> button in the <strong>Inspector </strong>window  
                    and select the appropriate 3D collider (usually a box collider works best). </p>

                  <br />

                  <h3 id="glCreate" className="font-medium text-3xl">Creating <i>Goals</i> and <i>Landmarks</i></h3>
                  <p>Once you have added your materials to project, you can use them to create <i>Goals/Landmarks</i> in the Configuration File. </p> 
                
                <div style={{padding: 20}}>
                  <b>Step 1. Create a New <i>Goal</i> or <i>Landmark Object</i></b>
                  <p>Both <i>Goals</i> and <i>Landmarks</i> are defined by a similar set of attribute-value pairs contained within a set of curly brackets{}. 
                    Each <i>Goal/Landmark</i> definition must be contained within the square brackets of it's corresponding section. 
                    To create a new <i>Goal/Landmark</i>, we recommend copying and pasting a premade <i>Goal/Landmark</i> object from the 
                    Configuration File Template and simply customizing the attribute-values to suit your needs. </p><br />

                  <b>Step 2. Add Index/Description</b>
                  <p>We recommend including a description attribute in your definitions in the form: “Goal #”: “Description” ("Landmark #": "Description"). 
                    The "#" corresponds to the object's index number which is automatically assigned based on its order within the section. 
                    Namely, the first object, defined at the top of the section, is assigned index = 1, the object below it is assigned index = 2, and so on. 
                    Index numbers are used when creating <i>Trials</i> (See <i><b>Task Trials</b></i>). The "Description" can then be replaced with any identifying information. </p><br />

                  <b>Step 3. Choose a 3D Model or Image</b>
                  <p>To create a <i>Goal/Landmark</i> from a 3D Model set the “Type”  attribute to “3D”. To create a <i>Goal/Landmark</i> from an Image file, set the “Type” attribute to: “2D”. 
                  Next, set the “Object” attribute to the name of the 3D Model or Image file you wish to use, as it appears in the <strong>3D_Objects</strong> or <strong>2D_Objects  </strong>folder. 
                  File names must be contained within quotations and include the file type tag.</p><br />

                  <b>Step 4. Transform Attributes</b>
                  <p>The  “Position”, “Rotation”, and “Scale” attributes (aka the "Transform Attributes") prescribe where the object will be placed in the Scene. 
                  Each attribute is defined by x,y,z values that directly correspond to the object's Transformation properties which can 
                  be found in the <strong>Inspector</strong> window when the object is selected.</p><br />

                  <p class="bg-gray-800 rounded-lg border border-white p-2">
                  <strong>Note:</strong> Image <i>Goals</i> rotate dynamically to ensure that they always face the participant’s viewing angle and thus do not require the “Rotation” attribute.</p><br />

                  <b>Step 5. Adding Sounds to <i>Goals</i></b>
                  <p>You can assign an Audio file to a <i>Goal</i> which will play whenever the the participant collects it during a <i>Trial</i>. The "Sound" attribute is assigned the file name of the Audio file as it appears in the <strong>Sounds</strong> project folder.</p>
                  <br />

                  <div class="bg-red-600 rounded-lg border border-white p-2">
                  <p><strong>Tip:</strong> Place your <i>Goal/Landmark</i> object into the Scene at the location you want it to appear. 
                  You can then copy the Position, Rotation, and Scale values from the <strong>Inspector </strong>window before once again deleting the object from the Scene. 
                  Images cannot be placed directly into a Scene. Instead, use a 3D Model as a stand-in!</p>
                  </div><br />
                

                  <div class="bg-green-600 rounded-lg justify-center border border-white p-2">
                  <p class="text-center"><strong><a href="https://youtu.be/20UysrQwdgU">Need More Help? Follow Along With This Tutorial Video</a></strong></p> 
                  </div><br />
                </div>

                <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="gExamples">
                  <h3 className="font-medium text-3xl"><i>Goals</i> Configuration File Example</h3>
                  <img src={Goals} alt="" className="w-full my-4" />

                  <h3 id="About" className="font-medium text-3xl"><i>Landmarks</i> Configuration File Example</h3>
                  <img src={Landmarks} alt="" className="w-full my-4" />
                </div>

                <h3 id="About" className="font-medium text-3xl"><i>Goals/Landmarks</i> Attributes and Values</h3>
                    <p>Need help remembering what every attribute does, or it's value format? Don't worry, we've got you covered!</p>
                <br/>
                 
              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="gExamples">
                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                <div class="bg-tutorial-red rounded-t-lg border border-white p-4">
                      <p class="text-center"><b><i>Goals/Landmarks</i> Attribute-Values Cheat Sheet</b></p>
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
                        <td className=" px-4 py-2">“Goal/Landmark #”</td>
                        <td className=" px-4 py-2">“Description”</td>
                        <td className=" px-4 py-2">A descriptive attribute that can be added to a Goal definition to help track indices 
                        and describe the function of the object. Note: any attribute of the format “String” : variable, can be added to 
                        a Goal definition to serve as a marker within the Configuration File as long as the String is 
                        not already defined as another attribute.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">"Type"</td>
                        <td className=" px-4 py-2">“3D” or “2D”</td>
                        <td className=" px-4 py-2">Defines whether the object is a 3D Model or a 2D Image. Directs OpenMaze to look for the object in the associated folder (i.e. 3D_Objects, 2D_Objects).</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“Object”</td>
                        <td className=" px-4 py-2">“Image.png”</td>
                        <td className=" px-4 py-2">The name of the Object is saved as in the folder (3D Models and Images must be in the 3D_Objects or 2D_Objects folder, respectively) can including the directory extension (e.g. “subfoldername/Apple.png”). File extensions (e.g. .png, .jpg, etc.) must be attached to the file name when defining 2D Objects.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Position”</td>
                        <td className=" px-4 py-2">[0,0,0]</td>
                        <td className=" px-4 py-2">The placement position of the object within the environment. Corresponds to [x,y,z] Position parameters in Unity Scene.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“Rotation”</td>
                        <td className=" px-4 py-2">[30,60,90]</td>
                        <td className=" px-4 py-2">The placement orientation of the object within the environment. Corresponds to Rotation about the corresponding [x,y,z] axis of the object. Note: This parameter is not used when type is set to  “2D”, as 2D objects dynamically rotate to always face the participant.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Scale”</td>
                        <td className=" px-4 py-2">[1,1,1]</td>
                        <td className=" px-4 py-2">Size of the object. Corresponds to [x,y,z] Scale parameters in of the object within the Unity Scene.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“Color”</td>
                        <td className=" px-4 py-2">“ffffff”</td>
                        <td className=" px-4 py-2">A 6 digit HEX color code. Can be used for simple geometric 3D Models to change their color. Click <a href="https://htmlcolorcodes.com/" target="_blank" className="underline"><u>here</u></a> to find HEX color codes for your objects.</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="bg-tutorial-blue border border-white p-4">
                      <p class="text-center"><b>Goals Only</b></p>
                    </div>
                  <table className="table-auto">
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2">“Sound”</td>
                        <td className=" px-4 py-2">“Bing.wav”</td>
                        <td className=" px-4 py-2">The name of the Sound file in the Sounds folder. Upon collision with the Goal the Sound file will play. Sound files contained in subfolders within the Sounds folder can be used by including the directory extension (e.g. “subfoldername/Bing.wav”). </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
               </div>

               <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="configE">
                  <h2 className="font-medium text-5xl my-4"><i>Enclosures</i></h2>
                  <p>Additionally, OpenMaze provides a simple tool for creating custom Morris-Maze-like <i>Enclosures</i> that can be added to <i>Scenes</i> on a <i>Trial-by-Trial</i> basis. Unlike <i>Goals</i> and <i>Landmarks</i>, <i>Enclosures</i> do not require any additional materials and instead are created by simply defining their attributes in the Configuration File. Do so using the following steps: </p>                
                  <br />
                  <h3 id="About" className="font-medium text-3xl">Creating an <i>Enclosure</i></h3>

                  <div style={{padding: 20}}>
                    <b>1. Create a new <i>Enclosure</i> Object:</b>
                    <p>Each <i>Enclosure</i> is defined by a series of attribute-value pairs contained within a set of curly brackets {}. Each <i>Enclosure</i> must be defined within the square brackets of the “Enclosure” Section of the Configuration File. We recommend copying and pasting an <i>Enclosure</i> from the Configuration File Template and simply customizing the attribute-values to suit your needs. </p>
                    <br />

                    <b>2. Add Index/Description</b>
                    <p>We recommend including a description attribute in your definitions in the form: “Enclosure #”: “Description”. The "#" corresponds to the <i>Enclosure's</i> index number which is automatically assigned based on its order within the section. Namely, the first <i>Enclosure</i>, defined at the top of the section, is assigned index = 1, the <i>Enclosure</i> below it is assigned index = 2, and so on. Index numbers are used when creating <i>Trials</i> (See <i><b>Task Trials</b></i>). The "Description" can then be replaced with any identifying information. </p>
                    <br />

                    <b>3. Size, Shape and Color</b>
                    <p><i>Enclosures</i> are created by connecting walls that are placed tangent to a circular area. Thus, the size of an <i>Enclosure</i> is described by the “Radius” of this circle and the shape is dictated by the number of walls (“Sides”) used to create the <i>Enclosure</i>. 
                    Additionally, the height of the <i>Enclosure's</i> walls and their color can be customized using the "WallHeight" and "WallColor" attributes.</p>
                    <br />

                    <b>4. Enclosure Floors</b>
                    <p>Enclosures are created with a simple geometric tile floor design which provides greater depth perception for participants. You can manipulate the size using the “GroundTileSize” attribute (between 0-1), shape  using the “GroundTileSides” attribute (similar to the “Sides” parameter) and the tile color using the “GroundColor” attribute. </p>
                    <br />

                    <b>5. <i>Enclosure</i> Placement</b>
                    <p>When using <i>Enclosures</i>, we recommend building your Scenes, such that the <i>Enclosure</i> can be simply placed at the center [0,0,0]. However you may use the “Position” attribute to dictate placement of the <i>Enclosure</i> within the Scene by prescribing it x,z coordinates. <strong>Tip:</strong> <i>Enclosures</i> are always placed at ground level (i.e. y = 0). The “Rotation” parameter is the number of degrees the <i>Enclosure</i> should be rotated about the y-axis when placed within the Scene.</p>
                  </div>
                  
                  <p class="bg-green-600 text-center rounded-lg justify-center border border-white p-2">
                  <strong><a href="https://youtu.be/DTH-Bc1m_wc">Click Here Follow Along With Our <i>Enclosures</i> Tutorial Video</a></strong></p> <br />
                
                

                <h3 id="About" className="font-medium text-3xl"><i>Enclosures</i> Configuration File Example</h3>
                  <img src={Enclosures} alt="" className="w-full my-4" />

                <h3 id="About" className="font-medium text-3xl"><i>Enclosures</i> Attributes and Values</h3>
                    <p>Need help remembering what every attribute does, or it's value format? Don't worry, we've got you covered!</p>
                <br/>

                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                <div class="bg-tutorial-cyan rounded-t-lg border border-white p-4">
                      <p class="text-center"><b><i>Enclosures</i> Attribute-Values Cheat Sheet</b></p>
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
                        <td className=" px-4 py-2">”Enclosure #”</td>
                        <td className=" px-4 py-2">“Description”</td>
                        <td className=" px-4 py-2">Descriptive parameter that can be added to an Enclosure definition to help track indices and describe the Enclosure. Note: any parameter of the format “String” : variable, can be added to an Enclosure definition to serve as a marker within the Configuration File as long as the String is not already defined as another parameter.</td>
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
                        <td className=" px-4 py-2">A 6 digit HEX color code which defines the color of the Enclosure walls. Enclosures can be made invisible to the participant by setting this parameter to “ffffff00”.  Click <a href="https://htmlcolorcodes.com/" target="_blank" className="underline"><u>here</u></a> to find HEX color codes.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“GroundTileSides”</td>
                        <td className=" px-4 py-2">40</td>
                        <td className=" px-4 py-2">Works similar to “Sides” parameter. Allows experimenters to customize the shape of the Enclosure floor tiles.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“GroundTileSize”</td>
                        <td className=" px-4 py-2">0.5</td>
                        <td className=" px-4 py-2">A number between 0-1 which manipulates the size of each ground tile. Setting this parameter to 0 will remove tiling from the Enclosure floor.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“GroundColor”</td>
                        <td className=" px-4 py-2">“ff0000”</td>
                        <td className=" px-4 py-2">A 6 digit HEX color code which defines the color of the Enclosure tiles. The Enclosures floor can be made transparent by setting this parameter to “ffffff00”. Click <a href="https://htmlcolorcodes.com/" target="_blank" className="underline"><u>here</u></a> to find HEX color codes.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>

                <h1 id="configT" className="font-medium text-5xl my-4"><i>Task Trials</i></h1>

                <p><i>Task Trials</i> are used to create unique navigation epochs. Each <i>Task Trial</i> creates a unique <i>Trial</i> Environment and task demand for participants 
                  by placing different combinations of <i>Goals/Landmark/Enclosures</i> into a Scene. To create a <i>Task Trial</i> follow the steps below. 
                <br/><br/></p>
                  
                <h3 id="About" className="font-medium text-3xl"><i>Trial</i> Indexing</h3>
                  <p>Both <i>Task Trials</i> and <i>Instruction/Cue Screen Trials</i> are defined within the <i>Trials</i> section of the Configuration File. 
                    Each <i>Trial</i>, regardless of its type (i.e. Task or Instruction/Cue) is implicitly assigned an index number based on the order that it is defined within the <i>Trials</i> section. 
                    The <i>Trial</i> defined at the top is assigned the index = 1, the one below it is assigned index = 2, and so on. <i>Trial</i> indices are used to create <i>Blocks</i>.</p><br/>
               

                  <h3 id="About" className="font-medium text-3xl">Creating a <i>Task Trial</i></h3>
                  

                  <div style={{padding: 20}}>
                    <b>Step 1. Create a New <i>Task Trial</i></b>
                    <p>Each <i>Task Trial</i> object is defined by a series of attribute-value pairs contained within a set of curly brackets. 
                      Each <i>Task Trial</i> must be defined within the square brackets of the “Trials” Section of the Configuration File. 
                      We recommend copying and pasting a <i>Task Trial</i> definition from the Configuration File Template and simply customizing the attribute-values to suit your needs.</p>
                    <br/>

                    <b>Step 2. Add Index/Description</b>
                    <p>Fill out the Description attribute-value pair with the <i>Trials</i> index number (see <i>Trial</i> Indexing above) and a description of your <i>Trial</i>.</p>
                    <br />

                    <b>Step 3. Select a Scene</b>
                    <p>Each <i>Task Trial</i> takes place in a single Unity Scene prescribed by the Scene number used to define the “Scene” attribute. 
                      If you do not know the number of the Scene you wish to use for the <i>Trial</i>, navigate to the Build Settings within the Unity Editor (<strong>File</strong> -{">"} <strong>Build Settings</strong>). 
                      The Scene number will appear next to the Scene name in the <strong>Scenes In Build</strong> sub window. If the name of the Scene does not appear in this window, 
                      simply click the <strong>Add Open Scene</strong> button located under the <strong>Scenes In Build</strong> sub window after opening the Scene in the editor.</p> 
                    <br/>

                    <div class="bg-yellow-600 rounded-lg border border-white p-3">
                      <p><strong>IMPORTANT:</strong> You may reorganize Scene numbers by dragging Scenes to different positions within the <strong>Scenes In Build</strong> sub window, 
                      however the +Launch Experiment and Loading Scene MUST always occupy Scene numbers 0 and 1 respectively.</p>
                    </div>
                    <br/>

                    <b>Step 4. Participant Placement</b>
                    <p>Use the “StartPosition” attribute to dictate where participants should be placed in within the Scene using x and z position values. 
                    The “StartFacing” parameter dictates the direction that the participant will face when at the start of the <i>Trial</i> and is defined by the degrees of rotation about the y axis.</p><br/>
                    <br/>

                    <b>Step 5. Trial Termination</b>
                    <p>The "TrialTime" dictates the duration of the <i>Trial</i> (in seconds). The "TrialEndKey" can be assigned any key, that when pressed will terminate the <i>Trial</i>. 
                      <i> Trials</i> will also terminate if the participant collects a number of <i>Goals</i> equal to the "Quota" value. (see Step 7 below)</p><br/>

                    <p class="bg-gray-700 rounded-lg border border-white p-4">
                    <strong>Note:</strong> The remaining steps are all optional. It is not necessary to add any <i>Goals, Landmarks</i> or an <i>Enclosure</i> to a <i>Task Trial</i> for it to function. </p><br/>
                    
                    <div class="bg-green-600 rounded-lg justify-center border border-white p-2">
                      <p class="text-center"><strong><a href="https://youtu.be/CnlVgKkj3C4">Click Here To Watch A Video On <i>Task Trial</i> Basics!</a></strong></p>  
                    </div>
                    <br/>
                    <b>Step 6. Adding <i>Goals</i></b>
                    <p>A <i>Goal</i> can be added to a Scene by including its index number in either the “ActiveGoals", “InvisibleGoals”, or “InactiveGoals” list. <strong>Note:</strong> Each <i>Goal</i> can only appear in one attribute per <i>Task Trial</i>. </p>
                    <div style={{padding: 20}}>
                      <b>Active <i>Goals</i></b>
                      <p>When a <i>Goal</i> index is added to the “ActiveGoals” list,  it will be placed into the Scene as prescribed by the transform attributes used to define the <i>Goal</i>. The 3D Model or Image will be visible to the participant and the participant will collect the <i>Goal</i> upon colliding with it. Upon collision, the <i>Goal</i> will disappear, the <i>Goal </i>Sound will play, and it will be counted toward the <i>Trial</i> Quota.</p>
                      <br/>
                      <b>Invisible <i>Goals</i></b>
                      <p>When a <i>Goal</i> index is added to the “InvisibleGoals” list, it will be placed into the Scene as prescribed by the transform attributes used to define the <i>Goal</i>. However, unlike Active <i>Goals</i> the 3D Model or Image will not be visible to the participant. The participant will still collect the <i>Goal</i> upon colliding with it, the <i>Goal</i> Sound will play, and it will be counted toward the <i>Trial</i> Quota.</p>
                      <br/>
                      <b>Inactive <i>Goals</i></b>
                      <p>When a <i>Goal</i> index is added to the “InactiveGoals” list, it will be placed into the Scene as prescribed by the transform attributes used to define the <i>Goal</i>. Like Active <i>Goals</i> the 3D Model or Image will be visible to the participant. However, the participant will not be able to collect the <i>Goal</i>. Instead, the participant will simply pass through the <i>Goal</i>, the associated sound will not play, and it will not be counted toward the <i>Trial</i> Quota.</p>
                    </div>

                    <b>Step 7. Set a Quota</b>
                    <p><i>Tasks</i> are created by adding <i>Goals</i> to the Scene and prescribing a <i>Goal</i> quota. Participants collect <i>Goals</i> by simply colliding with them during the <i>Trial</i>. Upon collecting the number of <i>Goals</i> specified by the <i>Trial</i> “Quota” attribute, the <i>Trial</i> will terminate.</p>  
                    <br/>
                    <p>If the “Quota” is not reached by the end of the prescribed “TrialTime” (see below), the <i>Trial</i> will terminate. If the value for the “Quota” attribute is not set, the <i>Trial</i> will terminate after the first <i>Goal</i> is collected.</p> 
                    <br/>
                    <div class="bg-red-600 rounded-lg border border-white p-4">
                        <p><strong>Tip:</strong> If you wish for the <i>Trial</i> to continue until the Quota is met, set “TrialTime” to an arbitrarily large value. Alternatively, if you want the <i>Trial</i> to continue until timeout regardless of the number of <i>Goals</i> collected, set the “Quota” to a number larger than the amount of collectable <i>Goals</i>.</p>
                    </div>
                    <br/>

                    <b>Step 8. Adding <i>Landmarks</i></b>
                    <p><i>Landmarks</i> may also be added to the Scene by including their index in the “LandMarks” attribute-value list. <i>Landmarks</i> included in this list will be placed into the <i>Trial</i> Scene as solid objects, such that participants will not be able to move through them. </p>
                    <br/>

                    <b>Step 9. Adding <i>Enclosures</i></b>
                    <p>An <i>Enclosure</i> may also be added to the Scene by including the “Enclosures” attribute in a <i>Task Trial</i> definition and assigning it a single <i>Enclosure</i> index number.</p><br/>

                    <b>Step 10. Adding Heads Up Display (HUD) Information</b>
                    <p>HUD options allow you to display text and images to your participant as they navigate through the environment. Any HUD information will be displayed for the entire duration of the <i>Trial</i> it is added to. 
                      There are several HUD options that allow text, images and performance metrics to be displayed to the participant (see Attribute-Value Cheat Sheet Below)
                      </p><br/>

                      <div class="bg-green-600 rounded-lg justify-center border border-white p-2">
                      <p class="text-center"><strong><a href="https://youtu.be/sSOWmIR7dWA">Need More Help Creating <i>Task Trials</i>? Watch This Video!</a></strong></p>  
                    </div>
                    </div>

                    <h3 id="About" className="font-medium text-3xl"><i>Task Trial</i> Example</h3>
                  <img  src={TaskTrial} alt="" className="w-full my-4" />

                <h3 id="About" className="font-medium text-3xl"><i>Task Trial</i> Attributes and Values</h3>
                    <p>Need help remembering what every attribute does, or it's value format? Don't worry, we've got you covered!</p>
                    <br/>

                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                  <div class="bg-tutorial-brown border border-white p-4">
                      <p class="text-center"><b><i>Task Trial</i> Attribute-Values Cheat Sheet</b></p>
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
                        <td className=" px-4 py-2">“Trial #”</td>
                        <td className=" px-4 py-2">“Description”</td>
                        <td className=" px-4 py-2">A descriptive parameter that can be added to a Trial definition to help track indices and describe the function of the Trial. Note: any parameter of the format “String” : variable, can be added to a Trial  definition to serve as a marker within the Configuration File as long as the String is not already defined as another parameter.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Scene”</td>
                        <td className=" px-4 py-2">3</td>
                        <td className=" px-4 py-2">This number refers to the Scene build number of the 3D environment you wish to use for the Trial. 
                                  Scene numbers can be found beside the name of the Scene in the Unity Editor Build Settings (File -{">"} Build Settings…).</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“StartPosition”</td>
                        <td className=" px-4 py-2">[0,0]</td>
                        <td className=" px-4 py-2">Defines the starting position of the participant within the Scene in the format [x,z] which corresponds to the x and z position within the Unity environment.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“StartFacing”</td>
                        <td className=" px-4 py-2">60</td>
                        <td className=" px-4 py-2">Defines the direction that the participant will be facing in the environment when the trial begins. This corresponds to the y rotation parameter within the Unity environment.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“TrialTime”</td>
                        <td className=" px-4 py-2">60</td>
                        <td className=" px-4 py-2">Length of Trial in seconds. Trial will time out if “Quota” parameter value is not met and “TrialEndKey” is not pressed. Upon timeout the experiment will proceed to the next Trial as defined in the Block section.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“TrialEndKey”</td>
                        <td className=" px-4 py-2">“Space”</td>
                        <td className=" px-4 py-2"><a href="https://docs.unity3d.com/ScriptReference/KeyCode.html" target="_blank" className="underline">Unity API key code</a>. When the defined key is pressed the <i>Trial</i> will terminate</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“ActiveGoals”</td>
                        <td className=" px-4 py-2">[1,3,...]</td>
                        <td className=" px-4 py-2">Numbers in this list correspond to the indices of Goals. Goals included in this list will be visible to the participant and will be collected when collided with.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“InactiveGoals”</td>
                        <td className=" px-4 py-2">[1,3,...]</td>
                        <td className=" px-4 py-2">Numbers in this list correspond to the indices of Goals. Goals included in this list will be visible to the participant but cannot be collected.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“InvisibleGoals”</td>
                        <td className=" px-4 py-2">[1,3,...]</td>
                        <td className=" px-4 py-2">Numbers in this list correspond to the indices of Goals. Goals in this list will be placed into the environment and will be collect when collided with, however they will not be visible to the participant.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Quota”</td>
                        <td className=" px-4 py-2">5</td>
                        <td className=" px-4 py-2">The number of ActiveGoals or InvisibleGoals that must be collected to trigger the end of the Trial.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“Landmarks”</td>
                        <td className=" px-4 py-2">[1,3,...]</td>
                        <td className=" px-4 py-2">Numbers in this list correspond to the indices of <i>Landmarks</i>. Landmarks included in this list will be added to the <i>Scene</i>.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Enclosure”</td>
                        <td className=" px-4 py-2">1</td>
                        <td className=" px-4 py-2">A single number which corresponds to the index of an Enclosure defined in the “Enclosures” list. Use this parameter to instantiate the desired Enclosure within the environment. When this parameter is left out of a Trial definition, no enclosure will be added to the environment.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“DisplayText”</td>
                        <td className=" px-4 py-2">“Display This Text”</td>
                        <td className=" px-4 py-2">The string provided will be displayed at the top of the screen for the participant for the duration of the Trial.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“DisplayImage”</td>
                        <td className=" px-4 py-2">“Image.png”</td>
                        <td className=" px-4 py-2">The name of the 2D Image file as it appears in the 2D_Object folder. 
                        Images contained in subfolders can be used by including the directory extension (e.g. “subfoldername/Image.png”). File extensions (e.g. .png, .jpg, etc.) must be included.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“ShowTrialTotal”</td>
                        <td className=" px-4 py-2">true</td>
                        <td className=" px-4 py-2">When set to true the number of <i>Goals</i> collected in the current <i>Trial</i> will be displayed</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“ShowBlockTotal”</td>
                        <td className=" px-4 py-2">true</td>
                        <td className=" px-4 py-2">When set to true the number of <i>Goals</i> collected in the current <i>Block</i> will be displayed</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“ShowNumSuccesses”</td>
                        <td className=" px-4 py-2">true</td>
                        <td className=" px-4 py-2">When set to true the number of successful Trials in the current <i>Block</i> will be displayed (a <i>Trial</i> is counted successful when a participant meets the "Quota")</td>
                      </tr>
                    </tbody>
                  </table>
                </div>


                    <h3 id="configTasks" className="font-medium text-5xl">Experiment Design Ideas</h3>
                    <p><i>Task Trials</i> can accomodate a HUGE variety of experiment designs! Below we review just some of the designs that we've thought of. Can you think of others?</p>
                    <br/>

                    <div class="rounded-t-lg bg-tutorial-blue border border-white p-4">
                      <p class="text-center"><b>Using <i>Goals</i></b></p>
                    </div>
                    <div class="border border-white p-4">
                      <b>Forming object-location associations</b>
                      <div style={{padding: 20}}>
                        <p>During the learning phase of an experiment, <i>Goal</i> objects can be added to a Scene as “ActiveGoals”, such that they are visible to the participant. During the test phase, <i>Goals</i> can be added to the Scene using the "InvisibleGoals" such that they are invisible, yet still collectable, allowing their memory for the object locations to be assessed.</p>
                      </div>

                      <b>Creating waypoints </b>
                      <div style={{padding: 20}}>
                        <p>Using the “InvisibleGoals” attribute, <i>Goals</i> can be placed at the location that the participant is instructed to navigate to, thus terminating the <i>Trial</i> once the destination is reached</p>
                      </div>

                      <b>Creating spatial distributions</b>
                      <div style={{padding: 20}}>
                        <p>Item distributions can be created using a single stimulus object (i.e. 3D Model or 2D Image file) to define multiple <i>Goals</i>, allowing it to be instantiated in different locations within the same Scene during the same <i>Trial</i>, or across multiple <i>Trials</i>. The “InvisibleGoals” attribute may also be used, allowing reward zones to be learned simply from audio feedback cues.</p>
                      </div>

                      <b>Assessing decision making</b>
                      <div style={{padding: 20}}>
                        <p>Multiple <i>Goals</i> may be placed into a Scene to assess, for example, foraging behavior or multi-option decision making.</p>
                      </div>

                      <b>Creating lures</b>
                      <div style={{padding: 20}}>
                        <p><i>Goals</i> assigned to the “InactiveGoals” attribute list can be placed alongside “ActiveGoals” to act as lures.</p>
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
                        <p>During the learning <i>Trials</i>, <i>Landmarks</i> can be included to guide the participant, then excluded from <i>Trials</i> to test performance.</p>
                      </div>

                      <b>Custom mazes</b>
                      <div style={{padding: 20}}>
                        <p>Custom 3D Model mazes (e.g., t-mazes, radial mazes) can be created in the Unity Editor, or third-party software, and then defined as <i>Landmarks</i> allowing them to be instantiated into any Scene on a <i>Trial-by-Trial</i> basis. </p>
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
                      <b>Manipulating local and global environment features</b>
                      <div style={{padding: 20}}>
                        <p><i>Enclosures</i> allow the features of the movement area to be manipulated while holding Scene and perhaps other environment objects (i.e., <i>Landmarks</i>, <i>Goals</i>) constant, or vice versa.</p>
                      </div>

                      <b>Parametric morphing</b>
                      <div style={{padding: 20}}>
                        <p><i>Enclosure</i> customization allows for parametric morphing between two end points (e.g. from a square <i>Enclosure</i> to circular <i>Enclosure</i>); a technique that has proven fruitful when applied to rodents</p>
                      </div>

                      <b>Participant placement randomization</b>
                      <div style={{padding: 20}}>
                        <p>When an <i>Enclosure</i> is included in the <i>Trial</i> definition, the participant can be placed randomly within the <i>Enclosure</i> at the start of each <i>Trial</i> using the following attribute settings: 
                        <br/>“StartPosition” : []
                        <br/>"StartFacing: -1 attribute may be left empty (i.e “StartPosition”: []) “StartFacing” attributes may be set to 0 and -1 to place the participant at a random location within the <i>Enclosure</i>.</p>
                      </div>

                      <b>Barricading sections of the Scene</b>
                      <div style={{padding: 20}}>
                        <p>Invisible cuboids may also be defined as <i>Landmarks</i> and placed into a Scene to act as invisible barricades. This allows the participants access to areas of the Scene to change from one <i>Trial</i> to the next. A technique that could be used to, perhaps, teach specific routes through a Scene.</p>
                      </div>
                    </div>
                    <br/>
                  <div/>
               




                  <h1 id="configI" className="font-medium text-5xl my-4"><i>Instruction/Cue Screen Trials</i></h1>
                <p>Image files can be used to create <i>Instruction/Cue Screen Trials</i>, allowing them to be presented to the participant.</p>
                  <br/>
                  <h3 id="About" className="font-medium text-3xl">Importing Images for <i>Instruction/Cue Screen Trials</i></h3>
                <div style={{padding: 20}}>
                  <p>Images you wish to use for Instructions/Cue Screens must be placed into the <strong>2D_Objects folder</strong>: <strong>OpenMaze/Assets/StreamingAssets/2D_Objects</strong></p>
                  <br/>
                  <div class="bg-red-600 rounded-lg border border-white p-4">
                    <p><strong>Tip:</strong> Create your instruction and cue screens using a presentation software program (e.g. Powerpoint, KeyNote). You can then export your slides as individual image files.</p>
                  </div>
                </div>
                
                <h3 id="About" className="font-medium text-3xl">Creating <i>Insturction/Cue Screen Trials</i></h3>

                <div style={{padding: 20}}>
                <b>Step 1. Create a new <i>Instruction/Cue Screen Trial</i> Object</b>
                <p>Each <i>Instruction/Cue Screen Trial</i> object is defined by a series of attribute-value pairs contained within a set of curly brackets {}. Each <i>Instruction/Cue Screen Trial</i> Object must be defined within the square brackets of the “Trials” Section of the Configuration File. We recommend copying and pasting a <i>Instruction/Cue Screen Trial</i> from the Configuration File Template and simply customizing the attribute-values to suit your needs.</p>
                <br/>

                <b>Step 2. Choose an Image File</b>
                <p>Set the "FileLocation" attribute to the name of the 2D Image file you wish to use, as it appears in the folder. File extensions (e.g. .png, .jpg, etc.) must be attached to the file name when defining 2D Images.</p>
                <br/>

                <b>Step 3. Define the Presentation Time</b>
                <p>Set the duration the Instruction/Cue screen will be displayed for by changing the value of the  “TrialTime” attribute to the desired length of time in seconds. </p>
                <br/>

                <b>Step 4. Assign a Termination Key</b>
                <p>Optionally, you may also assign a specific key to end the <i>Instruction/Cue Trial</i> when pressed by modifying the value of “TrialEndKey” attribute to the desired key.</p>
                <br/>

                <div class="bg-gray-700 rounded-lg border border-white p-4">
                    <p><strong>Note:</strong> you may also add an end experiment button to the Screen by adding - "EndButton": true - to any <i>Instruction/Cue Screen Trial</i> object. We discuss the functionality of this button in more detail in the <strong>Running Experiments Online</strong> section below.</p>
                  </div>
                  <br/>
                  <div class="bg-green-600 rounded-lg justify-center border border-white p-2">
                      <p class="text-center"><strong><a href="https://youtu.be/64lVb1U0KIg">Click Here To Watch Our Video Tutorial On Instructions/Cue Screen Trials!</a></strong></p>  
                </div>
                </div>

                <h3 id="About" className="font-medium text-3xl">Instruction/Cue Screen Configuration File Example</h3>
                  <img  src={InstructionTrial} alt="" className="w-full my-4" />

                <h3 id="About" className="font-medium text-3xl"><i>Instruction/Cue Screen Trial</i> Attributes and Values</h3>
                    <p>Need help remembering what every attribute does, or it's Value format? Don't worry, we've got you covered!</p>
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
                        <td className=" px-4 py-2">A descriptive parameter that can be added to a Trial definition to help track indices and describe the function of the Trial. Note: any parameter of the format “String” : variable, can be added to a Trial  definition to serve as a marker within the Configuration File as long as the String is not already defined as another parameter.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Instructional”</td>
                        <td className=" px-4 py-2">1</td>
                        <td className=" px-4 py-2">Must be included and set to 1 <i>for Instruction/Cue Screen Trials</i></td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“TrialEndKey”</td>
                        <td className=" px-4 py-2">“Space”</td>
                        <td className=" px-4 py-2"><a href="https://docs.unity3d.com/ScriptReference/KeyCode.html" target="_blank" className="underline">Unity API key code</a>. When the defined key is pressed the experiment will proceed to the next Trial as defined in the Block section.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“TrialTime”</td>
                        <td className=" px-4 py-2">60</td>
                        <td className=" px-4 py-2">Length of Trial in seconds. Trial will time out if “Quota” parameter value is not met and “TrialEndKey” is not pressed. Upon timeout the experiment will proceed to the next Trial as defined in the Block section.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“EndButton”</td>
                        <td className=" px-4 py-2">true</td>
                        <td className=" px-4 py-2">When set to true a button labled "End Experiment" is added to the screen. When pressed the experiment applicaiton will close. Only works when running a Built Application.</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  
                  <h1 id="configB" className="font-medium text-5xl my-4"><i>Blocks</i></h1>
                <p><i>Blocks</i> prescribe the sequence that <i>Trials</i> will be presented in. <i>Blocks</i> allow <i>Trials</i> to be presented in a serial order or randomized. You may also add functions to <i>Blocks</i> to create performance criterion for your participants.</p> 
                <br/>
                <div class="bg-red-600 rounded-lg border border-white p-4">
                    <p><strong>Tip:</strong> Use <i>Blocks</i> to divide your experiment into analysis chunks. You can then use the BlockIndex column in the output file to segment the data during analysis!</p>
                </div>
                <br/>
                <h3 id="About" className="font-medium text-4xl">Creating a New <i>Block</i></h3>
                <p>Like all other Experiment Object types, each <i>Block</i> is created by defining a list of attribute-value pairs contained within a set of curly brackets {} within the “Blocks” section of the Configuration File. 
                <br/><br/>You'll find examples of each type of <i>Block</i> described below in the Configuration Template file. We recommend simply copying the <i>Block</i> type you require and customizing it to suit your needs. We recommend adding a "Block #": "Description" attribute-value pair to every <i>Block</i>.</p>
                <br/>

                <h3 id="About" className="font-medium text-4xl">Presenting <i>Trials</i> in Serial Order</h3>
                <p>A <i>Block</i>, in it's most basic form, only requires the "TrialOrder" attribute. The "TrialOrder" attribute is defined by an ordered list of <i>Trial</i> indices. When the <i>Block</i> is executed it will display each <i>Trial</i> contained in this list in the order that it appears in the list. Upon termination of the last <i>Trial</i>, the <i>Block</i> will also terminate, and the next <i>Block</i> in the "BlockOrder" will begin.</p>
                <br/>

                <h3 id="About" className="font-medium text-4xl">Presenting <i>Trials</i> in Random Order</h3>
                <br/><p className="font-medium text-2xl">The "RandomlySelect" Attribute - How it Works</p>
                <div style={{padding: 20}}>
                <ul class="list-disc">
  
                <li>To present <i>Trials</i> in random orders, you must add the "RandomlySelect" attribute to the <i>Block</i> object.</li>
                <br/>
                <li>The "RandomlySelect" attribute is defined by a list of "Orders" and each "Order" is defined by an ordered list of <i>Trials</i> (just like the "TrialOrder" attribute!)</li>  
                <br/>
                <li>When the "RandomlySelect" attribute is added to a <i>Block</i>, the <i>Special Trial Index</i> <b>0</b> (zero) can be used in the "TrialOrder".</li>  
                <br/>
                <li>When the <i>Block</i> executes the <i>Trial</i> index 0, the <i>Block</i> will randomly select an "Order" from "RandomlySelect".</li>  
                <br/>
                <li>The <i>Block</i> will execute each of the <i>Trials</i> contained within the selected "Order", in their defined sequence.</li>  
                <br/>
                <li>Upon the termination of the last <i>Trial</i> contained in the selected "Order", the <i>Block</i> will return to the "TrialOrder" and execute the next <i>Trial</i>.</li> 
                </ul>
                </div>
                <p className="font-medium text-2xl">The "Replacement" Attribute</p>
                <div style={{padding: 20}}>
                By default, after an "Order" is executed it is replaced and can be called at random next time a 0 in the "TrialOrder" is encountered. To remove each "Order", after it has been selected, add the "Replacement" attribute and set it to 0. 
                </div>

                <div class="bg-yellow-600 rounded-lg border border-white p-4">
                    <p><strong>IMPORTANT:</strong> When "Replacement" is set to 0, the number of 0s added to the "TrialOrder" cannot exceed the number of "Orders" defined in the "RandomlySelect" attribute.</p>
                </div><br/>
                
                <div class="bg-green-600 rounded-lg justify-center border border-white p-2">
                      <p class="text-center"><strong><a href="https://youtu.be/Nqj0VUgi4gE">Watch Our Video Tutorial About Serial and Random Trial Order</a></strong></p>  
                </div>
                <br/>

                <h3 id="About" className="font-medium text-4xl">Adding Task Criterion</h3>
                <p>During the execution of a <i>Block</i>, several performance values are tracked and can be used to assess whether participants have reached the set performance criteria. Performance criteria can be set and evaluated either at the <i>Block</i> or <i>Trials</i> level, such that <i>Block</i> will repeat (<i>Block</i> criteria) and <i>Trials</i> will continue (<i>Trials</i> criteria) until the set level of performance is reached.</p>
                <br/><h3 id="About" className="font-medium text-2xl"><i>Block</i> and <i>Trial</i> Functions</h3>
                <p>C# functions which return true or false can be attached to <i>Blocks</i> by assigning the function name to the "TrialFunction" and/or "BlockFunction" attribute, and assigining the function arguments to the 
                "TrialGoal" attribute (used by the "TrialFunction"), or the "BlockGoal" (used by the "BlockFunction") attribute. A criterion is met when the function returns <i>true</i>.</p>
                
                <div style={{padding: 20}}>
                  <h3 id="About" className="font-medium text-xl"><i>Trial</i> Criterion</h3>
                  <p>When a function is attached to a <i>Block</i> using the "TrialFunction" the function will be called after each <i>Task Trial</i> in the <i>Block</i>. When <i>false</i> is returned by the function
                  the <i>Block</i> will continue to the next trial as usual. When <i>true</i> is returned by the function the <i>Block</i> will immediately terminate and the experiment will proceed to the <i>Block</i> in the "BlockList".
                  </p><br/>

                  <h3 id="About" className="font-medium text-xl"><i>Block</i> Criterion</h3>
                  <p>When a function is attached to a <i>Block</i> using the "BlockFunction" the function will be called only after the very last <i>Trial</i> in the <i>Block</i>. When <i>false</i> is returned by the 
                  function the <i>Block</i> will repeat from the very begining. When <i>true</i> is returned by the function the <i>Block</i> will terminate and the the experiment will proceed to the <i>Block</i> in the "BlockList".   
                  </p><br/>

                  <h3 id="About" className="font-medium text-xl"><i>Block</i> AND <i>Trial</i> Criterion</h3>
                  <p>Importantly, functions can be assigned to both "TrialFunction" and "BlockFunction" in the SAME <i>Block</i>! This allows <i>Blocks</i> to terminate early if the criterion has been met before the <i>Block</i> is complete ("TrialFunction"), 
                  and repeat if the criterion is not met by the end of the <i>Block</i> ("BlockFunction").</p>
                </div>
                
                <h3 id="About" className="font-medium text-2xl">The Built-in SuccessesCriterion Function</h3>
                <p>OpenMaze comes with a built-in function named SuccessesCriterion which can be assigend to "TrialFunction" or "BlockFunction" or both at the same time! We describe this function in detail below and provide
                  a visual representation in the graphic below.</p>
                <div style={{padding: 20}}>
                  <h3 id="About" className="font-medium text-xl">Assigning SuccessesCriterion to "TrialFunction"</h3>
                  <p>When assigned to the "TrialFunction", SuccessesCriterion will be called after each <i>Task Trial</i> in the 
                  <i> Block</i> to determine whether the participant has successfully completed a number of <i>Trials</i> equal to the value assigned to "TrialGoal". 
                  If <i>true</i> the <i>Block</i> will immediately terminate and the experiment will continue to the next <i>Block</i> in the "BlockOrder". If <i>false</i> the <i>Block</i> will continue to the next <i>Trial</i>
                  in the "TrialOrder".
                  </p><br/>
                  
                  <p><h3 id="About" className="font-medium text-xl">Assiging SuccessesCriterion to "BlockFunction"</h3>
                  When assigned to the "BlockFunction", SuccessesCriterion will be called after the very last <i>Trial</i> in the <i>Block</i> to determine whether 
                  the participant has successfully completed a number of <i>Trials</i> equal to the value assigned to "BlockGoal". If <i>true</i> the <i>Block</i> will 
                  terminate and the experiment will continue to the next <i>Block</i> in the "BlockOrder". 
                  If <i>false</i> the <i>Block</i> will be repeated starting again at the first <i>Trial</i> in the "TrialOrder".</p><br/>
                  
                  <h3 id="About" className="font-medium text-xl">Assigning SuccessesCriterion to "TrialFunction" and "BlockFunction"</h3>
                  <p>When SuccessessCriterion is assigned to both "TrialFunction" and "BlockFunction" in the SAME <i>Block</i> performance can dictate both if the <i>Block</i> should end after each <i>Trial</i> based on the "TrialGoal" AND 
                  if the <i>Block</i> should be repeated based on the "BlockGoal". Notice that the "TrialGoal", may differ from the "BlockGoal".</p> 
                </div>

                <h3 id="About" className="font-medium text-2xl">Creating Custom Functions</h3>
                <p>Custom functions can be created within the <b>Funcions.cs</b> script found in the OpenMaze source code folder: <b>OpenMaze/Assets/Scripts/Main</b>. Functions must be written in C# And
                may only return true or false.</p><br/>

                <div class="bg-red-600 rounded-lg border border-white p-4">
                    <p><strong>Tip:</strong> If you're unfamiliar with C#, don't worry, you can use the SuccessesCriterion function already contained in the <b>Function.cs</b> script 
                    as a template for creating your own function!</p>
                </div><br/>

                
                <h3 id="About" className="font-medium text-3xl"><i>Block</i> Order</h3>
                <p>Once the experiment <i>Blocks</i> have been created, their order of execution is defined by the “BlockOrder” attribute which is defined by an ordered list of <i>Block</i> indices. Like the other sections in the Configuration File, each <i>Block</i> is implicitly assigned an index number based on the order that it is defined within the <i>Blocks</i> section, with the <i>Block</i> defined at the top of the section being assigned the index 1. Once a <i>Block</i> has been defined, it’s index number can be added to the <i>Block</i> Order. <i>Blocks</i> can be executed multiple times and in any order.</p>
                <br/>
                <h3 id="About" className="font-medium text-3xl"><i>Blocks</i> Configuration File Example</h3>
                  <img src={Blocks} alt="" className="w-full my-4" /><br/>
                
                  <h3 id="About" className="font-medium text-3xl"><i>Blocks</i> Attributes and Values</h3>
                    <p>Need help remembering what every Attribute does, or it's value format? Don't worry, we've got you covered!</p>
                    <br/>
                
                <div className="border text-white border-white rounded-lg my-8 overflow-x-auto">
                <div class="bg-yellow-600 rounded-t-lg border border-white p-4">
                      <p class="text-center"><b><i>Blocks</i> Attribute-Value Cheat Sheet</b></p>
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
                        <td className=" px-4 py-2">“BlockOrder”</td>
                        <td className=" px-4 py-2">[1,2,2,...]</td>
                        <td className=" px-4 py-2">Dictates the order in which Blocks will be presented when the experiment is launched. Numbers in this list correspond to the indice of the Block as it is defined in “Blocks”: {`[{1},{2},..,{n}]`}. Blocks can be presented in any order and called multiple times within the BlockOrder list.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Block #” </td>
                        <td className=" px-4 py-2">“Description”</td>
                        <td className=" px-4 py-2">A descriptive parameter that can be added to a Block definition to help track indices and describe the function of the Block. Note: any parameter of the format “String” : variable, can be added to a Block  definition to serve as a marker within the Configuration File as long as the String is not already defined as another parameter.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“TrialOrder”</td>
                        <td className=" px-4 py-2">[1,4,5,5,...]</td>
                        <td className=" px-4 py-2">An ordered list of Trial indices. Trials can be presented in any order and called multiple times within the TrialOrder list.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Replacement”</td>
                        <td className=" px-4 py-2">0 or 1</td>
                        <td className=" px-4 py-2">Random selection is executed with replacement (1) or without replacement (0)</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“RandomlySelect”</td>
                        <td className=" px-4 py-2">
                          {`[{“Order”: [1,2]},
                          …,
                          {“Order”: [3,4]}] `}</td>
                        <td className=" px-4 py-2">A list of Trial orders. When Trial index 0 is called in “TrialOrder'' one of the “Order” lists is randomly selected. When an “Order” is selected, Trials are presented in the order they are defined in the “Order” list.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“Order”</td>
                        <td className=" px-4 py-2">[1,4,5,...]</td>
                        <td className=" px-4 py-2">An ordered list of Trial indices. Each list must contain at least 1 Trial, with no upper limit.</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“TrialFunction”</td>
                        <td className=" px-4 py-2">"SuccessCriterion"</td>
                        <td className=" px-4 py-2">Refers to the name of a function written in the Functions.cs script of the OpenMaze source code. 
                        The function will be called at the end of each Trial to determine whether the <i>Block</i> should be terminated or continue.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“TrialGoal”</td>
                        <td className=" px-4 py-2">"5"</td>
                        <td className=" px-4 py-2">Contains any variables needed to run the Block Function</td>
                      </tr >
                      <tr>
                        <td className=" px-4 py-2">“BlockFunction”</td>
                        <td className=" px-4 py-2">"SuccessCriterion"</td>
                        <td className=" px-4 py-2">Refers to the name of a function written in the Functions.cs script of the OpenMaze source code. 
                        The function will be called at the end of each the <i>Block</i> to determine whether the <i>Block</i> should be terminated or repeated.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“BlockGoal”</td>
                        <td className=" px-4 py-2">"3"</td>
                        <td className=" px-4 py-2">Contains any variables needed to run the Block Function</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“DisplayText”</td>
                        <td className=" px-4 py-2">“Display This Text”</td>
                        <td className=" px-4 py-2">The string provided will be displayed at the top of the screen during each <i>Task Trial</i> in the <i>Block</i>.</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“ShowTrialTotal”</td>
                        <td className=" px-4 py-2">true</td>
                        <td className=" px-4 py-2">When set to true the number of <i>Goals</i> collected in the current <i>Trial</i> will be displayed </td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“ShowBlockTotal”</td>
                        <td className=" px-4 py-2">true</td>
                        <td className=" px-4 py-2">When set to true the number of <i>Goals</i> collected in the current <i>Block</i> will be displayed during every <i>Task Trial</i> in the <i>Block</i></td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">“ShowNumSuccesses”</td>
                        <td className=" px-4 py-2">true</td>
                        <td className=" px-4 py-2">When set to true the number of successful Trials in the current <i>Block</i> will be displayed during every <i>Task Trial</i> in the <i>Block</i> (a <i>Trial</i> is counted successful when a participant meets the "Quota")</td>
                      </tr>
                    </tbody>
                  </table>
                </div>


                <h1 id="configS" className="font-medium text-5xl my-4">Settings</h1>
                <p>The setting section provides a small number of attributes which can be divided into two sections Experiment Settings and Character Settings.</p> 
                <h1 id="configS" className="font-medium text-2xl my-4">Experiment Settings</h1>
                <p>Experiment Settings are used to change data recording frequency, ignore input from the user upon Trial onset, turn on/off timing analysis features.</p><br/>


                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                <div class="bg-gray-600 border border-white p-4">
                      <p class = "text-center"><strong>Experiment Settings</strong></p>
                </div>
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr>
                        <th className="p-4">Attribute</th>
                        <th className="p-4">Example Value</th>
                        <th className="w-3/4 p-4">Description</th>
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
                        <td className=" px-4 py-2">Time in seconds after each trial onset that input will be ignored. We recommend setting this variable to {">"} 0 to ensure that accidental key presses do not cause trials to be skipped when consecutive trials use the same TrialEndKey (see Trials section below).</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">“TimingVerification”</td>
                        <td className=" px-4 py-2">True or False</td>
                        <td className=" px-4 py-2">When set to true, a small box will be added to the bottom corner of the experiment which will alternate between white and black upon Trial onsets. Using a photodiode experimenters can compare visual onset to the onset time recorded in the output file. (See Output Timing)</td>
                      </tr>
                      </tbody>
                      </table>
                      </div>

                      <h1 id="configS" className="font-medium text-2xl my-4">Character Settings</h1>
                <p>Character Settings are used to make quick changes to characteristics of the participant experience e.g. how tall they are, whether <i>Goals</i> should rotate in a Scene, etc.</p>

                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                      <div class="bg-gray-600 border border-white p-4">
                      <p class = "text-center"><strong>Character Settings</strong></p>
                      </div>
                      <table className="table-auto">
                      <tbody>
                      <tr>
                        <td className=" px-4 py-2">“Height”</td>
                        <td className="px-4 py-2">2</td>
                        <td className="px-4 py-2">The height of the participants viewing angle within the environment.</td>
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




                <h1 id="testC" className="font-medium text-5xl my-4">Running Configuraiton Files</h1>
                <h1 id="testC" className="font-medium text-3xl my-4">Method 1: Manually Select</h1>
                <p>By defualt, OpenMaze will prompt you with a file browser each time the experiment is launched. This is true regardless of whether the experiment is launched in Unity or as an experiment application. 
                  Simply navigate to folder where your Configuration File is saved, select it and click <strong>Open</strong>. You will always be prompted with the <strong>Configuration_Files</strong> folder contained within the <strong>OpenMaze</strong> project folder.</p><br />

                <h1 id="testC" className="font-medium text-3xl my-4">Method 2: Auto Run</h1>
                <p>You can have OpenMaze execute a specific Configuration File by moving the <strong>AutoRun_Config</strong> folder from the <strong>Configuration_Files</strong> folder to the <strong>StreamingAssets</strong> folder. The place holder Configuration File
                  contained in the "AutoRun_Config" folder can be used to test to make sure you have moved the folder to the proper location, before being replaced with a Configuration File of your choosing. Removing the <b>AutoRun_Config </b> 
                  folder from the <b>StreamingAssets</b> folder, OR removing all configs from the <b>AutoRun_Config</b> folder will allow you to manually select Configuration Files once agian.</p><br />

                  <div class="bg-yellow-600 rounded-lg border border-white p-4">
                    <p><strong>IMPORTANT:</strong> After moving the <strong>AutoRun_Config</strong> folder to the <strong>StreamingAssets</strong> folder it cannot be renamed and it must only contained 1 Configuration File for it to function properly.</p>
                    </div><br />
                
                <h1 id="testC" className="font-medium text-3xl my-4">Creating Multiple Configuration Files</h1>
                <p>The ability to run different Configuration Files each time the experiment is launched provides tremendous flexibility when creating experiments. Some examples include: Creating Multi-Session Studies,
                  Counterbalancing across participants, Creating multiple experiment conditions (or even experiments!) contained within the same Scenes. 
                </p>

                <h1 id="testU" className="font-medium text-5xl my-4">Testing Experiments In Unity</h1>
                
                <p>Experiments can be launched directly within the Unity Editor, allowing you to make sure everything is running properly before you export it as an application. Simply follow the steps below:</p>
                
                <div style={{padding: 20}}>
                    <b>Step 1. Validate Your JSON file</b>
                    <p>We recommend adding a JSON linter to your text editor which will allow you to verify whether your Configuration File is a valid JSON file 
                      via a menu option or a hot-key combination. You can also copy your entire Configuration File and paste it into an online linter like https://jsonlint.com/.</p>
                    <br/>

                    <b>Step 2. Save Your Changes</b>
                    <p>This sounds silly, but while testing your experiment you're likely to yourself making small changes to the Configuration File before 
                      returning quickly to the Unity Editor to test them. CTRL+S is your friend!</p>
                    <br />

                    <b>Step 3. Open the +LaunchExperiment Scene in the Unity Editor</b>
                    <p>The experiment will not run if you have any other Scene open in the Unity Editor. </p>
                    <br />

                    <b>Step 4. Press the Play Button!</b>
                    <p>Pressing the <strong>Play</strong> button while the +Launch Experiment Scene is select will launch the experiiment in the editor.  </p>
                    <br />

                    <b>Step 5. Select Your Configuration File</b>
                    <p>Upon launching the experiment, you will be prompted with a file explorer window. Select a Configuration File of your choosing and press the <strong>Open</strong> button.</p>
                    <br />

                    <div class="bg-gray-700 rounded-lg border border-white p-4">
                    <p><strong>Note:</strong> If you are using the Auto Run Configuration File method described above, the Auto Run Configuration File will be automatically executed.</p>
                    </div><br />

                    <b>Step 6. Start the Experiment</b>
                    <p>Navigate to the <strong>Game</strong> window, and press the <strong>Start Experiment</strong> button. The experiment Configuration File will now be executed in the <strong>Game</strong> window and you may complete the experiment exactly as 
                      a participant would.  </p>
                    <br />

                    <div class="bg-red-700 rounded-lg border border-white p-4">
                    <p><strong>Tip:</strong> Click the <strong>Maximize on Play</strong> button in the top right of the <strong>Game</strong> window to experience the experiment in full screen.</p>
                    </div><br />

                    <b>Step 7. End Testing</b>
                    <p>Stop the experiment at any time by pressing the <strong>Play</strong> button once again!  </p>
                    <br />
                  </div>

                  <h1 id="configS" className="font-medium text-3xl my-4">Making Realtime Changes</h1>
                  <p>While an experiment Configuration File is being executed in the <strong>Game</strong> window, realtime changes to the current <i>Trial</i> environment can be made within the Unity <strong>Scene</strong> window, 
                    allowing the changes to be witnessed from the participant perspective in the <strong>Game</strong> window in real time. 
                    This can prove extremely helpful when trying to make minor tweeks to the environment. You can also pause the experiment at any time, allowing you to make changes
                    without having to worry about the <i>Trial</i> timing out.</p><br /> 

                  <h1 id="configS" className="font-medium text-3xl my-4">Testing a <i>Trial</i> or <i>Block</i></h1>
                  <p>If you wish to just run a specific <i>Block</i> you can temporarily add its index to the front of the “BlockOrder” attribute in the Configuration File. Similarly, if you wish to test a specific <i>Trial</i> you can 
                  temporarily add its index to the front of the “TrialOrder” attribute of the first <i>Block</i>. 
                  You can end your test at any time by pressing the <strong>Play</strong> button above the <strong>Scene</strong> window again.</p>

                  <h1 id="testT" className="font-medium text-5xl my-4">Trouble Shooting</h1>
                  <p>If you run into any issues while running your experiment, try the following in the order they are perscribed:</p>
                  <div style={{padding: 20}}>
                  <b>Validate your Configuration File</b>
                  <p>Most commonly, if you encounter an unexpected error when attempting to run a Configuration File, it is likely a JSON formatting issue. 
                    Because of this we always recommend using a text editor with a JSON lint tool. This will allow you to press a hot key to check if your 
                    Configuration File has any issues. Alternatively, while much more tedious, you can copy and paste your JSON file text into an online JSON lint (e.g. 
                    <a href= "https://jsonlint.com/">https://jsonlint.com/</a>)</p><br />

                    <b>Check for Error Messages</b>
                  <p>Open the <strong>Console</strong> window within the Unity Editor and see if it displays any error messages. 
                    We have tried our best to create custom error messages for the most common errors that you may encounter when running an experiment. 
                    These messages will alert you to many issues. Some examples include: 
                    attempting to call an object that hasn’t been placed into the correct project folder, 
                    calling a Scene number that hasn’t been added to the Build, and many others.</p><br />

                    <b>Reach Out to the OpenMaze Team</b>
                    <p>If you’re having an issue that you cannot resolve please feel free to contact us directly with your issue. You can get in touch with us via our website <a href="https://openmaze.duncanlab.org/contact"><u>contact page</u></a> or <a href="https://github.com/DuncanLab/OpenMaze"><u>GitHub</u></a></p>

                    </div>
                  <p></p>

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
                  However, you should be aware that Unity supports a variety of additional build platforms. 
                  These include: iOS, Android, WebGL, PlayStation 4, PlayStation Vita, Xbox One, Wii U, 3DS, 
                  Oculus Rift, Google Cardboard, SteamVR, PlayStation VR, Gear VR, Windows Mixed Reality, 
                  Daydream, Android TV, Samsung Smart TV, tvOS, Nintendo Switch, Fire OS, Facebook Gameroom, 
                  Apple's ARKit, Google's ARCore, and Vuforia. We expect that exporting OpenMaze experiments 
                  for any of the untested platforms may require changes to the Unity project settings or perhaps 
                  the OpenMaze codebase.</p><br />
                
                
                <h1 id="exportB" className="font-medium text-5xl my-4">Building an Application</h1>
                <div style={{padding: 20}}>
                    <b>Step 1. Install the Target Build Platform</b>
                    <p>Check that the build platform support you require has been installed in Unity. 
                      To do this, open the Unity Hub application and click on the <strong>Installations</strong> tab. 
                      If installed, the build platform will appear in the box labelled with the Unity install 
                      version you have used to code your experiment. If the build platform icon is not present, 
                      click the three dots <b>⋮</b> located in the top right corner of the box and click <strong>Add Modules</strong>. 
                      When prompted, select your target build platform and click <strong>Next</strong>. </p>
                    <br/>

                    <b>Step 2. Create an Empty Folder</b>
                    <p>Create a folder in the directory you'd like to save your application (name it whatever you’d like!). This will be used to store your experiment application and other folders necessary for running the application.</p>
                    <br />

                    <b>Step 3. Open the Build Settings</b>
                    <p>Click the <b>File</b> tab at the top of the editor and select <b>Build Settings</b></p>
                    <br />

                    <b>Step 4. Select the Target Platform</b>
                    <p>Select your Target Platform from the drop down menu in the <strong>Build Settings</strong> window. 
                      If your desired target platform does not appear in the drop down refer to <b>Step 1</b>
              
                    </p>
                    <br />

                    <b>Step 5. Build the Application</b>
                    <p>Click the <b>Build</b> button and select the folder you created in <b>Step 2</b></p>
                    <br />

                    <div class="bg-gray-700 rounded-lg border border-white p-4">
                    <p><strong>Note:</strong> You may be prompted with a <strong>Missing Project ID</strong> window. Click <b>Yes</b> to continue</p>
                    </div><br />

                    <b>Step 6. Add Configuraiton Files</b>
                    <p>Built applications will not contain the <b>Configuration_Files</b> folder. Placing the <b>Configuration_Files</b> folder in the 
                    folder containing the experiment application will ensure that it is prompted when the application is launched.</p>
                    <br />

                    <div class="bg-red-700 rounded-lg border border-white p-4">
                    <p><strong>Note:</strong> If you built your application using an Auto Run Configuraiton File, the application will automatically run this Configuraiton File.</p>
                    </div><br />
                  </div>

                <h1 id="exportR" className="font-medium text-5xl my-4">Running Applications</h1>
                <div style={{padding: 20}}>
                    <b>Step 1. Run the Applicaiton</b>
                    <p>Built applications must be run on a device with the Target Platform. Upon launching the applicaiton it will be dislayed full screen and should run
                      exactly as it had in the <b>Game</b> window in the Unity Editor.</p>
                    <br />

                    <div class="bg-yellow-600 rounded-lg border border-white p-4">
                    <p><strong>IMPORTANT:</strong> You must place the <strong>Configuration_File</strong> folder into the same folder as the application for it to auto prompt. If you are using 
                    an Auto Run Configuraiton File you can replace or make changes to it by navigating to the <b>StreamingAssets</b> subfolder.</p>
                    </div><br />

                    <b>Step 2. Data Files</b>
                    <p>After running the experiment navigate back to the folder containing the application. 
                      There should now be a folder named <b>Assets</b> that was not there prior to launching the experiment the first time. 
                      Within this folder is a subfolder named <b>Outputfiles~</b> this folder will store data files everytime the application is run.</p>
                    <br />
                  </div>

                <h1 id="exportC" className="font-medium text-5xl my-4">Post Build Changes</h1>

                <p>It should be noted that once exported, the ability to make changes to the experiment is limited. 
                  Changes can be made to any files that are contained within the <strong>StreamingAssets</strong> folder allowing you to add, 
                  or change images used for <i>Instruction/Cue Screen Trials</i> or <i>Landmarks/Goals</i> and make changes to, 
                  or replace the autorun Configuration File. However changes to Scenes, 3D Models, and Audio files cannot be made. 
                  Changing or creating new Configuration Files is also possible as long as they do not require Scenes, 
                  3D Models, or Audio files that were not present within the project at the time the application was built.</p>

                <h1 id="exportS" className="font-medium text-5xl my-4">Sharing Applications</h1>
                <p>Exporting your experiment as an application also makes it super easy to share with friends and collegues! Due to their file size, we recommend using a cloud service (e.g. Dropbox, GoogleDrive). 
                  Windows application folders can be uploaded in their full form or as a zip file. macOS applications however must be converted into a Disk Image (.dmg file type) and the Disk Image must be uploaded and 
                  downloaded. We provide detailed instructions for this procedure in the <b>Running Experiments Online</b> section below.  </p>

                <h1 id="outputF" className="font-medium text-5xl my-4">Data Files</h1>
                <p>OpenMaze output is written to Comma Separated Values (.csv) files. Each time the experiment is executed a .csv 
                file is created and named with the concatenated text entered in the experiment start screen (i.e. +Launch Experiment Scene) fields and a time stamp:
                <br /><br /><b class="text-center">StartField1_StartField2_StartField3_StartField4_TimeStamp.csv</b><br /><br /> 
                Output files record the participant position (x, y, and z) and viewing angle (y rotation value), <i>Goal</i> collisions, and keystrokes. 
                Each row also includes the <i>Block</i> and <i>Trial</i> index, as well as a <i>Trial</i> sequence number identifying how many <i>Trials</i> have occurred in the <i>Block</i>. 
                Rows are also timestamped with the absolute system time of the device running the experiment.</p>

                <h1 id="outputC" className="font-medium text-5xl my-4">Start Fields</h1>
                <p>You may wish to change the place holder text for your <b>StartFields</b>, perhaps to "Participant ID", "Session #", "Condition", "Version", ect. This can be done within the Unity Editor before exporting your experiment. These fields cannot be changed 
                after the experiment has been built</p>
                <div style={{padding: 20}}>
                    <b>Step 1. Open the +Launch Experiment Scene Canvas</b>
                    <p>Open the +Launch Experiment Scene in the Unity Editor, navigate to the <b>Hierarchy</b> window and click to expand the <b>Canvas</b>. 
                    </p><br />

                    <b>Step 2. Select the Field</b>
                    <p>Contained within the <b>Canvas</b> are 4 <b>Field</b> objects that can be expanded to reveal 
                    <b> Text</b> and <b>Placeholder</b>; select <b>Placeholder</b>.    
                    </p><br />

                    <b>Step 3. Change the Placeholder Text</b>
                    <p>With the <b>Placeholder</b> object selected navigate to the <b>Inspector </b> 
                    window where you can change the text element to suit your needs.</p><br />

                    <div class="bg-red-600 rounded-lg border border-white p-4">
                    <p><strong>Tip:</strong> To disable any of the start screen input fields, simply click on the field in the <strong>Hierarchy</strong> window to select it, then uncheck the checkbox next to the field name at the top of the <strong>Inspector</strong> window. Any input field disabled in this manner will be removed from your experiment start screen, but will still be available in the <strong>Hierarchy</strong> window should you wish to reenable it.</p>
                    </div><br />

                  </div>

                <h1 id="outputT" className="font-medium text-5xl my-4">Output Timing</h1>
                <p>By default, Unity uses VSync, which calls the Update() function once per frame, 
                  ensures the output is synced as closely as possible to the participant’s experience. 
                  Collisions with <i>Goals</i> are written to the output file whenever a collision is detected by the Unity FixedUpdate() function, which is called every 20ms, 
                  meaning that the output file will mark the time at which a <i>Goal</i> was collected within 20ms. </p>

                <h1 id="controlD" className="font-medium text-5xl my-4">Controls/Input</h1>
                <h1 className="font-medium text-3xl my-4">Movement Controls</h1>

                  <p>By default, OpenMaze is calibrated for use with the arrow keys of a standard keyboard, or a single joystick, allowing participants 
                    to move forward and backward and rotate in place left or right. 
                    However, controls can be easily changed through Unity’s Input Options to include more complex movement 
                    controls: for example, allowing up/down/left/right head motions to be controlled with the mouse 
                    (used in conjunction with a keyboard) or adding a second joystick 
                    (e.g., gamepads with two joysticks). </p><br />
                    
                    <h1 className="font-medium text-3xl my-4">Input Devices</h1>
                    <p>Supported input devices include most digital (e.g., keyboards, 
                    digital controllers) or analog (e.g., joysticks, gamepads) devices supported by the local machine. 
                    The input device can be set within Unity’s Project or <strong>Run Settings</strong> windows. 
                    While not supported by OpenMaze, Unity is compatible with a variety of specialized input devices 
                    (e.g., VR headsets, touch screens) though add-on support packages. </p>

                    <h1 id="onlineUD" className="font-medium text-5xl my-4">Online Experiments</h1>
                    <h1 className="font-medium text-3xl my-4">Uploading and Downloading</h1>
                    <p>OpenMaze has been design to make it easy to share experiment applications across devices. This is not only great for sharing your experiments 
                      with collegues, but can also be used to share experiments with participants online. We have created two short (~2min) tutorial videos which provide
                      step-by-step instruction on how to package your experiments, upload them to the cloud, and create a URL that can be used by anyone to download your experiment.
                      These videos also include instructions for how to to download applications using the URL and run them.</p><br />

                      <div class="bg-yellow-600 rounded-lg border border-white p-4">
                    <p><strong>IMPORTANT:</strong> There are key differences between uploading and downloading macOS vs. Windows experiment applications. Make sure to watch the corresponding video closely.</p>
                    </div><br />

                    <div className="">
                    <h1 id="controlD" className="font-medium text-2xl my-4">macOS Applications</h1>

                    
                  <ReactPlayer url={"https://youtu.be/H3dqHfPXTco"} width="100%" style={{ borderRadius: "0.5rem" }}/>
                    

                    <h1 id="controlD" className="font-medium text-2xl my-4">Windows Applications</h1>

                    
                  <ReactPlayer url={"https://youtu.be/i4RKxMHjUvM"} width="100%" style={{ borderRadius: "0.5rem" }}/>
                    

                    <h1 id="onlineS" className="font-medium text-4xl my-4">Recommended Settings</h1>
                    <h1 className="font-medium text-2xl my-4">1. Use an AutoRun Configuration File</h1>
                    <p>Instead of having to rely on your participants selecting a Configuraiton File upon launching your experiment, we recommend using the Auto Run Configuration File feature. This is described
                      in detail in the <a href="#testingR"><b>Testing Experiments Section</b></a>.
                    </p>
                    <h1 className="font-medium text-2xl my-4">2. Experiment End Screen/Button</h1>
                    <p>Make sure that you include an experiment end screen and set "EndButton" equal to <i>true</i>. This will allow the participant to press the button to exit the application (See:  <a href="#configI"><b>Instruction/Cue Screen Trials</b></a>).
                    </p>

                    <h1 className="font-medium text-2xl my-4">3. Add a URL to your End Button</h1>
                    <p>follow the steps below to add a URL to your Exit button. When the Exit button is pressed, the experiment application will close and a URL of your choosing will be opened in the participants
                      default internet browser. This is a useful tool for prompting the user with the website that they must upload their data file to. 
                    </p>
                    <div style={{padding: 20}}>
                    <b>Step 1: Open the Loading Screen Scene</b>
                    <p>Open the <b>Loading Screen</b> Scene in the Unity Editor. It can be found in the <b>_Scenes</b> folder in the <b>Project</b> window.</p><br />  
                    <b>Step 2: Select the Exit Button</b>
                    <p>With the <b>Loading Screen</b> scene active, expand the <b>Canvas</b> object in the <b>Heirarchy</b> window to reveal the <b>Exit Button</b> object and Select it.</p><br />
                    <b>Step 3: Turn the URL function ON</b>
                    <p>With the <b>Exit Button</b> selected, navigate to the <b>Inspector</b> window and scroll down to the buttons <b>On Click</b> options. Set <b>UrlOpener.Open</b> to <b>Editor and Runtime</b></p> <br />
                    <b>Step 4: Set your Custome URL</b>
                    <p>Below the <b>On Click</b> menu in the <b>Inspector</b> window you'll a sub window titled <b>URL Opener (Script)</b> Replace the default OpenMaze URL to a URL of your choosing.</p> <br />
                    <b>Step 5: Test it out</b>
                    <p>You can test whether your URL is working properly directly within the Unity Editor. Add the button to an <i>Instruction/Cue Screen Trial</i> to test.</p> <br />
                    <p></p><br />
                    </div>

                    <h1 id="developR" className="font-medium text-5xl my-4">Developing OpenMaze</h1>

                    <h1 className="font-medium text-3xl my-4">Feature Request and Issue Reporting</h1>
                    <p>To submit a feature request or report an issue in the code base, please visit the <a href="https://github.com/DuncanLab/OpenMaze/issues"><u>OpenMaze GitHub Issues Page</u></a>  and create a New issue. 
                      When submitting a request, ensure that you attach the appropriate label to it (e.g. feature request, bug, help wanted, etc.).</p>

                      <h1 id="developS" className="font-medium text-3xl my-4">Sharing Changes</h1>
                      <p>Through the OpenMaze GitHub page you can clone, or fork the OpenMaze project. 
                        This will allow you to submit your changes to the OpenMaze team by submitting a GitHub pull request. Upon receiving a pull request, the OpenMaze development 
                        team will review your changes and coordinate their implementation with you. <strong>Note:</strong> before developing larger changes to the source code or adding functionality, 
                        we encourage you to reach out to the OpenMaze development team for guidance to ensure that the final implementation process is quick-and-easy! 
                    </p>

                    <h1 id="developF" className="font-medium text-3xl my-4">Feature Diagnostics</h1>
                    <p>When making changes to any aspect of the OpenMaze source code it's important to ensure that your changes don't impact other functionality. We've made it easy to test this
                      by including a <b>Test_All_Features</b> Configuration File with OpenMaze. This Configuration File can be found in the folder: <b>OpenMaze/Configuration_Files/FeatureTest</b>.
                      This Configuration File includes a test <i>Trial</i> for every OpenMaze feature and combination of feature. Inspecting this Configuration File you'll find that features are
                       divided into sections, which are then divided further into subsections using <i>Blocks</i>. You'll also notice the sequential ordering of feature test, with each feature 
                       being first tested on it's own and then in combination with other features. This allows you to add and remove <i>Blocks</i> to test specific features or combinations of features
                       allowing you to pin point issues! 
                    </p>



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