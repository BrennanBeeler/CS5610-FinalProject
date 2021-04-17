import React, {useEffect, useState} from "react";
import {Card, Col} from "react-bootstrap";
import collectionActions from "../../../../actions/collection-actions";
import {connect} from "react-redux";
import quotesService from "../../../../services/external-quotes-service";
import {Link} from "react-router-dom";

const CollectionQuote = ({quoteId}) => {

    const [quote, setQuote] = useState({});

    useEffect(() => {
        console.log("test")

        //TODO: put in real id
        quotesService.searchByQuoteId(quoteId)
            .then((results) => setQuote(results))
    }, [quoteId])

    return(
        <div>
            <Card>
                <Card.Body>
                    <div className="row">
                        <div className="col-8">
                            <Link to={`/details/quote/${quoteId}`}>
                                {quote.quote}
                            </Link>
                            <br/>
                            <div className="ml-5">
                                <br/>
                                - {quote.author}
                            </div>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-outline-danger float-right">
                                Remove quote
                            </button>
                        </div>
                    </div>
                </Card.Body>

            </Card>
        </div>
    )

}


const stpm = (state, ownProps) => ({
    quoteId : ownProps.quoteId
})

const dtpm = (dispatch) => ({
//    TODO: delete quote from collection


})

export default connect(stpm, dtpm)(CollectionQuote);
