import React from 'react';
import { connect } from 'react-redux';

const CarouselProject = ({projectInfo, webSelected}) => {

    const {title, subTitle, img, websiteUrl} = projectInfo;

    const visitProjectButton = (
        <a href={websiteUrl} target='_blank' rel="noreferrer"  className="">
            <div className="w-full bg-white text-center font-bold py-1 rounded mt-2 hover:cursor-pointer hover:scale-105 animate-pulse hover:animate-none transition-all duration-300 z-10">Visit Website</div>
        </a>
    )

    const webProject = (
        <>
            <div className="w-full">
                    <img src={img} alt={title} className="w-full rounded" />
            </div>
            <div className="w-full">
                <h4 className="text-white text-3xl font-bold">{title}</h4>
            </div>
            <div className="w-full">
                <h6 className="text-white text-xl font-serif">{subTitle}</h6>
            </div>
            {visitProjectButton}
        </>
    )

    const mobileProject = (
        <div className="flex flex-row">
            <div className="w-1/2">
                <img src={img} alt={title} className="rounded" />
            </div>
            <div className="w-1/2 flex flex-col justify-between px-2">
                <div className="">
                    <h4 className="text-white text-3xl font-bold">{title}</h4>
                    <h6 className="text-white text-xl font-serif">{subTitle}</h6>
                </div>
                {visitProjectButton}
            </div>
        </div>
    )

    return (
        <div className="w-full flex flex-col overflow-x-hidden overflow-y-hidden">
            {webSelected === true ? webProject : mobileProject}
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
)(CarouselProject);