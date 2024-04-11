
const initialState = {
    displayModal: false,
    serviceSelected: "",
    userInfo: {
        fName: "",
        lName: "",
        phoneNumber: "",
        email: "",
        consent: false,
    },
    sending: false,
};

const servicesCtaReducer = (state=initialState, action) => {
    switch(action.type) {
        case "UPDATE_USER_INFO":
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    ...action.info
                }
            }
        case "USERS_INFO_SENT":
            return {
                ...state,
                sending: false,
            }
        case "SENDING_USERS_INFO":
            return {
                ...state,
                userInfo: {
                    ...action.userInfo
                },
                sending: true,
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