import React from 'react';

import NavLink from './NavLink';

const Navbar = () => {

    const links = [
        {path: "/services", linkText: "Services"},
        {path: "/portfolio", linkText: "Portfolio"},
        {path: "/contact", linkText: "Contact"},
    ]

    const renderNavLinks = () => {
        return links.map((linkInfo, i) => <NavLink linkInfo={linkInfo} key={`${i}-${linkInfo.linkText}`} />)
    }

    return (
        <div className="flex flex-row items-between justify-center">
            <div className=""></div>
            <div className="flex flex-row items-end justify-center">
                {renderNavLinks()}
            </div>
        </div>
    )
};

export default Navbar;