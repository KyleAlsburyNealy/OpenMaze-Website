import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row sm:items-center justify-start sm:justify-between bg-blue-900 text-white px-6 py-6">
      <div className="mt-3 mb-5 sm:my-6 sm:mx-6">
        <p className="text-2xl mb-1">OpenMaze</p>
        <p className="text-sm">2019. All Rights Reserved</p>
      </div>
      <div className="mr-2 sm:flex">
        <div className="flex flex-col flex-wrap mb-5 mr-4 sm:mb-0">
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

        <div className="flex flex-wrap sm:flex-col items-center sm:ml-20">
          <i className="fab fa-lg fa-facebook-f mr-6 my-2 sm:my-3 opacity-53 hover:opacity-90"></i>
          <i className="fab fa-lg fa-twitter mr-6 my-2 sm:my-3 opacity-53 hover:opacity-90"></i>
          <i className="fab fa-lg fa-youtube mr-6 my-2 sm:my-3 opacity-53 hover:opacity-90"></i>
        </div>
      </div>
    </footer>
  );
}
