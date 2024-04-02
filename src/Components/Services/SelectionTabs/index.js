import React from 'react';

import Tab from './Tab';

const SelectionTabs = ({services}) => {

    const renderTabs = () => {
        return services.map((service, i) => <Tab serviceInfo={service} key={`${i}-${service.title}`} />)
    }

    return (
        <div className="flex flex-row  mt-2 overflow-x-auto ">
            {renderTabs()}
        </div>
    )
};

export default SelectionTabs;