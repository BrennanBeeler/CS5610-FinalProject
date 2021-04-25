import React, {useEffect, useState} from "react";
import PostService from "../../../../services/post-service";
import {Accordion, Button, Card} from "react-bootstrap";
import ProfileCollectionPost from "./profile-collection-post";
import ProfileQuotePost from "./profile-quote-post";

const MyPosts = ({profileData}) => {

    const [quotePosts, setQuotePosts] = useState([]);
    const [collectionPosts, setCollectionPosts] = useState([]);

    useEffect(() => {
        //THIS GETS POSTS FOR COLLECTIONS
        PostService.GetCollectionPostsForUser(profileData.id)
            .then(response => {
                if (response !== "BAD") {
                    setCollectionPosts(response)
                }
            })

        PostService.GetQuotePostsForUser(profileData.id)
            .then(response => {
                if (response !== "BAD") {
                    setQuotePosts(response)
                }
            })
    }, [profileData])

    return(
        <div>
            <Accordion>
                <Card>
                    <Card.Header>
                        Posts on Collections

                        <Accordion.Toggle as={Button} variant="outline-primary"
                                          eventKey="0" className="float-right">
                            Toggle Posts
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {
                                collectionPosts.length !== 0 ?
                                    <div>
                                        {
                                            collectionPosts.map(post => {
                                                if (post.collectionId !== null) {
                                                    return <ProfileCollectionPost post={post}/>
                                                }
                                                else{
                                                    return <></>
                                                }
                                            })
                                        }
                                    </div>
                                    :
                                    <div className="text-center">
                                        You haven't commented on any collections yet!
                                    </div>
                            }
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <br/>

            <Accordion>
                <Card>
                    <Card.Header>
                        Posts on Quotes

                        <Accordion.Toggle as={Button} variant="outline-primary"
                                          eventKey="0" className="float-right">
                            Toggle Posts
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {
                                quotePosts.length !== 0 ?
                                    <div>
                                        {
                                            quotePosts.map(post => {
                                                if (post.quoteId !== null) {
                                                    return <ProfileQuotePost post={post}/>
                                                }
                                                else{
                                                    return <></>
                                                }
                                            })
                                        }
                                    </div>
                                    :
                                    <div className="text-center">
                                        You haven't commented on any quotes yet!
                                    </div>
                            }
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )

}

export default MyPosts;