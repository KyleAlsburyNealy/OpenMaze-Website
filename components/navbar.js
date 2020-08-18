import Link from "next/link";
import { Component } from "react";
import "../style.css";
import RouterReturn from "./router-return";

const linkStyle = "block mt-4 lg:inline-block lg:mt-0 text-white mr-12 ml-2";

class Navbar extends Component {
  state = {
    // start with the menu closed
    burger: false
  };
  burgerOpen = () => {
    this.setState({ burger: !this.state.burger });
  };

  render() {
    return (
      
      <nav className="flex items-center justify-between flex-wrap px-5 py-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <RouterReturn></RouterReturn>
        </div>
        <div className="block sm:hidden">
          <button
            onClick={this.burgerOpen}
            className="flex items-center px-3 text-blue-100 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-5 w-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              {this.state.burger ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            this.state.burger ? "block" : "hidden"
          } w-full block flex sm:flex sm:items-center sm:inline-block sm:w-auto`}
        >
          <div className="text-sm sm:inline-block font-normal sm:flex-grow">

            <a
              className={`block text-center mt-4 sm:inline-block sm:mt-0 text-white sm:ml-2  lg:ml-12 sm:mr-2  lg:mr-12   w-auto  py-2 px-2 lg:px-4 rounded-full`}
              href="https://github.com/DuncanLab/OpenMaze/wiki/Contributing"
              target="_blank"
            >
              Contribute
            </a>
            <Link href="/contact">
              <a className={`block text-center mt-4 sm:inline-block sm:mt-0 text-white sm:mr-2  lg:mr-12  e w-auto  py-2 px-2 lg:px-4 rounded-full`}>Contact</a>
            </Link>


              <a  href="https://psyarxiv.com/bsj47"
                className={`block text-center mt-4 sm:inline-block sm:mt-0 text-white sm:mr-2  lg:mr-12  hover:bg-tutorial-blue w-auto border-2 border-tutorial-blue py-2 px-2 lg:px-4 rounded-full`}
              >
                Preprint
              </a>
            
            <Link href="/tutorials">
            <a
                className={`block text-center mt-4 sm:inline-block sm:mt-0 text-white sm:mr-2 lg:mr-12  hover:bg-tutorial-yellow w-auto border-2 border-tutorial-yellow py-2 px-2 lg:px-4 rounded-full`}
              >
                Video Tutorials
              </a>
            </Link>
            <Link href="/documentation">
              <a
                className={`block text-center mt-4 sm:inline-block sm:mt-0 text-white sm:mr-2 lg:mr-12 hover:bg-tutorial-red w-auto border-2 border-tutorial-red py-2 px-2 lg:px-4 rounded-full`}
              >
                User Manual
              </a>
            </Link>
          </div>
        </div>
      </nav>

    );
  }
}

export default Navbar;
