import React from 'react';

const Tab = ({serviceInfo}) => {
    const {icon, title} = serviceInfo;
    return (
        <div className="bg-white bg-opacity-10 flex flex-row items-center gap-1 py-2 px-8 mr-4 rounded hover:cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-opacity-50">
            {icon}
            <p className="text-white">{title}</p>
        </div>
    )
};

export default Tab;