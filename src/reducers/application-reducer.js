import {UPDATE_MY_DETAILS, UPDATE_BIO} from "../actions/profile-actions";

const initialState = {
    loggedIn: false,
    profileData: {
        id: 1,
        username: "testUsername",
        password: "password",
        //TODO: determine if we need first/last name
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
        case UPDATE_MY_DETAILS:
            return {
                ...state,
                profileData: {
                    ...state.profileData,
                    email: action.email,
                    username: action.username,
                    password: action.password,
                    phoneNum: action.phoneNum
                }
            }
        case UPDATE_BIO:
            return {
                ...state,
                profileData: {
                    ...state.profileData,
                    bio: action.bio
                }
            }
        default:
            return state
    }
}

export default applicationReducer;