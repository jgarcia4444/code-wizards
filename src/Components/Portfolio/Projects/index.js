import React from 'react';
import { connect } from 'react-redux';

import ProjectCard from './ProjectCard';

const Projects = ({portfolioInfo, webSelected}) => {

    const renderProjects = () => {
        let selectedProjects = webSelected === true ? portfolioInfo.web : portfolioInfo.mobile;
        return selectedProjects.map((projectInfo, i) => <ProjectCard key={`${i}-${projectInfo.title}`} info={projectInfo} />)
    }

    return (
        <div className="flex flex-row gap-4 overflow-x-auto w-full py-4">
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