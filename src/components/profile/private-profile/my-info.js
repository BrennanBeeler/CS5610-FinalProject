import React, {useState} from "react";
import {connect} from "react-redux";
import profileActions from "../../../actions/profile-actions";

const MyInfo = ({profileData, updateMyDetails}) => {
	const [username, setUsername] = useState(profileData.username);
	const [password, setPassword] = useState(profileData.password);
	const [email, setEmail] = useState(profileData.email);
	const [phoneNum, setPhoneNum] = useState(profileData.phoneNum);
	const [premium, setPremium] = useState(profileData.premium);

	async function handleUpdate() {
		if (username === "") {
			alert("Username cannot be empty!")
		}
		else if (password === "") {
			alert("Please enter a password!")
		}
		else {
			if (await updateMyDetails(profileData, email, username, password, phoneNum, premium) === true) {
				alert("Profile successfully updated!")
			}
			else {
				alert("Error updating profile. Please try again.")
			}
		}
	}

	return (
		<div>
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

				<div className="form-group">
					<label htmlFor="premiumToggle" className="form-check-label">
						User Type
					</label>
					<select className="form-control " id="premiumToggle" value={premium}
							onChange={event => setPremium(event.target.value)}>
						<option value={false}>Standard</option>
						<option value={true}>Premium</option>
					</select>
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
	updateMyDetails: (profileData, email, username, password, phoneNum, premium) =>
		profileActions.updateMyDetails(dispatch, profileData, email, username, password, phoneNum, premium)(dispatch)
})

export default connect(stpm, dtpm)(MyInfo);
