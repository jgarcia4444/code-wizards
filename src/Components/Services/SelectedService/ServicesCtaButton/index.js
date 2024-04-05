import React from 'react';
import { connect } from 'react-redux';

const ServicesCtaButton = ({tabSelector}) => {

    const {selectedIndex, services} = tabSelector;

    const selectedService = services[selectedIndex];
    const {title} = selectedService;

    const handleCtaClick = () => {

    }

    return (
        <div className="bg-white py-2 px-4 rounded transition-all duration-300 animate-pulse font-bold hover:cursor-pointer hover:scale-105 active:scale-90 active:animate-none" onClick={handleCtaClick}>
            Start Your Project!
        </div>
    )
};

const mapStateToProps = state => {
    return {
        tabSelector: state.tabSelector,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ServicesCtaButton);