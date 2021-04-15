const USER_URL = "http://localhost:8080/api/users";

//TODO: NEEDS TO BE CREATED
const LogInUser = (username, password) => {
    fetch(`${USER_URL}`)
        .then(response => response.json())
}

const GetUser = (user) =>
    fetch(`${USER_URL}/${user.id}`)
        .then(response => response.json())

const UpdateUser = (user) =>
    fetch(`${USER_URL}/${user.id}`, {
        method: "POST",
        body: JSON.stringify(user),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())

const CreateUser = (user) =>
    fetch(`${USER_URL}`, {
        method: "POST",
        body: JSON.stringify(user),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())

const GetCollectionForUser = (user) =>
    fetch(`${USER_URL}/${user.id}/collections`)
        .then(response => response.json())

const CreateCollectionForUser = (user, collection) =>
    fetch(`${USER_URL}/${user.id}/collections`, {
        method: "POST",
        body: JSON.stringify(collection),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())

//TODO: determine where/if to use this
const DeleteUser = (user) =>
    fetch(`${USER_URL}/${user.id}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const UserService = {
    LogInUser,
    UpdateUser,
    CreateUser,
    DeleteUser,
    GetUser,
    GetCollectionForUser,
    CreateCollectionForUser
}

export default UserService;