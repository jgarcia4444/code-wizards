
const initialState = {
    displayModal: false,
    serviceSelected: "",
    userInfo: {
        usersName: "",
        phoneNumber: "",
        email: "",
    },
    sending: false,
};

const servicesCtaReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SENDING_USERS_INFO":
            return {
                ...state,
                userInfo: {
                    ...action.userInfo
                }
            }
        case "DISMISS_MODAL":
            return {
                ...state,
                serviceSelected: "",
                displayModal: false,
            }
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

export default servicesCtaReducer;