import React from 'react';
import { connect } from 'react-redux';
import { CiCoffeeCup } from "react-icons/ci";

const CtaSubmitButton = ({requirementsMet, handlePress, sending}) => {

    const submitButtonAppearance = requirementsMet === true ? "border-2 border-black bg-black text-white" : "border-2 border-black";


    return (
        <div onClick={handlePress} className={`${submitButtonAppearance} font-bold w-full rounded flex items-center justify-center py-2 transition-all duration-500 z-50 hover:cursor-pointer`}>
            {sending === true ? <CiCoffeeCup className="animate-spin" color={"#fff"} size={24} />  : "Send"}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        sending: state.servicesCta.sending
    }
}

export default connect(
    mapStateToProps,
    null
)(CtaSubmitButton);