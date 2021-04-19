const USER_URL = "http://cs5610-finalproj-server-java.herokuapp.com/api/users";

// Got help with null response from API from https://mcculloughwebservices.com/2016/09/23/handling-a-null-response-from-an-api/
const LogInUser = (username, password) =>
    fetch(`${USER_URL}/login`, {
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response =>  {
            if(!response.ok) {
                return {};
            }
            else {
                return response.text()
                    .then(text =>text.length ? JSON.parse(text) : {})
            }
        })

const GetUser = (userId) =>
    fetch(`${USER_URL}/${userId}`)
        .then(response => response.json())

const UpdateUser = (user) =>
    fetch(`${USER_URL}/${user.id}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())

const RegisterUser = (user) =>
    fetch(`${USER_URL}/register`, {
        method: "POST",
        body: JSON.stringify(user),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())

const GetCollectionForUser = (userId) =>
    fetch(`${USER_URL}/${userId}/collections`)
        .then(response => response.json())

const CreateCollectionForUser = (userId, collection) =>
    fetch(`${USER_URL}/${userId}/collections`, {
        method: "POST",
        body: JSON.stringify(collection),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())

//TODO: determine where/if to use this
const DeleteUser = (userId) =>
    fetch(`${USER_URL}/${userId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const UserService = {
    LogInUser,
    UpdateUser,
    RegisterUser,
    DeleteUser,
    GetUser,
    GetCollectionForUser,
    CreateCollectionForUser
}

export default UserService;