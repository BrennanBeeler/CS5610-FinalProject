const COLLECTION_URL = "http://localhost:8080/api/collections";

//TODO: set up on server side
const GetCollectionById = (collectionId) =>
    fetch(`${COLLECTION_URL}/${collectionId}`)
        .then(response => response.json())

const DeleteCollection = (collectionId) =>
    fetch(`${COLLECTION_URL}/${collectionId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const UpdateCollection = (collection) =>
    fetch(`${COLLECTION_URL}/${collection.id}`, {
        method: "PUT",
        body: JSON.stringify(collection),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())

const CollectionService = {
    GetCollectionById,
    DeleteCollection,
    UpdateCollection
}

export default CollectionService;