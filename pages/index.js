import '../style.css'
import Layout from '../components/layout'
import Meta from "../components/meta";
import background from '../public/backgroundOverlay.svg'
import HeroDesktop from '../components/Hero/hero-desktop'
import InfoCard from '../components/InfoCard/info-card-desktop'
import background2 from '../public/background2.svg'
import codeJPG from '../public/code.jpg'
import configuration from '../public/configuration.jpg'
import scene from '../public/scene.jpg'
import Footer from "../components/footer";
import participant from "../public/RunParticipants.jpg"
import VerticalNavbar from '../components/Nav/vertical-nav'
import Navbar from '../components/navbar'
import Link from "next/link";

const Index = () => (
    <>
        <Meta />
        <div className="block md:hidden">
            <Navbar className="" />
        </div>


        <div className="h-screen bg-blue-900 relative hidden md:block">

            <h1 className="text-white px-8 pt-4 font-light">
                <span className="border-solid border-r border-white pr-2 mr-2 text-3xl">OpenMaze</span>
                <span className="text-l">Free 3D research software</span>
                <Link href="/tutorials">
                    <button className="bg-red-100 text-white py-2 px-8 rounded-full float-right">
                        Get Started
                    </button>
                </Link>

            </h1>
            <div className="absolute bottom-0 -mb-4">
                <div className="flex content-end flex-wrap">
                    <div className="w-3/12 -mt-32">
                        <VerticalNavbar />
                    </div>
                    <div className="w-9/12">
                        <HeroDesktop />
                    </div>
                </div>
            </div>
            <img src={background} />

        </div>

        <div className="my-12">
            <p className="absolute z-neg font-bold text-gray-300 text-4.5xl ml-2 mt-6 sm:text-8xl sm:ml-5 sm:mt-0 md:text-9xl lg:text-10xl xl:ml-28">
                Introduction
          </p>
        </div>
        <div className="my-40 relative">
            <InfoCard
                yt="https://www.youtube.com/watch?v=ZvMeEif-_lg"
                title="What is OpenMaze?"
                description="The advent of 3D virtual environments has given researchers the ability to study human cognition in novel ways, providing insight into many important scientific questions. However, too often these experimental designs are stifled by lack of resources or expertise. OpenMaze is an open source software package that provides and easy an intuitive platform to quickly create 3D environment tasks without programming expertise."
                 />
        </div>


        <div className="sm:mt-192">
            &nbsp;
        </div>
        <div className="my-8 w-full h-auto bg-blue-900">
            {/* <img className="w-full h-full -mr-12" src={background2} /> */}
            <div className="flex justify-center mx-12 md:mx-40 py-24 text-white">
                <div>
                    <p className="text-2xl font-bold">Why Use OpenMaze in your research?</p>
                    <ol className="font-light list-inside list-decimal mt-4">
                        <li>Create high quality spatial memory tasks without prior programming knowledge.</li>
                        <li>Build custom map layouts and landmarks.</li>
                        <li>Create custom experiment blocks that allow for both trial randomization and learning to criterion.</li>
                        <li>Dynamically place objects/goals throughout your trial environment.</li>
                        <li>Easily use your own 3D or 2D object sets.</li>
                        <li>Capture accurate behavioural data up to 60 times per second output to .csv.</li>
                        <li>Unleash the power of the Unity Asset store to create life-like experiences for your participants.</li>
                    </ol>
                </div>
            </div>

        </div>

        <div className="my-12">
            <p className="absolute z-neg font-bold text-gray-300 text-4.5xl ml-2 mt-6 sm:text-8xl sm:ml-5 sm:mt-0 md:text-9xl lg:text-10xl xl:ml-28">
                Get Started!
          </p>
        </div>

        <div className="lg:flex">
            <div className="md:w-5/12 w-full p-12 md:ml-8 md:mt-48 mt-24 md:mb-48 mb-4">
                <p className='font-bold text-2xl'>
                    Learn OpenMaze in a Day!
                </p>
                <p className='font-thin'>
                    The idea behind OpenMaze was to create a platform for academics and researchers in Cognitive 
                    Neuroscience to leverage quickly and requiring as little programming knowledge as possible. 
                    There exist several competing platform but they each lack on critical component: ease-of-use.
                    Hence, OpenMaze was created with simplicity in mind as we strived to make the zero-to-100 process
                    as quick and painless as possible. Better yet, this platform is currently being actively developed 
                    and quality changes are being pushed every day!
                </p>
            </div>
            <div className="md:w-7/12 w-full md:mt-24">
                <div className="sm:flex flex-wrap">
                    <Link href="tutorials">
                        <div className="bg-white sm:w-1/3 m-8 sm:m-4 h-auto">
                            <div className="p-4">
                                <p className='font-thin text-sm'>Step 1</p>
                                <p className='font-bold'>Installation and Setup</p>
                            </div>
                            <div className='w-full h-48'>
                                <img className='w-full h-full' src={codeJPG} />
                            </div>
                        </div>
                    </Link>
                    <Link href="tutorials">
                        <div className="bg-white sm:w-1/3 m-8 sm:m-4 h-auto">
                            <div className="p-4">
                                <p className='font-thin text-sm'>Step 2</p>
                                <p className='font-bold'>Create Scenes</p>
                            </div>
                            <div className='w-full h-48'>
                                <img className='w-full h-full' src={scene} />
                            </div>
                        </div>
                    </Link>
                    <Link href="tutorials">
                        <div className="bg-white sm:w-1/3 m-8 sm:m-4 h-auto">
                            <div className="p-4">
                                <p className='font-thin text-sm'>Step 3</p>
                                <p className='font-bold'>Configure Experiment</p>
                            </div>
                            <div className='w-full h-48'>
                                <img className='w-full h-full' src={configuration} />
                            </div>
                        </div>
                    </Link>
                    <Link href="tutorials">
                        <div className="bg-white sm:w-1/3 m-8 sm:m-4 h-auto">
                            <div className="p-4">
                                <p className='font-thin text-sm'>Step 4</p>
                                <p className='font-bold'>Testing and Coding</p>
                            </div>
                            <div className='w-full h-48'>
                                <img className='w-full h-full' src={participant} />
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>


        <div className="mt-64">
            <Footer />
        </div>



    </>
);

export default Index;