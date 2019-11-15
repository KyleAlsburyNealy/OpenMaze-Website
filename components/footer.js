import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center bg-blue-900 text-white px-4 py-6">
      <div className="ml-1 mr-3 sm:mx-6">
        <p className="text-2xl">OpenMaze</p>
        <p>2019. All Rights Reserved</p>
      </div>
      <div className="mr-2 sm:flex">
        <div className="flex flex-col flex-wrap mb-4 mr-4 sm:mb-0">
          <p className="text-lg font-bold mb-2">Pages</p>
          <Link href="/">
            <a className="mb-1">Home</a>
          </Link>
          <Link href="/documentation">
            <a className="mb-1">Documentation</a>
          </Link>
          <Link href="/tutorials">
            <a className="mb-1">Tutorials</a>
          </Link>
          <Link href="/contact">
            <a className="mb-1">Contact</a>
          </Link>
        </div>

        <div className="flex flex-wrap sm:flex-col items-center sm:ml-16">
          <i className="fab fa-lg fa-facebook-f mr-3 my-2 sm:my-3 text-gray-300 hover:text-white"></i>
          <i className="fab fa-lg fa-twitter mr-3 my-2 sm:my-3 text-gray-300 hover:text-white"></i>
          <i className="fab fa-lg fa-youtube mr-3 my-2 sm:my-3 text-gray-300 hover:text-white"></i>
        </div>
      </div>
    </footer>
  );
}
