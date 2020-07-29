import React from "react";
import Hero1 from '../../public/computerKeyboard.jpg'
import Hero2 from '../../public/chris-liverani-dBI_My696Rk-unsplash.jpg'
import Hero3 from '../../public/RunParticipants.jpg'
import PlaySVG from '../../public/play_circle_outline-24px.svg'
import Link from "next/link";

export default function HeroDesktop() {
    return (
        <Link href="tutorials">
        <div className="flex mb-4 h-auto w-full">
            <div className="w-2/3 bg-gray-400 h-full">
            <div className="relative h-full">
                    <div className="m-2 absolute text-white text-xs h-full w-full">
                        <div className="flex content-between flex-wrap h-full">
                            <div className="">
                                <p>&#9679; Introduction</p>
                            </div>
                            <div className="flex justify-between py-2 w-11/12">
                                <div className="w-auto">
                                    <p className="text-2xl">Learn OpenMaze in a Day!</p>
                                    <p>Tutorials</p>
                                    <p> &nbsp; </p>
                                </div>
                                <div className="w-auto">
                                    <img className="p-2 w-12" src={PlaySVG} />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <img className="" src={Hero1} />
                </div>
            </div>
            <div className="w-1/3 bg-gray-500 h-full">
                <div className="relative h-full">
                    <div className="m-2 absolute text-white text-xs h-full w-full">
                        <div className="flex content-between flex-wrap h-full">
                            <div className="">
                                <p>&#9650; Documentation</p>
                            </div>
                            <div className="flex justify-between py-2 w-11/12">
                                <div className="w-auto">
                                    <p className="text-lg">Configure Your Maze</p>
                                    <p>Documentation</p>
                                    <p> &nbsp; </p>
                                </div>
                                <div className="w-auto">
                                    <img className="p-2 w-12" src={PlaySVG} />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <img className="" src={Hero3} />
                </div>
                <div className="relative h-full">
                <div className="m-2 absolute text-white text-xs h-full w-full">
                        <div className="flex content-between flex-wrap h-full">
                            <div className="">
                                <p>&#9650; Documentation</p>
                            </div>
                            <div className="flex justify-between py-2 w-11/12">
                                <div className="w-auto">
                                    <p className="text-lg">Data Collection</p>
                                    <p>Documentation</p>
                                    <p> &nbsp; </p>
                                </div>
                                <div className="w-auto">
                                    <img className="p-2 w-12" src={PlaySVG} />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <img className="" src={Hero2} />
                </div>
            </div>
        </div>
        </Link>
    )
}