
import React from 'react';


const NavLink = ({linkInfo}) => {

    const {path, linkText} = linkInfo

    return (
        <a href={path} className="block text-white">{linkText}</a>
    )
}

export default NavLink;