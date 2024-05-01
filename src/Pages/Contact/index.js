import React from 'react';
import { CiPhone, CiMail, CiClock2 } from "react-icons/ci";

import Layout from '../../Layout';
import PageHeader from '../../Shared/Headers/PageHeader';
import ContactDetail from '../../Components/Contact/ContactDetail';

const Contact = () => {

    const iconSize = 32;
    const iconColor = "#000";

    const renderContactDetails = () => {
        let contactDetails = [
            {icon: <CiPhone size={iconSize} color={iconColor} />, title: "Phone Number", info: "(208)703-4922"},
            {icon: <CiMail size={iconSize} color={iconColor} />, title: "Email", info: "jgarciadev4444@gmail.com"},
            {icon: <CiClock2 size={iconSize} color={iconColor} />, title: "Time Zone", info: "MDT"},
        ]

        return contactDetails.map((details, i) => <ContactDetail details={details} key={`${i}-${details.title}`} />)
    }

    return (
        <Layout>
            <div className="w-full flex flex-col pt-28 px-4">
                <PageHeader headerText={"Contact"} />
                <div className="bg-white bg-opacity-20 rounded p-4 flex flex-row mt-12 ">
                    {renderContactDetails()}
                </div>
            </div>
        </Layout>
    )
}

export default Contact;