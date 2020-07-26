import Layout from "../components/layout";
import DocumentSection from "../components/documentSection";
import DocsTable from "../components/docsTable";
import ReactPlayer from 'react-player'
import ConfigFile from '../public/ConfigFile.png';
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
                    <a href="#scenesNon" className={subSectionLinkStyle}>Prebuilt Scenes</a>
                    <a href="#scenesUse" className={subSectionLinkStyle}>Scene Numbers</a>
                  </div>
                }<br />

                <button onClick={this.stepThreeOpen} className="">
                <p className={sectionLinkStyle}>
                    Creating Experiments
                </p>
                </button>

                {this.state.step3 &&
                  <div>
                    <a href="#configO" className={subSectionLinkStyle}>Configuration Files</a>
                    <a href="#configG" className={subSectionLinkStyle}>Goals and Landmarks</a>
                    <a href="#configE" className={subSectionLinkStyle}>Enclosures</a>
                    <a href="#configT" className={subSectionLinkStyle}>Task Trials</a>
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
                    <a href="#configT" className={subSectionLinkStyle}>AutoRun Configuration</a>
                    <a href="#configI" className={subSectionLinkStyle}>Exit/URL Buttons</a>
                    <a href="#configB" className={subSectionLinkStyle}>Uploading to Cloud</a>
                    <a href="#configB" className={subSectionLinkStyle}>Downloading/Running</a>
                  </div>
                }<br />

                <button onClick={this.stepEightOpen} className="">
                <p className={sectionLinkStyle}>
                    Developing OpenMaze
                </p>
                </button>

                {this.state.step8 &&
                  <div>
                    <a href="#configT" className={subSectionLinkStyle}>Source Code</a>
                    <a href="#configI" className={subSectionLinkStyle}>Diagnostic Tests</a>
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
                    This manual contains everything you need to know about building experiments in OpenMaze.  </p>
                  <br /><br />

                  <p id="creatingScenes" className="font-medium text-3xl">Video Tutorials</p>
                  <p>If you’re a first-time OpenMaze user, we strongly recommend following along with our Learn OpenMaze video tutorial series. 
                  These tutorials provide a step-by-step, hands-on approach to learning the ins-and-outs of the OpenMaze toolbox.</p>
                  <br />
                  
                  <p class="text-center bg-green-600 rounded-lg justify-center border border-white p-2">
                  <strong><a href="https://openmaze.duncanlab.org/tutorials">Click Here To Watch Our Learn OpenMeaze Video Tutorial Series</a></strong></p> 
                  <br />

                <p id="creatingScenes" className="font-medium text-3xl">Get Involved!</p>
                  <p>It is our hope that OpenMaze will be seen not only as a toolbox, but also as a development platform, and we encourage other experimenters to become involved in the development process. 
                  In this pursuit, we are committed to keeping OpenMaze free and open source. 
                  All future development of the OpenMaze toolbox will be governed through feedback and community collaboration. 
                  With your help, our goal is to identify generalizable experiment design tools that can meet the needs of a larger community of researchers. 
                  If you’ve got a great idea for new functionality, or have added anything to the source code that you think would benefit other researchers, please share it!</p>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="softwareS">
              <h1 className="font-medium text-5xl my-4">Software Setup</h1>
              <h1 className="font-medium text-3xl my-4">Download and Install</h1>
                <p>To get started, you'll need three pieces of software: The OpenMaze Source Code, The Unity Development Engine, and a text editor! Follow the steps:</p>
                
                <p style={{padding: 20}}>
                  <strong>Step 1: Download The OpenMaze Source Code</strong>
                  <p>Click here and select the latest release. Then scroll to the bottom of the page and click <strong>Source Code (zip)</strong>. Unzip the folder and place it somewhere you'll remember!</p>
                  <br />

                  <b>Step 2: Download and Install the Unity Hub</b>
                  <p>Download the Unity Hub here: <u>https://store.unity.com/download?ref=personal</u>. If you don't have one already, you'll need to create a Unity acount. 
                  Don't worry, OpenMaze works with any account type, including the free personal plans!!</p>
                  <br />

                  <b>Step 3: Set up Open Maze in Unity</b>
                  <p>Open the Unity Hub application, sign in, and ensure that you have a license (it's free too!). Once signed in, click the <strong>Add</strong> button in the top right of the <strong>Projects</strong> page. 
                  When prompted select the unzipped OpenMaze folder from <strong>Step 1.</strong>When OpenMaze appears in the Hub, click the small yellow triangle beside <strong>Unity Version</strong>. 
                  This will prompt you to download the correct version of Unity (this takes a while - be patient! or take nap!). 
                  Once installed, navigate back to the <strong>Projects</strong> page. The yellow triangle should be replaced with a Unity Version number.
                  You can now click the OpenMaze project to open it in Unity. You may be asked if you'd like to update Unity click no.</p>
                  <br />

                  <b>Step 4: Text Editor</b>
                  <p> You'll need a text editor for creating and editing OpenMaze Configuration Files. 
                    As you'll learn, these files are formatted in JavaScript Object Notation (JSON) and must be formatted correctly to run. 
                    For this reason, we recommend using a text editor with a JSON lint tool that will alert you if your formatting is incorrect!
                    We recommend using the <a href="https://www.sublimetext.com/"><u><b>Sublime Text Editor</b></u></a></p>            

                </p>
                <br />

                <p class="text-center bg-green-600 rounded-lg justify-center border border-white p-2"><strong>
                  <a href="https://youtu.be/yCcT8mvqCos">
                    Need More Help? Click Here To Watch a Video Tutorial</a></strong></p><br />

                <h1 className="font-medium text-3xl my-4" id="softwareU">The Unity Editor</h1> 
                <p>Throughout this manual we'll be referencing the Unity Editor A LOT! Use this as a quick reference. </p>
                <img src={Unity} alt="" className="w-full my-4" />
              </div>

              

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesAbout">
              <h1 className="font-medium text-5xl my-4">Scenes</h1>
              <h2 className="font-medium text-3xl my-2">What is a Scene?</h2>
                    <p><i>Scenes </i>provide a static setting (e.g. City, or Farm, etc.) within which navigation tasks can be created. 
                    Each <i>Scene</i> begins as a blank canvas in which 3D Models can be placed, manipulated, and arranged using the flexible and intuitive point-and-click/drag-and-drop Unity Editor GUI. 
                    Rather than provide you with premade <i>Scenes</i>, OpenMaze allows you to create <strong><i>any number</i></strong> of your own fully customized <i>Scenes </i>using the Unity Editor’s extensive 
                    <i>Scene</i> building framework, which includes built-in tools as well as access to thousands of additional resources via the integrated Unity Asset Store. </p>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesCreate">
                <h2 className="font-medium text-3xl">Creating a New <i>Scene</i></h2>

                <p style={{padding: 20}}>
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
                    Click the <strong><i>Add Open Scene</i></strong>button. If you've done this correctly the name of your new <i>Scene</i> will appear in the <strong><i>Scenes in Build</i></strong> 
                    window with an associated Scene number to the right of it. You're now the proud new owner of a new OpenMaze compatible Scene. Now for the fun stuff - Building 3D Environments!! </p>
                  </p>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesBuild">
                <h2 className="font-medium text-3xl my-2">Building 3D Environments</h2>
                  <p>As you may have noticed, the 3D Environment Scene is empty. That’s because OpenMaze does not come with any pre-built Scenes! 
                  Instead, we've left up to you to create environments that are perfectly suited to your experiment design. 
                  You can think of each 3D Environment Scene as a blank canvas, on which you can put your imagination to the test!</p>
                  <br />

                  <p className="font-medium text-2xl">Importing 3D Models</p>
                  <p>To get started, you’ll need to import some 3D Models, perhaps some buildings, or trees, or a maybe a cat for some company *meow!*. 
                  There are two methods for importing 3D models into your OpenMaze project:</p> 
                    <p style={{padding: 20}}>
                      <b class="font-medium text-xl">Method 1: The Unity Asset Store</b>
                      <p>The Unity Asset Store can be accessed directly within the Unity Editor clicking on the <strong>Asset Store</strong> tab (check beside Scene window tab).  
                      <br /><br />
                      A quick search will turn up most any 3D model you'd ever need! Once you find something you like, all you need to do is click the Download button on the 3D Model’s store page. Once completed the Download button, then, when prompted, the Import button. 
                      <br /><br />
                      Once imported the 3D Models will be accessible through their folder in the Project window.
                      <br /><br />
                       
                      <b class="font-medium text-xl">Method 2: Importing Third-Party 3D Models</b>
                      <br/>You can also add 3D Models created using third-party software. 
                      The Unity Editor provides import support for a wide range of <u>3D Model file types</u>. 
                      Files can simply be dragged and dropped into the desired folder within the <strong>Project Window</strong></p>
                    </p>

                  <br />

                  <p className="font-medium text-2xl">Adding 3D Models to <i>Scenes</i></p>
                  <p style={{padding: 20}}>
                    <b>Step 1: Open Your Scene</b>
                    <p>Make sure that the <i>Scene</i> you want to place the model in, is Open in the Editor. 
                    To open a Scene find it in the <strong>Project Window</strong> (usually in the _Scenes Folder) 
                    and double-click it to open it.</p><br />

                    <b>Step 2: Drag the 3D Model into the Scene</b>
                    <p>Find the 3D model you want to use in the <strong>Project Window</strong>, then simply drag-and-drop it into the <strong>Scene Window</strong>.</p> <br />
                    
                    <b>Step 3: Place it at the desired location</b>
                    <p>Use the Transformation tools in the top left of the Unity Editor window to change the Size, Shape, and Postition of the object.</p><br /> 

                    <p class="bg-red-600 rounded-lg border border-white p-2">
                    <strong>Tip:</strong> <a href="http://gyanendushekhar.com/2017/08/20/learning-transform-tools-unity-tutorial/">
                      Check out this blog post by Gyanendu Shekhar to hone your skills with the Unity transformation tools</a></p><br />
                  
                  
                    <b>Step 4: Object Colliders</b>
                    <p>Object Colliders ensure that your participant can't just walk straigh through the object. 
                      they can be added by clicking the <strong>Add Component</strong> button in the <strong>Inspector Window</strong>
                      when the object is selected.</p><br />
                  </p>

                  <p class="text-center bg-green-600 rounded-lg justify-center border border-white p-2">
                      <strong><a href="https://youtu.be/JrkyJqnzS4o">Need More Help Creating Scenes? Click Here To Watch Our Video Tutorial</a></strong></p> 
                    
              </div>
              

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesNon"> 
                <h3 className="font-medium text-3xl my-2">Using Prebuilt <i>Scenes</i></h3>
                  <p>You're likely to discover that many of the asset packs that you download from the Unity Store come with prebuilt <i>Scenes</i>. 
                  To use a non-OpenMaze <i>Scene</i> all you need to do is copy the OpenMaze <i>Scene</i> objects contained in the OpenMaze 3D Environment <i>Scene</i> and paste them into the <i>Scene</i> you wish to use!
                  You can do this by opening the 3D Environment <i>Scene</i> in the Unity Editor and selecting the objects it containes in the <strong>Heirarchy Window</strong>. Right-click to select <i>Copy</i> then open your non-OpenMaze <i>Scene</i> and right-click in it's <strong>Heirarchy Window</strong> 
                  and select <i>Paste</i>. Make sure you add the <i>Scene</i> to the build!</p>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="scenesUse">
              <h3 className="font-medium text-3xl my-2"><i>Scene</i> Numbers</h3>
                <p>Scenes are referenced by their Scene number in the configuration file. However, new Scenes are not given a Scene number until they are added to the project build. To add a <i>Scene</i> to the build, first open it in the Unity Editor. 
                Next, open the <strong>File</strong> drop-down menu and select <strong>Build Settings</strong>. Within the <strong>Build Settings</strong> window that appears, click the <strong>Add Open Scenes</strong> button. 
                In the <strong>Scenes in Build</strong> window you should now see the name of your <i>Scenes</i> with an <i>Scene</i> number to the right of it. This is number you will use to reference the <i>Scene</i> in the Configuration File 
                when designing your experiment.</p> 
                <br /><br />

                <p class="bg-yellow-600 rounded-lg border border-white p-3">
                  <strong>IMPORTANT:</strong> You may reorganize or delete Scenes within the <i><b>Scenes in Build</b></i> sub window, however the <b>+Launch Experiment</b> and <b>LoadingSceen</b> MUST always occupy Scene numbers 0 and 1 respectively.
                </p>
              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="configO">
                <h1 className="font-medium text-5xl my-4">Configuration Files</h1>

                <h2 className="font-medium text-3xl my-2">Overview</h2>
                  <p>After Scenes have been created using Unity, the OpenMaze toolbox provides the infrastructure to use them in experiments. 
                    Experimenters can use OpenMaze Configuration files define all the necessary parameters. 
                    Configuration files utilize the JavaScript Object Notation (JSON) file format to store arrays of objects and their attributes in an easily readable text format. 
                    Each Configuration file includes five main experiment object arrays: (1) Blocks; (2) Trials; (3) Goals; (4) Landmarks; and (5) Enclosures. 
                    Additionally, each Configuration File includes a Settings section at the top which includes options for your participants virtual avatar and data output. 
                  </p>

                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                    <div class="bg-gray-700 rounded-t-lg border border-white p-4">
                      <p class="text-center"><b>The 6 Sections of the OpenMaze Configuration File</b></p>
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
              
                <div>
                  <h3 id="configTemplate" className="font-medium text-2xl">Configuration File Template</h3>
                  <p>OpenMaze provides a Configuration File template that has examples for each type of object that can be created. 
                    When creating an experiment we recommend using a copy of this template to create your experiment. 
                    This will allow you to simply copy and paste the object examples to create new objects that suit the needs of your experiment. 
                    You can find a Configuration File Template in the OpenMaze project folder: <strong><i>OpenMaze/Configuration_Files/Configuration_Template</i></strong></p>
                </div><br />
                
                <h3 id="configHeirarchy" className="font-medium text-2xl">Experiment Design Hierarchy</h3>
                  <p>Experiments are designed by creating and combining <i>Experiment Objects</i> in a hierarchical structure such that: 
                  <i>Goals, Landmarks, </i>and <i>Enclosures </i>are used to define <i>Trial </i>attributes, create tasks within <i>Scenes;</i> <i>Trials </i>are then be sequenced using <i>Blocks</i>; 
                  and finally <i>Blocks </i>are ordered to create the experiment.</p>
                  <img src={ConfigFile} alt="" className="w-full my-4" />
                <br />

              </div>

              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="configG">
                <h2 className="font-medium text-5xl my-4">Goals and Landmarks</h2>
                  <p><i>Goal/Landmark</i> are 3D Models or Images that can be placed into <i>Scenes</i> on a <i>Trial-by-Trial</i> basis. <i>Goals</i> are objects that can be interacted with by participants, and are used to create experiment tasks by triggering events. <i>Landmarks</i> on the other hand are objects that can be added or removed to change the characteristics of the environment. Creating a new <i>Goal/Landmark</i> is easy!</p>
                  <br />
                
                  <h3 id="glMaterials" className="font-medium text-3xl">Importing Goal/Landmark Materials</h3>
                  <p>Both <i>Goals</i> and <i>Landmarks</i> are created from 3D Models or Images and Audio files may also be assigned to <i>Goals</i>. Before defining your <i>Goals/Landmarks</i> in the Configuration File these files must be added to the correct project folders</p>

                    <p style={{padding: 20}}>
                    <b>3D Models</b> folder: OpenMaze/Assets/Resources/3D_Objects

                    <br /><b>Image files</b> folder: OpenMaze/Assets/StreamingAssets/2D_Objects

                    <br /><b>Audio files (<i>Goals</i> Only)</b> folder: OpenMaze/Assets/Resources/Sounds/p></p>

                    <p class="bg-yellow-600 rounded-lg border border-white p-2"><strong>IMPORTANT:</strong> You must add a collider object to 3D Models. 
                    with the model open in the Unity Editor, click <strong>Add Component</strong> button in the <strong>Inspector window</strong>. 
                    and select the appropriate 3D collider (usually a box collider works best!). </p>

                  <br />

                <h3 id="glCreate" className="font-medium text-3xl">Creating <i>Goals</i> and <i>Landmarks</i></h3>
                  <p>Once you have added your materials to project, you can use them to create <i>Goals/Landmarks</i> in the Configuration File. </p> 
                
                <div style={{padding: 20}}>
                  <b>Step 1. Create a New Goal or Landmark Object</b>
                  <p>Both Goals and Landmarks are defined by a similar set of attribute-value pairs contained within a set of curly brackets {}. 
                    Each <i>Goal/Landmark</i> definition must be dcontained within the square brackets of the it's correpsonding section. 
                    To create a new <i>Goal/Landmark</i>, we recommend copying and pasting a premade <i>Goal/Landmark</i> object from the 
                    Configuration File Template and simply customizing the attribute-values to suit your needs. </p><br />

                  <b>Step 2. Add Index/Description</b>
                  <p>We recommend including a description attribute in your defintions in the form: “Goal #”: “Description” ("Landmark #": "Description"). 
                    The "#" corresponds to the objects index number which is automatically assigned based on its order within the section. 
                    Namely, the first object, defined at the top of the section, is assigned index = 1, the object below it is assigned index = 2, and so on. 
                    Index numbers are used when creating <i>Trials</i> (See <i><b>Task Trials</b></i>). The "Description" can then be replaced with any identifying information. </p><br />

                  <b>Step 3. Choose a 3D Model or Image</b>
                  <p>To create a <i>Goal/Landmark</i> from a 3D Model set the “Type”  attribute to “3D”; To create a <i>Goal/Landmark</i> from an image file, set the “Type” attribute to: “2D”. 
                  Next, set the “Object” attribute to the name of the 3D Model or Image file you wish to use, as it appears in the 3D_Objects or 2D_Objects folder. 
                  File names must be contain within quotations and contain the file type tag.</p><br />

                  <b>Step 4. Transform Attributes</b>
                  <p>The  “Position”, “Rotation”, and “Scale” attributes (aka the "Transform Attributes") prescribe where the object will be placed in the <i>Scene</i>. 
                  Each attribute is defined by x,y,z values that directly correspond to the objects' Transformation properties which can 
                  be found in the Inspector window when the object is selected.</p><br />

                  <p class="bg-gray-800 rounded-lg border border-white p-2">
                  <strong>Note:</strong> Image Goals rotate dynamically to ensure that they always face the participant’s viewing angle, and thus do not require the “Rotation” attribute.</p><br />

                  <b>Step 5. Adding Sounds to Goals</b>
                  <p>You can assign an audio file to a <i>Goal</i> which will play whenever the the participant collects it during a <i>Trial</i>. The "Sound" attribute is assigned the file name of the audio file as it appears in the Sounds project folder</p>
                  <br />

                  <div class="bg-red-600 rounded-lg border border-white p-2">
                  <p><strong>Tip:</strong> Place your Goal/Landmark object into the Scene at the location you want it to appear. 
                  You can then copy the Position, Rotation, and Scale values from the <strong>Inspector window</strong> before once again deleting the Object from the Scene. 
                  Images cannot be placed directly into a Scene. Instead, use a 3D Model as a stand-in!</p>
                  </div><br />
                

                  <div class="bg-green-600 rounded-lg justify-center border border-white p-2">
                  <p class="text-center"><strong><a href="https://youtu.be/20UysrQwdgU">Need More Help? Follow Along With This Tutorial Video</a></strong></p> 
                  </div><br />
                </div>

                <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="gExamples">
                  <h3 className="font-medium text-3xl">Goals Configuration File Example</h3>
                  <img src={Goals} alt="" className="w-full my-4" />

                  <h3 id="About" className="font-medium text-3xl">Landmarks Configuration File Example</h3>
                  <img src={Landmarks} alt="" className="w-full my-4" />
                </div>

                <h3 id="About" className="font-medium text-3xl">Goals/Landmarks Attributes and Values</h3>
                    <p>Need help remembering what every Attribute does, or it's value format? Don't worry, we've got you covered!</p>
                <br/>
                 
              <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="gExamples">
                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                <div class="bg-tutorial-red rounded-t-lg border border-white p-4">
                      <p class="text-center"><b>Goals/Landmarks Attribute-Values Cheat Sheet</b></p>
                    </div>
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
                        <td className=" px-4 py-2">“Goal  #” / ”Landmark #” where # can be replaced with the Goal/Landmark index</td>
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
                        <td className=" px-4 py-2">“3D_Model”“Image.png”</td>
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
                  <div class="bg-tutorial-blue border border-white p-4">
                      <p class="text-center"><b>Goals Only</b></p>
                    </div>
                  <table className="table-auto">
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2">Sound</td>
                        <td className=" px-4 py-2">“sound”</td>
                        <td className=" px-4 py-2">The name of the sound file in the Sounds folder (Assets->Resources->Sounds). Upon collision with the Goal the sound file will play. Sound files contained in subfolders within the Sounds folder can be used by including the directory extension (e.g. “subfoldername/sound”). </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
               </div>

                <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-16" id="configE">
                  <h2 className="font-medium text-5xl my-4"><i>Enclosures</i></h2>
                  <p>Optionally, OpenMaze provides a simple tool for creating custom Morris-Maze-Like <i>Enclosures</i> that can be added and to <i>Scenes</i> on a <i>Trila-by-Trial</i> basis. Unlike Goals and Landmarks, Enclosures do not require any additional materials and instead are created by simply defining their attributes in the Configuration File. Do so using the following steps: </p>                
                  <br />
                  <h3 id="About" className="font-medium text-3xl">Creating an <i>Enclosure</i></h3>

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
                  
                  <p class="bg-green-600 text-center rounded-lg justify-center border border-white p-2">
                  <strong><a href="https://youtu.be/DTH-Bc1m_wc">Click Here Follow Along With Our Enclosures Tutorial Video</a></strong></p> <br />
                
                

                <h3 id="About" className="font-medium text-3xl">Enclosures Configuration File Example</h3>
                  <img src={Enclosures} alt="" className="w-full my-4" />

                <h3 id="About" className="font-medium text-3xl">Enclosures Attributes and Values</h3>
                    <p>Need help remembering what every Attribute does, or it's value format? Don't worry, we've got you covered!</p>
                <br/>

                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                <div class="bg-tutorial-cyan rounded-t-lg border border-white p-4">
                      <p class="text-center font-medium text-3xl">Enclosures Attribute-Values Cheat Sheet</p>
                    </div>
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

                  <h1 id="configT" className="font-medium text-5xl my-4"><i>Task Trials</i></h1>

                  <p>Task Trials are used to create unique navigation epochs. Each Task Trial creates a unique Trial Environment and task demand for participants 
                    by placing different combinations of Goals/Landmark/Enclosures into a Scene. To create a Task Trial follow the steps below. 
                  <br/><br/></p>
                  
                  <h3 id="About" className="font-medium text-3xl"><i>Trial</i> Indexing</h3>
                  <p>Both Task Trials and Instruction/Cue Screen Trials are defined within the Trials section of the configuration file. 
                    Each Trial, regardless of its type (i.e. Task or Instruction/Cue) is implicitly assigned an index number based on the order that it is defined within the Trials section. 
                    The Trial defined at the top is assigned the index 1, the one below it is assigned index = 2, and so on. <i>Trial</i> indicies are used to create <i>Blocks</i>.</p><br/>
               

                  <h3 id="About" className="font-medium text-3xl">Creating a <i>Task Trial</i></h3>
                  

                  <div style={{padding: 20}}>
                    <b>Step 1. Create a New <i>Task Trial</i></b>
                    <p>Each Task Trial object is defined by a series of attribute-value pairs contained within a set of curly brackets. 
                      Each Task Trial must be defined within the square brackets of the “Trials” Section of the Configuration File. 
                      We recommend copying and pasting a Task Trial definition from the Configuration File Template and simply customizing the attribute-values to suit your needs.</p>
                    <br/>

                    <b>Step 2. Add Index/Description</b>
                    <p>Fill out the Description attribute-value pair with the the Trials index number (see Trial Indexing above) and a description of your Trial.</p>
                    <br />

                    <b>Step 3. Select a Scene</b>
                    <p>Each Task Trial takes place in a single Unity Scene prescribed by the Scene number used to define the “Scene” attribute. 
                      If you do not know the number of the Scene you wish to use for the Trial, navigate to the Build Settings within the Unity Editor (File -> Build Settings). 
                      The Scene number will appear next to the Scene name in the Scenes In Build subwindow. if the name of the Scene does not appear in this window, 
                      simply click the Add Open Scene button located under the Scenes In Build sub window after opening the Scene in the editor.</p> 
                    <br/>

                    <div class="bg-yellow-600 rounded-lg border border-white p-3">
                      <p><strong>IMPORTANT:</strong> You may reorganize Scene numbers by dragging Scenes to different positions within the Scenes in Build sub window, 
                      however the +Launch Experiment and Loading Scene MUST always occupy Scene numbers 0 and 1 respectively.</p>
                    </div>
                    <br/>

                    <b>Step 4. Participant Placement</b>
                    <p>Use the “StartPosition” attribute to dictate where participants should be placed in within the <i>Scene</i> using x and z position values. 
                    The “StartFacing” parameter dictates the direction that the participant will face when at the start of the Trial and is defined by the degrees of rotation about the y axis.</p><br/>
                    <br/>

                    <b>Step 5. Trial Termination</b>
                    <p>The "TrialTime" dictates the duration of the Trial (in seconds). The "TrialEndKey" can be assigned any key, that when pressed will terminate the Trial. 
                      Trials will also terminate if the participant collects a number of Goals equal to the "Quota" value. (see Step 7 below)</p><br/>

                    <p class="bg-gray-700 rounded-lg border border-white p-4">
                    <strong>Note:</strong> The remaining steps are all optional, it is not necessary to add any Goals, Landmarks or an Enclosure to a Task Trial for it function. </p><br/>
                    
                    <div class="bg-green-600 rounded-lg justify-center border border-white p-2">
                      <p class="text-center"><strong><a href="https://youtu.be/CnlVgKkj3C4">Click Here To Watch A Video On Task Trial Basics!</a></strong></p>  
                    </div>
                    <br/>
                    <b>Step 6. Adding Goals</b>
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

                    <b>Step 7. Set a Quota</b>
                    <p>Tasks are created by adding Goals to the Scene and prescribing a Goal quota. Participants collect Goals by simply colliding with them during the Trial; upon collecting the number of Goals specified by the Trial “Quota” attribute, the Trial will terminate.</p>  
                    <br/>
                    <p>If the “Quota” is not reached by the end of the prescribed “TrialTime” (see below) the Trial will terminate. If the value for the “Quota” attribute is not set the Trial will terminate after the first Goal is collected.</p> 
                    <br/>
                    <div class="bg-red-600 rounded-lg border border-white p-4">
                        <p><strong>Tip:</strong> If you wish for the Trial to continue until the Quota is met, set “TrialTime” arbitrarily long. Alternatively if want the Trial to continue until timeout regardless of the number of Goals collected, set the “Quota” a number larger than than the collectable Goals number of collectable Goals</p>
                    </div>
                    <br/>

                    <b>Step 8. Adding Landmarks</b>
                    <p>Landmarks may also be added to the Scene by including their index in the “LandMarks” attribute-value list. Landmarks included in this list will be placed into the Trial Scene as solid objects, such that participants will not be able to move through them. </p>
                    <br/>

                    <b>Step 9. Adding Enclosures</b>
                    <p>An Enclosure may also be added to the Scene by including the “Enclosures” attribute in a Task Trial definition and assigning it a single Enclosure index number.</p><br/>

                    <b>Step 10. Adding Heads Up Display (HUD) Information</b>
                    <p>HUD options allow you to display text and images to your participant as they navigate through the environment. Any HUD information will be displayed for the entire duration of the Trial it is added to. 
                      There are Several HUD options that allow text, images and performance metrics to be displayed to the participant (see Attribute-Vaule Cheat Sheet Below)
                      </p><br/>

                      <div class="bg-green-600 rounded-lg justify-center border border-white p-2">
                      <p class="text-center"><strong><a href="https://youtu.be/sSOWmIR7dWA">Need More Help Creating Task Trials? Watch This Video!</a></strong></p>  
                    </div>
                    </div>


                    <h3 id="About" className="font-medium text-3xl">Experiment Design Ideas</h3>
                    <p>Task Trials can accomodate a HUGE variety of experiment designs! Below we review just some of the designes that we've thought of. Can you think of others?</p>
                    <br/>

                    <div class="rounded-t-lg bg-tutorial-blue border border-white p-4">
                      <p class="text-center"><b>Using Goals</b></p>
                    </div>
                    <div class="border border-white p-4">
                      <b>Forming object-location associations</b>
                      <div style={{padding: 20}}>
                        <p>During the learning phase of an experiment, Goal objects can be added to a Scene as “ActiveGoals”, such that they are visible to the participant. During the test phase, Goals can be added to the Scene using the "InvisibleGoals" such that they are invisible, yet still collectable, allowing their memory for the object locations to be assessed.</p>
                      </div>

                      <b>Creating waypoints </b>
                      <div style={{padding: 20}}>
                        <p>Using the “InvisibleGoals” attribute, Goals can be placed at the location that the participant is instructed to navigate to, thus terminating the Trial once the destination is reached</p>
                      </div>

                      <b>Creating Spatial Distributions</b>
                      <div style={{padding: 20}}>
                        <p>Item distributions can be created using a single stimulus object (i.e. 3D Model or 2D Image file) to define multiple Goals, allowing it to be instantiated in different locations within the same Scene during the same Trial, or across multiple Trials. The “InvisibleGoals” attribute may also be used, allowing reward zones to be learned simply from audio feedback cues.</p>
                      </div>

                      <b>Assessing Decision Making</b>
                      <div style={{padding: 20}}>
                        <p>Multiple Goals may be placed into a Scene to assess, for example, foraging behavior or multi-option decision making.</p>
                      </div>

                      <b>Creating Lures</b>
                      <div style={{padding: 20}}>
                        <p>Goals assigned to the “InactiveGoals” attribute list can be placed alongside “ActiveGoals” to act as lures.</p>
                      </div>
                    </div>

                    <div class="bg-tutorial-red border border-white p-4">
                      <p class="text-center"><b>Using Landmarks</b></p>
                    </div>
                    <div class=" border border-white p-4">

                      <b>Manipulating environment cues</b>
                      <div style={{padding: 20}}>
                        <p>Adding or removing contextual cues during different phases of the experiment.</p>
                      </div>

                      <b>Creating wayfinding tasks</b>
                      <div style={{padding: 20}}>
                        <p>During the learning Trials, Landmarks can be included to guide the participant, then excluded from Trials to test performance.</p>
                      </div>

                      <b>Custom Mazes</b>
                      <div style={{padding: 20}}>
                        <p>Custom 3D Model mazes (e.g., t-mazes, radial mazes) can be created in the Unity Editor, or third-party software, and then defined as Landmarks allowing them to be instantiated into any <i>Scene</i> on a <i>Trial-by-Trial</i> basis. </p>
                      </div>

                      <b>Barricading Section of the Scene</b>
                      <div style={{padding: 20}}>
                        <p>Invisible Cuboides may also be defined as Landmarks and placed into a scene to act as invisible barricades. This allows the participants access to areas of the Scene to change from one <i>Trial</i> to the next. A technique that could be used to, perhaps, teach specific routes through a Scene.</p>
                      </div>
                    </div>

                    <div class="bg-tutorial-cyan border border-white p-4">
                      <p class="text-center"><b>Using Enclosures</b></p>
                    </div>
                    <div class="rounded-b-lg border border-white p-4">
                      <b>Manipulating local and global environment features</b>
                      <div style={{padding: 20}}>
                        <p>Enclosures allow the features of the movement area to be manipulated while holding Scene and perhaps other environment objects (i.e., Landmarks, Goals) constant, or vice versa.</p>
                      </div>

                      <b>Parametric morphing</b>
                      <div style={{padding: 20}}>
                        <p>Enclosure customization allows for parametric morphing between two end points (e.g. from a square Enclosure to circular Enclosure); a technique that has proven fruitful when applied to rodents</p>
                      </div>

                      <b>Participant placement randomization</b>
                      <div style={{padding: 20}}>
                        <p>When an Enclosure is included in the Trial definition, the participant can be placed randomly within the <i>Enclosure</i> at the start of each <i>Trial</i> using the following attribute settings: 
                        <br/>“StartPosition” : []
                        <br/>"StartFacing: -1 attribute may be left empty (i.e “StartPosition”: []) “StartFacing” attributes may be set to 0 and -1 to place the participant at a random location within the Enclosure.</p>
                      </div>

                      <b>Barricading Section of the Scene</b>
                      <div style={{padding: 20}}>
                        <p>Invisible Cuboides may also be defined as Landmarks and placed into a scene to act as invisible barricades. This allows the participants access to areas of the Scene to change from one <i>Trial</i> to the next. A technique that could be used to, perhaps, teach specific routes through a Scene.</p>
                      </div>
                    </div>
                    <br/>
                    <div style={{padding: 20}}>
                  <div/>
                </div>

                <h3 id="About" className="font-medium text-3xl">Task Trial Example</h3>
                  <img  src={TaskTrial} alt="" className="w-full my-4" />

                <h3 id="About" className="font-medium text-3xl">Task Trial Attributes and Values</h3>
                    <p>Need help remembering what every Attribute does, or it's value format? Don't worry, we've got you covered!</p>
                    <br/>

                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                  <div class="bg-tutorial-brown border border-white p-4">
                      <p class="text-center"><b>Task Trial Attribute-Values Cheat Sheet</b></p>
                    </div>
                  <table className="table-auto">
                    <thead className="border-b">
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


                <h1 id="configI" className="font-medium text-5xl my-4"><i>Instruction/Cue Screen Trials</i></h1>
                <p>Image files can be used to create Instruction/Cue Screens Trials, allowing them to be presented to the participant.</p>
                  <br/>
                  <h3 id="About" className="font-medium text-3xl">Importing Images for <i>Insturction/Cue Screen Trials</i></h3>
                <div style={{padding: 20}}>
                  <p>Images you wish to use for Instructions/Cue Screens must be placed into the 2D_Objects folder: OpenMaze/Assets/StreamingAssets/2D_Objects</p>
                  <br/>
                  <div class="bg-red-600 rounded-lg border border-white p-4">
                    <p><strong>Tip:</strong> Create your instruction and cues screens using a presentation software program (e.g. Powerpoint, KeyNote). You can then exporting your slides as individual image files.</p>
                  </div>
                </div>
                
                <h3 id="About" className="font-medium text-3xl">Creating <i>Insturction/Cue Screen Trials</i></h3>

                <div style={{padding: 20}}>
                <b>Step 1. Create a new Instruction/Cue Screen Trial Object</b>
                <p>Each Instruction/Cue Screen Trial object is defined by a series of attribute-value pairs contained within a set of curly brackets {}. Each Instruction/Cue Screen Trial Object must be defined within the square brackets of the “Trials” Section of the Configuration File. We recommend copying and pasting a Instruction/Cue Screen Trial from the Configuration File Template and simply customizing the attribute-values to suit your needs.</p>
                <br/>

                <b>Step 2. Choose an Image File</b>
                <p>Modify the “FileLocation” attribute-value by typing in the folder name your image is located in, followed by a forward slash, followed by the name of the 2D Image file you wish to assign. File extensions (e.g. .png, .jpg, etc.) must be attached to the file name when defining 2D Images.</p>
                <br/>

                <b>Step 3. Define the Presentation Time</b>
                <p>Set the duration the Instruction/Cue screen will be displayed for by changing the value of the  “TrialTime” attribute to the desired length of time in seconds. </p>
                <br/>

                <b>Step 4. Assign a Termination Key</b>
                <p>Optionally, you may also assign a specific key to end the Instruction/Cue Trial when pressed by modifying the value of “TrialEndKey” attribute to the desired key.</p>
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

                <h3 id="About" className="font-medium text-3xl">Instruction/Cue Trial Attributes and Values</h3>
                    <p>Need help remembering what every Attribute does, or it's Value format? Don't worry, we've got you covered!</p>
                    <br/>

                  <div className="border border-white rounded-lg my-8 overflow-x-auto">
                  <div class="bg-tutorial-brown rounded-t-lg border border-white p-4">
                      <p class="text-center"><b>Instruction/Cue Screen Trials Attribute-Values</b></p>
                    </div>
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
                      <tr>
                        <td className=" px-4 py-2">“EndButton”</td>
                        <td className=" px-4 py-2">“Space”</td>
                        <td className=" px-4 py-2"><a href="https://docs.unity3d.com/ScriptReference/KeyCode.html" target="_blank" className="underline">true/false</a>. Adds a button labled "End Experiment" to the screen. When pressed the experiment applicaiton will close. Only works when running a Built Application.</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  
                <h1 id="configB" className="font-medium text-5xl my-4">Blocks</h1>
                <p>Blocks perscribe the sequence that Trials will be presented in. Blocks allow Trials to be presented in a serial order or randomized. You may also add functions to Blocks to create performance criterion for your participants.</p> 
                <br/>
                <div class="bg-red-600 rounded-lg border border-white p-4">
                    <p><strong>Tip:</strong> Use Blocks to divide your experiment into analysis chucks. You can then use the BlockIndex column in the output file to segment the data during analysis!</p>
                </div>
                <br/>
                <h3 id="About" className="font-medium text-3xl">Creating a New Block</h3>
                <p>Like all other Experiment Object types, each Block is created by defining a list of attribute-value pairs contained within a set of curly brackets {} within the “Blocks” section of the Configuration File. 
                <br/><br/>You'll find examples of each type of Block described below in the Configuration Template file. We recommend simply copying the Block type you require and customizing it to suit your needs. We recommend adding a "Block #": "Description" attribute-value pair to every Block.</p>
                <br/>

                <h3 id="About" className="font-medium text-3xl">Presenting Trials in Serial Order</h3>
                <p>A Block, in it's most basic form, only requires the "TrialOrder" attribute. The "TrialOrder" attribute is defined by an ordered list of Trial indicies. When the Block is executed it will display each Trial contained in this list in the order that it appears in the list. Upon termination of the last Trial the Block will also terminate, and the next Block in the BlockOrder will begin</p>
                <br/>

                <h3 id="About" className="font-medium text-3xl">Presenting Trials in Random Orders</h3>
                <br/><b>The RandomlySelect Attribute</b>
                <div style={{padding: 20}}>
                <p>To present Trials in random orders, you must add the "RandomlySelect" attribute to the Block object.
                <br/><br/> The "RandomlySelect" attribute is defined by a list of "Orders" and each "Order" is defined by an ordered list of Trials (just like the "TrialOrder" attrribute!)  
                <br/><br/>When the "RandomlySelect" attribute is added to a Block, the <i>Special Trial Index</i> <b>0</b> (zero) can be used in the "TrialOrder". 
                <br/><br/>When the Block executes the Trial index 0, the Block will randomly select an "Order" from "RandomlySelect". 
                <br/><br/>The Block will execute each of the Trials contained within the selected "Order", in their defined sequence. 
                <br/><br/>Upon the termination of the last Trial contained in the selected "Order" the Block will return to the "TrialOrder" and execute the next Trial" . </p> 
                </div>
                <b>The Replacement Attribute</b>
                <div style={{padding: 20}}>
                By default, after an "Order" is executed it is replaced and can be called at random next time a 0 in the "TrialOrder" is encountered. To remove each "Order", after it has been selected, add the "Replacement" attribute and set it to 0. 
                <br/><br/><div class="bg-yellow-600 rounded-lg border border-white p-4">
                    <p><strong>IMPORTANT:</strong> When "Replacement" is set to 0, the number of 0s added to the "TrialOrder" cannot exceed the number of "Orders" defined in the "RandomlySelect" attribute.</p>
                </div>
                </div>
                
                <div class="bg-green-600 rounded-lg justify-center border border-white p-2">
                      <p class="text-center"><strong><a href="https://youtu.be/Nqj0VUgi4gE">Watch Our Video Tutorial About Serial and Random Trial Order</a></strong></p>  
                </div>
                <br/>

                <h3 id="About" className="font-medium text-3xl">Adding Task Criterion</h3>
                <p>Performance metrics can be checked either at the end of each <i>Trial</i> or each <i>Block</i>. This allows Blocks to be terminate upon reaching a criterion, or repeated if the criterion is not reached by the end of the Block.</p>
                <br/><b>Trial Performance Checks</b>
                <p>To monitor a participants performance from one Trial to the next, you can add the "TrialFunction" and "TrialGoal" attributes to any Block definition</p>
                <p>When added, OpenMaze will run the function with the name used to define the "TrialFunction" attribute, using the criteria value(s) defined by the "TrialGoal".</p>
                <br/>
                <h3 id="About" className="font-medium text-3xl">Block Order</h3>
                <p>Once the experiment Blocks have been created, their order of execution is defined by the “BlockOrder” attribute which is defined by an ordered list of Block indices. Like the other sections in the Configuration File, each Block is implicitly assigned an index number based on the order that it is defined within the Blocks section, with the Block defined at the top of the section being assigned the index 1. Once a Block has been defined, it’s index number can be added to the Block Order. Blocks can be executed multiple times and in any order.</p>
                <br/>
                
                  <h3 id="About" className="font-medium text-3xl">Block Section Example</h3>
                  <img  src={Blocks} alt="" className="w-full my-4" />

                  <h3 id="About" className="font-medium text-3xl">Blocks Attributes and Values</h3>
                    <p>Need help remembering what every Attribute does, or it's Value format? Don't worry, we've got you covered!</p>
                    <br/>
                
                <div className="border text-white border-white rounded-lg my-8 overflow-x-auto">
                <div class="bg-yellow-600 rounded-t-lg border border-white p-4">
                      <p class="text-center"><b>Block Attribute-Value Cheat Sheet</b></p>
                    </div>
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


                <h1 id="configS" className="font-medium text-5xl my-4">Settings</h1>
                <p>The setting section provides a small number of attributes which can be used to change data recording frequency, ignore input from the user upon Trial onset, turn on/off timing analysis features, or manipulate characteristics of how participants view and move within the Scene.</p>


                <div className="border border-white rounded-lg my-8 overflow-x-auto">
                <div class="bg-gray-700 rounded-t-lg border border-white p-4">
                      <p class = "text-center"><strong>Settings Attribute-Value Cheat Sheet</strong></p>
                </div>
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

                <h1 id="testC" className="font-medium text-5xl my-4">Running Configuraiton Files</h1>
                <h1 id="testC" className="font-medium text-3xl my-4">Method 1: Manually Select</h1>
                <p>By defualt, OpenMaze will prompt you with a file browser each time the experiment is launched. This is true regardless of whether the experiment is launched in Unity or as an experiment application. 
                  Simply navigate to folder where your configuration file is saved, select it and click open. You will always be prompted with the Configuration_Files folder contained within the OpenMaze project folder.</p><br />

                  <div class="bg-red-700 rounded-lg border border-white p-4">
                    <p><strong>Tip:</strong> The ability to use different configuration files each time the experiment is launched provides important functionality including </p>
                    </div><br />

                <h1 id="testC" className="font-medium text-3xl my-4">Method 2: Auto Run</h1>
                <p>You can have OpenMaze execute a specific Configuration File by moving the "AutoRun_Config" folder from the "Configuration_Files" folder to the "StreamingAssets" folder. The place holder Configuration File
                  contained in the "AutoRun_Config" folder can be used to test to make sure you have moved the folder to the proper location, before being replaced with a Configuration File of your choosing. Removing the <b>AutoRun_Config</b> 
                  folder from the <b>StreamingAssets</b> folder, OR removing all configs from the <b>AutoRun_Config</b> folder will allow you to manually select Configuration Files once agian.</p><br />

                  <div class="bg-yellow-700 rounded-lg border border-white p-4">
                    <p><strong>IMPORTANT:</strong> After moving the "AutoRun_Config" folder to the "StreamingAssets" folder it cannot be renamed and it must only contained 1 Configuration File for it to function properly.</p>
                    </div><br />
                
                <h1 id="testC" className="font-medium text-3xl my-4">Creating Multiple Configuration Files</h1>
                <p>The ability to run different Configuration Files each time the experiment is launched provides tremendous flexibility when creating experiments. Some examples include: Creating Multi-Session Studies,
                  Counterbalancing across participants, Creating multiple experiment conditions (or even experiments!) contained within the same Scenes. 
                </p>

                <h1 id="testU" className="font-medium text-5xl my-4">Testing Experiments In Unity</h1>
                
                <p>Experiments can be launched directly within the Unity editor, allowing you to make sure everything is running properly before you export it as an application. To Simply follow the steps below:</p>
                
                <div style={{padding: 20}}>
                    <b>Step 1. Validate your JSON file</b>
                    <p>We recommend adding a JSON linter to your text editor which will allow you to verify whether your Configuration File is a valid JSON file 
                      via a menu option or a hot-key combination. You can also copy your entire Configuration File and paste it into an online linter like https://jsonlint.com/.</p>
                    <br/>

                    <b>Step 2. Save Your Changes</b>
                    <p>This sounds silly, but while testing your experiment you're likely to yourself making small changes to the configuration file before 
                      returning quickly to the Unity Editor to test them. CTRL+S is your friend!</p>
                    <br />

                    <b>Step 3. Open the +LaunchExperiment Scene in the Unity Editor</b>
                    <p>The experiment will not run if you have any other Scene open in the Unity Editor. </p>
                    <br />

                    <b>Step 4. Press the Play Button!</b>
                    <p>Pressing the play button while the +Launch Experiment Scene is select will launch the experiiment in the editor.  </p>
                    <br />

                    <b>Step 5. Select Your Configuration File</b>
                    <p>Upon launching the experiment, you will be prompted with a file explorer window. Select a Configuration File of your choosing and press the Open button.</p>
                    <br />

                    <div class="bg-gray-700 rounded-lg border border-white p-4">
                    <p><strong>Note:</strong> If you are using the Auto Run Configuration File method described above, the Auto Run Configuration File will be automatically executed.</p>
                    </div><br />

                    <b>Step 6. Start the Experiment</b>
                    <p>Navigate to the Game window, and press the Start Experiment button. The experiment Configuration File will now be executed in the Game window and you may complete the experiment exactly as 
                      a participant would.  </p>
                    <br />

                    <div class="bg-red-700 rounded-lg border border-white p-4">
                    <p><strong>Tip:</strong> Click the "Maximize on Play" button in the top right of the Game window to experience the experiment in full screen.</p>
                    </div><br />

                    <b>Step 7. End Testing</b>
                    <p>Stop the experiment at any time by pressing the Play button once again!  </p>
                    <br />
                  </div>

                  <h1 id="configS" className="font-medium text-3xl my-4">Making Realtime Changes</h1>
                  <p>While an experiment Configuration File is being executed in the Game window, realtime changes to the current Trial environment can be made within the Unity Scene window, 
                    allowing the changes to be witnessed from the participant perspective in the Game window in real time. 
                    This can prove extremely helpful when trying to make minor tweeks to the environment. You can also Pause the experiment at any time, allowing you to make Changes
                    without having to worry about the Trial timing out.</p><br /> 

                  <h1 id="configS" className="font-medium text-3xl my-4">Testing a Trial or Block</h1>
                  <p>If you wish to just run a specific Block you can temporarily add its index to the front of the “BlockOrder” attribute in the Configuration File. Similarly, if you wish to test a specific Trial you can 
                  temporarily add its index to the front of the “TrialOrder” attribute of the first Block. 
                  You can end your test at any time by pressing the play button above the Scene window again.</p>

                  <h1 id="testT" className="font-medium text-5xl my-4">Trouble Shooting</h1>
                  <p>If you run into any issues while running your experiment, try the following in the order they are perscribed:</p>
                  <div style={{padding: 20}}>
                  <b>Validate your Configuration File</b>
                  <p>Most commonly, if you encounter an unexpected error when attempting to run a Configuration File, it is likely an JSON formatting issue. 
                    Because of this we always recommend using a text editor with a JSON lint tool. This will allow you to press a hot key to check if your 
                    configuration file has any issues. Alternatively, while much more tedius, you can copy and paste your JSON file text into an online JSON lint (e.g. 
                    <a href= "https://jsonlint.com/">https://jsonlint.com/</a>)</p><br />

                    <b>Check for Error Messages</b>
                  <p>Open the Console window within the Unity editor and see if it displays any error messages. 
                    We have tried our best to create custom error messages for the most common errors that you may encounter when running an experiment. 
                    These messages will alert you to many issues. Some examples include: 
                    attempting to call an object that hasn’t been placed into the correct project folder, 
                    calling a Scene number that hasn’t been added to the Build, and many others.</p><br />

                    <b>Reach Out to the OpenMaze Team</b>
                    <p>If you’re having an issue that you cannot resolve please feel free to contact us directly with your issue. You can get in touch with us via our website contact page or GitHub"</p>

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
                      To do this, open the Unity Hub application and click on the Installations tab. 
                      If installed, the build platform will appear in the box labelled with the Unity install 
                      version you have used to code your experiment. If the build platform icon is not present, 
                      click the three dots <b>⋮</b> located in the top right corner of the box and click Add Modules. 
                      When prompted, select your target build platform and click next. </p>
                    <br/>

                    <b>Step 2. Create an Empty Folder</b>
                    <p>Create a folder in the directory you'd like to save your Application (name it whatever you’d like!). This will be used to store your experiment application and other folders necessary for running the application.</p>
                    <br />

                    <b>Step 3. Open the Build Settings</b>
                    <p>Click the <b>File</b> tab at the top of the editor and select <b>Build Settings</b></p>
                    <br />

                    <b>Step 4. Select the Target Platform</b>
                    <p>Select your Target Platform from the drop down menu in the Build Settings window. 
                      If your desired target platform does not appear in the drop down refer to <b>Step 1</b>
              
                    </p>
                    <br />

                    <b>Step 5. Build the Application</b>
                    <p>Click the <b>Build</b> button and select the folder you created in <b>Step 2</b></p>
                    <br />

                    <div class="bg-gray-700 rounded-lg border border-white p-4">
                    <p><strong>Note:</strong> You may be prompted with a Missing Project ID window. Click <b>Yes</b> to continue</p>
                    </div><br />

                    <b>Step 6. Add Configuraiton Files</b>
                    <p>Built applications will not contain the <b>Configuration_Files</b> folder. Placing the <b>Configuration_Files</b> folder in the 
                    folder containing the experiment application will ensure that it is prompted when the application is launched.</p>
                    <br />

                    <div class="bg-red-700 rounded-lg border border-white p-4">
                    <p><strong>Note:</strong> If you built your Application using an Auto Run Configuraiton File, the Application will automatically run this Configuraiton File.</p>
                    </div><br />
                  </div>

                <h1 id="exportR" className="font-medium text-5xl my-4">Running Applications</h1>
                <div style={{padding: 20}}>
                    <b>Step 1. Run the Applicaiton</b>
                    <p>Build application must be run on a device with the Target Platform. Upon launching the applicaiton it will be dislayed full screen and should run
                      exactly as it had in the <b>Game</b> window in the Unity Editor.</p>
                    <br />

                    <div class="bg-yellow-700 rounded-lg border border-white p-4">
                    <p><strong>IMPORTANT:</strong> You must place the Configuration_File folder into the same folder as the application for it to auto prompt. If you are using 
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
                  Changes can be made to any files that are contained within the StreamingAssets folder allowing you to add, 
                  or change images used for Instruction/Cue Screen Trials or Landmarks/Goals and make changes to, 
                  or replace the autorun Configuration File. However changes to Scenes, 3D Models, and Audio Files cannot be made. 
                  Changing or creating new Configuration Files is also possible as long as they do not require Scenes, 
                  3D models, or audio files that were not present within the project at the time the application was built.</p>

                <h1 id="exportS" className="font-medium text-5xl my-4">Sharing Applications</h1>
                <p>Exporting your experiment as an application also makes it super easy to share with friends and collegues! Due to their file size, we recommend using a cloud service (e.g. Dropbox, GoogleDrive). 
                  Windows application folders can be uploaded in their full form or as a zip file. macOS applications however must be converted into a Disk Image (.dmg file type) and the Disk Image must be uploaded and 
                  downloaded. We provide detailed instructions for this procedure in the <b>Running Experiments Online</b> section below.  </p>

                <h1 id="outputF" className="font-medium text-5xl my-4">Data Files</h1>
                <p>OpenMaze output is written to Comma Separated Values (.csv) files. Each time the experiment is executed a .csv 
                file is created and named with the concatenated text entered in the experiment start screen (i.e. +Launch Experiment Scene) fields and a time stamp:
                <br /><br /><b class="text-center">StartField1_StartField2_StartField3_StartField4_TimeStamp.csv</b><br /><br /> 
                Output files record the participant position (x, y, and z) and viewing angle (y rotation value), Goal collisions, and keystrokes. 
                Each row also includes the Block and Trial index, as well as a Trial sequence number identifying how many Trials have occurred in the Block. 
                Rows are also timestamped with the absolute system time of the device running the experiment.</p>

                <h1 id="outputC" className="font-medium text-5xl my-4">Start Fields</h1>
                <p>You may wish to change the place holder text for your <b>StartFields</b>, perhaps to "Participant ID", "Session #", "Condition", "Version", ect. This can be done within the Unity Editor before exporting your experiment. These fields cannot be changed 
                after the experiment has been built</p>
                <div style={{padding: 20}}>
                    <b>Step 1. Open the +Launch Experiment Scene Canvas</b>
                    <p>Open the +Launch Experiment Scene in the Unity Editor, navigate to the <b>Hierarchy</b> window and click to expand the <b>Canvas</b> 
                    </p><br />

                    <b>Step 2. Select the Field</b>
                    <p>Contained within the <b>Canvas</b> are 4 <b>Field</b> objects that can be expanded to reveal 
                    <b>Text</b> and <b>Placeholder</b>; select <b>Placeholder</b>.    
                    </p><br />

                    <b>Step 3. Change the Placeholder Text</b>
                    <p>With the <b>Placeholder</b> object selected navigate to the <b>Inspector</b> 
                    window where you can change the text element to suit your needs.</p><br />

                    <div class="bg-red-600 rounded-lg border border-white p-4">
                    <p><strong>Tip:</strong> To disable any of the start screen input fields, simply click on the field in the Hierarchy window to select it, then uncheck the checkbox next to the field name at the top of the Inspector window. Any input field disabled in this manner will be removed from your experiment start screen, but will still be available in the Hierarchy window should you wish to reenable it.</p>
                    </div><br />

                  </div>

                <h1 id="outputT" className="font-medium text-5xl my-4">Output Timing</h1>
                <p>By default, Unity uses VSync, which calls the Update() function once per frame, 
                  ensures the output is synced as closely as possible to the participant’s experience. 
                  Collisions with Goals are written to the output file whenever a collision is detected by the Unity FixedUpdate() function, which is called every 20ms, 
                  meaning that the output file will mark the time at which a Goal was collected within 20ms. </p>
                
                <h1 className="font-medium text-3xl my-4">Output Testing</h1>


                

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
                    The input device can be set within Unity’s Project or Run Settings windows. 
                    While not supported by OpenMaze, Unity is compatible with a variety of specialized input devices 
                    (e.g., VR headsets, touch screens) though add-on support packages. </p>
              
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