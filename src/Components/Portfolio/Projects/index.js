import React from 'react';
import { connect } from 'react-redux';
import useWindowDimensions from '../../../Hooks/useWindowDimensions';

import ProjectCard from './ProjectCard';

const Projects = ({portfolioInfo, webSelected}) => {

    const {width} = useWindowDimensions()

    const renderProjects = () => {
        let selectedProjects = webSelected === true ? portfolioInfo.web : portfolioInfo.mobile;
        if (width < 688) {
            return <ProjectsCarousel selectedProjects={selectedProjects}/>
        } else {
            return selectedProjects.map((projectInfo, i) => <ProjectCard key={`${i}-${projectInfo.title}`} info={projectInfo} />)
        }
    }

    return (
<<<<<<< HEAD
        <div className="flex flex-row gap-4 overflow-x-auto w-full py-4">
=======
        <div className="flex flex-row flex-wrap gap-4 w-full py-4">
>>>>>>> 069d888
            {renderProjects()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        webSelected: state.portfolio.filter.webSelected,
    }
}

export default connect(
    mapStateToProps,
    null
)(Projects);