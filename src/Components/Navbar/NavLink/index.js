
import React from 'react';

import { CiServer, CiUser, CiImageOn, CiCalendar } from "react-icons/ci";


const NavLink = ({linkInfo}) => {

    const iconSize = 24;
    const iconColor = "#fff";

    const {path, linkText} = linkInfo;

    const computeIcon = () => {
        switch(linkText) {
            case "Services":
                return <CiServer color={iconColor} size={iconSize} />
            case "Portfolio":
                return <CiImageOn color={iconColor} size={iconSize}/>
            case "Contact":
                return <CiCalendar color={iconColor} size={iconSize} />
            default:
                return <CiUser color={iconColor} size={iconSize} />
        }
    }

    return (
        <a href={path} className="block text-white transition-all duration-300 hover:scale-105">
            <div className="flex flex-row items-center justify-center gap-2">
                {computeIcon()}
                <p className="font-thin hover:font-bold transition-all duration-300">{linkText}</p>
            </div>
        </a>
    )
}

export default NavLink;