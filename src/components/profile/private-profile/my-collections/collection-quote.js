import React, {useEffect, useState} from "react";
import {Card, Col} from "react-bootstrap";
import {connect} from "react-redux";
import quotesService from "../../../../services/external-quotes-service";
import {Link} from "react-router-dom";

const CollectionQuote = ({quoteId, collection, handleQuoteRemoval}) => {

    const [quote, setQuote] = useState({});

    useEffect(() => {
        quotesService.searchByQuoteId(quoteId)
            .then((results) => setQuote(results))
    }, [quoteId])

    return(
        <div>
            <Card>
                <Card.Body>
                    <div className="row">
                        <div className="col-8">
                            <blockquote>
                                <Link to={`/details/quote/${quoteId}`}>
                                    {quote.quote}
                                </Link>
                            </blockquote>
                            {
                                quote.author !== null &&
                                <div className="ml-5">
                                    <footer className="blockquote-footer">
                                        {quote.author}
                                    </footer>
                                </div>
                            }
                        </div>
                        <div className="col-4">
                            <button className="btn btn-outline-danger float-right"
                                    onClick={() => handleQuoteRemoval(collection, quoteId)}>
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
    quoteId : ownProps.quoteId,
    collectionId: ownProps.collectionId
})

export default connect(stpm)(CollectionQuote);
