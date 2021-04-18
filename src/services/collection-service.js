const COLLECTION_URL = "http://cs5610-finalproj-server-java.herokuapp.com/api/collections";

const GetCollectionById = (collectionId) =>
    fetch(`${COLLECTION_URL}/${collectionId}`)
        .then(response =>  {
            if(!response.ok) {
                return {};
            }
            else {
                return response.json()
            }
        })

const DeleteCollection = (collectionId) =>
    fetch(`${COLLECTION_URL}/${collectionId}`, {
        method: "DELETE"
    })
        .then(response =>  {
            if(!response.ok) {
                return {};
            }
            else {
                return response.json()
            }
        })

const UpdateCollection = (collection) =>
    fetch(`${COLLECTION_URL}/${collection.id}`, {
        method: "PUT",
        body: JSON.stringify(collection),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response =>  {
            if(!response.ok) {
                return {};
            }
            else {
                return response.json()
            }
        })

const CollectionService = {
    GetCollectionById,
    DeleteCollection,
    UpdateCollection
}

export default CollectionService;