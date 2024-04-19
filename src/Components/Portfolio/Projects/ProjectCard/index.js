import React from 'react';

import testImg from '../../../../Media/Services/websites.png'

const ProjectCard = ({info}) => {
    
    console.log(info);

    const {title, subTitle, websiteUrl, img} = info;

    return (
        <div className="relative w-80 h-48 rounded">
            <img src={testImg} alt="" className="absolute top-0 left-0 w-full h-full rounded -z-10" />
            <a href={websiteUrl} target="_blank" className="">
                <div className="w-full h-full bg-white bg-opacity-60 flex flex-row z-10 p-2 items-end transition-all duration-500 hover:bg-opacity-20 hover:cursor-pointer hover:scale-105 ">
                    <div className="flex flex-col">
                        <h4 className="text-xl font-bold font-serif">{title}</h4>
                        <h6 className="text-lg font-light">{subTitle}</h6>
                    </div>
                </div>
            </a>
        </div>
    )
};

export default ProjectCard;