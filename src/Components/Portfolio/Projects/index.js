import React from 'react';
import { connect } from 'react-redux';

import useWindowDimensions from '../../../Hooks/useWindowDimensions';

import ProjectCard from './ProjectCard';
import ProjectCarousel from './ProjectCarousel';

const Projects = ({portfolioInfo, webSelected}) => {

    const {width} = useWindowDimensions()

    const renderProjects = () => {
        let selectedProjects = webSelected === true ? portfolioInfo.web : portfolioInfo.mobile;
        if (width < 688) {
            return <ProjectCarousel selectedProjects={selectedProjects}/>
        } else {
            return selectedProjects.map((projectInfo, i) => <ProjectCard key={`${i}-${projectInfo.title}`} info={projectInfo} />)
        }
    }

    return (
        <div className="md:flex md:flex-row md:flex-wrap items-center justify-between p-2 gap-2 overflow-x-auto  bg-white bg-opacity-10 mt-2 w-full rounded">
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