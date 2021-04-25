import {UPDATE_MY_DETAILS, UPDATE_BIO, FOLLOW_COLLECTION} from "../actions/profile-actions";
import {ADD_QUOTE_TO_COLLECTION, GET_MY_COLLECTIONS} from "../actions/collection-actions";
import {LOG_IN, LOG_OUT} from "../actions/log-actions";

const initialState = {
    loggedIn: false,
    profileData: {},
    collectionOptions: []
}

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_OUT:
            return {
                ...state,
                loggedIn: false,
                profileData: {}
            }
        case LOG_IN:
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
                    premium: action.premium,
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
        case FOLLOW_COLLECTION:
            return {
                ...state,
                profileData: action.profileData
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