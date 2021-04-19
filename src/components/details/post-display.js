import React, {useEffect, useState} from "react";
import UserService from "../../services/user-service";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const PostDisplay = ({post}) => {

    const [user, setUser] = useState( {username: "Username not found..."});

    useEffect(() => {
        UserService.GetUser(post.userId).then(response => {
            //TODO: validate
            if (response !== "BAD") {
                setUser(response)
            }
        })
    })

    return(
        <div>
            <Card>
                <Card.Body>
                    <blockquote>
                        {
                            post.postText
                        }
                    </blockquote>

                    <Link to={`/profile/${post.userId}`}>
                        {user.username}
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PostDisplay