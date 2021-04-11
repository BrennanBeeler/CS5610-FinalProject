import React, {useEffect, useState} from "react";
import quotesService from "../../../services/quotes-service";
import {useParams} from "react-router-dom";
import profileActions from "../../../actions/profile-actions";
import {connect} from "react-redux";
import AddQuoteToCollection from "./add-quote-to-collection"

const QuoteDetails = ({profileData}) => {

    const {quoteId} = useParams();
    const [quote, setQuote] = useState({})
    const [showModal, setShowModal] = useState(false)


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
            <div className="row">
                <h1>
                    Quote Details
                </h1>

                {
                    profileData.isPremium &&
                    <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                        Add to Collection
                    </button>
                }
            </div>

            {/*<AddQuoteToCollection show={showModal} handleClose={() => handleClose()}/>*/}

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
                                        {result}
                                    </li>
                                )
                            }
                        </>
                    }
                </ul>
            </div>
        </div>
    )

}

const stpm = (state) => ({
    profileData : state.profileData
})

const dtpm = (dispatch) => ({
    updateBio: (bio) => profileActions.updateBio(dispatch, bio)
})

export default connect(stpm, dtpm)(QuoteDetails);