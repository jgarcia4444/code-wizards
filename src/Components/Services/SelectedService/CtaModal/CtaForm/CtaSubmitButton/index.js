import React from 'react';

const CtaSubmitButton = ({requirementsMet, handlePress}) => {

    const submitButtonAppearance = requirementsMet === true ? "border-none bg-black text-white" : "border-2 border-black";


    return (
        <div onClick={handlePress} className={`${submitButtonAppearance} font-bold w-full rounded flex items-center justify-center py-2 transition-all duration-500`}>
            Send
        </div>
    )
}

export default CtaSubmitButton;