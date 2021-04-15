const POST_URL = "http://localhost:8080/api/";

//TODO: should these be get?
const GetPostsForCollection = (collection) =>
    fetch(`${POST_URL}/collections/${collection.id}/posts`, {
        method: "POST",
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())

const GetPostsForQuote = (quote) =>
    fetch(`${POST_URL}/quotes/${quote.id}/posts`, {
        method: "POST",
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())

const CreatePostOnCollection = (post, collection) =>
    fetch(`${POST_URL}/collections/${collection.id}/posts`, {
        method: "POST",
        body: JSON.stringify(post),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())

const CreatePostOnQuote = (post, quote) =>
    fetch(`${POST_URL}/quotes/${quote.id}/posts`, {
        method: "POST",
        body: JSON.stringify(post),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())

const DeletePost = (post) =>
    fetch(`${POST_URL}/posts/${post.id}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const UpdatePost = (post) =>
    fetch(`${POST_URL}/posts/${post.id}`, {
        method: "POST",
        body: JSON.stringify(post),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())

//TODO: needs to be created server side
const GetPostsForUser = (user) => {

}

const PostService = {
    GetPostsForCollection,
    GetPostsForQuote,
    GetPostsForUser,
    CreatePostOnCollection,
    CreatePostOnQuote,
    DeletePost,
    UpdatePost
}

export default PostService;