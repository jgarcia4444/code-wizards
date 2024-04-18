import React from 'react';
import { connect } from 'react-redux';
import { CiMonitor, CiMobile2 } from 'react-icons/ci';

const Filter = ({text, webTapped, mobileTapped, webSelected}) => {

    const iconSize = 24;

    const configureIcon = () => {
        return text === "Web" ? <CiMonitor size={iconSize} color={"#000"} /> : <CiMobile2 size={iconSize} color={"#000"} />
    };

    const handleClick = () => {
        if (text === "Web") {
            webTapped();
        } else {
            mobileTapped()
        }
    };

    const dynamicViewProperties = () => {
        if (webSelected === true && text === "Web") {
            return "bg-opacity-100";
        } else if (webSelected === false && text === "Mobile") {
            return "bg-opacity-100";
        } else {
            return ""
        }
    }

    return (
        <div onClick={handleClick} className={`px-6 text-lg bg-white bg-opacity-10 rounded hover:cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-opacity-30 active:scale-100 active:bg-opacity-10 flex flex-row items-center gap-1 ${dynamicViewProperties()}`}>
            {configureIcon()}
            {text}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        webSelected: state.portfolio.filter.webSelected,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        webTapped: () => dispatch({type: "WEB_SELECTED"}),
        mobileTapped: () => dispatch({type: "MOBILE_SELECTED"}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);