import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CreatorIcon from "../creator-icon/creator-icon-";
import CategoryCard from "../card/category-card";
import quotesService from "../../services/quotes-service"
import QuoteResult from "./quote-result";

const SearchResults = () => {

    const {searchTerm} = useParams();
    const [keywordResults, setKeywordResults] = useState([]);
    const [authorResults, setAuthorResults] = useState([]);
    const [categoryResults, setCategoryResults] = useState([]);

    useEffect( () => {
        quotesService.searchByAuthor(searchTerm).then((results) => {
            setAuthorResults(results)
        })
        quotesService.searchByKeyword(searchTerm).then((results) => {
                setKeywordResults(results)
        })
        quotesService.searchByCategory(searchTerm).then((results) => {
                setCategoryResults(results)
        })
    }, [searchTerm])

    return(
        <div className="container">
            <br/>

            <h1 className="row border-bottom">
                Results for: {searchTerm}
            </h1>

            <h3>
                Quotes
            </h3>

            {/*TODO: figure out why this isn't working*/}
            {
                (authorResults.length === 0) &&
                <h5>
                    By Author:
                </h5>
            }

            <ul>
                {authorResults.map(result =>
                    <QuoteResult result={result} key={result.id}/>
                )}
            </ul>

            {
                keywordResults !== [] &&
                <h5>
                    By Keyword:
                </h5>
            }

            <ul>
                {keywordResults.map(result =>
                    <QuoteResult result={result} key={result.id}/>
                )}
            </ul>

            {
                categoryResults !== [] &&
                <h5>
                    By Category:
                </h5>
            }

            <ul>
                {categoryResults.map(result =>
                    <QuoteResult result={result} key={result.id}/>
                )}
            </ul>

            <h3>
                Categories
            </h3>

            <br/>

            <div className="row">
                {/*TODO: populate with categories*/}
                {/*TODO: fix issue on very small screen where one category gets huge*/}
                <div className="col col-sm-6 col-md-3">
                    <CategoryCard/>
                </div>
                <div className="col col-sm-6 col-md-3">
                    <CategoryCard/>
                </div>
                <div className="col col-sm-6 col-md-3">
                    <CategoryCard/>
                </div>
                <div className="col col-sm-6 col-md-3">
                    <CategoryCard/>
                </div>
            </div>


            <br/>

            <h3>
                Creators
            </h3>

            {/*TODO: populate these appropriately and make them dynamically spaced- always 6*/}
            <div className="row">
                <div className="col col-sm-2 col-xs-4">
                    <CreatorIcon/>
                </div>
                <div className="col col-sm-2 col-xs-4">
                    <CreatorIcon/>
                </div>
                <div className="col col-sm-2 col-xs-4">
                    <CreatorIcon/>
                </div>
                <div className="col col-sm-2 col-xs-4">
                    <CreatorIcon/>
                </div>
                <div className="col col-sm-2 col-xs-4">
                    <CreatorIcon/>
                </div>
                <div className="col col-sm-2 col-xs-4">
                    <CreatorIcon/>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;