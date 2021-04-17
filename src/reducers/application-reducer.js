import {UPDATE_MY_DETAILS, UPDATE_BIO} from "../actions/profile-actions";
import {ADD_QUOTE_TO_COLLECTION, GET_MY_COLLECTIONS} from "../actions/collection-actions";

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
        premium: true,
        bio: "sample bio about test user",
        phoneNum : "9999999999",
        followedCollection: []
    //   TODO: remember if user wants to remembered? how does that work- cookie?
    },
    collectionOptions: []
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
                profileData: action.profileData
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
        case GET_MY_COLLECTIONS:
            return {
                ...state,
                collectionOptions: action.collectionOptions
            }
        case ADD_QUOTE_TO_COLLECTION:
            return {
                ...state,
                collectionOptions: state.collectionOptions.map(collection =>
                    collection.collectionId === action.collection.collectionId ? action.collection : collection)
            }
        default:
            return state
    }
}

export default applicationReducer;