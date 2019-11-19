import Link from "next/link";
import { Component } from "react";
import "../../style.css";

class VerticalNavbar extends Component {
    state = {
        // start with the menu closed
        burger: false
    };

    burgerOpen = () => {
        this.setState({ burger: !this.state.burger });
    };

    render() {
        return (
            <>
                <div className="flex flex-wrap sm:flex-col items-center">
                    <ul>
                        <li className="border-solid border-l border-white pl-4">
                            <Link href="/">
                                <a className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-6">
                                    Home
                        </a>
                            </Link>
                        </li>
                        <li className="my-8">
                            <Link href="/tutorials">
                                <a className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-6">
                                    Documentation
                        </a>
                            </Link>
                        </li>
                        <li className="my-8">
                            <Link href="/tutorials">
                                <a className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-6">
                                    Tutorials
                        </a>
                            </Link>
                        </li>
                        <li className="my-4">
                            <Link href="/contact">
                                <a className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-6">
                                    Contact
                        </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-wrap sm:flex-col items-center text-white mt-48">
                    <div className="flex flex-wrap sm:flex-col w-32">
                        <a target={"_blank"} href="https://www.facebook.com/OpenMaze/">
                        <i className="fab fa-lg fa-facebook-f mr-6 my-2 sm:my-3 opacity-53 hover:opacity-90"></i>
                        </a>
                        <a target={"_blank"} href="https://twitter.com/K_B_Nealy">
                        <i className="fab fa-lg fa-twitter mr-6 my-2 sm:my-3 opacity-53 hover:opacity-90"></i>
                        </a>
                        <a target={"_blank"} href="https://www.youtube.com/channel/UC1fKw1vt0YQyMfDg34ugHQA">
                        <i className="fab fa-lg fa-youtube mr-6 my-2 sm:my-3 opacity-53 hover:opacity-90"></i>
                        </a>
                    </div>
                </div>
            </>
        );
    }
}

export default VerticalNavbar;
