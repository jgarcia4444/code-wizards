import React, {useState} from 'react';

import { CiMenuFries, CiSquareRemove } from "react-icons/ci";

import MobileNavRow from './MobileNavRow';

const MobileNavLinks = ({links}) => {

    const iconColor = "#fff";
    const iconSize = 30;
    const defaultClass = "-right-48 opacity-0"

    const [animatedClassString, setAnimatedClassString] = useState(defaultClass)


    const renderMobileNavRows = () => {
        return links.map((linkInfo, i) => <MobileNavRow linkInfo={linkInfo} key={`${i}-${linkInfo.linkText}`} /> )
    }

    return (
        <div className="relative">
            <div onClick={() => setAnimatedClassString("right-0 -z-10") } className="hover:cursor-pointer transition-all duration-300 hover:scale-105">
                <CiMenuFries color={iconColor} size={iconSize} />
            </div>
            <div className={`trainsition-all duration-700 absolute p-2 bg-black top-0 ${animatedClassString} z-10`}>
                <div className="absolute -top-4 right-0 transition-all duration-300 hover:cursor-pointer hover:scale-110">
                    <CiSquareRemove onClick={() => setAnimatedClassString(defaultClass)} size={iconSize} color={iconColor} />
                </div>
                {renderMobileNavRows()}
            </div>
        </div>
    )
}

export default MobileNavLinks;