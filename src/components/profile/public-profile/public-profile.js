import React, { useState } from "react";
import PublicInfo from "./public-info";
import PublicCreators from "./public-followed-creators";
import PublicCollections from "./public-collections";
import PublicBio from "./public-bio";

const PublicProfile = ({ id }) => {
	const [active, setActive] = useState("PublicInfo");

	return (
		<div>
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<a
						className={`nav-link ${
							active === "PublicInfo" ? "active" : ""
						}`}
						onClick={() => setActive("PublicInfo")}
					>
						My Details
					</a>
				</li>
				<li className="nav-item">
					<a
						className={`nav-link ${
							active === "PublicBio" ? "active" : ""
						}`}
						onClick={() => setActive("PublicBio")}
					>
						My Bio
					</a>
				</li>
				<li className="nav-item">
					<a
						className={`nav-link ${
							active === "PublicCreators" ? "active" : ""
						}`}
						onClick={() => setActive("PublicCreators")}
					>
						Following
					</a>
				</li>

				<li className="nav-item">
					<a
						className={`nav-link ${
							active === "PublicCollections" ? "active" : ""
						}`}
						onClick={() => setActive("PublicCollections")}
					>
						My Collections
					</a>
				</li>
			</ul>

			<br />
			<div>
				{active === "PublicInfo" && <PublicInfo />}
				{active === "PublicCreators" && <PublicCreators />}
				{active === "PublicCollections" && <PublicCollections />}
				{active === "PublicBio" && <PublicBio />}
			</div>
		</div>
	);
};

export default PublicProfile;
