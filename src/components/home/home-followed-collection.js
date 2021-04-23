import React, {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import CollectionService from "../../services/collection-service";

const HomeFollowedCollection = ({collectionId}) => {

    const [collection, setCollection] = useState({});

    useEffect(() => {
        CollectionService.GetCollectionById(collectionId)
            .then(response => {
                setCollection(response)
            })
    }, [collectionId])

    return(
        <Card className="col">
            <Card.Body>
                <Link to={`/details/collection/${collection.id}`}>
                    {collection.collectionName}
                </Link>
            </Card.Body>
        </Card>
    )
}

export default HomeFollowedCollection;