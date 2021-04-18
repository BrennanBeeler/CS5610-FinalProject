const POST_URL = "http://localhost:8080/api/";

const CreatePostOnQuote = (post, quoteId) =>
    fetch(`${POST_URL}/quotes/${quoteId}/posts`, {
        method: "POST",
        body: JSON.stringify(post),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())

const CreatePostOnCollection = (post, collectionId) =>
    fetch(`${POST_URL}/collections/${collectionId}/posts`, {
        method: "POST",
        body: JSON.stringify(post),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())

const GetPostsForQuote = (quoteId) =>
    fetch(`${POST_URL}/quotes/${quoteId}/posts`)
        .then(response => response.json())

const GetPostsForCollection = (collectionId) =>
    fetch(`${POST_URL}/collections/${collectionId}/posts`)
        .then(response => response.json())

const GetPostsForUser = (userId) =>
    fetch(`${POST_URL}/users/${userId}/posts`)
        .then(response => response.json())


const DeletePost = (postId) =>
    fetch(`${POST_URL}/posts/${postId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const UpdatePost = (post) =>
    fetch(`${POST_URL}/posts/${post.id}`, {
        method: "PUT",
        body: JSON.stringify(post),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())


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