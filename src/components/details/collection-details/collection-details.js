import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import CollectionService from "../../../services/collection-service";
import {Link, useParams} from "react-router-dom";
import CollectionDetailsQuote from "./collection-details-quote";

const CollectionDetails = ({loggedIn}) => {

    const {collectionId} = useParams();

    const [collection, setCollection] = useState({});
    const [comment, setComment] = useState("");


    useEffect(() => {
        CollectionService.GetCollectionById(collectionId).then((results) => {
            setCollection(results)
        })
    }, [collectionId])

    return(
        <div className="container">
            <br/>

            <div className="row">
                <h1 className="col-10">
                    {collection.collectionName}
                </h1>

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

            {/*TODO: get quote posts for this quote- these link out to profile of user who made them?*/}
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
                loggedIn === true &&
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
    )
}


const stpm = (state) => ({
    loggedIn: state.loggedIn
})

const dtpm = (dispatch) => ({

})

export default connect(stpm, dtpm)(CollectionDetails);