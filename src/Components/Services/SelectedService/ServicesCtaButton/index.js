import React from 'react';
import { connect } from 'react-redux';

import ctaClicked from '../../../../redux/actions/servicesCtaActions/ctaClicked';

const ServicesCtaButton = ({tabSelector, ctaClicked}) => {

    const {selectedIndex, services} = tabSelector;

    const selectedService = services[selectedIndex];
    const {title} = selectedService;

    const handleCtaClick = () => {
        ctaClicked(title)
    }

    return (
        <div className="bg-white w-full md:w-auto text-center py-2 px-4 rounded transition-all duration-300 animate-pulse font-bold hover:cursor-pointer hover:scale-105 active:scale-90 active:animate-none" onClick={handleCtaClick}>
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
        ctaClicked: (serviceTitle) => dispatch(ctaClicked(serviceTitle)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ServicesCtaButton);