import React from 'react'
import { connect } from 'react-redux';

import websites from '../../../Media/Services/websites.png';
import apps from '../../../Media/Services/apps.png'
import socialMedia from '../../../Media/Services/social-media.png';
import marketing from '../../../Media/Services/marketing.png'

import ServicesCtaButton from './ServicesCtaButton';
import ServicesDescription from './ServicesDescription';

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
        return <img src={imgSrc} className="rounded object-cover h-full" alt="Service Representation" />
    }

    return (
        <div className={`bg-white bg-opacity-20 rounded p-4 flex flex-row flex-wrap w-full my-4 z-0 `}>
            <div className="md:w-1/3 w-full flex items-center justify-center  ">
                {computedImage()}
            </div>
            <div className="w-full md:w-2/3 flex flex-col h-full md:px-4 mt-2 md:mt-0">
                <div className="">
                    <h3 className="font-bold text-4xl text-black">{title}</h3>
                </div>
                <ServicesDescription descriptionInfo={description} />
                <div className="flex flex-row items-center w-full justify-end md:mt-4 mt-2">
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