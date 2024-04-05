
const initialState = {
    dispalyModal: false,
    serviceSelected: "",
    userInfo: {
        usersName: "",
        phoneNumber: "",
        email: "",
    }
};

const servicesCtaReducer = (state=initialState, action) => {
    switch(action.type) {

        default:
            return {
                ...state
            };
    }
}