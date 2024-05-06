import React from 'react';
import { connect } from 'react-redux';

import dismissModal from '../../../../redux/actions/servicesCtaActions/dismissModal';

import CtaForm from './CtaForm';

const CtaModal = ({servicesCta, dismissModal}) => {

    const {userInfo, serviceSelected} = servicesCta;

    const dynamicServiceDescription = () => {
        switch(serviceSelected) {
            case "Web":
                return "Website";
            case "Mobile":
                return "Mobile App"
            case "Social":
                return "Social Media";
            case "Marketing":
                return serviceSelected;
            default:
                return "Website";
        }
    }

    return (
        <div className="absolute w-screen h-full top-0 left-0 bg-black bg-opacity-70 z-10 flex flex-col items-center justify-center ">
            <div className="w-1/2 flex flex-row items-center justify-between">
                <h3 className="text-white text-2xl">{dynamicServiceDescription()} Service</h3>
                <div onClick={() => dismissModal()} className="bg-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 hover:cursor-pointer transition-all duration-300 hover:scale-110
                ">X</div>
            </div>
            <CtaForm />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        servicesCta: state.servicesCta,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dismissModal: () => dispatch(dismissModal()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CtaModal);