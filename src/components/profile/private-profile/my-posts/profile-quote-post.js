import React, {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const ProfileQuotePost = ({post}) => {
    console.log(post)

    return(
        <div className="mb-2">
            <Card>
                <Card.Body>
                    <Link to={`/details/quote/${post.quoteId}`}>
                        {post.postText}
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProfileQuotePost;