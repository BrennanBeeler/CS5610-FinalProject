import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CreatorIcon from "../creator-icon/creator-icon-";
import CategoryCard from "../card/category-card";
import quotesService from "../../services/quotes-service"

const SearchResults = () => {

    const {searchTerm} = useParams();
    const [keywordResults, setKeywordResults] = useState([]);
    const [authorResults, setAuthorResults] = useState([]);
    const [categoryResults, setCategoryResults] = useState([]);

    useEffect( () => {
        quotesService.searchByAuthor(searchTerm).then((results) => {
            console.log(results)
            setAuthorResults(results)
        })
        // quotesService.searchByKeyword(searchTerm).then(results =>
        //     setKeywordResults(results.contents.quotes)
        // )
        // quotesService.searchByCategory(searchTerm).then(results =>
        //     setKeywordResults(results.contents.quotes)
        // )
    }, [searchTerm])

    return(
        <div className="container">
            <br/>

            <h1 className="row border-bottom">
                Results
            </h1>

            <h3>
                Quotes
            </h3>

            {/*TODO: update based on lecture*/}
            <ul>
                {authorResults.map(result =>
                    <li key={result.id}>
                        <blockquote>
                            {result.quote} - {result.author}
                        </blockquote>
                    </li>
                )}
            </ul>

            <ul>
                {keywordResults.map(result =>
                    <li key={result.id}>
                        <blockquote>
                            {result.quote} - {result.author}
                        </blockquote>
                    </li>
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