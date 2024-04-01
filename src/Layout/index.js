import React from 'react';
import Navbar from '../Components/Navbar';

const Layout = ({children}) => {

    return (
        <div className="w-full h-full overflow-y-auto overflow-x-hidden">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout;