import React from "react";
import {useParams} from "react-router-dom";
import QuoteDetails from "./quote-details";

const Details = () => {
    const {quoteId} = useParams();

    return(
        <div>
            {
                (quoteId !== "undefined" && typeof quoteId !== "undefined") &&
                    <div>
                        <QuoteDetails quoteId={quoteId}/>
                    </div>
            }
        </div>
    )
}

export default Details;