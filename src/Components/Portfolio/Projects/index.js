import React from 'react';
import { connect } from 'react-redux';

const Projects = ({portfolioInfo, webSelected}) => {

    const renderProjects = () => {

    }

    return (
        <div className="w-full h-1/2 overflow-y-auto flex flex-row flex-wrap justify-around items-center">
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