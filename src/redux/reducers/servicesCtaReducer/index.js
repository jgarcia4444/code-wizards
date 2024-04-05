
const initialState = {
    displayModal: false,
    serviceSelected: "",
    userInfo: {
        usersName: "",
        phoneNumber: "",
        email: "",
    }
};

const servicesCtaReducer = (state=initialState, action) => {
    switch(action.type) {
        case "CALL_TO_ACTION_CLICKED":
            return {
                ...state,
                displayModal: true,
                serviceSelected: action.serviceTitle
            }
        default:
            return {
                ...state
            };
    }
}