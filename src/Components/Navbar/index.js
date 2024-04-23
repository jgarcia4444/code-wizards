import React, {useState, useEffect} from 'react';

import NavLink from './NavLink';
import MobileNavLinks from './MobileNavLinks';

import codeWizardsLogo from '../../Media/Logo/code-wizards-logo.png';
import useWindowDimensions from '../../Hooks/useWindowDimensions';

const Navbar = () => {

    const {width} = useWindowDimensions();

    const [animatedClassName, setAnimatedClassName] = useState("opacity-0 translate-y-8 scale-0");

    const links = [
        {path: "/services", linkText: "Services"},
        {path: "/portfolio", linkText: "Portfolio"},
        {path: "/contact", linkText: "Contact"},
    ];

    const renderNavLinks = () => {
        
            if (width < 688) {
                return <MobileNavLinks links={links} />
            } else {
                return links.map((linkInfo, i) => <NavLink linkInfo={linkInfo} key={`${i}-${linkInfo.linkText}`} />)
            }
    }

    useEffect(() => {
        setAnimatedClassName("opacity-100 translate-y-0 scale-100")
    }, [])

    return (
        <div className={`flex flex-row items-center justify-between w-full absolute top-0 px-4 transition-all duration-1000 py-4 ${animatedClassName}`}>
            <div className="">
                <a href="/" className="block hover:scale-105 transition-all duration-300">
                    <img src={codeWizardsLogo} alt="" className="w-24 h-24" />
                </a>
            </div>
            <div className="flex flex-row items-end justify-center gap-12">
                {renderNavLinks()}
            </div>
        </div>
    )
};

export default Navbar;