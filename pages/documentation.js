import Layout from "../components/layout";
import DocumentSection from "../components/documentSection";
import DocsTable from "../components/docsTable";
import ReactPlayer from 'react-player'
import ConfigurationHeirarchy from '../public/ConfigurationHeirarchy.png';
import BlocksCode from '../public/BlocksCode.png';
import EnclosuresCode from '../public/EnclosuresCode.png';
import GoalsCode from '../public/GoalsCode.png';
import LandmarksCode from '../public/LandmarksCode.png';
import TrialsCode from '../public/TrialsCode.png';

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
              Learn OpenMaze
              </a>

              <p className="opacity-75 mt-4 md:mb-2 md:mt-8 text-sm">
                Configuration File
              </p>

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
              <h1 className="font-medium text-3xl my-4">Learn OpenMaze in a Day Video Tutorials</h1>
              <p>The following provides a reference guide for OpenMaze users. We strongly encourage first time users to follow along with the <a href="/tutorials" target="_blank" className="underline">Learn OpenMaze in a Day - Video Tutorials</a> which provide a hands-on approach to learning the ins and outs of the OpenMaze toolbox.</p>            
            </div>
            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24" id="overview">
              <p className="font-sm font-hairline opacity-75">Configuration File</p>
              <h1 className="font-medium text-3xl my-4">Overview</h1>
              <p>
                The OpenMaze configuration file takes coding out of the design process by providing a simple parameterization interface for creating a variety of experimental tasks.
              <br /><br />
                The configuration file uses a hierarchical structure where experiments are created by defining the order in which Blocks are called,  Blocks are defined by calling defined Trials, and Trials are created by calling defined Goals, Landmarks and Enclosures.
              </p>
              <img src={ConfigurationHeirarchy} alt="" className="w-full my-4" />
            </div>

            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24" id="blocks">
              <h1 className="font-medium text-3xl my-4">Blocks</h1>
              <p>
                The <i>BlockOrder</i> provides the overarching organizational structure for the experiment, dictating the order in which Blocks of Trials are presented to the participant. Blocks are defined through defining what Trials are called and in what order. Blocks provide features for calling trials in both serial or randomized (with or without replacement). Experimenters can define as many Blocks as needed and present them in any order.</p>
              <img src={BlocksCode} alt="" className="w-full my-4" />
              <div className="border border-white rounded-lg my-8 overflow-x-auto">
                <table className="table-auto">
                  <thead className="border-b">
                    <tr>
                      <th className="p-4">Parameter Name</th>
                      <th className="p-4">Variable Description</th>
                      <th className="p-4">Default</th>
                      <th className="p-4">Function Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className=" px-4 py-2">BlockOrder</td>
                      <td className=" px-4 py-2">List of Block Indices</td>
                      <td className=" px-4 py-2">[]</td>
                      <td className=" px-4 py-2">An ordered list of block indices. Blocks can be presented in any order and called multiple times within the list.  </td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">Blocks</td>
                      <td className=" px-4 py-2">List of Blocks</td>
                      <td className=" px-4 py-2">[{}]</td>
                      <td className=" px-4 py-2">Ordered list of blocks. Block indices are used in BlockOrder. Indexing begins at 1</td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">Block#</td>
                      <td className=" px-4 py-2">string</td>
                      <td className=" px-4 py-2">None</td>
                      <td className=" px-4 py-2">Faux parameter that can be used by experimenters to track indices and describe the block.</td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">TrialOrder</td>
                      <td className=" px-4 py-2">List of Trial Indices</td>
                      <td className=" px-4 py-2">[]</td>
                      <td className=" px-4 py-2">An ordered list of Trial indices. Trials can be presented in any order and called multiple times within the list. </td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">Replacement</td>
                      <td className=" px-4 py-2">Binary (0 or 1)</td>
                      <td className=" px-4 py-2">[]</td>
                      <td className=" px-4 py-2">Random selection is executed with replacement (1) or without replacement (0)</td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">RandomlySelect</td>
                      <td className=" px-4 py-2">List of Trial Order Lists</td>
                      <td className=" px-4 py-2">[{}]</td>
                      <td className=" px-4 py-2">A list of trial orders. When trial index 0 is called in TrialOrder one of the Orders defined is randomly selected</td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">Order</td>
                      <td className=" px-4 py-2">List of Trial Indices</td>
                      <td className=" px-4 py-2">[]</td>
                      <td className=" px-4 py-2">An ordered list of trial indices. Each list must contain at least 1 trial.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24" id="trials">
              <h1 className="font-medium text-3xl my-4">Trials</h1>
              <p>
                OpenMaze includes two types of Trials: Instruction Trials and 3D Trials. Instruction Trials display image files (.png, .jpeg, etc.), useful for presenting instructions or other static 2D stimuli. Image Trials are defined by specifying the presented image file, the duration, and a key that can be used to terminate the Trial. 3D Trials utilize the Environments created in Step 1. 3D Trial parameters specify attributes including ,duration, participant starting position, and interactive and non-interactive stimuli (Landmarks, Goals, and Enclosures).
</p>
              <img src={TrialsCode} alt="" className="w-full my-4" />
              <div className="border border-white rounded-lg my-8 overflow-x-auto">
                <table className="table-auto">
                  <thead className="border-b">
                    <tr>
                      <th className="p-4">Parameter Name</th>
                      <th className="p-4">Variable Description</th>
                      <th className="p-4">Default</th>
                      <th className="p-4">Function Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className=" px-4 py-2">Trials</td>
                      <td className=" px-4 py-2">List of Trials</td>
                      <td className=" px-4 py-2">[{}]</td>
                      <td className=" px-4 py-2">Ordered list of Trials. Trial indices are used in TrialOrder parameter when defining an experiment Block. Indexing begin at 1</td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">Trial#</td>
                      <td className=" px-4 py-2">String</td>
                      <td className=" px-4 py-2">None</td>
                      <td className=" px-4 py-2">Faux parameter that can be used by experimenters to keep track of indices and describe the trial.</td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">TrialTime</td>
                      <td className=" px-4 py-2">Float</td>
                      <td className=" px-4 py-2">0</td>
                      <td className=" px-4 py-2">Length of trial in seconds. Trial will time out if Quota parameter is not met and “TrialEndKey” is not pressed. </td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">TrialEndKey</td>
                      <td className=" px-4 py-2">Unity API KeyCode</td>
                      <td className=" px-4 py-2">“Space”</td>
                      <td className=" px-4 py-2"></td>
                    </tr>
                    <tr className="border">
                      <td className=" px-4 py-2">INSTRUCTIONAL TRIALS</td>
                      <td className=" px-4 py-2"></td>
                      <td className=" px-4 py-2"></td>
                      <td className=" px-4 py-2"></td>

                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">Instructional</td>
                      <td className=" px-4 py-2">Binary (0 or 1)</td>
                      <td className=" px-4 py-2">0</td>
                      <td className=" px-4 py-2">Must be set to 1 when creating an instructional trial. Can be excluded when creating a 3D trial</td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">FileLocation</td>
                      <td className=" px-4 py-2">File Path</td>
                      <td className=" px-4 py-2">“”</td>
                      <td className=" px-4 py-2">Used only for instruction trials. Should be set to the images name and file extension (ex. “Apple.png”). Directory search begins in “2D_Object” folder. Can call images in subfolders contained in “2D_Object folder (ex. “subfoldername/Apple.png”)</td>
                    </tr>
                    <tr className="bg-dark-light border">
                      <td className=" px-4 py-2">3D TRIALS</td>
                      <td className=" px-4 py-2"></td>
                      <td className=" px-4 py-2"></td>
                      <td className=" px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">Scene</td>
                      <td className=" px-4 py-2">Scene Build Number</td>
                      <td className=" px-4 py-2">None</td>
                      <td className=" px-4 py-2">Scene build number of the 3D environment to be used for the trial   </td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">Header</td>
                      <td className=" px-4 py-2">String</td>
                      <td className=" px-4 py-2">“”</td>
                      <td className=" px-4 py-2">String will be displayed at the top of the screen during the Trial </td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">StartPosition</td>
                      <td className=" px-4 py-2">[x,z] coordinates</td>
                      <td className=" px-4 py-2">[0,0]</td>
                      <td className=" px-4 py-2">Defines the starting position of the participant within the environment. </td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">StartFacing</td>
                      <td className=" px-4 py-2">y rotation parameter</td>
                      <td className=" px-4 py-2">0</td>
                      <td className=" px-4 py-2">Defines the direction that the participant will facing in the environment when the trial starts. </td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">ActiveGoals</td>
                      <td className=" px-4 py-2">List of Goal indices</td>
                      <td className=" px-4 py-2">[]</td>
                      <td className=" px-4 py-2">Goals in this list will be visible to the participant and be collected when collided with by the participant.   </td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">InactiveGoals</td>
                      <td className=" px-4 py-2">List of Goal indices</td>
                      <td className=" px-4 py-2">[]</td>
                      <td className=" px-4 py-2">Goals in this list will be visible to the participant but cannot be collected. </td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">InvisibleGoals</td>
                      <td className=" px-4 py-2">List of Goal indices</td>
                      <td className=" px-4 py-2">[]</td>
                      <td className=" px-4 py-2">Goals in this list will be invisible to the participant and will be collected when collided with by the participant. </td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">Quota</td>
                      <td className=" px-4 py-2">Integer</td>
                      <td className=" px-4 py-2">0</td>
                      <td className=" px-4 py-2">When participant collects the amount of goals equal to the Quota, the trial will end. </td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">LandMarks</td>
                      <td className=" px-4 py-2">List of Landmark indices</td>
                      <td className=" px-4 py-2">[]</td>
                      <td className=" px-4 py-2">Landmarks in this list will be presented in the environment during the trial</td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">Enclosure</td>
                      <td className=" px-4 py-2">Integer</td>
                      <td className=" px-4 py-2">None</td>
                      <td className=" px-4 py-2">A single index number of an enclosure. The enclosure will be presented in the environment during the trial</td>
                    </tr>


                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24" id="goals">
              <h1 className="font-medium text-3xl my-4">Goals and Landmarks</h1>
              <p>
                To instantiate 3D models and 2D images as stimuli, experimenters first add them to the appropriate 3D_Objects or 2D_Objects folder within their OpenMaze project, and then define their attributes in the Goal or Landmark sections of the configuration file. Once defined, they can be called into an Environment on a trial-by-trial basis via the appropriate Trial parameter (See Trials section). Multiple instances of the same object can be defined in one configuration file to manipulate its attributes (e.g., Color, Rotation, Position) within or across Trials. Of note, the viewing angle of 2D images is standardized by always presenting it perpendicular to the participant’s heading direction. This optimization of 2D image integration not only facilitates the customization of objects, but it also allows for the use of established stimuli banks.
</p>
              <img src={GoalsCode} alt="" className="w-full my-4" /> <br />
              <p>Goals provide a flexible tool for creating a variety of experiment task designs. Some examples include:
</p> <br />
              <p><b>1. Forming object-place associations</b></p> <br />
              <p>Visible Goals (AcitveGoals) can first be used to teach object-location associations that are later tested using invisible Goals (InvisibleGoals). This approach can be combined with a Block level function to ensure that participants have reached a criterion before moving on.</p>
              <br /><p><b>2. Creating waypoints
</b></p><br />
              <p>For navigation tasks, invisible Goal (InvisibleGoals) shapes can serve as waypoints that terminate the Trial or provide feedback once reached.</p> <br />
              <p><b>3. Create spatial reward distributions</b></p><br />
              <p>The same Goal object can be called multiple times within the same trial and in different locations allowing experimenters to create location distributions.
</p><br />
              <p><b>4. Calling multiple Goals</b></p><br />
              <p>Experimenters can include multiple Goals of any type (Active, Inactive, Invisible) in a scene to assess, for example, foraging behavior or multi-option decision making.</p>
              <br />

              <p className="text-2xl">LandMarks</p>
              <img src={LandmarksCode} alt="" className="w-full my-4" />
              <p>When models or images are defined as Landmark objects, they are called into an Environment as passive stimuli (i.e., participants cannot interact with them). This allows experimenters to easily create multiple Environment conditions and/or counterbalance the placement of objects. Further, experimenters can use Landmark objects to add or remove Environment cues during different phases of the experiment (e.g., learning vs. testing) (Fig. 8). Landmarks can also be used to create custom mazes (e.g.: ., radial, T-maze, etc.) as 3D models. These mazes can then be manipulated (e.g.: ., color, rotation, position) before being calling it into any Environment.
</p>

              <div className="border border-white rounded-lg my-8 overflow-x-auto">
                <table className="table-auto">
                  <thead className="border-b">
                    <tr>
                      <th className="p-4">Parameter Name</th>
                      <th className="p-4">Variable Description</th>
                      <th className="p-4">Default</th>
                      <th className="p-4">Function Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className=" px-4 py-2">Goals/Landmarks</td>
                      <td className=" px-4 py-2">List of Goals/Landmarks</td>
                      <td className=" px-4 py-2">[{}]</td>
                      <td className=" px-4 py-2">Ordered list of Goals/Landmarks. Indices are used in when defining 3D Trials. Indexing begin at 1</td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">Goal#/
  Landmark#
</td>
                      <td className=" px-4 py-2">String</td>
                      <td className=" px-4 py-2">None</td>
                      <td className=" px-4 py-2">Faux parameter that can be used by experimenters to keep track of indices and describe the Goal or Landmark.</td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">Type</td>
                      <td className=" px-4 py-2">“3D” or “2D”</td>
                      <td className=" px-4 py-2">None</td>
                      <td className=" px-4 py-2">Defines whether the object being defined is a 3D object or a 2D image.</td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">Object</td>
                      <td className=" px-4 py-2">File Name</td>
                      <td className=" px-4 py-2">None</td>
                      <td className=" px-4 py-2">Refers to the file name of the object in the “3D_Objects” or “2D_Objects” folder or prescribed subfolder.</td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">Instructional</td>
                      <td className=" px-4 py-2">Binary (0 or 1)</td>
                      <td className=" px-4 py-2">0</td>
                      <td className=" px-4 py-2">Must be set to 1 when creating an instructional trial. Can be excluded when creating a 3D trial</td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">Color</td>
                      <td className=" px-4 py-2">RGB or HTML color code</td>
                      <td className=" px-4 py-2">“”</td>
                      <td className=" px-4 py-2">Sets the color of the object when using a 3D object</td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">Position</td>
                      <td className=" px-4 py-2">[x,y,z]</td>
                      <td className=" px-4 py-2">[0,0,0]</td>
                      <td className=" px-4 py-2">Position the goal will be placed within the environment. Corresponds to [x,y,z] Position parameters in Unity Inspector window</td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">Rotation</td>
                      <td className=" px-4 py-2">[x,y,z]</td>
                      <td className=" px-4 py-2">[0,0,0]</td>
                      <td className=" px-4 py-2">Orientation the goal will be placed within the environment. Corresponds to [x,y,z] Rotation parameters in Unity Inspector window</td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">Scale</td>
                      <td className=" px-4 py-2">[x,y,z]</td>
                      <td className=" px-4 py-2">[0,0,0]</td>
                      <td className=" px-4 py-2">Size of the goal. Corresponds to [x,y,z] Scale parameters in Unity Inspector window</td>
                    </tr>
                    <tr className="bg-dark-light border-white">
                      <td className=" px-4 py-2">GOALS ONLY</td>
                      <td className=" px-4 py-2"></td>
                      <td className=" px-4 py-2"></td>
                      <td className=" px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">Sound</td>
                      <td className=" px-4 py-2">File Name</td>
                      <td className=" px-4 py-2">None</td>
                      <td className=" px-4 py-2">Sound to be played upon collision when goal is called as ActiveGoal or InvisibleGoal </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24" id="enclosures">
              <h1 className="font-medium text-3xl my-4">Enclosures</h1>
              <p>
              As an alternative to building custom 3D models to serve as mazes, OpenMaze also provides an Enclosure building tool to restrict participant movement within a simple shape. Enclosures can be customized in several ways, including their size, number of walls, wall height/colour, and ground pattern/colour. With this level of customization, Enclosures can be parametrically morphed between two endpoints; a technique that has proven fruitful when applied to rodents (Fyhn, Hafting, Treves, Moser, & Moser, 2007; J. K. Leutgeb et al., 2005; S. Leutgeb, Leutgeb, Treves, Moser, & Moser, 2004; Wills, Lever, Cacucci, Burgess, & O’Keefe, 2005)</p>
              <img src={EnclosuresCode} alt="" className="w-full my-4" />
              <div className="border border-white rounded-lg my-8 overflow-x-auto">
                <table className="table-auto">
                  <thead className="border-b">
                    <tr>
                      <th className="p-4">Parameter Name</th>
                      <th className="p-4">Variable Description</th>
                      <th className="p-4">Default</th>
                      <th className="p-4">Function Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">Enclosures</td>
                      <td className=" px-4 py-2">List of Enclosures</td>
                      <td className=" px-4 py-2">[{}]</td>
                      <td className=" px-4 py-2">Ordered list of Enclosures. Indices are used in when defining 3D Trials. Indexing begin at 1</td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">Enclosure#</td>
                      <td className=" px-4 py-2">string</td>
                      <td className=" px-4 py-2">None</td>
                      <td className=" px-4 py-2">Faux parameter that can be used by experimenters to track indices and describe the enclosure.</td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">Sides</td>
                      <td className=" px-4 py-2"># of Enclosure walls</td>
                      <td className=" px-4 py-2">0</td>
                      <td className=" px-4 py-2">Number of sides of the enclosure (ex. 4 = square, 5 = pentagon, 6 = hexagon, etc.).</td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">Radius</td>
                      <td className=" px-4 py-2">Float variable</td>
                      <td className=" px-4 py-2">0</td>
                      <td className=" px-4 py-2">Used to set the size of the enclosure. Walls are created tangent to the circle defined by the radius</td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">WallHeight</td>
                      <td className=" px-4 py-2">Float variable</td>
                      <td className=" px-4 py-2">0</td>
                      <td className=" px-4 py-2">Sets the height of the Enclosure walls</td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">WallColor</td>
                      <td className=" px-4 py-2">HTML or RGB color code</td>
                      <td className=" px-4 py-2">“ffffff”</td>
                      <td className=" px-4 py-2">Sets color of enclosure walls.</td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">GroundTileSides</td>
                      <td className=" px-4 py-2">Sides per tile</td>
                      <td className=" px-4 py-2">0</td>
                      <td className=" px-4 py-2">Works similar to “Sides” parameter. Allows experimenters to customize the floor of the enclosure </td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">GroundTileSize</td>
                      <td className=" px-4 py-2">Size of Tiles </td>
                      <td className=" px-4 py-2">1</td>
                      <td className=" px-4 py-2">A number between 0-1 which manipulates the size of each ground tile</td>
                    </tr>
                    <tr className="bg-dark-light">
                      <td className=" px-4 py-2">GroundColor</td>
                      <td className=" px-4 py-2">HTML or RGB color code</td>
                      <td className=" px-4 py-2">“ffffff”</td>
                      <td className=" px-4 py-2">Sets color of ground tiles. </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>


            {/* <div className="text-white text-left max-w-sm md:max-w-lg lg:max-w-2xl mb-24 w-full" id="basicsTutorial">
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
            </div> */}


          </div>
        </div>
      </Layout>
    </>
  );
}
