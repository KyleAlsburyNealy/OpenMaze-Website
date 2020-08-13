import "../style.css";
import Link from "next/link";
import Meta from "../components/meta";
import Navbar from "../components/navbar";

import map from "../public/map.svg";
import Openmaze from "../public/WebsiteLogoFinal.png";

import LP_1 from "../public/LP_1.png";
import LP_2 from "../public/LP_2.png";
import LP_3 from "../public/LP_3.png";
import LP_4 from "../public/LP_4.png";
import LP_5 from "../public/LP_5.png";
import LP_6 from "../public/LP_6.png";

const Index = () => (
  <div>
    <img
      src={map}
      alt=""
      className="z-neg fixed h-screen w-full lg:w-screen lg:h-screen"
    />
    <Meta />
    <Navbar />

    <div className="flex flex-wrap mb-4 relative lg:fixed h-screen">
      <div className="w-full lg:w-1/2 flex m-auto">
        <div className="mt-8 lg:-mt-24 px-4 lg:px-12">
          <div className="text-white px-6">
            <img src={Openmaze} alt="" className="w-full" />
            {/* <p className="text-5xl font-bold">
              Start to Finish Experiment Design.
              </p> */}
            <p className="mt-6 text-lg">
              OpenMaze is a general-purpose 3D experiment building toolbox,
              developed for use with Unity Software. OpenMaze
              requires no prior coding experience, allowing you to spend less
              time hacking and more time experimenting!
            </p>
            <div className="mt-4">
              <Link href="/documentation">
                <a
                  className={`block mt-4 lg:inline-block lg:mt-0 text-white mr-6 inline-block hover:bg-red-500 w-auto border border-red-500 py-2 px-4 lg:px-4 rounded-full`}
                >
                  User Manual
                </a>
              </Link>
              <Link href="/tutorials">
                <a className="underline">Video Tutorials</a>
              </Link>
            </div><br/><br/><br/>
            <div className="flex justify-center">     
                  <a target={"_blank"} href="https://www.facebook.com/OpenMaze/">
                    <i className="justify-center fab fa-lg fa-facebook-f mr-6 my-2 sm:my-3 opacity-53 hover:opacity-90"></i>
                  </a>
                  <a target={"_blank"} href="https://twitter.com/maze_open">
                    <i className="justify-center fab fa-lg fa-twitter mr-6 my-2 sm:my-3 opacity-53 hover:opacity-90"></i>
                  </a>
                  <a target={"_blank"} href="https://www.youtube.com/channel/UCZPtVRU5XXfLA7lDqKLeTsg/playlists">
                    <i className="justify-center fab fa-lg fa-youtube mr-6 my-2 sm:my-3 opacity-53 hover:opacity-90"></i>
                  </a>
                </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-8 lg:p-18 lg:overflow-auto h-screen pb-48 max-w-xl m-auto lg:max-w-full">
        <div className="text-white flex flex-wrap mb-4 -mx-4">
          <Link href="/tutorials">
            <div className="w-full m-4 mb-8 relative rounded-lg bg-local bg-cover">
              <img src={LP_1} alt="Build an Experiment in a Day" />
              {/* <div className="flex "> */}
              {/* <div className="flex-1 absolute bottom-0">
                  <p className="bg-black px-2 rounded-lg rounded-tl-none rounded-br-none">
                    <a className="opacity-75">Learn OpenMaze in a day!</a>
                  </p>
                </div>
                <div className="flex-1"></div> */}
              {/* </div> */}
            </div>
          </Link>
          <Link href="/documentation">
            <div className="w-1/2 pl-4 pr-1 sm:px-4">
              <div className="relative rounded-lg bg-local bg-cover">
                <img src={LP_2} alt="User's Manual" />
                {/* <div className="flex ">
                  <div className="flex-1 absolute bottom-0">
                    <p className="bg-black px-2 rounded-lg rounded-tl-none rounded-br-none">
                      <a className="opacity-75">Set Up</a>
                    </p>
                  </div>
                  <div className="flex-1"></div>
                </div> */}
              </div>
            </div>
          </Link>

            <div className="w-1/2 pr-4 pl-1 sm:px-4">
              <div className="relative rounded-lg bg-local bg-cover">
                <img src={LP_3} alt="No Coding Required" />
                {/* <div className="flex ">
                  <div className="flex-1 absolute bottom-0">
                    <p className="bg-black px-2 rounded-lg rounded-tl-none rounded-br-none">
                      <a className="opacity-75">Create Scenes</a>
                    </p>
                  </div>
                  <div className="flex-1"></div>
                </div> */}
              </div>
            </div>


          <div className="w-full m-4 my-8 relative rounded-lg bg-local bg-cover">
            <a
              href="https://github.com/DuncanLab/OpenMaze/wiki/Contributing"
              target="_blank"
            >
              <img src={LP_4} alt="Contribute to OpenMaze" />
              {/* <div className="flex ">
                <div className="flex-1 absolute bottom-0">
                  <p className="bg-black px-2 rounded-lg rounded-tl-none rounded-br-none">
                    <a className="opacity-75">Learn OpenMaze in a day!</a>
                  </p>
                </div>
                <div className="flex-1"></div>
              </div> */}
            </a>

          </div>

          <div className="w-1/2 pl-4 pr-1 sm:px-4">

            <div className="relative rounded-lg bg-local bg-cover">
              <a
                href="https://unity.com/"
                target="_blank"
              >
                <img src={LP_6} alt="What is the Unity Engine?" />
                {/* <div className="flex ">
                  <div className="flex-1 absolute bottom-0">
                    <p className="bg-black px-2 rounded-lg rounded-tl-none rounded-br-none">
                      <a className="opacity-75">Set Up</a>
                    </p>
                  </div>
                  <div className="flex-1"></div>
                </div> */}
              </a>

            </div>

          </div>

          <div className="w-1/2 pr-4 pl-1 sm:px-4">

            <div className="relative mb-8 lg:m-0 rounded-lg bg-local bg-cover">
              <a
                href="https://github.com/DuncanLab/OpenMaze/issues"
                target="_blank"
              >
                <img src={LP_5} alt="Feature Requests and Issue Reporting" />
              </a>

            </div>
          </div>

          <div className = "text-center w-full m-4 my-8 relative opacity-50">
                  <p>This website and software is not sponsored by or affiliated with Unity Technologies or its 
                  affiliates. Unity Trademarks are trademarks or registered trademarks of Unity Technologies 
                  or its affiliates in the U.S. and elsewhere</p>
                </div> 

        </div>
      </div>
    </div>
  </div>
);

export default Index;
