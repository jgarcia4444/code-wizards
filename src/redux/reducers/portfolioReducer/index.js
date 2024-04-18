
const initialState = {
    filter: {
        webSelected: true,
    },
};

const portfolioReducer = (state=initialState, action) => {
    switch(action.type) {
        case "MOBILE_SELECTED":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    webSelected: false,
                }
            }
        case "WEB_SELECTED":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    webSelected: true,
                }
            }
        default:
            return {
                ...state,
            }
    }
}

export default portfolioReducer;