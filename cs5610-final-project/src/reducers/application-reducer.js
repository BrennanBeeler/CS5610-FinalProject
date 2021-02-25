const initialState = {
    loggedIn: false
}

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_OUT":
            console.log("log out")

            return {
                ...state,
                loggedIn: false
            }
        case "LOG_IN":
            console.log("log in")

            return {
                ...state,
                loggedIn: true
            }
        default:
            return state
    }
}

export default applicationReducer;