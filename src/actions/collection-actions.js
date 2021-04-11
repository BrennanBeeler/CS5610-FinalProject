export const GET_MY_COLLECTIONS = "GET_MY_COLLECTIONS";
export const GET_FOLLOWED_COLLECTIONS = "GET_FOLLOWED_COLLECTIONS";
export const ADD_QUOTE_TO_COLLECTION = "ADD_QUOTE_TO_COLLECTION";

const getMyCollections = (dispatch, userId) => {
    //TODO: we need to get possible collections from db here using userId
    dispatch({
        type: GET_MY_COLLECTIONS,
        collectionOptions: [
            {
                collectionId: 1,
                collectionName: "Test Collection 1",
                //TODO: i guess the quotes array will be populated with the quote ids?
                quotes : []
            },
            {
                collectionId: 2,
                collectionName: "Test Collection 2",
                quotes : []
            },
            {
                collectionId: 3,
                collectionName: "Test Collection 3",
                quotes : []
            }
        ]
    })
}

const getFollowedCollections = (dispatch, userId) => {
    //TODO: we need to get possible collections from db here
    dispatch({
        type: GET_FOLLOWED_COLLECTIONS,
        userId
    })
}

const addQuoteToCollection = (dispatch, collectionId) => {
    //TODO: here we send new quote to db for adding to collection- then send the new collection with changes to
    // reducer
    dispatch({
        type: ADD_QUOTE_TO_COLLECTION,
        collection: {}
    })
}

const collectionActions = {
    getFollowedCollections: getFollowedCollections,
    getMyCollections: getMyCollections
}

export default collectionActions;