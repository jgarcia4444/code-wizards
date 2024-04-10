import React from 'react'

import { CiUser, CiMail, CiPhone } from 'react-icons/ci';

const RoundedInput = ({inputInfo}) => {

    const {type, val, changeFunc, placeholder} = inputInfo;

    const iconColor = "#fff";
    const iconSize = 20;

    const dynamicIcon = () => {
        switch(type) {
            case "tel":
                return <CiPhone color={iconColor} size={iconSize}/>
            case "email":
                return <CiMail color={iconColor} size={iconSize}/>
            default: 
                return <CiUser color={iconColor} size={iconSize} />
        }
    }

    return (
        <div className="w-full flex flex-row bg-black rounded py-2 px-4 items-center">
            {dynamicIcon()}
            <input placeholder={placeholder} value={val} onChange={changeFunc} className="w-full text-white bg-black ml-2" type={type} />
        </div>
    )
};

export default RoundedInput;