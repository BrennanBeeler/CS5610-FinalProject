import React, { useState } from "react";
import MyInfo from "./private-profile/my-info";
import { useParams } from "react-router-dom";
import "./profile.css";
import PrivateProfile from "./private-profile/private-profile";
import PublicProfile from "./public-profile/public-profile";

const ProfileEditor = () => {
	const [active, setActive] = useState("MyInfo");
	const { profileId } = useParams();

	return (
		<div className="container wbdv-profile">
			{profileId === undefined && <PrivateProfile />}

			{profileId !== undefined && <PublicProfile id={profileId} />}
		</div>
	);
};

export default ProfileEditor;
