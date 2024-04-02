import React, {useState} from 'react';

import Layout from '../../Layout';
import SelectionTabs from '../../Components/Services/SelectionTabs';

const Services = () => {

    return (
        <Layout>
            <div className="w-full pt-28 flex flex-col items-start px-2">
                <h2 className="text-white text-left text-4xl">Services</h2>
                <SelectionTabs  />
                {/* Selected Service */}
            </div>
        </Layout>
    )
};

export default Services;