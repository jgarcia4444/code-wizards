import React from 'react';

const Filter = ({text}) => {

    return (
        <div className="text-white px-8 text-lg font-thin border-2 border-white rounded hover:cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black">{text}</div>
    )
}

export default Filter;