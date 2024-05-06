import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Navbar';

const Layout = ({children}) => {

    const [animatedClass, setAnimatedClass] = useState('opacity-0 translate-y-8 scale-0');

    useEffect(() => {
        setAnimatedClass('opacity-100 scale-100 translate-y-0');
    }, [])

    return (
        <>
            <Navbar />
            <div className={`w-full  overflow-x-hidden relative py-4 transition-all duration-500 ${animatedClass}`}>
                {children}
            </div>
        </>
    )
}

export default Layout;