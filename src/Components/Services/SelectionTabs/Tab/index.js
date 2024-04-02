import React from 'react';
import { connect } from 'react-redux';

import selectTab from '../../../../redux/actions/tabSelection/selectTab';

const Tab = ({serviceInfo, selectTab, tabIndex}) => {
    const {icon, title} = serviceInfo;
    return (
        <div onClick={() => selectTab(tabIndex)} className="bg-white bg-opacity-10 flex flex-row items-center gap-1 py-2 px-8 mr-4 rounded hover:cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-opacity-50">
            {icon}
            <p className="text-white">{title}</p>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        selectTab: tabIndex => dispatch(selectTab(tabIndex)),
    }
}

export default connect(
    null, 
    mapDispatchToProps
)(Tab);