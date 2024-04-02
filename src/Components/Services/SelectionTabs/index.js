import React from 'react';
import { connect } from 'react-redux';

import Tab from './Tab';

const SelectionTabs = ({services}) => {

    const renderTabs = () => {
        return services.map((service, i) => <Tab tabIndex={i} serviceInfo={service} key={`${i}-${service.title}`} />)
    }

    return (
        <div className="flex flex-row  mt-2 overflow-x-auto overflow-y-hidden ">
            {renderTabs()}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        services: state.tabSelector.services,
    }
}

export default connect(
    mapStateToProps,
    null
)(SelectionTabs);