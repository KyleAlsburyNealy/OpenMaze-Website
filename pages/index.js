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
import CIHR from "../public/CIHR.png";
import CFI from "../public/CFI.png";
import Duncan from "../public/Duncan.png";
import Budding from "../public/Budding.png";

const Index = () => (
  <div>
    <img
      src={map}
      alt=""
      className="z-neg fixed max-h-full max-w-full lg:w-screen "
    />
    <Meta />
    <Navbar />

    <div className="flex flex-wrap mb-4 justify-center relative lg:  h-screen">
      <div className="max-auto h-auto text-xl lg:w-4/5 flex m-auto ">
        <div className="-mt-10 sm:mt-6 lg:mt-24 lg:px-12">
          <div className="-mt-20 text-white ">
            <div className=" flex text-white text-xl sm:text-base flex-row justify-center align-center m-auto text-center -mb-2">
            <img src={Openmaze} alt="" className="flex-row object-center flex flex-wrap w-4/5 p-2 -mt-10" />
            {/* <p className="text-5xl font-bold">
              Start to Finish Experiment Design.
              </p> */}
            </div>
            <div className = "flex justify-center align-center" >
            <p class="lg:text-2xl text-center w-4/5  mt-2 m-2 mb-4">
                
              OpenMaze is a general-purpose 3D experiment building toolbox,
              developed for use with Unity Software. OpenMaze
              requires no prior coding experience, allowing you to spend less
              time hacking and more time experimenting!
            </p>
            </div>

              <div className="flex text-white text-xs sm:text-base flex-row justify-center m-auto text-center -mb-2">
                <a href="https://psyarxiv.com/bsj47" className={`flex text-xs sm:text-base inline-block hover:bg-tutorial-blue w-auto border-2   border-tutorial-blue sm:px-4 sm:py-2 rounded-full py-1 px-2`}>
                  Preprint
                </a>
              
              <Link href="/tutorials">
                <a className={`flex text-xs sm:text-base inline-block hover:bg-tutorial-yellow w-auto border-2  sm:mx-4 mx-2  border-tutorial-yellow rounded-full sm:px-4 sm:py-2 px-2 py-1`}>
                  Video Tutorials
                </a>
              </Link>

              <Link href="/documentation">
                <a className={`flex text-xs sm:text-base inline-block hover:bg-tutorial-red w-auto border-2  border-tutorial-red rounded-full sm:px-4 sm:py-2 px-2 py-1`}>
                  User Manual
                </a>
              </Link>
            </div>
              
              
              
              <br/>



            <div className="text-white flex flex-wrap mx-2">
              <div className="w-1/4  sm:px-1">
              </div>

              <div className="w-1/4 sm:px-1">
                <div className="relative rounded-lg bg-local bg-cover">
                  <a href = "https://cihr-irsc.gc.ca/">
                    <img src={CIHR} alt="User's Manual" /></a>
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


              <div className="w-1/4 sm:px-1">
                <div className="relative rounded-lg bg-local bg-cover">
                  <a href = "https://www.innovation.ca/"><img src={CFI} alt="No Coding Required" /></a>
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
            </div>
          
            <div className = "text-center text-white m-4  opacity-50">
              <p>This website and software is not sponsored by or affiliated with Unity Technologies or its
                affiliates. Unity Trademarks are trademarks or registered trademarks of Unity Technologies
                or its affiliates in the U.S. and elsewhere.</p>
            </div>
            
          </div>
          
        </div>
        
        
      </div>
    </div>
    
  </div>
);

export default Index;
