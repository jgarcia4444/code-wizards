import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

import RoundedInput from '../../../../../Shared/Input/RoundedInput';
import CtaSubmitButton from './CtaSubmitButton';
import ConsentInput from '../../../../../Shared/Input/ConsentInput';

import updateUserInfo from '../../../../../redux/actions/servicesCtaActions/updateUserInfo';
import sendUsersInfo from '../../../../../redux/actions/servicesCtaActions/sendUsersInfo';

const CtaForm = ({sendUsersInfo, servicesCta, updateUserInfo}) => {

    const {userInfo, serviceSelected} = servicesCta;
    const {fName, lName, email, phoneNumber, consent} = userInfo;
    const [formValid, setFormValid] = useState(false);


    const fNameInput = {
        val: fName,
        changeFunc: newValue => updateUserInfo({fName: newValue.target.value}),
        placeholder: "First",
        type: "text"
    };

    const lNameInput = {
        val: lName,
        changeFunc: newValue => updateUserInfo({lName: newValue.target.value}),
        placeholder: "Last",
        type: "text"
    };

    const emailInputInfo = {
        val: email,
        changeFunc: newValue => updateUserInfo({email: newValue.target.value}),
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
        changeFunc: newValue => updateUserInfo({phoneNumber: newValue.target.value}),
        placeholder: "Phone Number",
        type: "tel"
    }

    const checkRequirements = () => {
        const values = [fName, lName, email, phoneNumber,];
        if (values.every(val => val !== "") === true) {
            if (consent === true) {
                setFormValid(true);
            } else {
                setFormValid(false);
            }
        } else {
            setFormValid(false);
        }
    };

    const submitForm = () => {
        if (formValid === true) {
            let info = Object.assign({}, userInfo);
            info["serviceSelected"] = serviceSelected;
            sendUsersInfo(info)
        }
    }

    useEffect(() => {
        checkRequirements();
    },[fName, lName, email, phoneNumber, consent])


    return (
        <div className="w-1/2 h-1/2 bg-white rounded bg-opacity-60 flex flex-col items-center justify-evenly p-2 ">
            {nameInputs}
            <RoundedInput inputInfo={emailInputInfo} />
            <RoundedInput inputInfo={phoneInputInfo} />
            <ConsentInput updateConsent={() => updateUserInfo({consent: !consent})} consent={consent}/>
            <CtaSubmitButton requirementsMet={formValid} handlePress={submitForm} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        servicesCta: state.servicesCta,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendUsersInfo: info => dispatch(sendUsersInfo(info)),
        updateUserInfo: info => dispatch(updateUserInfo(info)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CtaForm);