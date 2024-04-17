
const initialState = {
    tabs: {
        webSelected: true,
    },
};

const portfolioReducer = (state=initialState, action) => {
    switch(action.type) {
        case "MOBILE_SELECTED":
            return {
                ...state,
                tabs: {
                    ...state.tabs,
                    webSelected: false,
                }
            }
        case "WEB_SELECTED":
            return {
                ...state,
                tabs: {
                    ...state.tabs,
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