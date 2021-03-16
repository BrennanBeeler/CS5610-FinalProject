import React, {useState} from "react"
import {useHistory} from "react-router-dom";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const history = useHistory()

    const handleSearch = () => {
        if (searchTerm !== "") {
            history.push(`/search/${searchTerm}`)
        }
    }

    return(
        <div className="container">
            <br/>
            <br/>
            <br/>
            <br/>
            <label htmlFor="searchBar">
                <h1>Search QOTD</h1>
            </label>
            {/*TODO: figure out what is searchable*/}
            <input id="searchBar" className="form-control"
                   placeholder="Search for categories, creators, or search for quotes by author" value={searchTerm}
                   onChange={(event) => setSearchTerm(event.target.value)}/>
            <br/>
            <div className="row justify-content-center">
                <button className="btn btn-primary" onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search