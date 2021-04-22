import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import CollectionService from "../../../services/collection-service";
import {Link, useHistory, useParams} from "react-router-dom";
import CollectionDetailsQuote from "./collection-details-quote";
import PostService from "../../../services/post-service";
import DetailsPostDisplay from "../details-post-display";
import profileActions from "../../../actions/profile-actions";

const CollectionDetails = ({loggedIn, profileData, followCollection, unFollowCollection}) => {

    const {collectionId} = useParams();

    let history = useHistory();

    const [collection, setCollection] = useState({});
    const [comment, setComment] = useState("");
    const [posts, setPosts] = useState([]);

    const handleSubmitPost = () => {
        PostService.CreatePostOnCollection({
            postText: comment,
            userId: profileData.id,
            likes: 0,
            contentId: collectionId
        }, collectionId)
            .then(response => {
                //TODO: validate
                if(response !== "BAD") {
                    setPosts([...posts, response])
                }
                else {
                    alert("Encountered trouble posting comment. Please try again.")
                }
            })

        setCollection("")
    }

    console.log({profileData})

    const handleFollowCollection = () => {
        if (!loggedIn) {
            history.push("/login")
        }
        else {
            if (!profileData.followedCollections.includes(parseInt(collectionId))) {
                followCollection(profileData, parseInt(collectionId))
            }
            else {
                unFollowCollection(profileData, parseInt(collectionId))
            }
        }
    }

    useEffect(() => {
        CollectionService.GetCollectionById(collectionId).then((results) => {
            setCollection(results)
        })

        PostService.GetPostsForCollection(collectionId).then(results => {
            setPosts(results)
        })
    }, [collectionId])

    return(
        <div className="container">
            <br/>

            <div className="row">
                <h1 className="col-8">
                    {collection.collectionName}
                </h1>

                <div className="col-2">
                    <button className="btn btn-secondary" onClick={handleFollowCollection}>
                        {
                            !loggedIn &&
                            <> Follow this collection </>
                        }
                        {
                            loggedIn && (
                            profileData.followedCollections.includes(parseInt(collectionId)) ?
                                <> Unfollow this collection! </>
                                : <> Follow this collection </>
                            )
                        }
                    </button>
                </div>

                <div className="col-2">
                    <Link className="btn btn-primary" to={`/profile/${collection.userId}`}>
                        View Creator Profile
                    </Link>
                </div>
            </div>
            <br/>


            <h3>
                Quotes
            </h3>

            {
                !(typeof collection.quoteIds === "undefined") &&
                <div>
                    {
                        collection.quoteIds.map(quoteId =>
                            <CollectionDetailsQuote quoteId={quoteId}/>
                        )
                    }
                </div>
            }

            <br/>

            <h3>
                Comments
            </h3>


            {
                posts.length !== 0 ?
                <div>
                    {
                        posts.map(post =>
                            <DetailsPostDisplay post={post}/>
                       )
                    }
                </div>
                    :
                    <div className="text-center">
                        No comments for this collection yet!
                    </div>
            }

            <br/>

            {
                loggedIn === true &&
                <div>
                    <label htmlFor="quoteCommentFld" className="form-check-label">Add comment</label>
                    <textarea className="form-control" id="quoteCommentFld" value={comment} placeholder="Enter comment"
                              onChange={event => setComment(event.target.value)}/>
                    <button className="btn btn-success mt-2 float-right" onClick={handleSubmitPost}>
                        Submit post
                    </button>
                </div>
            }
        </div>
    )
}


const stpm = (state) => ({
    loggedIn: state.loggedIn,
    profileData: state.profileData
})

const dtpm = (dispatch) => ({
    followCollection : (profileData, collectionId) => profileActions.followCollection(dispatch, profileData, collectionId)(dispatch),
    unFollowCollection : (profileData, collectionId) => profileActions.unFollowCollection(dispatch, profileData, collectionId)(dispatch)
})


export default connect(stpm, dtpm)(CollectionDetails);