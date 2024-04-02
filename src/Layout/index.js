import React from 'react';
import Navbar from '../Components/Navbar';

const Layout = ({children}) => {

    return (
        <div className="w-full h-screen overflow-y-hidden overflow-x-hidden relative py-4">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout;