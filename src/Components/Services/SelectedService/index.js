import React from 'react'
import { connect } from 'react-redux';

import websites from '../../../Media/Services/websites.png';
import apps from '../../../Media/Services/apps.png'
import socialMedia from '../../../Media/Services/social-media.png';
import marketing from '../../../Media/Services/marketing.png'

import ServicesCtaButton from './ServicesCtaButton';

const SelectedService = ({tabSelector}) => {

    const {services, selectedIndex} = tabSelector;
    const service = services[selectedIndex];
    const {title, description} = service;

    const computedImage = () => {
        var imgSrc;
        switch(title) {
            case "Web":
                imgSrc = websites;
                break;
            case "Mobile":
                imgSrc = apps;
                break;
            case "Social":
                imgSrc = socialMedia;
                break; 
            case 'Marketing':
                imgSrc = marketing;
                break;
            default:
                imgSrc = websites;
        }
        return <img src={imgSrc} className="rounded" alt="Service Representation" />
    }

    return (
        <div className={`bg-white bg-opacity-10 rounded p-4 flex flex-row w-full mt-4 z-0 overflow-y-auto`}>
            <div className="w-1/3 ">
                {computedImage()}
            </div>
            <div className="w-2/3 flex flex-col h-3/4 px-4 overflow-y-auto">
                <div className="">
                    <h3 className="font-bold text-4xl text-black">{title}</h3>
                </div>
                <div className="h-24 overflow-y-auto">
                    <p className="text-lg">{description}</p>
                </div>
                <div className="flex flex-row items-center w-full justify-end mt-4">
                    <ServicesCtaButton />
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        tabSelector: state.tabSelector,
        servicesCta: state.servicesCta
    }
}

export default connect(
    mapStateToProps,
    null
)(SelectedService);