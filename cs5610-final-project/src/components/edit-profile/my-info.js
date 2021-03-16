import React from "react";

export default class MyInfo extends React.Component {
	render() {
		return (
			<div>
				<div class="p-1">
					<input
						class="form-control"
						id="UsernameInput"
						placeholder="Username"
					/>
				</div>
				<div class="p-1">
					<input
						class="form-control"
						id="PasswordInput"
						placeholder="Password"
					/>
				</div>
				<div class="p-1">
					<input
						class="form-control"
						id="PhoneInput"
						placeholder="7032000228"
					/>
				</div>
			</div>
		);
	}
}
