import Layout from "../components/layout";
import DocumentSection from "../components/documentSection";

const sectionLinkStyle = "block py-1 text-lg";

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
      <Layout>
        <div className="flex flex-wrap justify-center m-0 mx-4 md:mx-0">
          <div className="text-white bg-dark-light p-4 rounded-lg w-screen md:w-64 md:left-0">
            <div className="md:fixed">
              <p className="opacity-75">Contents</p>
              <a href="#introduction" className={sectionLinkStyle}>
                Introduction
              </a>

              <p className="opacity-75 mt-4 md:mb-2 md:mt-8">
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
                Goals
              </a>
              <a href="#landmarks" className={sectionLinkStyle}>
                Landmarks
              </a>

              <p className="opacity-75 mt-4 md:mb-2 md:mt-8">Tutorials</p>
              <hr className="opacity-75 w-full mb-2 md:hidden" />

              <a href="#create" className={sectionLinkStyle}>
                Create Experiment
              </a>
              <a href="#build" className={sectionLinkStyle}>
                Build a Scene
              </a>
              <a href="#export" className={sectionLinkStyle}>
                Export Data
              </a>
              <a href="#troubleshooting" className={sectionLinkStyle}>
                Troubleshooting
              </a>
            </div>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            {sectionData.map(section => (
              <div id={section.id} className="pt-6">
                <DocumentSection
                  subtitle={section.subtitle}
                  title={section.title}
                  description={section.description}
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
