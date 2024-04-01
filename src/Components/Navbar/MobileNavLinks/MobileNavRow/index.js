import React from 'react';
import {CiServer, CiImageOn, CiCalendar, CiUser} from 'react-icons/ci';

const MobileNavRow = ({linkInfo}) => {

    const iconColor = '#fff';
    const iconSize = 24;

    const {path, linkText} = linkInfo;

    const computedIcon = () => {
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
        <div className="flex flex-row items-center justify-start text-white gap-1 transition-all duration-300 hover:cursor-pointer hover:scale-105 py-2 ">
            {computedIcon()}
            <p className="text-white">{linkText}</p>
        </div>
    )
}

export default MobileNavRow;