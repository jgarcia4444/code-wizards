import React from 'react'
import TitleFirstLetter from '../../Shared/TitleFirstLetter';
import TypingComponent from '../../Components/Home/TypingComponent';

const Home = () => {

    return (
        <div className="w-full flex items-center justify-center h-screen">
            <div className="w-5/6">
                <div className="flex flex-row items-end justify-center">
                    <TitleFirstLetter text="C" />
                    <TypingComponent text="ode" />
                </div>
                <div className="flex flex-row items-end justify-center">
                    <TitleFirstLetter text="W" />
                    <TypingComponent text="izards" />
                </div>
            </div>
        </div>
    )
};

export default Home;