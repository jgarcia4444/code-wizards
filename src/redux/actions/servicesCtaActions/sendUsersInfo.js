
const sendUsersInfo = (info) => {
    return async dispatch => {
        dispatch({type: "SENDING_USERS_INFO", userInfo: info});
        setTimeout(() => {
            return dispatch({type: "USERS_INFO_SENT"});
        }, 500)
    }
}

export default sendUsersInfo;