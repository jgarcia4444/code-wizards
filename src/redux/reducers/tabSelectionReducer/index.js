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
    {icon: <CiMobile2 color={iconColor} size={iconSize}/>, title: "Mobile", description: [
        {bulletPoint: "Cross-Platform Mobile App Development", details: "Expertise in developing high-quality mobile applications that run seamlessly on both iOS and Android platforms."},
        {bulletPoint: "React Native Development", details: "Leveraging the power of React Native framework to build native-like mobile apps using JavaScript and React."},
        {bulletPoint: "Redux/Redux Persist Integration", details: "Implementing Redux for state management, ensuring predictable state changes and improved app performance. Utilizing Redux Persist for persisting Redux store data across app sessions."},
        {bulletPoint: "AWS Integration for Cloud Storage", details: "Utilizing Amazon Web Services (AWS) for secure and scalable cloud storage solutions"},
        {bulletPoint: "Expo Development", details: "Utilizing Expo development environment for rapid prototyping, testing, and building React Native apps with ease."},
        {bulletPoint: "Custom UI/UX Design", details: "Crafting intuitive and visually appealing user interfaces to enhance user experience and engagement."},
        {bulletPoint: "Push Notifications Integration", details: "Implementing push notifications using services like Firebase Cloud Messaging (FCM) or AWS SNS to keep users informed and engaged."},
        {bulletPoint: "Offline Support", details: "Implementing offline capabilities using tools like Redux Offline or AsyncStorage to ensure app functionality even without an internet connection."},
        {bulletPoint: "Deployment to App Stores", details: "Google play store deployment and Apple App Store."},
        {bulletPoint: "Beta Testing and Feedback Integration", details: "Facilitating beta testing phases and integrating feedback mechanisms to gather user insights for iterative improvements."},
        {bulletPoint: "Analytics Integration", details: "Integrating analytics tools like Google Analytics or Firebase Analytics to track user behavior, app performance, and user engagement metrics."},
        {bulletPoint: "Maintenance and Support", details: "Providing ongoing maintenance, updates, and support services to ensure the app remains functional, secure, and up-to-date with the latest platform changes and enhancements."},
    ]
},
    {icon: <CiInstagram color={iconColor} size={iconSize}/>, title: "Social", description: [
        {bulletPoint: "Social Media Account Management", details: "Comprehensive management of clients' social media accounts to enhance their online presence and engagement."},
        {bulletPoint: "Content Strategy Development", details: "Crafting tailored content strategies aligned with clients' branding and goals to drive audience engagement and growth."},
        {bulletPoint: "Platform-Specific Content Creation", details: "Creating engaging and relevant content for each social media platform."},
        {bulletPoint: "Adobe Product Integration for Content Editing", details: "Utilizing Adobe Creative Cloud suite, including Adobe Premiere Pro, Adobe Photoshop, and Adobe Spark, for professional-grade editing of videos, photos, and stories to maintain a cohesive and visually appealing brand identity across social media platforms."},
        {bulletPoint: "Content Calendar Management", details: "Planning and scheduling content calendars to ensure consistent posting schedules and optimal timing for maximum reach and engagement."},
        {bulletPoint: "Audience Engagement and Community Management", details: "Proactively engaging with the audience through comments, messages, and mentions to foster a sense of community and strengthen brand loyalty."},
        {bulletPoint: "Analytics and Performance Tracking", details: "Monitoring key performance metrics such as reach, engagement, follower growth, and conversion rates using analytics tools like Instagram Insights, TikTok Analytics, and YouTube Analytics to optimize content strategies and campaign performance."},
        {bulletPoint: "Influencer Collaboration and Partnerships", details: "Identifying and collaborating with relevant influencers and creators to amplify brand reach, credibility, and engagement."},
        {bulletPoint: "Paid Advertising Management", details: "Developing and managing paid advertising campaigns on social media platforms to increase brand visibility, drive website traffic, and generate leads or sales."},
        {bulletPoint: "Cross-Promotion and Integration", details: "Implementing cross-promotional strategies across social media platforms to leverage audience overlap and maximize reach and engagement."},
        {bulletPoint: "Community Guidelines and Policy Compliance", details: "Ensuring compliance with platform-specific community guidelines, content policies, and best practices to maintain a positive brand reputation and avoid account penalties or suspensions."},
        {bulletPoint: "Monthly Reporting and Performance Analysis", details: "Providing detailed monthly reports and performance analysis to track progress, demonstrate ROI, and identify areas for improvement and optimization."},
    ]
},
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