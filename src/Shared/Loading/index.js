import React from 'react';

import magicStaff from '../../Media/Loader/magic-staff.png'

const Loading = () => {

    return (
        <div className="w-full h-96 flex items-center justify-center">
            <div className={`w-24 h-24`}>
                <img className="animate-pulse" src={magicStaff} alt="" />
                <p className=" text-white animate-pulse">Loading...</p>
            </div>
        </div>
    )
}

export default Loading