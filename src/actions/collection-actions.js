import UserService from "../services/user-service";
import CollectionService from "../services/collection-service";

export const GET_MY_COLLECTIONS = "GET_MY_COLLECTIONS";
export const GET_FOLLOWED_COLLECTIONS = "GET_FOLLOWED_COLLECTIONS";
export const ADD_QUOTE_TO_COLLECTION = "ADD_QUOTE_TO_COLLECTION";

const getMyCollections = (dispatch, userId) =>
    UserService.GetCollectionForUser(userId)
        .then(response => {
            dispatch({
                type: GET_MY_COLLECTIONS,
                collectionOptions: response
            })
            return response
        })


const getFollowedCollections = (dispatch, userId) => {
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
    )
}

const removeQuoteFromCollection = (dispatch, collection, quoteId) => async (dispatch) => {

    const res = await CollectionService.UpdateCollection({...collection,
            quoteIds: collection.quoteIds.filter(qid => qid !== quoteId)
        })

    return res === 1;
}

const createCollectionForUser = (dispatch, userId, collection) =>
    UserService.CreateCollectionForUser(userId, collection)
        .then(response => response)

const deleteCollection = (dispatch, collectionId) =>
    CollectionService.DeleteCollection(collectionId)
        .then(response => response)

const collectionActions = {
    getFollowedCollections: getFollowedCollections,
    getMyCollections: getMyCollections,
    addQuoteToCollection: addQuoteToCollection,
    createCollectionForUser,
    removeQuoteFromCollection,
    deleteCollection
}

export default collectionActions;