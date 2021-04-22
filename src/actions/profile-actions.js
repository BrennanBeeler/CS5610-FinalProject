import UserService from "../services/user-service";

export const UPDATE_MY_DETAILS = "UPDATE_MY_DETAILS";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_COLLECTION = "FOLLOW_COLLECTION";

const updateMyDetails = (dispatch, profileData, email, username, password, phoneNum, premium) => async (dispatch) => {
    //TODO: add phone num

    const res = await UserService.UpdateUser({
        ...profileData,
        email: email,
        username: username,
        password: password,
        phoneNum: phoneNum,
        premium: premium
    })

    if (res === 1) {
        dispatch({
            type: UPDATE_MY_DETAILS,
            email: email,
            username: username,
            password: password,
            phoneNum: phoneNum,
            premium: premium
        })

        return true
    }
    else {
        return false
    }
}

const followCollection = (dispatch, profileData, collectionId) => async (dispatch) => {
    const res = await UserService.UpdateUser({
        ...profileData,
        followedCollections: [...profileData.followedCollections, collectionId]
    })

    if (res === 1) {
        dispatch({
            type: FOLLOW_COLLECTION,
            profileData: {
                ...profileData,
                followedCollections: [...profileData.followedCollections, collectionId]
            }
        })
        return true
    }
    else {
        return false
    }
}

const unFollowCollection = (dispatch, profileData, collectionId) => async (dispatch) => {
    const res = await UserService.UpdateUser({
        ...profileData,
        followedCollections: profileData.followedCollections.filter(collection => collection !== collectionId)
    })

    if (res === 1) {
        dispatch({
            type: FOLLOW_COLLECTION,
            profileData: {
                ...profileData,
                followedCollections: profileData.followedCollections.filter(collection => collection !== collectionId)
            }
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
    updateBio: updateBio,
    followCollection,
    unFollowCollection
}

export default profileActions;