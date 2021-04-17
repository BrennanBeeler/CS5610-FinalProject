import React, {useState} from "react";
import {connect} from "react-redux";
import profileActions from "../../../actions/profile-actions";

const MyInfo = ({profileData, updateMyDetails}) => {
	const [username, setUsername] = useState(profileData.username);
	const [password, setPassword] = useState(profileData.password);
	const [email, setEmail] = useState(profileData.email);
	const [phoneNum, setPhoneNum] = useState(profileData.phoneNum);

	//TODO: validate details before sending out
	async function handleUpdate() {
		if (await updateMyDetails(profileData, email, username, password, phoneNum) === true) {
			alert("Profile successfully updated!")
		}
		else {
			alert("Error updating profile. Please try again.")
		}
	}

	return (
		<div>
			<div className="row">
				<div className="col-3"/>

				{/*TODO: set up profile pictures - only for premium user?*/}
				<div className="col-3">
					Change Profile Picture
					<img src="https://via.placeholder.com/150" alt="placeholder" className="wbdv-circle"/>

				</div>

				<div>
					<br/>
					<br/>
					<br/>
					<input type="file" className="form-control-file" id="exampleFormControlFile1"/>
				</div>
				<br/>


			</div>

			<div className="mt-3">
				<div className="form-group">
					<label className="form-check-label" htmlFor="UsernameInput">Username</label>
					<input
						className="form-control"
						id="UsernameInput"
						placeholder="Username"
						value={username}
						onChange={event => setUsername(event.target.value)}/>
				</div>
				<div className="form-group">
					<label className="form-check-label" htmlFor="PasswordInput">Password</label>
					<input
						className="form-control"
						id="PasswordInput"
						placeholder="Password"
						value={password}
						onChange={event => setPassword(event.target.value)} type="password"/>
				</div>
				<div className="form-group">
					<label className="form-check-label" htmlFor="EmailInput">Email</label>
					<input
						className="form-control"
						type="tel"
						placeholder="example@email.com"
						id="EmailInput"
						value={email}
						onChange={event => setEmail(event.target.value)}/>
				</div>
				<div className="form-group">
					<label className="form-check-label" htmlFor="PhoneInput">Phone Number</label>
					<input
						className="form-control"
						type="tel"
						placeholder="1-999-999-9999"
						id="PhoneInput"
						value={phoneNum}
						onChange={event => setPhoneNum(event.target.value)}/>
				</div>
			</div>

			<button className="btn btn-primary float-right" onClick={handleUpdate}>Update</button>
		</div>
	)
}

const stpm = (state) => ({
	profileData : state.profileData
})

const dtpm = (dispatch) => ({
	//TODO: add phone number
	updateMyDetails: (profileData, email, username, password, phoneNum) =>
		profileActions.updateMyDetails(dispatch, profileData, email, username, password, phoneNum)(dispatch)
})

export default connect(stpm, dtpm)(MyInfo);
