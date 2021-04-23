import React, {useState} from "react";
import FollowedCollectionDisplay from "./followed-collection-display";
import profileActions from "../../../../actions/profile-actions";
import {connect} from "react-redux";

const FollowedCollections = ({followedCollections, profileData, unFollowCollection}) => {

	const [localFollowedCollections, setLocalFollowedCollections] = useState(followedCollections);

	const handleUnfollow = (collectionId) => {
		if (unFollowCollection(profileData, parseInt(collectionId))) {
			setLocalFollowedCollections(localFollowedCollections.filter(id => id !== collectionId))
		}
	}

	return (
		<div>
			{
				localFollowedCollections.length === 0 &&
					<div>
						You aren't following any collections right now... Try the search feature or the collection
						spotlight and follow some!
					</div>
			}

			{
				localFollowedCollections.map(collectionId =>
					<>
						<FollowedCollectionDisplay collectionId={collectionId} handleUnfollow={handleUnfollow}/>
						<br/>
					</>
				)
			}
		</div>
	)
}

const stpm = (state, ownProps) => ({
	profileData : state.profileData,
	followedCollections : ownProps.followedCollections
})

const dtpm = (dispatch) => ({
	unFollowCollection: (profileData, collectionId) =>
		profileActions.unFollowCollection(dispatch, profileData, collectionId)(dispatch)
})

export default connect(stpm, dtpm)(FollowedCollections);