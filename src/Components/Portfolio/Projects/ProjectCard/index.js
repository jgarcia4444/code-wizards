import React from 'react';

const ProjectCard = ({info}) => {
    
    console.log(info);

    const {title, subTitle, websiteUrl, img} = info;

    return (
<<<<<<< HEAD
        <div className="relative rounded w-80 h-48">
            <img src={img} alt="" className=" rounded -z-10 w-80" />
=======
        <div className="relative rounded">
            <img src={img} alt="" className="w-full rounded -z-10" />
>>>>>>> 069d888
            <a href={websiteUrl} target="_blank" className="">
                <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-60 flex flex-row z-10 p-2 items-end transition-all duration-500 hover:bg-opacity-0 hover:cursor-pointer hover:scale-105 hover:text-transparent">
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