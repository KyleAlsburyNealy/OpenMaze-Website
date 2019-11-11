import '../style.css'
import Layout from '../components/layout'
import background from '../public/backgroundOverlay.svg'

const Index = () => (
    <>
        <div className="h-screen bg-blue-900">
            <h1 className="text-white px-8 pt-4 font-light">
                <span className="border-solid border-r border-white pr-2 mr-2 text-3xl">OpenMaze</span>
                <span className="text-l">Free 3D research software</span>
                <button className="bg-red-100 text-white py-2 px-8 rounded-full float-right">
                    Get Started
                </button>
            </h1>
            <img src={background} />
        </div>
    </>
);

export default Index;