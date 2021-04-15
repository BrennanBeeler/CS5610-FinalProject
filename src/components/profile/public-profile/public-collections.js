import React, { useEffect } from "react";
import { connect } from "react-redux";
import collectionActions from "../../../actions/collection-actions";
import { Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PublicCollections = ({
	getMyCollections,
	profileData,
	collectionOptions,
}) => {
	useEffect(() => {
		getMyCollections(profileData.id);
	}, []);

	return (
		<div>
			{collectionOptions.map((collection) => (
				<div>
					<Accordion>
						<Card>
							<Card.Header>
								<Accordion.Toggle
									as={Button}
									variant="link"
									eventKey="0"
								>
									{collection.collectionName}
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="0">
								<Card.Body>
									{/*TODO: allow editing of quotes*/}
									<ul>
										{collection.quotes.map((quote) => (
											<li key={quote.id}>
												<Link
													to={`/details/quote/${quote.id}`}
												>
													{quote.quote}
												</Link>
											</li>
										))}
									</ul>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
					<br />
				</div>
			))}
		</div>
	);
};

const stpm = (state) => ({
	profileData: state.profileData,
	collectionOptions: state.collectionOptions,
});

const dtpm = (dispatch) => ({
	getMyCollections: (userId) =>
		collectionActions.getMyCollections(dispatch, userId),
});

export default connect(stpm, dtpm)(PublicCollections);
