import React, {useState} from 'react';
import { CiMonitor, CiMobile2, CiInstagram, CiMail } from 'react-icons/ci';

import Layout from '../../Layout';
import SelectionTabs from '../../Components/Services/SelectionTabs';

const Services = () => {

    const iconSize = 24;
    const iconColor = "#fff";

    const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

    const serviceObjects = [
        {icon: <CiMonitor color={iconColor} size={iconSize}/>, title: "Web", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {icon: <CiMobile2 color={iconColor} size={iconSize}/>, title: "Mobile", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {icon: <CiInstagram color={iconColor} size={iconSize}/>, title: "Social", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {icon: <CiMail color={iconColor} size={iconSize}/>, title: "Marketing", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    ];

    const tabSelected = selectedIndex => {
        setSelectedServiceIndex(selectedIndex);
    }

    return (
        <Layout>
            <div className="w-full pt-28 flex flex-col items-start px-2">
                <h2 className="text-white text-left text-4xl">Services</h2>
                <SelectionTabs handleTabSelection={tabSelected} selectedIndex={selectedServiceIndex} services={serviceObjects} />
                {/* Selected Service */}
            </div>
        </Layout>
    )
};

export default Services;