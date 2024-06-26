import React from 'react'
import useWindowDimensions from '../../../Hooks/useWindowDimensions';

const ContactDetail = ({details}) => {

    const {width} = useWindowDimensions();

    const {icon, title, info} = details;

    
    const configureHref = () => {
        if (title === "Phone Number") {
            return "tel:2087034922";
        } else if (title === "Email") {
            return "mailto:jgarciadev4444@gmail.com"
        } else {
            return "#"
        }
    }
    
    const iconButton = (
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${width > 688 ? "-mt-16 bg-white bg-opacity-30 shadow " : "bg-black bg-opacity-70 shadow-inner"} shadow-black `}>
            <a href={configureHref()} className="">
                {icon}
            </a>
        </div>
    )

    const configureInfo = () => {
        switch (title) {
            case "Phone Number":
                return <a href={configureHref()} className="">{info}</a>
            case "Email":
                return <a href={configureHref()} className="">{info}</a>
            default: 
                return title;
        }
    }

    const renderContactDetail = () => {
        if (width > 688) {
            return  (
                <div className="w-1/3 relative flex flex-col items-center justify-center p-2">\
                    {iconButton}
                    <div className="mt-2 w-full">
                        <h4 className="text-xl font-bold">{title}</h4>
                    </div>
                    <div className="w-full mb-2">
                        <p className="">{configureInfo()}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="flex flex-row w-full bg-white bg-opacity-20 rounded px-4 py-2 mb-8">
                    <div className="w-1/2">
                        {iconButton}
                    </div>
                    <div className="w-1/2 flex flex-col">
                        <div className="w-full font-thin">{title}</div>
                        <div className="w-full font-bold text-sm md:text-lg">{configureInfo()}</div>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            {renderContactDetail()}
        </>
    )
}

export default ContactDetail;