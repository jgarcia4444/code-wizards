import React from 'react';

const ProjectCard = ({info}) => {

    const {title, subTitle, websiteUrl, img} = info;

    return (
        <div className="relative w-64 h-48 rounded">
            <img src="" alt="" className="absolute top-0 left-0 w-full h-full rounded" />
            <div className="w-full h-full bg-white bg-opacity-10">
                <h4 className="">{title}</h4>
            </div>
        </div>
    )
};

export default ProjectCard;