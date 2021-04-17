import UserService from "../services/user-service";

export const UPDATE_MY_DETAILS = "UPDATE_MY_DETAILS";
export const UPDATE_BIO = "UPDATE_BIO";

const updateMyDetails = (dispatch, profileData, email, username, password, phoneNum) => async (dispatch) => {
    //TODO: add phone num

    const res = await UserService.UpdateUser({
        ...profileData,
        email: email,
        username: username,
        password: password,
        phoneNum: phoneNum
    })

    if (res === 1) {
        dispatch({
            type: UPDATE_MY_DETAILS,
            email: email,
            username: username,
            password: password,
            phoneNum: phoneNum
        })

        return true
    }
    else {
        return false
    }
}

const updateBio = (dispatch, profileData, bio) => async (dispatch) => {

    const res = await UserService.UpdateUser({
        ...profileData,
        bio: bio
    })

    if (res === 1) {
        dispatch({
            type: UPDATE_BIO,
            bio: bio
        })
        return true
    }
    else {
        return false
    }
}

const profileActions = {
    updateMyDetails: updateMyDetails,
    updateBio: updateBio
}

export default profileActions;