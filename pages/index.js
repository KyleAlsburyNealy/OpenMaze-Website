import '../style.css'
import Layout from '../components/layout'
import Meta from "../components/meta";
import background from '../public/backgroundOverlay.svg'
import HeroDesktop from '../components/Hero/hero-desktop'
import InfoCard from '../components/InfoCard/info-card-desktop'

const Index = () => (
    <>
        <Meta />
        <div className="h-screen bg-blue-900 relative">

            <h1 className="text-white px-8 pt-4 font-light">
                <span className="border-solid border-r border-white pr-2 mr-2 text-3xl">OpenMaze</span>
                <span className="text-l">Free 3D research software</span>
                <button className="bg-red-100 text-white py-2 px-8 rounded-full float-right">
                    Get Started
                    </button>
            </h1>
            <div className="absolute bottom-0 -mb-4">
                <div className="flex content-end flex-wrap">
                    <div className="w-1/3">
                        Nav Component
                    </div>
                    <div className="w-2/3">
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
        <InfoCard 
            yt="https://www.youtube.com/watch?v=ZvMeEif-_lg" 
            title="What is OpenMaze?" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nulla vitae ex blandit euismod vitae et ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget lectus a orci sagittis rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus in risus sit amet enim lobortis venenatis. Pellentesque ac tempus orci. Nunc vulputate in lorem non finibus." 
        />


    </>
);

export default Index;