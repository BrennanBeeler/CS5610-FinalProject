import React, {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import CollectionService from "../../../../services/collection-service";

const FollowedCollectionDisplay = ({collectionId, handleUnfollow}) => {

    const [collection, setCollection] = useState({});

    const {profileId} = useParams();


    useEffect(() => {
        CollectionService.GetCollectionById(collectionId)
            .then(response => {
                setCollection(response)
            })
    }, [collectionId])

    return(
        <Card>
            <Card.Body>
                <Link to={`/details/collection/${collection.id}`}>
                    {collection.collectionName}
                </Link>

                {
                    profileId === undefined &&
                    <button className="btn float-right btn-outline-danger" onClick={() => handleUnfollow(collectionId)}>
                        Unfollow Collection
                    </button>
                }

            </Card.Body>
        </Card>
    )
}

export default FollowedCollectionDisplay;