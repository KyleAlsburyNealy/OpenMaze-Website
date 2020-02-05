import Layout from "../components/layout";

const sectionLinkStyle = "block py-2";

export default function Documentation() {
  return (
    <>
      <Layout>
        <div className="flex flex-wrap justify-center mx-4">
          <div className="text-white bg-dark-light p-4 rounded-lg">
            <p className="opacity-75">Contents</p>
            <a href="#introduction" className={sectionLinkStyle}>
              Introduction
            </a>
            <hr className="opacity-75 w-56" />
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
            <hr className="opacity-75 w-56" />

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
          <div></div>
        </div>
      </Layout>
    </>
  );
}
