import React, {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const ProfileCollectionPost = ({post}) => {
    return(
        <div className="mb-2">
            <Card>
                <Card.Body>
                    <Link to={`/details/collection/${post.collectionId}`}>
                        {post.postText}
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProfileCollectionPost;