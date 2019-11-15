import React from "react";
import Hero1 from '../../public/computer-keyboard-connection-contemporary-1714208.jpg'
import Hero2 from '../../public/chris-liverani-dBI_My696Rk-unsplash.jpg'
import Hero3 from '../../public/RunParticipants.jpg'

export default function HeroDesktop() {
    return (
        <div className="flex mb-4">
            <div className="w-2/3 bg-gray-400 h-12">
                <img src={Hero1}/>
            </div>
            <div className="w-1/3 bg-gray-500 h-12">
                <img src={Hero2}/>
                <img src={Hero3}/>
            </div>
        </div>
    )
}