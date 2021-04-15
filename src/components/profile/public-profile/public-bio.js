import React, { useState } from "react";
import { connect } from "react-redux";

const PublicBio = ({ profileData }) => {
	const [bio, setBio] = useState(profileData.bio);

	return (
		<div>
			<label htmlFor="myBioFld">My Bio</label>
			<p>{bio}</p>
		</div>
	);
};

const stpm = (state) => ({
	profileData: state.profileData,
});

export default connect(stpm, null)(PublicBio);
