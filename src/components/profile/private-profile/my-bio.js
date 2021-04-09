import React, {useState} from "react";

// My Bio pulls this information from database
// My Bio also has the ability to update this information onto database

const MyBio = ({profileData}) => {
	const [bio, setBio] = useState(profileData.bio)

	return (
		<div>
			<textarea rows="9" value={bio} className="form-control" onChange={event => setBio(event.target.value)}/>
			<button className="mt-1 btn btn-primary float-right">
				Update
			</button>
		</div>
	)
}

export default MyBio;
