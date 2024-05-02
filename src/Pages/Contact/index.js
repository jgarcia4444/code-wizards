import React, {useState, useEffect} from 'react';
import { CiPhone, CiMail, CiClock2 } from "react-icons/ci";

import useWindowDimensions from '../../Hooks/useWindowDimensions';

import Layout from '../../Layout';
import PageHeader from '../../Shared/Headers/PageHeader';
import ContactDetail from '../../Components/Contact/ContactDetail';

const Contact = () => {

    const {width} = useWindowDimensions();

    const iconSize = 32;
    const [iconColor, setIconColor] = useState("#000");

    const renderContactDetails = () => {
        let contactDetails = [
            {icon: <CiPhone size={iconSize} color={iconColor} />, title: "Phone Number", info: "(208)703-4922"},
            {icon: <CiMail size={iconSize} color={iconColor} />, title: "Email", info: "jgarciadev4444@gmail.com"},
            {icon: <CiClock2 size={iconSize} color={iconColor} />, title: "Time Zone", info: "MDT"},
        ]

        return contactDetails.map((details, i) => <ContactDetail details={details} key={`${i}-${details.title}`} />)
    }

    useEffect(() => {
        if (width < 688) {
            setIconColor("#fff");
        } else {
            setIconColor("#000");
        }
    }, [width])

    return (
        <Layout>
            <div className="w-full flex flex-col pt-28 px-4">
                <PageHeader headerText={"Contact"} />
                <div className={`${width > 688 ? "bg-white" : ""} bg-opacity-20 rounded p-4 flex flex-row flex-wrap mt-12 `}>
                    {renderContactDetails()}
                </div>
            </div>
        </Layout>
    )
}

export default Contact;