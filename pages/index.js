import "../style.css";
import Link from "next/link";
import background from "../public/backgroundOverlay.svg";
import background2 from "../public/background2.svg";
import map from "../public/map.svg";

// Components
import Layout from "../components/layout";
import HeroDesktop from "../components/Hero/hero-desktop";
import HeroMobile from "../components/Hero/hero-mobile";
import InfoCard from "../components/InfoCard/info-card-desktop";
import Footer from "../components/footer";
import VerticalNavbar from "../components/Nav/vertical-nav";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";

const Index = () => (
  <div>
    <img
      src={map}
      alt=""
      className="z-neg absolute h-screen w-full md:w-screen md:h-screen"
    />
    <Layout>
      <div className="flex flex-wrap text-white mx-6">
        <div>
          <p className="text-2xl font-bold">
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
        {/* Hero */}
      </div>
    </Layout>
  </div>
);

export default Index;
