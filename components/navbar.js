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
        <div className="block lg:hidden">
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
          } w-full block lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <Link href="/">
              <a className={linkStyle}>Home</a>
            </Link>
            <Link href="/tutorials">
              <a className={linkStyle}>Video Tutorials</a>
            </Link>
            <a
              className={linkStyle}
              href="https://github.com/DuncanLab/OpenMaze/wiki/Contributing"
              target="_blank"
            >
              Contribute
            </a>
            <Link href="/contact">
              <a className={linkStyle}>Contact</a>
            </Link>
            <Link href="/documentation">
              <a
                className={`block mt-4 lg:inline-block lg:mt-0 text-white mr-12 inline-block hover:bg-red-500 w-auto border border-red-500 py-2 px-2 lg:px-4 rounded-full`}
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
