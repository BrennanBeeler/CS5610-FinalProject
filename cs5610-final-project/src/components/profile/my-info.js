import React from "react";

export default class MyInfo extends React.Component {
	render() {
		return (
			<div>
				<div className="p-1">
					<input
						className="form-control"
						id="UsernameInput"
						placeholder="Username"
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
			</div>
		);
	}
}
