
const selectTab = tabIndex => {

    return dispatch => {
        dispatch({type: "TAB_LOADING", tabIndex});
        setTimeout(() => {
            return dispatch({
                type: "TAB_SELECTED",
            })
        }, 1000)
    }
}

export default selectTab;