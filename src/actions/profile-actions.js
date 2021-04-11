export const UPDATE_MY_DETAILS = "UPDATE_MY_DETAILS";
export const UPDATE_BIO = "UPDATE_BIO";



const updateMyDetails = (dispatch, email, username, password, phoneNum) => {
    dispatch({
        type: UPDATE_MY_DETAILS,
        email,
        username,
        password,
        phoneNum
    })
}

const updateBio = (dispatch, bio) => {
    dispatch({
        type: UPDATE_BIO,
        bio
    })
}

const profileActions = {
    updateMyDetails: updateMyDetails,
    updateBio: updateBio
}

export default profileActions;