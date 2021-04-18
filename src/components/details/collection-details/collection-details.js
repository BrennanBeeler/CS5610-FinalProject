import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import CollectionService from "../../../services/collection-service";
import {useParams} from "react-router-dom";

const CollectionDetails = () => {

    const {collectionId} = useParams();

    const [collection, setCollection] = useState({});


    useEffect(() => {
        CollectionService.GetCollectionById(collectionId).then((results) => {
            setCollection(results)
        })
    }, [collectionId])

    return(
        <div className="container-fluid">
            Collection Details
        </div>
    )

}


const stpm = (state) => ({

})

const dtpm = (dispatch) => ({

})

export default connect(stpm, dtpm)(CollectionDetails);