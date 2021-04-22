import React from "react"
import {Link} from "react-router-dom";

const CollectionResult = ({result}) => {
    return(
        <Link to={`/details/collection/${result.id}`} className="card">
            <div className="card-body">
                <blockquote>
                    {result.collectionName}
                </blockquote>
            </div>
        </Link>
    )
}

export default CollectionResult;