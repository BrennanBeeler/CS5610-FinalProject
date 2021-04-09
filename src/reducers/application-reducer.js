const initialState = {
    loggedIn: false,
    profileData: {
        id: 1,
        username: "testUsername",
        password: "password",
        firstName: "testFirstName",
        lastName: "testLastName",
        email: "testEmail@email.com",
        isPremium: true,
        bio: "sample bio about test user",
        phoneNum : "9999999999"

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
                loggedIn: true
                // profileData: {
                //     // TODO: figure out actual log in procedure
                //     // gonna need to implement database to store user credentials
                //     username: "testUserName"
                // }
            }
        default:
            return state
    }
}

export default applicationReducer;