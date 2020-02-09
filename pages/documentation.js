import Layout from "../components/layout";
import DocumentSection from "../components/documentSection";
import DocsTable from "../components/docsTable";
import ReactPlayer from 'react-player'

const sectionLinkStyle = "block py-2 text-lg";

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

export default function Documentation() {
  return (
    <>
      <div className="z-neg hidden md:block bg-dark-light fixed left-0 w-64 h-screen text-white"></div>
      <Layout docs="true">
        <div className="flex flex-wrap justify-center m-0 mx-4 md:mx-0">
          <div className="text-white bg-dark-light p-4 rounded-lg w-screen md:w-64 md:left-0">
            <div className="md:sticky md:top-0 pt-4">
              <p className="opacity-75 text-sm font-thin">Welcome</p>
              <a href="#introduction" className={sectionLinkStyle}>
                Introduction
              </a>

              <p className="opacity-75 mt-4 md:mb-2 md:mt-8 text-sm">
                Configuration File
              </p>
              <hr className="opacity-75 w-full mb-2 md:hidden" />

              <a href="#overview" className={sectionLinkStyle}>
                Overview
              </a>
              <a href="#blocks" className={sectionLinkStyle}>
                Blocks
              </a>
              <a href="#trials" className={sectionLinkStyle}>
                Trials
              </a>
              <a href="#goals" className={sectionLinkStyle}>
                Goals & Landmarks
              </a>
              <a href="#enclosures" className={sectionLinkStyle}>
                Enclosures
              </a>

              <p className="opacity-75 mt-4 md:mb-2 md:mt-8 text-sm">Tutorials</p>
              <hr className="opacity-75 w-full mb-2 md:hidden" />

              <a href="#basicsTutorial" className={sectionLinkStyle}>
                3D Trial Basics
              </a>
              <a href="#trialObjectsTutorial" className={sectionLinkStyle}>
                3D Trial Objects
              </a>
              <a href="#buildingEnvironmentsTutorial" className={sectionLinkStyle}>
                Building Environments
              </a>
              <a href="#blocksTutorial" className={sectionLinkStyle}>
                Blocks
              </a>
              <a href="#goalObjectsTutorial" className={sectionLinkStyle}>
                Goal Objects
              </a>
              <a href="#instructionTrialsTutorial" className={sectionLinkStyle}>
                Instruction Trials
              </a>
              <a href="#enclosuresTutorial" className={sectionLinkStyle}>
                Enclosures
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-wrap flex-col items-center mt-6 md:mt-0">
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
            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24" id="introduction">
              <p className="font-sm font-hairline opacity-75">Welcome</p>
              <h1 className="font-medium text-3xl my-4">Introduction</h1>
              <p>The advent of 3D virtual environments has given researchers the ability to study human cognition in novel ways, providing insight into many important scientific questions. OpenMaze is an open source software package that provides and easy an intuitive platform to quickly create 3D environment tasks without programming expertise.</p>
            </div>

            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24" id="overview">
              <p className="font-sm font-hairline opacity-75">Configuration File</p>
              <h1 className="font-medium text-3xl my-4">Overview</h1>
              <p>
                The configuration file is the most important file in the OpenMaze codebase when it comes to designing your own experiments. Here you can change up almost everything about how OpenMaze works just by changing a few numbers or words! The following section demonstrates exactly how to accomplish this.
              </p>
            </div>

            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24" id="blocks">
              <h1 className="font-medium text-3xl my-4">Blocks</h1>
              <p>
                Blocks allow for organization and clear visualization of trial data. The order of blocks can be changed within the configuration file, which allows for easy manipulation of trial order when designing an experiment.
              </p>
              <div className="border border-white rounded-lg my-8 overflow-x-auto">
              <table className="table-auto">
                <thead className="border-b">
                  <tr>
                    <th class="p-4">Parameter Name</th>
                    <th class="p-4">Variable Description</th>
                    <th class="p-4">Default</th>
                    <th class="p-4">Function Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class=" px-4 py-2">BlockOrder</td>
                    <td class=" px-4 py-2">List of Block Indices</td>
                    <td class=" px-4 py-2">[]</td>
                    <td class=" px-4 py-2">An ordered list of block indices. Blocks can be presented in any order and called multiple times within the list.  </td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">Blocks</td>
                    <td class=" px-4 py-2">List of Blocks</td>
                    <td class=" px-4 py-2">[{}]</td>
                    <td class=" px-4 py-2">Ordered list of blocks. Block indices are used in BlockOrder. Indexing begins at 1</td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">Block#</td>
                    <td class=" px-4 py-2">string</td>
                    <td class=" px-4 py-2">None</td>
                    <td class=" px-4 py-2">Faux parameter that can be used by experimenters to track indices and describe the block.</td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">TrialOrder</td>
                    <td class=" px-4 py-2">List of Trial Indices</td>
                    <td class=" px-4 py-2">[]</td>
                    <td class=" px-4 py-2">An ordered list of Trial indices. Trials can be presented in any order and called multiple times within the list. </td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">Replacement</td>
                    <td class=" px-4 py-2">Binary (0 or 1)</td>
                    <td class=" px-4 py-2">[]</td>
                    <td class=" px-4 py-2">Random selection is executed with replacement (1) or without replacement (0)</td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">RandomlySelect</td>
                    <td class=" px-4 py-2">List of Trial Order Lists</td>
                    <td class=" px-4 py-2">[{}]</td>
                    <td class=" px-4 py-2">A list of trial orders. When trial index 0 is called in TrialOrder one of the Orders defined is randomly selected</td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">Order</td>
                    <td class=" px-4 py-2">List of Trial Indices</td>
                    <td class=" px-4 py-2">[]</td>
                    <td class=" px-4 py-2">An ordered list of trial indices. Each list must contain at least 1 trial.</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>

            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24" id="trials">
              <h1 className="font-medium text-3xl my-4">Trials</h1>
              <p>
              This section of the configuration file allows for organization of information within trials. This includes parameters that create a 3D environment tailored to your task, selection among different goal types and the timing of your trials.
               </p>
              <div className="border border-white rounded-lg my-8 overflow-x-auto">
              <table className="table-auto">
                <thead className="border-b">
                  <tr>
                    <th class="p-4">Parameter Name</th>
                    <th class="p-4">Variable Description</th>
                    <th class="p-4">Default</th>
                    <th class="p-4">Function Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class=" px-4 py-2">Trials</td>
                    <td class=" px-4 py-2">List of Trials</td>
                    <td class=" px-4 py-2">[{}]</td>
                    <td class=" px-4 py-2">Ordered list of Trials. Trial indices are used in TrialOrder parameter when defining an experiment Block. Indexing begin at 1</td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">Trial#</td>
                    <td class=" px-4 py-2">String</td>
                    <td class=" px-4 py-2">None</td>
                    <td class=" px-4 py-2">Faux parameter that can be used by experimenters to keep track of indices and describe the trial.</td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">TrialTime</td>
                    <td class=" px-4 py-2">Float</td>
                    <td class=" px-4 py-2">0</td>
                    <td class=" px-4 py-2">Length of trial in seconds. Trial will time out if Quota parameter is not met and “TrialEndKey” is not pressed. </td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">TrialEndKey</td>
                    <td class=" px-4 py-2">Unity API KeyCode</td>
                    <td class=" px-4 py-2">“Space”</td>
                    <td class=" px-4 py-2"></td>
                  </tr>
                  <tr className="border">
                    <td class=" px-4 py-2">INSTRUCTIONAL TRIALS</td>
                    <td class=" px-4 py-2"></td>
                    <td class=" px-4 py-2"></td>
                    <td class=" px-4 py-2"></td>
                    
                </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">Instructional</td>
                    <td class=" px-4 py-2">Binary (0 or 1)</td>
                    <td class=" px-4 py-2">0</td>
                    <td class=" px-4 py-2">Must be set to 1 when creating an instructional trial. Can be excluded when creating a 3D trial</td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">FileLocation</td>
                    <td class=" px-4 py-2">File Path</td>
                    <td class=" px-4 py-2">“”</td>
                    <td class=" px-4 py-2">Used only for instruction trials. Should be set to the images name and file extension (ex. “Apple.png”). Directory search begins in “2D_Object” folder. Can call images in subfolders contained in “2D_Object folder (ex. “subfoldername/Apple.png”)</td>
                  </tr>
                  <tr class="bg-dark-light border">
                    <td class=" px-4 py-2">3D TRIALS</td>
                    <td class=" px-4 py-2"></td>
                    <td class=" px-4 py-2"></td>
                    <td class=" px-4 py-2"></td>
                    </tr>
                  <tr>
                    <td class=" px-4 py-2">Scene</td>
                    <td class=" px-4 py-2">Scene Build Number</td>
                    <td class=" px-4 py-2">None</td>
                    <td class=" px-4 py-2">Scene build number of the 3D environment to be used for the trial   </td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">Header</td>
                    <td class=" px-4 py-2">String</td>
                    <td class=" px-4 py-2">“”</td>
                    <td class=" px-4 py-2">String will be displayed at the top of the screen during the Trial </td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">StartPosition</td>
                    <td class=" px-4 py-2">[x,z] coordinates</td>
                    <td class=" px-4 py-2">[0,0]</td>
                    <td class=" px-4 py-2">Defines the starting position of the participant within the environment. </td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">StartFacing</td>
                    <td class=" px-4 py-2">y rotation parameter</td>
                    <td class=" px-4 py-2">0</td>
                    <td class=" px-4 py-2">Defines the direction that the participant will facing in the environment when the trial starts. </td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">ActiveGoals</td>
                    <td class=" px-4 py-2">List of Goal indices</td>
                    <td class=" px-4 py-2">[]</td>
                    <td class=" px-4 py-2">Goals in this list will be visible to the participant and be collected when collided with by the participant.   </td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">InactiveGoals</td>
                    <td class=" px-4 py-2">List of Goal indices</td>
                    <td class=" px-4 py-2">[]</td>
                    <td class=" px-4 py-2">Goals in this list will be visible to the participant but cannot be collected. </td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">InvisibleGoals</td>
                    <td class=" px-4 py-2">List of Goal indices</td>
                    <td class=" px-4 py-2">[]</td>
                    <td class=" px-4 py-2">Goals in this list will be invisible to the participant and will be collected when collided with by the participant. </td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">Quota</td>
                    <td class=" px-4 py-2">Integer</td>
                    <td class=" px-4 py-2">0</td>
                    <td class=" px-4 py-2">When participant collects the amount of goals equal to the Quota, the trial will end. </td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">LandMarks</td>
                    <td class=" px-4 py-2">List of Landmark indices</td>
                    <td class=" px-4 py-2">[]</td>
                    <td class=" px-4 py-2">Landmarks in this list will be presented in the environment during the trial</td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">Enclosure</td>
                    <td class=" px-4 py-2">Integer</td>
                    <td class=" px-4 py-2">None</td>
                    <td class=" px-4 py-2">A single index number of an enclosure. The enclosure will be presented in the environment during the trial</td>
                  </tr>
          
                  
                </tbody>
              </table>
              </div>
            </div>

            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24" id="goals">
              <h1 className="font-medium text-3xl my-4">Goals and Landmarks</h1>
              <p>
              In this section you can define different aspects of your goal objects. From physical characteristics such as size and colour to others including location and sound. You can create a wide variety of goal objects of varying salience to suit your task. You can also define the characteristics of your landmarks. This includes parameters that regulate location, size and colour. With the ability to manipulate features of landmarks you can further define the environment to reach your desired goal.
                </p>
              <div className="border border-white rounded-lg my-8 overflow-x-auto">
              <table className="table-auto">
                <thead className="border-b">
                  <tr>
                    <th class="p-4">Parameter Name</th>
                    <th class="p-4">Variable Description</th>
                    <th class="p-4">Default</th>
                    <th class="p-4">Function Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class=" px-4 py-2">Goals/Landmarks</td>
                    <td class=" px-4 py-2">List of Goals/Landmarks</td>
                    <td class=" px-4 py-2">[{}]</td>
                    <td class=" px-4 py-2">Ordered list of Goals/Landmarks. Indices are used in when defining 3D Trials. Indexing begin at 1</td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">Goal#/
Landmark#
</td>
                    <td class=" px-4 py-2">String</td>
                    <td class=" px-4 py-2">None</td>
                    <td class=" px-4 py-2">Faux parameter that can be used by experimenters to keep track of indices and describe the Goal or Landmark.</td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">Type</td>
                    <td class=" px-4 py-2">“3D” or “2D”</td>
                    <td class=" px-4 py-2">None</td>
                    <td class=" px-4 py-2">Defines whether the object being defined is a 3D object or a 2D image.</td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">Object</td>
                    <td class=" px-4 py-2">File Name</td>
                    <td class=" px-4 py-2">None</td>
                    <td class=" px-4 py-2">Refers to the file name of the object in the “3D_Objects” or “2D_Objects” folder or prescribed subfolder.</td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">Instructional</td>
                    <td class=" px-4 py-2">Binary (0 or 1)</td>
                    <td class=" px-4 py-2">0</td>
                    <td class=" px-4 py-2">Must be set to 1 when creating an instructional trial. Can be excluded when creating a 3D trial</td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">Color</td>
                    <td class=" px-4 py-2">RGB or HTML color code</td>
                    <td class=" px-4 py-2">“”</td>
                    <td class=" px-4 py-2">Sets the color of the object when using a 3D object</td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">Position</td>
                    <td class=" px-4 py-2">[x,y,z]</td>
                    <td class=" px-4 py-2">[0,0,0]</td>
                    <td class=" px-4 py-2">Position the goal will be placed within the environment. Corresponds to [x,y,z] Position parameters in Unity Inspector window</td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">Rotation</td>
                    <td class=" px-4 py-2">[x,y,z]</td>
                    <td class=" px-4 py-2">[0,0,0]</td>
                    <td class=" px-4 py-2">Orientation the goal will be placed within the environment. Corresponds to [x,y,z] Rotation parameters in Unity Inspector window</td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">Scale</td>
                    <td class=" px-4 py-2">[x,y,z]</td>
                    <td class=" px-4 py-2">[0,0,0]</td>
                    <td class=" px-4 py-2">Size of the goal. Corresponds to [x,y,z] Scale parameters in Unity Inspector window</td>
                  </tr>
                  <tr class="bg-dark-light border-white">
                    <td class=" px-4 py-2">GOALS ONLY</td>
                    <td class=" px-4 py-2"></td>
                    <td class=" px-4 py-2"></td>
                    <td class=" px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">Sound</td>
                    <td class=" px-4 py-2">File Name</td>
                    <td class=" px-4 py-2">None</td>
                    <td class=" px-4 py-2">Sound to be played upon collision when goal is called as ActiveGoal or InvisibleGoal </td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>

            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24" id="enclosures">
              <h1 className="font-medium text-3xl my-4">Enclosures</h1>
              <p>
              In this section you can define different aspects of your goal objects. From physical characteristics such as size and colour to others including location and sound. You can create a wide variety of goal objects of varying salience to suit your task. You can also define the characteristics of your landmarks. This includes parameters that regulate location, size and colour. With the ability to manipulate features of landmarks you can further define the environment to reach your desired goal.
                </p>
              <div className="border border-white rounded-lg my-8 overflow-x-auto">
              <table className="table-auto">
                <thead className="border-b">
                  <tr>
                    <th class="p-4">Parameter Name</th>
                    <th class="p-4">Variable Description</th>
                    <th class="p-4">Default</th>
                    <th class="p-4">Function Description</th>
                  </tr>
                </thead>
                <tbody>
                <tr class="bg-dark-light">
                    <td class=" px-4 py-2">Enclosures</td>
                    <td class=" px-4 py-2">List of Enclosures</td>
                    <td class=" px-4 py-2">[{}]</td>
                    <td class=" px-4 py-2">Ordered list of Enclosures. Indices are used in when defining 3D Trials. Indexing begin at 1</td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">Enclosure#</td>
                    <td class=" px-4 py-2">string</td>
                    <td class=" px-4 py-2">None</td>
                    <td class=" px-4 py-2">Faux parameter that can be used by experimenters to track indices and describe the enclosure.</td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">Sides</td>
                    <td class=" px-4 py-2"># of Enclosure walls</td>
                    <td class=" px-4 py-2">0</td>
                    <td class=" px-4 py-2">Number of sides of the enclosure (ex. 4 = square, 5 = pentagon, 6 = hexagon, etc.).</td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">Radius</td>
                    <td class=" px-4 py-2">Float variable</td>
                    <td class=" px-4 py-2">0</td>
                    <td class=" px-4 py-2">Used to set the size of the enclosure. Walls are created tangent to the circle defined by the radius</td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">WallHeight</td>
                    <td class=" px-4 py-2">Float variable</td>
                    <td class=" px-4 py-2">0</td>
                    <td class=" px-4 py-2">Sets the height of the Enclosure walls</td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">WallColor</td>
                    <td class=" px-4 py-2">HTML or RGB color code</td>
                    <td class=" px-4 py-2">“ffffff”</td>
                    <td class=" px-4 py-2">Sets color of enclosure walls.</td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">GroundTileSides</td>
                    <td class=" px-4 py-2">Sides per tile</td>
                    <td class=" px-4 py-2">0</td>
                    <td class=" px-4 py-2">Works similar to “Sides” parameter. Allows experimenters to customize the floor of the enclosure </td>
                  </tr>
                  <tr>
                    <td class=" px-4 py-2">GroundTileSize</td>
                    <td class=" px-4 py-2">Size of Tiles </td>
                    <td class=" px-4 py-2">1</td>
                    <td class=" px-4 py-2">A number between 0-1 which manipulates the size of each ground tile</td>
                  </tr>
                  <tr class="bg-dark-light">
                    <td class=" px-4 py-2">GroundColor</td>
                    <td class=" px-4 py-2">HTML or RGB color code</td>
                    <td class=" px-4 py-2">“ffffff”</td>
                    <td class=" px-4 py-2">Sets color of ground tiles. </td>
                  </tr>

                </tbody>
              </table>
              </div>
            </div>


            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24 w-full" id="basicsTutorial">
              <p className="font-sm font-hairline opacity-75">Tutorials</p>
              <h1 className="font-medium text-3xl my-4">3D Trial Basics</h1>
              <ReactPlayer url={"https://youtu.be/CnlVgKkj3C4"} width='100%' />
            </div>

            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24 w-full" id="trialObjectsTutorial">
              <h1 className="font-medium text-3xl my-4">3D Trial Objects</h1>
              <ReactPlayer url={"https://youtu.be/sSOWmIR7dWA"} width='100%' />
            </div>

            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24 w-full" id="buildingEnvironmentsTutorial">
              <h1 className="font-medium text-3xl my-4">Building Environments</h1>
              <ReactPlayer url={"https://youtu.be/rC0S63hHopo"} width='100%' />
            </div>

            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24 w-full" id="blocksTutorial">
              <h1 className="font-medium text-3xl my-4">Blocks</h1>
              <ReactPlayer url={"https://youtu.be/Nqj0VUgi4gE"} width='100%' />
            </div>

            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24 w-full" id="goalObjectsTutorial">
              <h1 className="font-medium text-3xl my-4">Goal Objects</h1>
              <ReactPlayer url={"https://youtu.be/20UysrQwdgU"} width='100%' />
            </div>

            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24 w-full" id="instructionTrialsTutorial">
              <h1 className="font-medium text-3xl my-4">Instruction Trials</h1>
              <ReactPlayer url={"https://youtu.be/64lVb1U0KIg"} width='100%' />
            </div>

            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24 w-full" id="enclosuresTutorial">
              <h1 className="font-medium text-3xl my-4">Enclosures</h1>
              <ReactPlayer url={"https://youtu.be/DTH-Bc1m_wc"} width='100%' />
            </div>

            
          </div>
        </div>
      </Layout>
    </>
  );
}
