import React, {useState} from 'react';

import CarouselProject from './CarouselProject';
import CarouselButtons from './CarouselButtons';

const ProjectCarousel = ({selectedProjects}) => {

    const [projectIndex, setProjectIndex] = useState(0);

    const presentProject = () => {
        let selectedProject = selectedProjects[projectIndex];
        return <CarouselProject projectInfo={selectedProject}/>
    };

    const nextPress = () => {
        if (projectIndex === selectedProjects.length - 1) {
            setProjectIndex(0);
        } else {
            let nextIndex = projectIndex + 1;
            setProjectIndex(nextIndex);
        }
    }

    const previousPress = () => {
        if (projectIndex === 0) {
            setProjectIndex(selectedProjects.length - 1);
        } else {
            let previousIndex = projectIndex - 1;
            setProjectIndex(previousIndex);
        }
    }

    return (
        <div className="w-full relative">
            <CarouselButtons nextPress={nextPress} previousPress={previousPress} />
            {presentProject()}
        </div>
    )
};


export default ProjectCarousel;