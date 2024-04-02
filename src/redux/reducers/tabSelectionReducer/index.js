import { CiMonitor, CiMobile2, CiInstagram, CiMail } from "react-icons/ci";

const iconColor = "#fff";
const iconSize = 24

const serviceInfo = [
    {icon: <CiMonitor color={iconColor} size={iconSize}/>, title: "Web", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {icon: <CiMobile2 color={iconColor} size={iconSize}/>, title: "Mobile", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {icon: <CiInstagram color={iconColor} size={iconSize}/>, title: "Social", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {icon: <CiMail color={iconColor} size={iconSize}/>, title: "Marketing", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
];
const initialState = {
    selectedIndex: 0,
    services: serviceInfo,
    loading: true,
}

const tabSelectionReducer = (state=initialState, action) => {
    switch(action.type) {
        case "TAB_LOADING":
            return {
                ...state,
                loading: true,
            }
        case "TAB_SELECTED":
            return {
                ...state,
                selectedIndex: action.tabIndex,
                loading: false,
            }
        default:
            return {
                ...state
            }
    }
};

export default tabSelectionReducer;