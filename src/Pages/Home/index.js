import React from 'react'
import TitleFirstLetter from '../../Shared/TitleFirstLetter';
import TypingComponent from '../../Components/Home/TypingComponent';
import Layout from '../../Layout';

const Home = () => {

    return (
        <Layout>
            <div className="w-full flex items-center justify-center pt-24 px-4">
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
        </Layout>
    )
};

export default Home;