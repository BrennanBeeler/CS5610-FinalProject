import UserService from "../services/user-service";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";


const logIn = (dispatch, username, password) => async (dispatch) => {
    const res = await UserService.LogInUser(username, password)

    if(Object.entries(res).length > 0) {
        dispatch({
            type : LOG_IN,
            profileData: res
        })
        return true
    }
    else {
        return false
    }
}

const logOut = (dispatch) => {
    dispatch({
        type : LOG_OUT
    })
}

const logActions = {
    logIn: logIn,
    logOut: logOut
}

export default logActions;