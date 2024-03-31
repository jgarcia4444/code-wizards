import React, {useEffect, useState} from 'react';


const TitleFirstLetter = ({text}) => {

    const [textAnimation, setTextAnimation] = useState("opacity-0 scale-0 translate-y-8");

    useEffect(() => {
        setTimeout(() => {
            setTextAnimation("opacity-100 scale-100 translate-y-1");
        }, 500)
    },[])


    return (
        <h2 className={`text-8xl text-white font-bold transition-all duration-1000  ${textAnimation}`}>{text}</h2>
    )
};

export default TitleFirstLetter;