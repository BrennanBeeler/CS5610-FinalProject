import React, { useState } from "react";
import MyInfo from "./my-info";
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";
import FollowedCategories from "./followed-categories";
import FollowedCreators from "./followed-creators";
import MyCommunity from "./my-community";
import MyBio from "./my-bio";

export default function ProfileEditor() {
	const [active, setActive] = useState("MyInfo");
	const { id } = useParams();

	return (
		<div>
			<div class="row">
				<div class="col">
					<div>
						<button onClick={() => setActive("MyInfo")}>
							Profile
						</button>
					</div>
					<div>
						<button onClick={() => setActive("MyCategories")}>
							Categories You Follow
						</button>
					</div>
					<div>
						<button onClick={() => setActive("MyCreators")}>
							Creators You Follow
						</button>
					</div>
					<div>
						<button onClick={() => setActive("MyCommunity")}>
							My Community
						</button>
					</div>
					<div>
						<button onClick={() => setActive("MyBio")}>
							My Bio
						</button>
					</div>
				</div>
				<div class="col">
					{active === "MyInfo" && <MyInfo />}
					{active === "MyCategories" && <FollowedCategories />}
					{active === "MyCreators" && <FollowedCreators />}
					{active === "MyCommunity" && <MyCommunity />}
					{active === "MyBio" && <MyBio />}
				</div>
			</div>
		</div>
	);
}
