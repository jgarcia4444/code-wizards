import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import CarouselProject from './CarouselProject';
import CarouselButtons from './CarouselButtons';

const ProjectCarousel = ({selectedProjects, webSelected}) => {

    const [projectIndex, setProjectIndex] = useState(0);

    const presentProject = () => {
        var selectedProject;
        if (webSelected === false) {
            if (projectIndex > selectedProjects.length - 1) {
                setProjectIndex(selectedProjects.length - 1);
            }
            selectedProject = selectedProjects[projectIndex];
        } else {
            selectedProject = selectedProjects[projectIndex];
        }
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
    };

    return (
        <div className="w-full relative">
            <CarouselButtons nextPress={nextPress} previousPress={previousPress} />
            {presentProject()}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        webSelected: state.portfolio.filter.webSelected,
    }
}

export default connect(
    mapStateToProps, 
    null
)(ProjectCarousel);