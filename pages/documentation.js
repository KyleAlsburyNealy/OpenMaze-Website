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
                    Welcome!
                </p>

                </button>
                {this.state.step1 &&
                  <div>
                    <a href="#introduction" className={subSectionLinkStyle}>
                      About
              </a>
                    <a href="#softwareSetup" className={subSectionLinkStyle}>
                      Video Tutorials
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



              
              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="gettingStarted">
                <p className="font-medium text-6xl my-4">Geting Started</p>
                <h2 id="About" className="text-2xl">About</h2>
                <p>OpenMaze is a general-purpose 3D experiment building toolbox, developed for the Unity Engine. OpenMaze is easy-to-use and requires no prior coding experience, allowing you to spend less time hacking and more time experimenting! This manual contains everything you need to know about building experiments in OpenMaze.  </p>
                <br /><br />
                <h3 id="About" className="text-2xl">Video Tutorials</h3>
                <p>If you’re a first-time OpenMaze user, we strongly recommend following along with our <u>Learn OpenMaze</u> video tutorial series. These tutorials provide a step-by-step, hands-on approach to learning the ins-and-outs of the OpenMaze toolbox.</p>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="softwareSetup">
              <p className="font-medium text-6xl my-4">Software Setup</p>

                <p>To get started, you'll need three pieces of software: The OpenMaze Source Code, The Unity Development Engine, and a text editor! Use the stpes below, or follow along with our video tutorial.</p>
                <br /><br />
                <b>Step 1: Download The OpenMaze Source Code</b>
                <p>Click here and select the latest release. Then scroll to the bottom of the page and click <strong>Source Code (zip)</strong>. Unzip the folder and place it somewhere you'll remember!</p>
                <br /><br />
                <b>Step 2: Download and Install the Unity Hub</b>
                <p>Download the Unity Hub here: <u>https://store.unity.com/download?ref=personal</u>. If you don't have one already, you'll need to create a Unity acount. Don't worry, OpenMaze works with any account type, including the free personal plans!!</p>
                <br /><br />
                <b>Step 3: Set up Open Maze in Unity</b>
                <p>Open the Unity Hub application, sign in, and ensure that you have a license (it's free too!). Once signed in, click the <strong>Add</strong> button in the top right of the <strong>Projects</strong> page. 
                When prompted select the unzipped OpenMaze folder from <strong>Step 1.</strong>When OpenMaze appears in the Hub, click the small yellow triangle beside <strong>Unity Version</strong>. 
                This will prompt you to download the correct version of Unity (this takes a while - be patient! or take nap!). 
                Once installed, navigate back to the <strong>Projects</strong> page. The yellow triangle should be replaced with a Unity Version number.
                You can now click the OpenMaze project to open it in Unity. You may be asked if you'd like to update Unity click no.</p>
                <br /><br />
                <b>Step 4: Text Editor</b>
                <p> You'll need a text editor for creating and editing OpenMaze Configuration Files. As you'll learn, these files are formatted in JavaScript Object Notation (JSON) and must be formatted correctly to run. For this reason, we recommend using a text editor with a JSON lint tool that will alert you if your formatting is incorrect!</p>
                <li>We recommend Sublime: <u>https://www.sublimetext.com/3</u></li>             
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="experimentDesign">
                <p className="font-medium text-6xl my-4">Experiment Design</p>
                <p>OpenMaze offers a start-to-finish experiment design framework that can accommodate a wide range of environmental and task conditions. It allows experiments to be created within completely customized navigation environments (or Scenes), using any number of custom 3D models and/or images for stimuli. Crucially, OpenMaze experiments can be created without any prior coding experience. This is accomplished using Configuration Files that are written in JavaScript Object Notation (JSON), a user-friendly format that allows users to create experiments by assigning custom values to attributes of their experiment rather than having to program them in low-level languages (e.g. C#, C++, or Python). Below we detail each step of the experiment design process. </p>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesAbout">
                <p className="font-medium text-5xl my-4"><i>Scenes</i></p>
                <h2 id="About" className="text-2xl">What is a <i>Scene?</i></h2>
                <p><i>Scenes </i>provide a static setting (e.g. City, or Farm, etc.) within which navigation tasks can be created. Each <i>Scene</i> begins as a blank canvas in which 3D Models can be placed, manipulated, and arranged using the flexible and intuitive point-and-click/drag-and-drop Unity Editor GUI. Rather than provide you with premade <i>Scenes</i>, OpenMaze allows you to create <strong><i>any number</i></strong> of your own fully customized <i>Scenes </i>using the Unity Editor’s extensive <i>Scene</i> building framework, which includes built-in tools as well as access to thousands of additional resources via the integrated Unity Asset Store. </p>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="creatingScenes">
                <h2 id="About" className="font-medium text-3xl">Creating a New <i>Scene</i></h2>
                <p>New to Scene building? Follow along with our video tutorial: <u>Tutorial 2: Building 3D Environments</u></p>
                <div style={{padding: 20}}>
                <b>Step 1: Open the 3D Environment <i>Scene</i></b>
                <p>Navigate to the <strong><i>Project</i></strong> window in the Unity Editor and expand the <strong><i>Assets</i></strong> folder. 
                Double click the <strong><i>_Scenes</i></strong> folder to open it. The contents of the folder will be displayed in a window to the right of the Project window. 
                Double click the <strong><i>3D Environment</i></strong> <i>Scene</i> icon. 
                This will open the <i>Scene</i> in the editor and it will appear in the <strong><i>Scene </i></strong>and <strong><i>Game </i></strong>windows. </p>
                <br />
                <b>Step 2: Duplicate the 3D Environment Scene</b>
                <p>Open the <strong><i>Edit </i></strong>drop-down menu at the top of screen and select <strong><i>Duplicate</i></strong>. You may rename the duplicated <i>Scene</i> to any name you’d like!</p>
                <br />
                <b>Step 3: Add your new Scene to the Project Build</b>
                <p>With your new <i>Scene</i> openned in the Unity Editor, navigate to the <strong><i>File </i></strong>drop-down menu at the top of the screen and select <strong><i>Build Settings</i></strong>. 
                Click the <strong><i>Add Open Scene</i></strong>button. If you've done this correctly the name of your new <i>Scene</i> will appear in the <strong><i>Scenes in Build</i></strong> window with an associated Scene number to the right of it. 
                You're now the proud new owner of a new OpenMaze compatible Scene. Now for the fun stuff - Building 3D Environments!! </p>
                </div>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="creatingScenes">
                
                <h2 id="About" className="font-medium text-3xl">Building 3D Environments</h2>
                <p>First day on the construction site? Follow along with our video tutorial: <u>Tutorial 2: Building 3D Environments</u></p>
                <br />
                <p>As you may have noticed, the 3D Environment Scene is empty. That’s because OpenMaze does not come with any pre-built Scenes! 
                Instead, we've left up to you to create environments that are perfectly suited to your experiment design. You can think of each 3D Environment Scene as a blank canvas, on which you can put your imagination to the test! </p>
                <br />
                <h3 id="About" className="font-medium text-xl">Importing 3D Models</h3>
                <p>To get started, you’ll need to import some 3D Models, perhaps some buildings, or trees, or a maybe a cat for some company *meow!*. 
                There are two methods for importing 3D models into your OpenMaze project:</p> 
                <div style={{padding: 20}}>
                <b>Method 1: The Unity Asset Store</b>
                <p>The Unity Asset Store can be accessed directly within the Unity Editor clicking on the <strong>Asset Store</strong> tab (check beside Scene window tab).  
                <br /><br />
                A quick search will turn up most any 3D model you'd ever need! Once you find something you like, all you need to do is click the Download button on the 3D Model’s store page. Once completed the Download button, then, when prompted, the Import button. 
                <br /><br />
                Once imported the 3D Models will be accessible through their folder in the Project window.
                <br /><br /> 
                <b>Method 2: Importing Third-Party 3D Models</b>
                <br/>You can also add 3D Models created using third-party software. 
                The Unity Editor provides import support for a wide range of <u>3D Model file types</u>. 
                Files can simply be dragged and dropped into the desired folder within the <strong>Project Window</strong></p>
                </div>
                <br />
                <h3 id="About" className="font-medium text-xl">Adding 3D models to your <i>Scene</i></h3>
                <p>Once you have imported your 3D Models, using them to build environments is easy! Find the 3D modle you want to use in the <strong>Project Window</strong>, then simply drag-and-drop it into your <i>Scene</i>. 
                <br /><br />
                Once in the <i>Scene</i>, use the <strong>Transform Tools</strong>found in the top right corner of the Unity Editor window. 
                Each tool allows you to manipulate a 3D Models in a different way, for example, changing its location, rotating it, or adjusting it's scale.
                <br /><br />
                Check out this awesome blog to hone your skills on each of the transform tools.</p>
                <br />
                
                <b>Adding Colliders to Models in Your Scene</b>
                <p>If the 3D model is within the participants movement area, you will want to ensure that it has a rigid body, to prevent the pariticpant from simply walking right through it. To add a collider, follow the steps below:</p>
                
                <div style={{padding: 20}}>
                <b>Step 1: Select the 3D Model</b>
                <p>You can select the model by simply clicking on it within the <strong>Scene Window</strong> or by finding it by name in the <strong>Hierarchy Window</strong> and selecting it. 
                When selected, the object's properties will appear in the <strong>Inspector Window</strong></p>
                <br />
                <b>Step 2: Add Collider Component</b>
                <p>Below the objects properties in the <strong>Inspector Window</strong> click the <strong>Add Component</strong> button. Enter "Collider" into the search field and select the 3D collider that is most appropriate for your object (usually a box collider works best!)  
                </p>
                </div>
              </div>
              
              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="creatingScenes"> 
                <h3 id="About" className="font-medium text-3xl">Using non-OpenMaze <i>Scenes</i></h3>
                <p>You're likely to discover that many of the asset packs that you download from the Unity Store come with prebuilt <i>Scenes</i>. 
                To use a non-OpenMaze <i>Scene</i> all you need to do is copy the OpenMaze <i>Scene</i> objects contained in the OpenMaze 3D Environment <i>Scene</i> and paste them into the <i>Scene</i> you wish to use!
                You can do this by opening the 3D Environment <i>Scene</i> in the Unity Editor and selecting the objects it containes in the <strong>Heirarchy Window</strong>. Right-click to select <i>Copy</i> then open your non-OpenMaze <i>Scene</i> and right-click in it's <strong>Heirarchy Window</strong> 
                and select <i>Paste</i>. Make sure you add the <i>Scene</i> to the build!</p>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="creatingScenes">
                <h2 id="About" className="font-medium text-3xl my-4">Using <i>Scenes</i> to Create Experiments</h2>
                <p>In order to create experiments within your <i>Scenes</i> they <strong>MUST</strong> be added to the Project Build. To add your The <i>Scene</i> to the build, first open it in the Unity Editor. 
                Next, open the <strong>File</strong> drop-down menu and select <strong>Build Settings</strong>. Within the <strong>Build Settings</strong> window that appears, click the <strong>Add Open Scenes</strong> button. 
                In the <strong>Scenes in Build</strong> window you should now see the name of your <i>Scenes</i> with an <i>Scene</i> number to the right of it. This is number you will use to reference the <i>Scene</i> in the Configuration File 
                when designing your experiment.</p>
                <br /><br />
                <div class="bg-yellow-800 rounded-lg border border-white p-2">
                      <p><strong>IMPORTANT:</strong> You may reorganize Scene numbers by dragging Scenes to different positions within the Scenes in Build sub window, however the +Launch Experiment and Loading Scene MUST always occupy Scene numbers 0 and 1 respectively.</p>
                </div>
              </div>

              
              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="introduction">
                <p className="font-medium text-5xl my-4">Configuration Files</p>
                <h2 id="About" className="font-medium text-3xl my-4">Overview</h2>
                <h3 id="About" className="font-medium text-xl">What is a Configuration File?</h3>
                <p>After creating your <i>Scenes, </i>OpenMaze Configuration Files are used to create experiments within them. Configuration Files are written using JavaScript Object Notation (JSON). These files allow you to create custom <i>Experiment Objects</i> that can be used to create interactive task environments for your participants. There are 5 main <i>Experiment Object</i> types that can be created within a Configuration File: <i>Goals, Landmarks, Enclosures, Trials, </i>and <i>Blocks. </i>A new object is created by assigning values to a predefined set of attributes specific to its <i>Object </i>type (i.e. <i>Landmarks</i> are created by defining different attributes than <i>Trials</i>).</p> 
                <br />
                
                <h3 id="About" className="font-medium text-xl">Configuration File Heirarchy</h3>
                <p>Experiments are then created by combining the <i>Experiment Objects</i> you’ve created in a hierarchical structure such that: <i>Goals, Landmarks, </i>and <i>Enclosures </i>are used to define <i>Trial </i>attributes, create tasks within <i>Scenes;</i> <i>Trials </i>are then be sequenced using <i>Blocks</i>; and finally <i>Blocks </i>are ordered to create the experiment.</p>
                <img src={ConfigurationHeirarchy} alt="" className="w-full my-4" />
                <br />
                
                <h3 id="About" className="font-medium text-xl">Configuration File Layout</h3>
                <p>In addition to these 5 main sections, OpenMaze Configuration Files also have a setting section  at the top which provides quick access to important aspects of the experiment, including participant movement speed, and output recording frequency. After the setting section, Configuration files are organized starting from the top of the hierarchy. This format provides quick access to the overall structure of the experiment and allows you to quickly make changes to the overall experiment by changing the execution order of <i>Blocks </i>and/or <i>Trials</i>.</p>
              
                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                  <table className="table-auto">
                    <thead className="border-b">
                      <tr>
                        <th className="p-4">Section</th>
                        <th className="p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2">Settings</td>
                        <td className="px-4 py-2">Contains a set of attributes that allow you to make quick changes to the overall experiment</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">Blocks</td>
                        <td className="px-4 py-2">Collections of Trials that contain attributes to dictate the Trial presentation order</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">Trials</td>
                        <td className="px-4 py-2">Reference Trial Environment Objects to create experimental tasks. Contains attributes that allow you to change Trial  duration, the number of active Goals, etc</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">Goals</td>
                        <td className="px-4 py-2">AContains attributes that allow you to assign 2D Images and 3D Models to Goal objects, allowing you to create interactive navigation tasks</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2">Landmarks</td>
                        <td className=" px-4 py-2">Contains attributes that allow you to assign 2D Images and 3D Models for use as Landmark objects, allowing you to manipulate the Trial Environment features</td>
                      </tr>
                      <tr className="bg-dark-light">
                        <td className=" px-4 py-2">Enclosures</td>
                        <td className="px-4 py-2">Restricts movement to a prescribed area of the 3D Scene. Contains attributes used to create customized Morris-Maze-Like movement arenas that can be placed into <i>Scenes</i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              
              <h3 id="About" className="font-medium text-xl">Configuration File Template</h3>
              <p>OpenMaze provides a Configuration File template that has examples for each type of object that can be created. When creating an experiment we recommend using a copy of this template to create your experiment. This will allow you to simply copy and paste the object examples to create new objects that suit the needs of your experiment. You can find a Configuration File Template in the OpenMaze project folder (OpenMaze/Configuration_Files/Configuration Template) or click here to download.</p>
              </div>
              
              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="introduction">
                <h1 id="settings" className="font-medium text-3xl my-4"><i>Goals</i> and <i>Landmarks</i></h1>
                <p><i>Goal/Landmark</i> are 3D Models or Images that can be placed into <i>Scenes</i> on a <i>Trial-by-Trial</i> basis. <i>Goals</i> are objects that can be interacted with by participants, and are used to create experiment tasks by triggering events. <i>Landmarks</i> on the other hand are objects that can be added or removed to change the characteristics of the environment. Creating a new <i>Goal/Landmark</i> is easy!</p>
                <br />
                <h3 id="About" className="font-medium text-xl">Step 1: Importing Goal/Landmark Materials</h3>
                <p>Both <i>Goals</i> and <i>Landmarks</i> are created from 3D Models or Images and Audio files may also be assigned to <i>Goals</i>. Before defining your <i>Goals/Landmarks</i> in the Configuration File these files must be added to the correct project folders</p>

                <div style={{padding: 20}}>
                <p><b>3D Models</b> folder: OpenMaze/Assets/Resources/3D_Objects</p>
                
                <br />

                <p><b>Image files</b> folder: OpenMaze/Assets/StreamingAssets/2D_Objects</p>
                <br />

                <p><b>Audio files (<i>Goals</i> Only)</b> folder: OpenMaze/Assets/Resources/Sounds</p>
                
                
                </div>
                <div class="bg-yellow-800 rounded-lg border border-white p-2">
                  <p><strong>IMPORTANT:</strong> You must also add a collider object to the Model. You can do this by to it by double-clicking the object in the <strong>Project Window</strong>. Once opened, click <strong>Add Component</strong> button in the <strong>Inspector window</strong>. Search “Collider”, and select the appropriate 3D collider (usually a box collider works best!). Save the object with the collider. <strong>Note:</strong> Goals objects should not be saved directly within your <i>Scenes</i></p>
                </div>
                <br />

                <h3 id="About" className="font-medium text-xl">Step 2: Defining <i>Goals/Landmarks</i> in the Configuration File</h3>
                <p>Once you have added your materials to project, you can use them to create <i>Goals/Landmarks</i> in the Configuration File. Once defined, you can add your <i>Goals/Landmarks</i> to seens <i>Scenes</i> on a Trial-by-Trial basis</p>
                
                <div style={{padding: 20}}>
                  <b>1. Create a New Goal or Landmark Object</b>
                  <p>Both Goals and Landmarks are defined by a similar set of attribute-value pairs contained within a set of curly brackets {}. Each <i>Goal/Landmark</i> definition must be dcontained within the square brackets of the it's correpsonding section. To create a new <i>Goal/Landmark</i>, we recommend copying and pasting a premade <i>Goal/Landmark</i> object from the Configuration File Template and simply customizing the attribute-values to suit your needs. </p>
                  <br />

                  <b>2. Add Index/Description</b>
                  <p>We recommend including a description attribute in your defintions in the form: “Goal #”: “Description” ("Landmark #": "Description"). The "#" corresponds to the objects index number which is automatically assigned based on its order within the section. Namely, the first object, defined at the top of the section, is assigned index = 1, the object below it is assigned index = 2, and so on. Index numbers are used when creating <i>Trials</i> (See <i><b>Task Trials</b></i>). The "Description" can then be replaced with any identifying information. </p>
                  <br />

                  <b>3. Choose a 3D Model or Image</b>
                  <p>To create a <i>Goal/Landmark</i> from a 3D Model set the “Type”  attribute to “3D”; To create a <i>Goal/Landmark</i> from an image file, set the “Type” attribute to: “2D”. Next, set the “Object” attribute to the name of the 3D Model or Image file you wish to use, as it appears in the 3D_Objects or 2D_Objects folder. File names must be contain within quotations and contain the file type tag.</p>
                  <br />

                  <b>4. Placement</b>
                  <p>The  “Position”, “Rotation”, and “Scale” attributes prescribe where the object will be placed in the <i>Scene</i>. Each attribute is defined by x,y,z values that directly correspond to the objects' Transformation properties which can be found in the Inspector window when the object is selected. 
                  <br /><br />
                  When creating a new <i>Goal/Landmark</i>, we recommend placing the object into the <i>Scene</i> at the location you wish it to appear. Then copy the objects Position, Rotation, and Scale values from the  <strong>Inspector window</strong> into the corresponding <i>Goal/Landmark</i> attributes in the Configuration File. Once this is complete, make sure to once again delete the object from the <i>Scene</i>.</p>
                  <br />
                  <p><strong>Note:</strong> 2D Images cannot be placed directly into a Scene, instead you may use a 3D Model as a stand-in to find the correct Position and Scale for your object. Additionally, Image Goals rotate dynamically to ensure that they always face the participant’s viewing angle, and thus do not require the “Rotation” attribute.</p>
                  <br />

                  <b>5. Adding Sounds to Goals</b>
                  <p>You can assign an audio file to a <i>Goal</i> which will play whenever the the participant collects it during a <i>Trial</i>. The "Sound" attribute is assigned the file name of the audio file as it appears in the Sounds project folder</p>
                  <br /><br />

                </div>

                <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="introduction">
                  <h1 id="settings" className="font-medium text-3xl my-4"><i>Enclosures</i></h1>
                  <p>Optionally, OpenMaze provides a simple tool for creating custom Morris-Maze-Like <i>Enclosures</i> that can be added and to <i>Scenes</i> on a <i>Trila-by-Trial</i> basis. Unlike Goals and Landmarks, Enclosures do not require any additional materials and instead are created by simply defining their attributes in the Configuration File. Do so using the following steps: </p>                

                  <div style={{padding: 20}}>
                    <b>1. Create a new Enclosure Object:</b>
                    <p>Each Enclosure is defined by a series of attribute-value pairs contained within a set of curly brackets {}. Each Enclosure must be defined within the square brackets of the “Enclosure” Section of the Configuration File. We recommend copying and pasting an Enclosure from the Configuration File Template and simply customizing the attribute-values to suit your needs. </p>
                    <br />

                    <b>2. Add Index/Description</b>
                    <p>We recommend including a description attribute in your defintions in the form: “Enclosure #”: “Description”. The "#" corresponds to the <i>Enclosure's</i> index number which is automatically assigned based on its order within the section. Namely, the first <i>Enclosure</i>, defined at the top of the section, is assigned index = 1, the <i>Enclosure</i> below it is assigned index = 2, and so on. Index numbers are used when creating <i>Trials</i> (See <i><b>Task Trials</b></i>). The "Description" can then be replaced with any identifying information. </p>
                    <br />

                    <b>3. Size, Shape and Color</b>
                    <p><i>Enclosures</i> are created by connecting walls that are placed tangent to a circular area. Thus, the size of an <i>Enclosure</i> is described by the “Radius” of this circle and the shape is dictated by the number of walls (“Sides”) used to create the <i>Enclosure</i>. 
                    Additionally, the height of the <i>Enclosure's</i> walls and their color can be customized using the "WallHeight" and "WallColor" attributes</p>
                    <br />

                    <b>4. Enclosure Floors</b>
                    <p>Enclosures are created with a simple geometric tile floor design which provides greater depth perception for participants. You can manipulate the size using the “GroundTileSize” attribute (between 0-1), shape  using the “GroundTileSides” attribute (similar to the “Sides” parameter) and the tile color using the “GroundColor” attribute. </p>
                    <br />

                    <b>5. Enclosure Placement</b>
                    <p>When using Enclosures, we recommend building your Scenes, such that the Enclosure can be simply placed at the center [0,0,0]. However you may use the “Position” attribute to dictate placement of the Enclosure within the Scene by prescribing it x,z coordinates. Tip: Enclosures are always placed at ground level (i.e. y = 0). The “Rotation” parameter is the number of degrees the Enclosure should be rotated about the y-axis when placed within the <i>Scene</i>.</p>
                  </div>
                </div>

                <div>
                  <h1 id="settings" className="font-medium text-3xl my-4"><i>Trials</i></h1>
                  <p>There are two types of <i>Trials</i> that can be defined in the <i>Trials</i> section of the Configuration File: <i><b>Task Trials</b></i> which are used to create navigation tasks, and <i><b>Instruction/Cue Screen Trials</b></i> which are used for displaying static, full screen, instructions and cues to participants.</p>
                </div>
                <br/>
                
                
                  <h3 id="About" className="font-medium text-xl"><i>Task Trials</i></h3>
                  <p>Task Trials are used to create unique navigation epochs. Each Task Trial creates a unique Trial Environment and task demand for participants by placing different combinations of Goals/Landmark/Enclosures into a Scene. To create a Task Trial follow the steps below. 
                  <br/><br/></p>
                  <div class="bg-gray-800 rounded-lg border border-white p-2">
                  <p><strong>Note:</strong> Steps 3-4 are completely optional. For instance you may want to create a Task Trial in which the participant simply explores a Scene openly for a set amount of time. In this case there is no need to add Goals/Landmarks or an Enclosure to the <i>Trial</i> definition.</p>
                  </div>
                  <div style={{padding: 20}}>
                    <b>1. Create a New <i>Task Trial</i></b>
                    <p>Each Task Trial object is defined by a series of attribute-value pairs contained within a set of curly brackets. Each Task Trial must be defined within the square brackets of the “Trials” Section of the Configuration File. We recommend copying and pasting a Task Trial definition from the Configuration File Template and simply customizing the attribute-values to suit your needs.</p>
                    <br/>

                    <b>2. Select a Scene</b>
                    <p>Each Task Trial takes place in a single Unity Scene prescribed by the Scene number used to define the “Scene” attribute. If you do not know the number of the Scene you wish to use for the Trial, navigate to the Build Settings within the Unity Editor (File -> Build Settings). The Scene number will appear next to the Scene name in the Scenes In Build subwindow. if the name of the Scene does not appear in this window, simply click the Add Open Scene button located under the Scenes In Build sub window after opening the Scene in the editor.</p> 
                    <br/>
                    <div class="bg-yellow-800 rounded-lg border border-white p-2">
                      <p><strong>IMPORTANT:</strong> You may reorganize Scene numbers by dragging Scenes to different positions within the Scenes in Build sub window, however the +Launch Experiment and Loading Scene MUST always occupy Scene numbers 0 and 1 respectively.</p>
                    </div>
                    <br/>

                    <b>3. Adding Goals</b>
                    <p>A Goal can be added to a Scene by including it’s index number in either the “ActiveGoals", “InvisibleGoals”, or “InactiveGoals” list. <strong>Note:</strong> Each <i>Goal</i> can only appear in one attribute per Task Trial. </p>
                    <div style={{padding: 20}}>
                      <b>Active Goals</b>
                      <p>When a Goal index is added to the “ActiveGoals” list,  it will be placed into the Scene as prescribed by the transform attributes used to define the Goal. The 3D Model or Image will be visible to the participant and the participant will collect the Goal upon colliding with it. Upon collision, the Goal will disappear, the Goal Sound will play, and it will be counted toward the Trial Quota.</p>
                      <br/>
                      <b>Invisible Goals</b>
                      <p>When a Goal index is added to the “InvisibleGoals” list, it will be placed into the Scene as prescribed by the transform attributes used to define the Goal. However, unlike Active Goals the 3D Model or Image will not be visible to the participant. The participant will still collect the Goal upon colliding with it, the Goal Sound will play, and it will be counted toward the Trial Quota.</p>
                      <br/>
                      <b>Inactive Goals</b>
                      <p>When a Goal index is added to the “InactiveGoals” list, it will be placed into the Scene as prescribed by the transform attributes used to define the Goal. Like Active Goals the 3D model or image will be visible to the participant. However, the participant will not be able to collect the Goal. Instead, the participant will simply pass through the Goal, the associate sound will not play and it will not be counted toward the Trial Quota.</p>
                    </div>

                    <b>4. Set a Quota</b>
                    <p>Tasks are created by adding Goals to the Scene and prescribing a Goal quota. Participants collect Goals by simply colliding with them during the Trial; upon collecting the number of Goals specified by the Trial “Quota” attribute, the Trial will terminate.</p>  
                    <br/>
                    <p>If the “Quota” is not reached by the end of the prescribed “TrialTime” (see below) the Trial will terminate. If the value for the “Quota” attribute is not set the Trial will terminate after the first Goal is collected.</p> 
                    <br/>
                    <div class="bg-red-900 rounded-lg border border-white p-4">
                        <p><strong>Tip:</strong> If you wish for the Trial to continue until the Quota is met, set “TrialTime” arbitrarily long. Alternatively if want the Trial to continue until timeout regardless of the number of Goals collected, set the “Quota” a number larger than than the collectable Goals number of collectable Goals</p>
                    </div>
                    <br/>

                    
                    <div class="bg-gray-700 rounded-t-lg border border-white p-4">
                      <p>Examples: Using Goals</p>
                    </div>
                    <div class="rounded-b-lg border border-white p-4">
                      <b>Ex. 1: Forming object-location associations</b>
                      <div style={{padding: 20}}>
                        <p>During the learning phase of an experiment, Goal objects can be added to a Scene as “ActiveGoals”, such that they are visible to the participant. During the test phase, Goals can be added to the Scene using the "InvisibleGoals" such that they are invisible, yet still collectable, allowing their memory for the object locations to be assessed.</p>
                      </div>

                      <b>Ex. 2: Creating waypoints </b>
                      <div style={{padding: 20}}>
                        <p>Using the “InvisibleGoals” attribute, Goals can be placed at the location that the participant is instructed to navigate to, thus terminating the Trial once the destination is reached</p>
                      </div>

                      <b>Ex. 3: Creating Spatial Distributions</b>
                      <div style={{padding: 20}}>
                        <p>Item distributions can be created using a single stimulus object (i.e. 3D Model or 2D Image file) to define multiple Goals, allowing it to be instantiated in different locations within the same Scene during the same Trial, or across multiple Trials. The “InvisibleGoals” attribute may also be used, allowing reward zones to be learned simply from audio feedback cues.</p>
                      </div>

                      <b>Ex. 4: Assessing Decision Making</b>
                      <div style={{padding: 20}}>
                        <p>Multiple Goals may be placed into a Scene to assess, for example, foraging behavior or multi-option decision making.</p>
                      </div>

                      <b>Ex. 5: Creating Lures</b>
                      <div style={{padding: 20}}>
                        <p>Goals assigned to the “InactiveGoals” attribute list can be placed alongside “ActiveGoals” to act as lures.</p>
                      </div>

                    </div>
                    <br/>
                    
                    <b>5. Adding Landmarks</b>
                    <p>Landmarks may also be added to the Scene by including their index in the “LandMarks” attribute-value list. Landmarks included in this list will be placed into the Trial Scene as solid objects, such that participants will not be able to move through them. </p>
                    <br/>


                    <div class="bg-gray-700 rounded-t-lg border border-white p-4">
                      <p>Examples: Using Landmarks</p>
                    </div>
                    <div class="rounded-b-lg border border-white p-4">
                      <b>Ex. 1: Manipulating environment cues</b>
                      <div style={{padding: 20}}>
                        <p>Adding or removing contextual cues during different phases of the experiment.</p>
                      </div>

                      <b>Ex. 2: Creating wayfinding tasks</b>
                      <div style={{padding: 20}}>
                        <p>During the learning Trials, Landmarks can be included to guide the participant, then excluded from Trials to test performance.</p>
                      </div>

                      <b>Ex. 3: Custom Mazes</b>
                      <div style={{padding: 20}}>
                        <p>Custom 3D Model mazes (e.g., t-mazes, radial mazes) can be created in the Unity Editor, or third-party software, and then defined as Landmarks allowing them to be instantiated into any <i>Scene</i> on a <i>Trial-by-Trial</i> basis. </p>
                      </div>

                      <b>Ex. 4: Barricading Section of the Scene</b>
                      <div style={{padding: 20}}>
                        <p>Invisible Cuboides may also be defined as Landmarks and placed into a scene to act as invisible barricades. This allows the participants access to areas of the Scene to change from one <i>Trial</i> to the next. A technique that could be used to, perhaps, teach specific routes through a Scene.</p>
                      </div>
                    </div>

                    <br/>
                    <b>6. Adding Enclosures</b>
                    <p>Enclosures may also be added to the Scene by including the “Enclosures” attribute in a Task Trial definition and  assigning it a single Enclosure index number.</p>
                    <br/>
                    <div class="bg-gray-700 rounded-t-lg border border-white p-4">
                      <p>Examples: Using Enclosures</p>
                    </div>
                    <div class="rounded-b-lg border border-white p-4">
                      <b>Ex. 1: Manipulating local and global environment features</b>
                      <div style={{padding: 20}}>
                        <p>Enclosures allow the features of the movement area to be manipulated while holding Scene and perhaps other environment objects (i.e., Landmarks, Goals) constant, or vice versa.</p>
                      </div>

                      <b>Ex. 2: Parametric morphing</b>
                      <div style={{padding: 20}}>
                        <p>Enclosure customization allows for parametric morphing between two end points (e.g. from a square Enclosure to circular Enclosure); a technique that has proven fruitful when applied to rodents</p>
                      </div>

                      <b>Ex. 3: Participant placement randomization</b>
                      <div style={{padding: 20}}>
                        <p>When an Enclosure is included in the Trial definition, the participant can be placed randomly within the <i>Enclosure</i> at the start of each <i>Trial</i> using the following attribute settings: 
                        <br/>“StartPosition” : []
                        <br/>"StartFacing: -1 attribute may be left empty (i.e “StartPosition”: []) “StartFacing” attributes may be set to 0 and -1 to place the participant at a random location within the Enclosure.</p>
                      </div>

                      <b>Ex. 4: Barricading Section of the Scene</b>
                      <div style={{padding: 20}}>
                        <p>Invisible Cuboides may also be defined as Landmarks and placed into a scene to act as invisible barricades. This allows the participants access to areas of the Scene to change from one <i>Trial</i> to the next. A technique that could be used to, perhaps, teach specific routes through a Scene.</p>
                      </div>
                    </div>
                    <br/>
                    <b>7. Participant Placement</b>
                    <p>Use the “StartPosition” attribute to dictate where participants should be placed in the environment using x and z position values. The “StartFacing” parameter dictates the direction that the participant will face when at the start of the Trial and is defined by the degrees of rotation about the y axis.</p>
                    <br/>
                    <b>8. Trial Termination</b>
                    <p>Task Trials when one of the following events occurs:</p>
                    <div style={{padding: 20}}>
                      <p>(1) Timeout - dictated by the “TrialTime” value (in seconds); 
                      <br/>(2) Pressing the “TrialEndKey” - can be set to any key
                      <br/>(3) Reaching the quota (see Step 4 above).</p></div> 
                  <div/>
                </div>


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