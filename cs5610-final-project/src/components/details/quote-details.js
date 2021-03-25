import React, {useEffect, useState} from "react";
import quotesService from "../../services/quotes-service";

const QuoteDetails = ({quoteId}) => {

    const [quote, setQuote] = useState({})

    useEffect(() => {
        quotesService.searchByQuoteId(quoteId).then((results) => {
            setQuote(results)
        })
    }, [quoteId])


    return(
        <div>
            <h1>
                Quote Details
            </h1>

            <div className="card-body">
                <blockquote>
                    <p>
                        {quote.quote}
                    </p>
                    <footer className="blockquote-footer">
                        {quote.author}
                    </footer>
                </blockquote>

                <h3>
                    Tags
                </h3>

                <ul>
                    {
                        quote.categories.map(result =>
                            <li>
                                {result}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>


    )

}

export default QuoteDetails;