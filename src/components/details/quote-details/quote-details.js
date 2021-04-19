import React, {useEffect, useState} from "react";
import quotesService from "../../../services/external-quotes-service";
import {Link, useParams} from "react-router-dom";
import profileActions from "../../../actions/profile-actions";
import {connect} from "react-redux";
import AddQuoteToCollection from "./add-quote-to-collection";

const QuoteDetails = ({profileData, loggedIn}) => {

    const {quoteId} = useParams();
    const [quote, setQuote] = useState({})
    const [showModal, setShowModal] = useState(false)

    const [comment, setComment] = useState("");

    const handleSubmitComment = () => {

    }

    useEffect(() => {
        quotesService.searchByQuoteId(quoteId).then((results) => {
            setQuote(results)
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

            {/*    TODO: get quote posts for this quote- these link out to profile of user who made them?*/}
                <ul>
                    <li>
                        Quote post 1
                    </li>
                    <li>
                        Quote post 2
                    </li>
                    <li>
                        Quote post 3
                    </li>
                    <li>
                        Quote post 4
                    </li>
                </ul>

                {
                    loggedIn &&
                    <div>
                        <label htmlFor="quoteCommentFld" className="form-check-label">Add comment</label>
                        <textarea className="form-control" id="quoteCommentFld" value={comment} placeholder="Enter comment"
                                  onChange={event => setComment(event.target.value)}/>
                        {/*          TODO: set up submit post*/}
                        <button className="btn btn-success mt-2 float-right">
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

const dtpm = (dispatch) => ({
    updateBio: (bio) => profileActions.updateBio(dispatch, bio)
})

export default connect(stpm, dtpm)(QuoteDetails);