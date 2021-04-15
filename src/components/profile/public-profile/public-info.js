import React, { useState } from "react";
import { connect } from "react-redux";

const PublicInfo = ({ profileData }) => {
	const [username, setUsername] = useState(profileData.username);
	const [email, setEmail] = useState(profileData.email);

	return (
		<div>
			<div className="row justify-content-center">
				<div className="col-3">
					<img
						src="https://via.placeholder.com/150"
						alt="placeholder"
						className="wbdv-circle"
					/>
				</div>

				<br />
			</div>

			<div className="mt-3">
				<div className="form-group">
					<label className="form-check-label" htmlFor="UsernameInput">
						Username:
					</label>
					<br />
					<p>{username}</p>
				</div>
				<div className="form-group">
					<label className="form-check-label" htmlFor="EmailInput">
						Email:
					</label>
					<br />
					<p>{email}</p>
				</div>
			</div>
		</div>
	);
};

const stpm = (state) => ({
	profileData: state.profileData,
});

export default connect(stpm, null)(PublicInfo);
