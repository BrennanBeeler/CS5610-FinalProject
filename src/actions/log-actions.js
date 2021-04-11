export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";


const logIn = (dispatch, username, password) => {
    dispatch({
        type : LOG_IN
    })
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