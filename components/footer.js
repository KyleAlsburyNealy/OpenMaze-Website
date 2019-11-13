import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between bg-blue-900 text-white px-4 py-10">
      <div className="mx-3">
        <p>OpenMaze</p>
        <p>2019. All Rights Reserved</p>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col flex-wrap">
          <p>Pages</p>
          <Link href="/">
            <a className="">Home</a>
          </Link>
          <Link href="/documentation">
            <a className="">Documentation</a>
          </Link>
          <Link href="/tutorials">
            <a className="">Tutorials</a>
          </Link>
          <Link href="/contact">
            <a className="">Contact</a>
          </Link>
        </div>

        <div className="flex flex-wrap">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    </footer>
  );
}
