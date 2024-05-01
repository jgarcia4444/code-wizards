import React from 'react'

const ContactDetail = ({details}) => {

    const {icon, title, info} = details;

    const iconButton = (
        <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center -mt-16 shadow shadow-black">
            {icon}
        </div>
    )

    return (
        <div className="w-1/3 relative flex flex-col items-center justify-center">\
            {iconButton}
            <div className="mt-2 w-full">
                <h4 className="text-xl font-bold">{title}</h4>
            </div>
            <div className="w-full mb-2">
                <p className="">{info}</p>
            </div>
        </div>
    )
}

export default ContactDetail;