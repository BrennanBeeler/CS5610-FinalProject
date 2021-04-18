import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import collectionActions from "../../../../actions/collection-actions";
import {Card, Accordion, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import CollectionQuote from "./collection-quote";
import CreateCollectionModal from "./create-collection-modal";

const MyCollections = ({getMyCollections, profileData, collectionOptions, deleteCollection}) => {

	const [showModal, setShowModal] = useState(false)

	const [localCollectionOptions, setLocalCollectionOptions] = useState(collectionOptions)

	const handleClose = () => {
		setShowModal(false)
	}

	//TODO: figure out why not called
	const handleLocalCreateCollection = (collection) => {
		console.log("I'm here")
		console.log(collection)
		console.log(localCollectionOptions.concat([collection]))

		setLocalCollectionOptions(localCollectionOptions.concat([collection]))
	}

	const handleCreateCollection = (collection) => {

	}

	//TODO: figure out why this isn't called
	const handleDeleteCollection = (collection) => {
		deleteCollection(collection.id)
			.then(response => {
				if (response === 1) {
					setLocalCollectionOptions(localCollectionOptions.filter(localCollection =>
						localCollection.id !== collection.id))
				}
			})
	}

	useEffect(() => {
		getMyCollections(profileData.id)
			.then(response => setLocalCollectionOptions(response))
	}, [profileData])

	return (
		<div>
			<button className="btn btn-success" onClick={() => setShowModal(true)}>
				Create New Collection
			</button>

			<CreateCollectionModal show={showModal}
								   key={new Date().getTime()}
								   handleLocalCreateCollection={handleLocalCreateCollection}
								   handleClose={() => handleClose()}/>

			<br/>
			<br/>

			{
				localCollectionOptions.length === 0 &&
				<div className="text-center">
					You haven't created any collections yet. Click "Create New Collection" to try it out!
				</div>
			}

			{
				localCollectionOptions.map(collection =>
					<div key={collection.id}>
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
										{
											collection.quoteIds.length === 0 &&
											<div>
												No quotes added yet!
											</div>
										}

										{/*TODO: allow editing of quotes*/}
										{
											collection.quoteIds.map(quoteId =>
												<div>
													<CollectionQuote collection={collection} quoteId={quoteId}/>
													<br/>
												</div>
											)
										}
										<button className="btn-outline-danger btn float-right mb-3"
												onClick={() => handleDeleteCollection(collection)}>
											Delete Collection
										</button>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
						<br/>
					</div>
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
	getMyCollections: (userId) => collectionActions.getMyCollections(dispatch, userId),
	deleteCollection: (collectionId) => collectionActions.deleteCollection(dispatch, collectionId),
	createCollectionForUser : (userId, collection) =>
		collectionActions.createCollectionForUser(dispatch, userId, collection)
})

export default connect(stpm, dtpm)(MyCollections);