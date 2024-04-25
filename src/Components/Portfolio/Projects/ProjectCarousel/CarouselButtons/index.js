import React from 'react';

const CarouselButtons = ({nextPress, previousPress}) => {

    const buttonClass = "bg-black shadow-black shadow w-8 h-8 text-white font-bold flex items-center justify-center rounded-full hover:cursor-pointer hover:scale-110 transition-all duration-300"

    const previousButton = (
        <div onClick={previousPress} className={`${buttonClass}`}>
            &lt;
        </div>
    )
    const nextButton = (
        <div onClick={nextPress} className={`${buttonClass}`}>
            &gt;
        </div>
    )

    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-row items-center justify-between">
            {previousButton}
            {nextButton}
        </div>
    )
}

export default CarouselButtons;