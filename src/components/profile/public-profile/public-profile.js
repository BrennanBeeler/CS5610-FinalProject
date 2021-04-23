import React, {useEffect, useState} from "react";
import UserService from "../../../services/user-service";
import PostService from "../../../services/post-service";
import {Accordion, Button, Card} from "react-bootstrap";
import ProfileCollectionPost from "../private-profile/my-posts/profile-collection-post";
import ProfileQuotePost from "../private-profile/my-posts/profile-quote-post";
import {Link} from "react-router-dom";
import FollowedCollectionDisplay from "../private-profile/followed-collections/followed-collection-display";

const PublicProfile = ({userId}) => {
	const [profileData, setProfileData] = useState({});
	const [quotePosts, setQuotePosts] = useState([]);
	const [collectionPosts, setCollectionPosts] = useState([]);
	const [usersCollections, setUsersCollections] = useState([]);

	useEffect(() => {
		UserService.GetUser(userId).then(response => {
			setProfileData(response)
		})
		PostService.GetCollectionPostsForUser(userId)
			.then(response => {
				//TODO: validate
				if (response !== "BAD") {
					setCollectionPosts(response)
				}
			})
		PostService.GetQuotePostsForUser(userId)
			.then(response => {
				//TODO: validate
				if (response !== "BAD") {
					setQuotePosts(response)
				}
			})
		UserService.GetCollectionForUser(userId)
			.then(response => {
				setUsersCollections(response)
			})
	}, [userId])

	return (
		<>
			{
				profileData.id === undefined ?
					<div className="text-center">
						This user doesn't exist!
					</div>
					:
					<div>
						<h3>
							{profileData.username}'s Profile
						</h3>

						<br/>

						<Accordion>
							<Card>
								<Card.Header>
									<div className="row">
										<div className="col-9">
											{profileData.username}'s Collections
										</div>

										<div className="col-3">
											<Accordion.Toggle as={Button} variant="outline-primary"
															  eventKey="0" className="float-right">
												Toggle Collections
											</Accordion.Toggle>
										</div>
									</div>

								</Card.Header>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										{
											usersCollections.length === 0 &&
											<div>
												{profileData.username} hasn't made any collections yet
											</div>
										}
										{
											usersCollections.map(collection =>
												<div className="mb-2">
													<Card>
														<Card.Body>
															<Link to={`/details/collection/${collection.id}`}>
																{collection.collectionName}
															</Link>
														</Card.Body>
													</Card>
												</div>
											)
										}

									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>

						<br/>

						<Accordion>
							<Card>
								<Card.Header>
									<div className="row">
										<div className="col-9">
											{profileData.username}'s Followed Collections
										</div>

										<div className="col-3">
											<Accordion.Toggle as={Button} variant="outline-primary"
															  eventKey="0" className="float-right">
												Toggle Collections
											</Accordion.Toggle>
										</div>
									</div>
								</Card.Header>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										{
											profileData.followedCollections !== undefined && (
												profileData.followedCollections.length === 0 ?
													<div>
														{profileData.username} hasn't made any collections yet
													</div>
													:
													(
														profileData.followedCollections.map(collectionId =>
															<>
																<FollowedCollectionDisplay collectionId={collectionId}/>
																<br/>
															</>
														)
													)
											)
										}
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>

						<br/>

						<Accordion>
							<Card>
								<Card.Header>
									{profileData.username}'s Posts on Collections

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
														})
													}
												</div>
												:
												<div className="text-center">
													{profileData.username} hasn't made any comments yet!
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
									{profileData.username}'s Posts on Quotes

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
														})
													}
												</div>
												:
												<div className="text-center">
													{profileData.username} hasn't made any comments yet!
												</div>
										}
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>

						<br/>
						<br/>
					</div>
			}
		</>

	)
}

export default PublicProfile;
