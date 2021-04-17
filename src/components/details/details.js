import React from "react";
import {useParams} from "react-router-dom";
import QuoteDetails from "./quote-details/quote-details";
import CollectionDetails from "./collection-details/collection-details";

const Details = () => {
    const {quoteId, collectionId} = useParams();

    return(
        <div>
            {
                (quoteId !== "undefined" && typeof quoteId !== "undefined") &&
                    <div>
                        <QuoteDetails/>
                    </div>
            }

            {
                (collectionId !== "undefined" && typeof collectionId !== "undefined") &&
                <div>
                    <CollectionDetails/>
                </div>
            }
        </div>
    )
}

export default Details;