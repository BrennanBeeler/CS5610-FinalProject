import UserService from "../services/user-service";
import CollectionService from "../services/collection-service";

export const GET_MY_COLLECTIONS = "GET_MY_COLLECTIONS";
export const GET_FOLLOWED_COLLECTIONS = "GET_FOLLOWED_COLLECTIONS";
export const ADD_QUOTE_TO_COLLECTION = "ADD_QUOTE_TO_COLLECTION";

const getMyCollections = (dispatch, userId) => {
    UserService.GetCollectionForUser(userId)
        .then(response => {
            dispatch({
                type: GET_MY_COLLECTIONS,
                collectionOptions: response
            })
        })
}

const getFollowedCollections = (dispatch, userId) => {
    //TODO: we need to get possible collections from db here
    dispatch({
        type: GET_FOLLOWED_COLLECTIONS,
        userId
    })
}

const addQuoteToCollection = (dispatch, collection, quoteId) => {

    CollectionService.UpdateCollection({
        ...collection,
        quoteIds: [
            ...collection.quoteIds,
            quoteId
        ]
    }).then(
        response => console.log(response)
        // dispatch({
        //     type: ADD_QUOTE_TO_COLLECTION,
        //     collection: {
        //         collectionId: collectionId,
        //         collectionName: "Test Collection 2",
        //         quotes : []
        //     }
        // })
    )
}

const collectionActions = {
    getFollowedCollections: getFollowedCollections,
    getMyCollections: getMyCollections,
    addQuoteToCollection: addQuoteToCollection
}

export default collectionActions;