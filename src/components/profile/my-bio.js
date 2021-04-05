import React from "react";

// My Bio pulls this information from database
// My Bio also has the ability to update this information onto database

export default class MyBio extends React.Component {
	render() {
		return (
			<div>
				<textarea rows="9" className="form-control"></textarea>
				<button className="mt-1 btn btn-primary float-right">
					Update
				</button>
			</div>
		);
	}
}
