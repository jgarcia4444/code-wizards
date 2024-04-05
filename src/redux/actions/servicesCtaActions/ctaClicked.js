
const ctaClicked = serviceTitle =>  {
    return {
        type: "CALL_TO_ACTION_CLICKED",
        serviceTitle
    }
}

export default ctaClicked;