import React from 'react';
import { connect } from 'react-redux';

import ProjectCard from './ProjectCard';

const Projects = ({portfolioInfo, webSelected}) => {

    const renderProjects = () => {
        let selectedProjects = webSelected === true ? portfolioInfo.web : portfolioInfo.mobile;
        return selectedProjects.map((projectInfo, i) => <ProjectCard key={`${i}-${projectInfo.title}`} info={projectInfo} />)
    }

    return (
        <div className="w-full h-1/2 overflow-y-auto flex flex-row flex-wrap justify-start items-center gap-12 mt-4">
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