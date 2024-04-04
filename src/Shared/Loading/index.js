import React, {useEffect, useState} from 'react';

import magicStaff from '../../Media/Loader/magic-staff.png'

const Loading = () => {

    const [animationStep, setAnimationStep] = useState(0);

    const animationCypher = {
        0: "opacity-100 translate-y-0",
        1: "opacity-100 -translate-y-6",
        2: "opacity-100 translate-y-2",
        3: "opacity-100 -translate-y-12",
    }

    const runAnimation = () => {
        // try a while loop
    }

    useEffect(() => {
        runAnimation();
    },[])

    return (
        <div className="w-full h-96 flex items-center justify-center">
            <div className={`w-24 h-24 opacity-0 duration-200 transition-all ${animationCypher[animationStep]}`}>
                <img src={magicStaff} alt="" />
            </div>
        </div>
    )
}

export default Loading