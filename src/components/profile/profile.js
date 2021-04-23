import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./profile.css";
import PrivateProfile from "./private-profile/private-profile";
import PublicProfile from "./public-profile/public-profile";

const Profile = () => {
	const { profileId } = useParams();

	return (
		<div className="container wbdv-profile">
			{profileId === undefined && <PrivateProfile />}

			{profileId !== undefined && <PublicProfile userId={profileId} />}
		</div>
	);
};

export default Profile;
