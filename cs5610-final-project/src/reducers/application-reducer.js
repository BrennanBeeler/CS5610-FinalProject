const initialState = {
    loggedIn: false,
    profileData: {
        userName: "DONT-DISPLAY"
    //   TODO: remember if user wants to remembered? how does that work- cookie?
    }
}

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_OUT":
            return {
                ...state,
                loggedIn: false
            }
        case "LOG_IN":
            return {
                ...state,
                loggedIn: true,
                profileData: {
                    userName: "testUserName"
                }
            }
        default:
            return state
    }
}

export default applicationReducer;