import React, {useEffect, useState} from 'react';

const TypingComponent = ({text}) => {

    const [charIndex, setCharIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState("opacity-0")

    useEffect(() => {
        let nextIndex = charIndex + 1;
        console.log(`char index from ${text}, index: ${charIndex}`)
        if (charIndex === 0) {
            setTimeout(() => {
                setCharIndex(nextIndex);
                setAnimationClass("opacity-100")
            }, 1500)
        } else {
            setTimeout(() => {
                if (nextIndex !== text.length + 1) {
                    setCharIndex(nextIndex);
                }
            }, 400);
        }
    },[charIndex]);

    const presentText = () => {
        let computedString = "";
        if (charIndex > 0) {
            computedString = text.slice(0, charIndex);
        }
        return computedString;
    }

    return (
        <p className={`text-white text-4xl duration-500 transition-all ${animationClass}`}>{presentText()}</p>
    )
}

export default TypingComponent