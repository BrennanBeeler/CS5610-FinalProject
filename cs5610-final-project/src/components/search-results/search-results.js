import React from "react";
import {useParams} from "react-router-dom";
import CreatorIcon from "../creator-icon/creator-icon-";
import CategoryCard from "../card/category-card";

const SearchResults = () => {

    const {searchTerm} = useParams();

    return(
        <div className="container">
            <h2>
                Search results for: {searchTerm}
            </h2>

            <br/>
            <br/>
            <br/>


            <h3>
                Quotes
            </h3>

            <br/>

            {/*TODO: going to need to use /quote/search with searchTerm as author and category and maybe tags*/}
            quotes - populated by author/category/tags?

            <br/>

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