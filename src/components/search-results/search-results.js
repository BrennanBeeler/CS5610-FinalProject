import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import quotesService from "../../services/external-quotes-service";
import QuoteResult from "./quote-result.js";
import CollectionService from "../../services/collection-service";
import CollectionResult from "./collection-result.js";

const SearchResults = () => {
    const { searchTerm } = useParams();
    const [keywordResults, setKeywordResults] = useState([]);
    const [authorResults, setAuthorResults] = useState([]);
    const [categoryResults, setCategoryResults] = useState([]);
    const [collectionResults, setCollectionResults] = useState([]);

    useEffect(() => {
        quotesService.searchByAuthor(searchTerm).then((results) => {
            setAuthorResults(results);
        });
        quotesService.searchByKeyword(searchTerm).then((results) => {
            setKeywordResults(results);
        });
        quotesService.searchByCategory(searchTerm).then((results) => {
            setCategoryResults(results);
        });

        CollectionService.GetAllCollections().then((results) => {
            const regex = new RegExp(searchTerm, "i");
            setCollectionResults(
                results.filter(
                    (result) => result.collectionName.match(regex) !== null
                )
            );
        });
    }, [searchTerm]);

    return (
        <div className="container">
            <br />

            <h1 className="row border-bottom">Results for: {searchTerm}</h1>

            <h3>Quotes</h3>

            <h5>By Author:</h5>

            {authorResults.length === 0 && <div> No results by author </div>}

            <ul>
                {authorResults.map((result) => (
                    <QuoteResult result={result} key={result.id} />
                ))}
            </ul>

            <h5>By Keyword:</h5>

            {keywordResults.length === 0 && <div> No results by keyword </div>}


            <ul>
                {keywordResults.map((result) => (
                    <QuoteResult result={result} key={result.id} />
                ))}
            </ul>

            <h5>By Category:</h5>

            {categoryResults.length === 0 && <div> No results by category </div>}

            <ul>
                {categoryResults.map((result) => (
                    <QuoteResult result={result} key={result.id} />
                ))}
            </ul>

            <br />


            <h3>Collections</h3>

            {collectionResults.length === 0 && <div> No collection results </div>}

            <ul>
                {collectionResults.map((result) => (
                    <CollectionResult result={result} />
                ))}
            </ul>

            <br />
            <br />
        </div>
    );
};

export default SearchResults;
