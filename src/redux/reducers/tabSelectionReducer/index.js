import { CiMonitor, CiMobile2, CiInstagram, CiMail } from "react-icons/ci";

const iconColor = "#fff";
const iconSize = 24

const serviceInfo = [
    {
        icon: <CiMonitor color={iconColor} size={iconSize}/>, title: "Web", description: [
            {bulletPoint: "Custom Website Development", details: "Tailored website development services to meet the unique requirements of each client"}, 
            {bulletPoint: "ReactJS Development", details: "Leveraging the power of ReactJS to create dynamic and interactive user interfaces."}, 
            {bulletPoint: "Tailwind CSS Integration", details: "Implementing Tailwind CSS for rapid and customizable styling of website components."}, 
            {bulletPoint: "Redux Integration:", details: " Utilizing Redux for state management, ensuring seamless data flow and consistent application behavior."}, 
            {bulletPoint: "Responsive Design", details: "Ensuring that the website is optimized for various devices and screen sizes."},
            {bulletPoint: "Cross-Browser Compatibility", details: "Testing and ensuring that the website functions seamlessly across different web browsers"},
            {bulletPoint: "SEO Optimization", details: " Implementing best practices for search engine optimization to improve the website's visibility and ranking."},
            {bulletPoint: "Performance Optimization", details: "Optimizing website performance for faster loading times and improved user experience."},
            {bulletPoint: "API Integration", details: "Integrating third-party APIs for enhanced functionality, such as payment gateways, social media integration, etc."},
            {bulletPoint: "Maintenance and Support", details: "Providing ongoing maintenance and support services to ensure the website remains secure, up-to-date, and running smoothly."},
        ]
},
    {icon: <CiMobile2 color={iconColor} size={iconSize}/>, title: "Mobile", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {icon: <CiInstagram color={iconColor} size={iconSize}/>, title: "Social", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {icon: <CiMail color={iconColor} size={iconSize}/>, title: "Marketing", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
];
const initialState = {
    selectedIndex: 0,
    services: serviceInfo,
    loading: false,
}

const tabSelectionReducer = (state=initialState, action) => {
    switch(action.type) {
        case "TAB_LOADING":
            return {
                ...state,
                loading: true,
                selectedIndex: action.tabIndex,
            }
        case "TAB_SELECTED":
            return {
                ...state,
                loading: false,
            }
        default:
            return {
                ...state
            }
    }
};

export default tabSelectionReducer;