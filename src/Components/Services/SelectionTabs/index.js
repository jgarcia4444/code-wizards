import React from 'react';

import Tab from './Tab';

const SelectionTabs = ({services}) => {

    const renderTabs = () => {
        return services.map((service, i) => <Tab serviceInfo={service} key={`${i}-${service.title}`} />)
    }

    return (
        <div className="flex flex-row items-center justify-evenly mt-2 ">
            {renderTabs()}
        </div>
    )
};

export default SelectionTabs;