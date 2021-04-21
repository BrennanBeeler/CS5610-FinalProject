import React, {useEffect, useState} from "react";
import UserService from "../../services/user-service";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const DetailsPostDisplay = ({post}) => {

    const [user, setUser] = useState( {username: "Username not found..."});

    useEffect(() => {
        UserService.GetUser(post.userId).then(response => {
            //TODO: validate
            if (response !== "BAD") {
                setUser(response)
            }
        })
    }, [post])

    return(
        <div className="mb-2">
            <Card>
                <Card.Title>
                    <Link to={`/profile/${post.userId}`}>
                        <i className="fa fa-user-circle mr-2 ml-2"/>
                        {user.username} -
                    </Link>
                </Card.Title>
                <Card.Body>
                    <p style={{marginLeft: "50px"}}>
                        {
                            post.postText
                        }
                    </p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DetailsPostDisplay;