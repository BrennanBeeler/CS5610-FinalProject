import React from "react"
import {Link} from "react-router-dom";

const QuoteResult = ({result}) => {
    return(
        <Link to={`/details/quote/${result.id}`} className="card">
            <div className="card-body">
                <blockquote>
                    <p>
                        {result.quote}
                    </p>
                    {
                        result.author !== null &&
                        <>
                            <footer className="blockquote-footer">
                                {result.author}
                            </footer>
                        </>
                    }
                </blockquote>
            </div>
        </Link>
    )
}

export default QuoteResult;