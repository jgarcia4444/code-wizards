import React from 'react';

const Tab = ({serviceInfo}) => {
    const {icon, title} = serviceInfo;
    return (
        <div className="bg-white bg-opacity-70 flex flex-row items-center py-1 px-6 mr-4 rounded hover:cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-opacity-100">
            {icon}
            <p className="">{title}</p>
        </div>
    )
};

export default Tab;