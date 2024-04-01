import React from 'react';
import Navbar from '../Components/Navbar';

const Layout = ({children}) => {

    return (
        <div className="w-full h-screen overflow-y-auto overflow-x-hidden relative">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout;