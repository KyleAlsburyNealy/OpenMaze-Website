import "../style.css";
import Link from "next/link";
import map from "../public/map.svg";
import LearnOpenMazeInADay from "../public/computerKeyboard.jpg"
import AnalysisBackground from "../public/chris-liverani-dBI_My696Rk-unsplash.jpg"
import RunParticipants from "../public/RunParticipants.jpg"
import Meta from "../components/meta";
import Navbar from "../components/navbar";

const Index = () => (
  <div>
    <img
      src={map}
      alt=""
      className="z-neg fixed h-screen w-full lg:w-screen lg:h-screen"
    />
    <Meta />
      <Navbar />
    
      <div class="flex flex-wrap mb-4 relative lg:fixed h-screen">
        <div class="w-full lg:w-1/2 flex m-auto">
          <div className="mt-8 lg:-mt-24 px-4 lg:px-12">
          <div className="text-white px-6">
            <p className="text-5xl font-bold">
              Start to Finish Experiment Design.
              </p>
            <p className="mt-6 opacity-75">
              The advent of 3D virtual environments has given researchers the
              ability to study human cognition in novel ways, providing insight
              into many important scientific questions. OpenMaze is an open source
              software package that provides and easy an intuitive platform to
              quickly create 3D environment tasks without programming expertise.
              </p>
            <div className="mt-4">
              <Link href="/tutorials">
                <a
                  className={`block mt-4 lg:inline-block lg:mt-0 text-white mr-6 inline-block hover:bg-red-500 w-auto border border-red-500 py-2 px-4 lg:px-4 rounded-full`}
                >
                  Get Started
                  </a>
              </Link>
              <Link href="/tutorials">
                <a className="underline">Tutorials</a>
              </Link>
            </div>

          </div>
          </div>

        </div>
        <div className="w-full lg:w-1/2 p-8 lg:p-18 lg:overflow-auto h-screen pb-48">
          <div className="text-white flex flex-wrap mb-4 -mx-4">
            <Link href="/documentation">
              <div className="w-full m-4 mb-8 relative h-56 rounded-lg bg-local bg-cover" style={{ backgroundImage: `url(${LearnOpenMazeInADay})` }}>
                <div className="flex ">
                  <div className="flex-1 absolute bottom-0">
                    <p className="bg-black px-2 rounded-lg rounded-tl-none rounded-br-none">

                      <a className="opacity-75">Learn OpenMaze in a day!</a>

                    </p>
                  </div>
                  <div className="flex-1"></div>
                </div>
              </div>
            </Link>
            <Link href="/documentation">
              <div className="w-full lg:w-1/2 px-4">
              <div className="relative mb-8 lg:m-0 h-56 lg:h-72 rounded-lg bg-local bg-cover" style={{ backgroundImage: `url(${AnalysisBackground})` }}>
                <div className="flex ">
                  <div className="flex-1 absolute bottom-0">
                    <p className="bg-black px-2 rounded-lg rounded-tl-none rounded-br-none">
                      <a className="opacity-75">Set Up</a>
                    </p>
                  </div>
                  <div className="flex-1"></div>
                </div>
              </div>
              </div>
            </Link>
            <Link href="/documentation">
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative h-56 lg:h-72 rounded-lg bg-local bg-cover" style={{ backgroundImage: `url(${RunParticipants})` }}>
                <div className="flex ">
                  <div className="flex-1 absolute bottom-0">
                    <p className="bg-black px-2 rounded-lg rounded-tl-none rounded-br-none">
                      <a className="opacity-75">Create Scenes</a>
                    </p>
                  </div>
                  <div className="flex-1"></div>
                </div>
              </div>
              </div>
            </Link>
            <Link href="/documentation">
              <div className="w-full m-4 my-8 relative h-56 rounded-lg bg-local bg-cover" style={{ backgroundImage: `url(${LearnOpenMazeInADay})` }}>
                <div className="flex ">
                  <div className="flex-1 absolute bottom-0">
                    <p className="bg-black px-2 rounded-lg rounded-tl-none rounded-br-none">

                      <a className="opacity-75">Learn OpenMaze in a day!</a>

                    </p>
                  </div>
                  <div className="flex-1"></div>
                </div>
              </div>
            </Link>
            <Link href="/documentation">
              <div className="w-full lg:w-1/2 px-4">
              <div className="relative mb-8 lg:m-0 h-56 lg:h-72 rounded-lg bg-local bg-cover" style={{ backgroundImage: `url(${AnalysisBackground})` }}>
                <div className="flex ">
                  <div className="flex-1 absolute bottom-0">
                    <p className="bg-black px-2 rounded-lg rounded-tl-none rounded-br-none">
                      <a className="opacity-75">Set Up</a>
                    </p>
                  </div>
                  <div className="flex-1"></div>
                </div>
              </div>
              </div>
            </Link>
            <Link href="/documentation">
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative h-56 lg:h-72 rounded-lg bg-local bg-cover" style={{ backgroundImage: `url(${RunParticipants})` }}>
                <div className="flex ">
                  <div className="flex-1 absolute bottom-0">
                    <p className="bg-black px-2 rounded-lg rounded-tl-none rounded-br-none">
                      <a className="opacity-75">Set Up</a>
                    </p>
                  </div>
                  <div className="flex-1"></div>
                </div>
              </div>
              </div>
            </Link>
          </div>
        </div>


      </div>
  </div>
);

export default Index;
