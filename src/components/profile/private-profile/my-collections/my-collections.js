import React, {useEffect} from "react";
import {connect} from "react-redux";
import collectionActions from "../../../../actions/collection-actions";
import {Card, Accordion, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import CollectionQuote from "./collection-quote";

const MyCollections = ({getMyCollections, profileData, collectionOptions}) => {

	useEffect(() => {
		getMyCollections(profileData.id)
	}, [])

	const handleCollectionCreation = () => {
	//TODO

	}

	return (
		<div>
			<button className="btn btn-success">
				Create New Collection
			</button>

			<br/>
			<br/>

			{
				collectionOptions.length === 0 &&
				<div className="text-center">
					You haven't created any collections yet. Click "Create New Collection" to try it out!
				</div>
			}

			{console.log(collectionOptions)}

			{
				collectionOptions.map(collection =>
					<Accordion>
						<Card>
							<Card.Header>
								<div className="row">
									<div className="col-4">
										<Link to={`/details/collection/${collection.id}`}>
											{/*TODO: make bigger*/}
											{collection.collectionName}
										</Link>
									</div>

									<div className="col-5">
										Likes: {collection.likes}
									</div>

									<div className="col-3">
										<Accordion.Toggle as={Button} variant="outline-primary"
														  eventKey="0" className="float-right">
											Toggle Quotes
										</Accordion.Toggle>
									</div>
								</div>

							</Card.Header>
							<Accordion.Collapse eventKey="0">
								<Card.Body>
									{/*TODO: allow editing of quotes*/}
									{
										collection.quoteIds.map(quoteId =>
											<div>
												<CollectionQuote quoteId={quoteId}/>
												<br/>
											</div>
										)
									}
								</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
				)
			}
		</div>
	)
}



const stpm = (state) => ({
	profileData : state.profileData,
	collectionOptions: state.collectionOptions
})

const dtpm = (dispatch) => ({
	getMyCollections: (userId) => collectionActions.getMyCollections(dispatch, userId)
})

export default connect(stpm, dtpm)(MyCollections);