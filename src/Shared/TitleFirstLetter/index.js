import React, {useEffect, useState} from 'react';


const TitleFirstLetter = ({text}) => {

    const [textAnimation, setTextAnimation] = useState("");

    useEffect(() => {
        setTextAnimation("opacity-100 scale-100 translate-y-0");
    })

    return (
        <h2 className={`text-6xl text-white font-bold transition-all duration-1000 opacity-0 scale-0 translate-y-2  ${textAnimation}`}>{text}</h2>
    )
};

export default TitleFirstLetter;