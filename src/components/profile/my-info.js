import React from "react";

// ToDo: Implement ability to use the information of the logged in user
// ToDo: Take the user information and render this page with that logged information
// ToDo: Create Method to update User Information (state and to server)

class MyInfo extends React.Component {
	render() {
		return (
			<div>
				<div className="p-1">
					<input
						className="form-control"
						id="UsernameInput"
						placeholder="Yonathan"
					/>
				</div>
				<div className="p-1">
					<input
						className="form-control"
						id="PasswordInput"
						placeholder="Password"
					/>
				</div>
				<div className="p-1">
					<input
						className="form-control"
						id="PhoneInput"
						placeholder="7032000228"
					/>
				</div>
				<button className="btn btn-primary float-right">Update</button>
			</div>
		);
	}
}

export default MyInfo;
