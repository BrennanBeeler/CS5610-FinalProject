import React, { useState } from "react";
import MyInfo from "./my-info";
import { useParams } from "react-router-dom";
import FollowedCategories from "./followed-categories";
import FollowedCreators from "./followed-creators";
import MyCollections from "./my-collections";
import MyBio from "./my-bio";

export default function ProfileEditor() {
	const [active, setActive] = useState("MyInfo");
	const { id } = useParams();

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col">
					<div className="mt-1">
						<button
							className="btn btn-primary"
							onClick={() => setActive("MyInfo")}
						>
							Profile
						</button>
					</div>
					<div className="mt-1">
						<button
							className="btn btn-primary"
							onClick={() => setActive("MyCategories")}
						>
							Categories You Follow
						</button>
					</div>
					<div className="mt-1">
						<button
							className="btn btn-primary"
							onClick={() => setActive("MyCreators")}
						>
							Creators You Follow
						</button>
					</div>
					<div className="mt-1">
						<button
							className="btn btn-primary"
							onClick={() => setActive("MyCollections")}
						>
							My Collections
						</button>
					</div>
					<div className="mt-1">
						<button
							className="btn btn-primary"
							onClick={() => setActive("MyBio")}
						>
							My Bio
						</button>
					</div>
				</div>
				<div className="col">
					{active === "MyInfo" && <MyInfo id={id} />}
					{active === "MyCategories" && (
						<FollowedCategories id={id} />
					)}
					{active === "MyCreators" && <FollowedCreators id={id} />}
					{active === "MyCollections" && <MyCollections id={id} />}
					{active === "MyBio" && <MyBio id={id} />}
				</div>
			</div>
		</div>
	);
}
