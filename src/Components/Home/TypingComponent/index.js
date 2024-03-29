import React, {useEffect, useState} from 'react';

const TypingComponent = ({text}) => {

    const [charIndex, setCharIndex] = useState(0)

    useEffect(() => {
        const typingInterval = setInterval(() => {
            console.log("Interval triggered!");
            var newCharIndex = charIndex + 1;
            if (newCharIndex > text.length) {
                clearInterval(typingInterval);
            } else {
                setCharIndex(newCharIndex);
            }
            console.log("Char index: " + charIndex);
        }, 500) 
        return () => {
            clearInterval(typingInterval);
        }
    },[])

    return (
        <p className="text-white text-2xl">{text.slice(0, charIndex)}</p>
    )
}

export default TypingComponent