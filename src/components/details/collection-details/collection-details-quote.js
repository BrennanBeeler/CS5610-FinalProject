import React, {useEffect, useState} from "react";
import {Card, Col} from "react-bootstrap";
import quotesService from "../../../services/external-quotes-service";
import {Link} from "react-router-dom";

const CollectionDetailsQuote = ({quoteId}) => {

    const [quote, setQuote] = useState({});

    useEffect(() => {
        quotesService.searchByQuoteId(quoteId)
            .then((results) => setQuote(results))
    }, [quoteId])

    return(
        <div>
            <Card>
                <Card.Body>
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
                </Card.Body>
            </Card>
        </div>
    )
}

export default CollectionDetailsQuote;