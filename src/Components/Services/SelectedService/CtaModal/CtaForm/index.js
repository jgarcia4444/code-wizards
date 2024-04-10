import React, {useState} from 'react'

import RoundedInput from '../../../../../Shared/Input/RoundedInput';

const CtaForm = () => {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [consent, setConsent] = useState(false);


    const fNameInput = {
        val: fName,
        changeFunc: newValue => setFName(newValue.target.value),
        placeholder: "First",
        type: "text"
    };

    const lNameInput = {
        val: lName,
        changeFunc: newValue => setLName(newValue.target.value),
        placeholder: "Last",
        type: "text"
    };

    const emailInputInfo = {
        val: email,
        changeFunc: newValue => setEmail(newValue.target.value),
        placeholder: "Email",
        type: "email"
    }



    const nameInputs = (
        <div className="w-full flex flex-col">
            <div className="w-full">
                <h4 className="font-bold text-lg">Name</h4>
            </div>
            <div className="w-full flex flex-row gap-4 items-center justify-center">
                <div className="w-1/2">
                    <RoundedInput inputInfo={fNameInput}/>
                </div>
                <div className="w-1/2">
                    <RoundedInput inputInfo={lNameInput}/>
                </div>
            </div>
        </div>
    );


    const phoneInputInfo = {
        val: phoneNumber,
        changeFunc: newValue => setPhoneNumber(newValue.target.value),
        placeholder: "Phone Number",
        type: "tel"
    }


    return (
        <div className="w-1/2 h-1/2 bg-white rounded bg-opacity-60 flex flex-col items-center justify-evenly p-2">
            {nameInputs}
            <RoundedInput inputInfo={emailInputInfo} />
            <RoundedInput inputInfo={phoneInputInfo} />
        </div>
    )
}

export default CtaForm;