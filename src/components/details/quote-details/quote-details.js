import React, {useEffect, useState} from "react";
import quotesService from "../../../services/external-quotes-service";
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";
import AddQuoteToCollection from "./add-quote-to-collection";
import PostService from "../../../services/post-service";
import DetailsPostDisplay from "../details-post-display";

const QuoteDetails = ({profileData, loggedIn}) => {

    const {quoteId} = useParams();
    const [quote, setQuote] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [posts, setPosts] = useState([]);
    const [comment, setComment] = useState("");

    const handleSubmitPost = () => {
        PostService.CreatePostOnQuote({
            postText: comment,
            userId: profileData.id,
            likes: 0,
            contentId: quoteId
        }, quoteId)
            .then(response => {
                if(response !== "BAD") {
                    setPosts([...posts, response])
                    setComment("")
                }
                else {
                    alert("Encountered trouble posting comment. Please try again.")
                }
            })
    }

    useEffect(() => {
        quotesService.searchByQuoteId(quoteId).then((results) => {
            setQuote(results)
        })

        PostService.GetPostsForQuote(quoteId).then(results => {
            setPosts(results)
        })
    }, [quoteId])

    const handleClose = () => {
        setShowModal(false)
    }

    return(
        <div className="container">
            <br/>

            <div className="row">
                <h1 className="col-10">
                    Quote Details
                </h1>

                {
                    loggedIn &&
                    <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                        Add to Collection
                    </button>
                }
            </div>

            <AddQuoteToCollection key={quoteId} show={showModal} handleClose={() => handleClose()}/>

            <div className="card-body">
                <blockquote>
                    <p>
                        {quote.quote}
                    </p>
                    {
                        quote.author !== null &&
                        <>
                            <footer className="blockquote-footer">
                                {quote.author}
                            </footer>
                        </>
                    }
                </blockquote>

                <h3>
                    Tags
                </h3>

                <ul>
                    {
                        !(typeof quote.categories === "undefined") &&
                        <>
                            {
                                quote.categories.map(result =>
                                    <li>
                                        <Link to={`/search/${result}`}>
                                            {result}
                                        </Link>
                                    </li>
                                )
                            }
                        </>
                    }
                </ul>

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

                {
                    loggedIn &&
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
        </div>
    )
}

const stpm = (state) => ({
    profileData : state.profileData,
    loggedIn: state.loggedIn
})

export default connect(stpm)(QuoteDetails);