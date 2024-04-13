import emailjs from '@emailjs/browser';
const sendUsersInfo = (info) => {

    let serviceId = "jgar_test";
    let templateId = "template_vyq2ugf";
    let publicKey = "rqyV6YA0V16NPoeVX";

    let templateParams = {
        ...info
    }

    return async dispatch => {
        dispatch({type: "SENDING_USERS_INFO"});
        emailjs.send(
            serviceId,
            templateId,
            templateParams,
            {
                publicKey: publicKey,
            }
        )
        .then(res => {
            console.log("Success!", res.status, res.text);
            return dispatch({type: "USERS_INFO_SENT"})
        },
        err => {
            console.log("Failed...", err);
        })
    }
}

export default sendUsersInfo;