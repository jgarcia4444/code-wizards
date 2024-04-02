import React from 'react';

import Tab from './Tab';

const SelectionTabs = ({services}) => {

    const renderTabs = () => {
        return services.map((service, i) => <Tab serviceInfo={service} key={`${i}-${service.title}`} />)
    }

    return (
        <div className="flex flex-row  mt-2 overflow-x-auto overflow-y-hidden ">
            {renderTabs()}
        </div>
    )
};

export default SelectionTabs;