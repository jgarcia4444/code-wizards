
const selectTab = tabIndex => {

    return dispatch => {
        dispatch({type: "TAB_LOADING"});
        setTimeout(() => {
            return dispatch({
                type: "TAB_SELECTED",
                tabIndex
            })
        }, 1000)
    }
}

export default selectTab;