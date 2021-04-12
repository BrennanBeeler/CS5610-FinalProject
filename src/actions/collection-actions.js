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
                quotes : [
                    {
                        "quote": "Stress is like a pulse, if you have it you are alive.",
                        "length": "53",
                        "author": "Steve Maraboli",
                        "tags": [
                            "being-alive",
                            "inspire",
                            "stress"
                        ],
                        "category": "inspire",
                        "language": "en",
                        "date": "2021-04-11",
                        "permalink": "https://theysaidso.com/quote/steve-maraboli-stress-is-like-a-pulse-if-you-have-it-you-are-alive",
                        "id": "5p6wMGj72uOLUuOZCaX_wQeF",
                        "background": "https://theysaidso.com/img/qod/qod-inspire.jpg",
                        "title": "Inspiring Quote of the day"
                    },
                    {
                        "quote": "Stress is like a pulse, if you have it you are alive.",
                        "length": "53",
                        "author": "Steve Maraboli",
                        "tags": [
                            "being-alive",
                            "inspire",
                            "stress"
                        ],
                        "category": "inspire",
                        "language": "en",
                        "date": "2021-04-11",
                        "permalink": "https://theysaidso.com/quote/steve-maraboli-stress-is-like-a-pulse-if-you-have-it-you-are-alive",
                        "id": "5p6wMGj72uOLUuOZCaX_wQeF",
                        "background": "https://theysaidso.com/img/qod/qod-inspire.jpg",
                        "title": "Inspiring Quote of the day"
                    }]
            },
            {
                collectionId: 2,
                collectionName: "Test Collection 2",
                quotes : [
                    {
                        "quote": "Stress is like a pulse, if you have it you are alive.",
                        "length": "53",
                        "author": "Steve Maraboli",
                        "tags": [
                            "being-alive",
                            "inspire",
                            "stress"
                        ],
                        "category": "inspire",
                        "language": "en",
                        "date": "2021-04-11",
                        "permalink": "https://theysaidso.com/quote/steve-maraboli-stress-is-like-a-pulse-if-you-have-it-you-are-alive",
                        "id": "5p6wMGj72uOLUuOZCaX_wQeF",
                        "background": "https://theysaidso.com/img/qod/qod-inspire.jpg",
                        "title": "Inspiring Quote of the day"
                    },
                    {
                        "quote": "Stress is like a pulse, if you have it you are alive.",
                        "length": "53",
                        "author": "Steve Maraboli",
                        "tags": [
                            "being-alive",
                            "inspire",
                            "stress"
                        ],
                        "category": "inspire",
                        "language": "en",
                        "date": "2021-04-11",
                        "permalink": "https://theysaidso.com/quote/steve-maraboli-stress-is-like-a-pulse-if-you-have-it-you-are-alive",
                        "id": "5p6wMGj72uOLUuOZCaX_wQeF",
                        "background": "https://theysaidso.com/img/qod/qod-inspire.jpg",
                        "title": "Inspiring Quote of the day"
                    }]
            },
            {
                collectionId: 3,
                collectionName: "Test Collection 3",
                quotes : [
                    {
                        "quote": "Stress is like a pulse, if you have it you are alive.",
                        "length": "53",
                        "author": "Steve Maraboli",
                        "tags": [
                            "being-alive",
                            "inspire",
                            "stress"
                        ],
                        "category": "inspire",
                        "language": "en",
                        "date": "2021-04-11",
                        "permalink": "https://theysaidso.com/quote/steve-maraboli-stress-is-like-a-pulse-if-you-have-it-you-are-alive",
                        "id": "5p6wMGj72uOLUuOZCaX_wQeF",
                        "background": "https://theysaidso.com/img/qod/qod-inspire.jpg",
                        "title": "Inspiring Quote of the day"
                    },
                    {
                        "quote": "Stress is like a pulse, if you have it you are alive.",
                        "length": "53",
                        "author": "Steve Maraboli",
                        "tags": [
                            "being-alive",
                            "inspire",
                            "stress"
                        ],
                        "category": "inspire",
                        "language": "en",
                        "date": "2021-04-11",
                        "permalink": "https://theysaidso.com/quote/steve-maraboli-stress-is-like-a-pulse-if-you-have-it-you-are-alive",
                        "id": "5p6wMGj72uOLUuOZCaX_wQeF",
                        "background": "https://theysaidso.com/img/qod/qod-inspire.jpg",
                        "title": "Inspiring Quote of the day"
                    }]
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

const addQuoteToCollection = (dispatch, collectionId, quoteId) => {
    //TODO: here we send new quote to db for adding to collection- then send the new collection with changes to
    // reducer
    dispatch({
        type: ADD_QUOTE_TO_COLLECTION,
        collection: {
            collectionId: collectionId,
            collectionName: "Test Collection 2",
            quotes : []
        }
    })
}

const collectionActions = {
    getFollowedCollections: getFollowedCollections,
    getMyCollections: getMyCollections,
    addQuoteToCollection: addQuoteToCollection
}

export default collectionActions;