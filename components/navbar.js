import Link from 'next/link';
import { Component } from 'react';
import '../style.css'

class Navbar extends Component {

    state = {
        // start with the menu closed
        burger: false
    }

    burgerOpen = () => {
        this.setState({ burger: !this.state.burger })
    }

    render() {
        return (
            <nav className="flex items-center justify-between flex-wrap bg-blue-900 px-5 py-4 font-roboto">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="text-xl tracking-tight">OpenMaze</span>
                </div>
                <div className="block lg:hidden">
                    <button onClick={this.burgerOpen} className="flex items-center px-3 text-blue-100 hover:text-white hover:border-white">
                        <svg className="fill-current h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                            {this.state.burger ? (
                                <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            ) : (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                )}
                        </svg>
                    </button>
                </div>
                <div className={`${this.state.burger ? "block" : "hidden"} w-full block lg:flex lg:items-center lg:w-auto`}>
                    <div className="text-sm lg:flex-grow">
                        <Link href="/">
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-12">
                                Home
                            </a>
                        </Link>
                        <Link href="/documentation">
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-12">
                                Documentation
                        </a>
                        </Link>
                        <Link href="/tutorials">
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-12">
                                Tutorials
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-6">
                                Contact
                        </a>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
