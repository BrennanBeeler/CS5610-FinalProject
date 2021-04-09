import React, {useState} from "react";

// ToDo: Take the user information and render this page with that logged information
// ToDo: Create Method to update User Information (state and to server)

const MyInfo = ({profileData}) => {
	const [username, setUsername] = useState(profileData.username);
	const [password, setPassword] = useState(profileData.password);
	const [email, setEmail] = useState(profileData.email);
	const [phoneNum, setPhoneNum] = useState(profileData.phoneNum);


	return (
		<div>
			<div>
				<img src="https://via.placeholder.com/150" alt="placeholder" className="wbdv-circle"/>

				<label htmlFor="exampleFormControlFile1">Change Profile Picture</label>
				<input type="file" className="form-control-file" id="exampleFormControlFile1"/>
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
						onChange={event => setPassword(event.target.value)}/>
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


			<button className="btn btn-primary float-right">Update</button>
		</div>
	)
}

export default MyInfo;
