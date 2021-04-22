import React from "react";
import "./collection-icon.css"

const CollectionIcon = ({collection}) => {
    return(
        <div className="justify-content-center">
            <img src="https://via.placeholder.com/100" alt="placeholder" className="wbdv-circle"/>
            <br/>
            <div className="text-center">
                {collection.collectionName}
            </div>
        </div>
    )
}

export default CollectionIcon;


