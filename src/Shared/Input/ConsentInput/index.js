import React from 'react'

import Checkbox from '../Checkbox';

const ConsentInput = ({consent, updateConsent,}) => {

    return (
        <div className="flex flex-row items-center justify-start gap-4">
            <Checkbox isChecked={consent} handleClick={updateConsent}  />
            <p className="block w-3/4 text-xs font-thin">By checking this box you agree to allow code wizards to contact you. (Information will not be shared)</p>
        </div>
    )

}

export default ConsentInput;