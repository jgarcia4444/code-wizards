import React, {useState} from 'react';

import { CiMenuFries, CiSquareRemove } from "react-icons/ci";

import MobileNavRow from './MobileNavRow';

const MobileNavLinks = ({links}) => {

    const iconColor = "#fff";
    const iconSize = 30;

    const [showMobilenNav, setShowMobileNav] = useState(false);


    const renderMobileNavRows = () => {
        return links.map((linkInfo, i) => <MobileNavRow linkInfo={linkInfo} key={`${i}-${linkInfo.linkText}`} /> )
    }

    const presentMenu = () => {
        if (showMobilenNav === true) {
            return (
                <div className={`top-0 transition-all duration-700 absolute bg-black ${showMobilenNav === true ? "opacity-100 right-0" : "opacity-0 right-12"} z-10 p-2`}>
                    <div className="absolute -top-6 right-0 transition-all duration-300 hover:cursor-pointer hover:scale-110">
                        <CiSquareRemove onClick={() => setShowMobileNav(false)} size={iconSize} color={iconColor} />
                    </div>
                    {renderMobileNavRows()}
                </div>
            )
        } else {
            return (
                <div onClick={() => setShowMobileNav(true) } className="hover:cursor-pointer transition-all duration-300 hover:scale-105">
                    <CiMenuFries color={iconColor} size={iconSize} />
                </div>
            )
        }
    }

    return (
        <div className="relative z-10 ">
            {presentMenu()}
        </div>
    )
}

export default MobileNavLinks;