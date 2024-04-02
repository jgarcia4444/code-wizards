import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { CiMonitor, CiMobile2, CiInstagram, CiMail } from "react-icons/ci";

import selectTab from '../../../../redux/actions/tabSelection/selectTab';

const Tab = ({serviceInfo, selectTab, tabIndex, selectedIndex}) => {
    const {icon, title} = serviceInfo;

    const [iconColor, setIconColor] = useState(tabIndex === 0 ? "#000" : "#fff"); 
    const iconSize = 24;

    const computedIcon = () => {
        switch(title) {
            case "Mobile":
                return <CiMobile2 color={iconColor} size={iconSize}/>
            case "Social":
                return <CiInstagram color={iconColor} size={iconSize}/>
            case "Marketing":
                return <CiMail color={iconColor} size={iconSize}/>
            default:
                return <CiMonitor color={iconColor} size={iconSize} />
        }
    }

    useEffect(() => {
        if (tabIndex === selectedIndex) {
            setIconColor("#000");
        } else {
            setIconColor("#fff");
        }
    }, [selectedIndex])

    return (
        <div onClick={() => selectTab(tabIndex)} className={`bg-white ${tabIndex === selectedIndex ? "bg-opacity-100 text-black" : "bg-opacity-10 text-white"}  flex flex-row items-center gap-1 py-2 px-8 mr-4 rounded hover:cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-opacity-50`}>
            {computedIcon()}
            <p className="">{title}</p>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        selectedIndex: state.tabSelector.selectedIndex,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectTab: tabIndex => dispatch(selectTab(tabIndex)),
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Tab);