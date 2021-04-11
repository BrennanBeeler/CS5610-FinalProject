import React, {useState} from "react";
import profileActions from "../../../actions/profile-actions";
import {connect} from "react-redux";

// My Bio pulls this information from database
// My Bio also has the ability to update this information onto database

const MyBio = ({profileData, updateBio}) => {
	const [bio, setBio] = useState(profileData.bio)

	//TODO: validate bio information? max length?
	const handleUpdate = () => {
		updateBio(bio)
	}

	return (
		<div>
			<textarea rows="9" value={bio} className="form-control" onChange={event => setBio(event.target.value)}/>
			<button className="mt-1 btn btn-primary float-right" onClick={handleUpdate}>
				Update
			</button>
		</div>
	)
}

const stpm = (state) => ({
	profileData : state.profileData
})

const dtpm = (dispatch) => ({
	updateBio: (bio) => profileActions.updateBio(dispatch, bio)
})

export default connect(stpm, dtpm)(MyBio);