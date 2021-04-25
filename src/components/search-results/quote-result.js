import React from "react";
import { Link } from "react-router-dom";
import "./quote-result.css";

const QuoteResult = ({ result }) => {
    return (
        <Link to={`/details/quote/${result.id}`}>
            <blockquote>
                <p>{result.quote}</p>
                {result.author !== null && (
                    <>
                        <footer className="blockquote-footer">
                            {result.author}
                        </footer>
                    </>
                )}
            </blockquote>
        </Link>
    );
};

export default QuoteResult;
