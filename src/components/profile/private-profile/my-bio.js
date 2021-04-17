import React, {useState} from "react";
import profileActions from "../../../actions/profile-actions";
import {connect} from "react-redux";

const MyBio = ({profileData, updateBio}) => {
	const [bio, setBio] = useState(profileData.bio)

	//TODO: validate bio information? max length?
	async function handleUpdate() {
		if (await updateBio(profileData, bio) === true) {
			alert("Bio successfully updated!")
		}
		else {
			alert("Error updating bio. Please try again.")
		}
	}

	return (
		<div>
			<label htmlFor="myBioFld">My Bio</label>
			<textarea rows="9" value={bio} className="form-control" onChange={event => setBio(event.target.value)} id="myBioFld"/>
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
	updateBio: (profileData, bio) => profileActions.updateBio(dispatch, profileData, bio)(dispatch)
})

export default connect(stpm, dtpm)(MyBio);