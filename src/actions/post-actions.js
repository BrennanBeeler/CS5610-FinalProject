import PostService from "../services/post-service";

const CreatePostOnQuote = (post, quoteId) => {
    PostService.CreatePostOnQuote(post, quoteId)
        .then(response => console.log(response))
}

const CreatePostOnCollection = (post, collectionId) => {
    PostService.CreatePostOnCollection(post, collectionId)
        .then(response => console.log(response))
}

const GetPostsForQuote = (quoteId) =>
    PostService.GetPostsForQuote(quoteId)
        .then(response => response)


const GetPostsForCollection = (collectionId) =>
    PostService.GetPostsForCollection(collectionId)
        .then(response => response)


const GetPostsForUser = (userId) =>
    PostService.GetCollectionPostsForUser(userId)
        .then(response => response)


const DeletePost = (postId) => {
    PostService.DeletePost(postId)
        .then(response => console.log(response))
}

const UpdatePost = (post) => {
    PostService.UpdatePost(post)
        .then(response => console.log(response))
}

const PostActions = {
    CreatePostOnQuote,
    CreatePostOnCollection,
    GetPostsForQuote,
    GetPostsForCollection,
    GetPostsForUser,
    DeletePost,
    UpdatePost
}

export default PostActions;