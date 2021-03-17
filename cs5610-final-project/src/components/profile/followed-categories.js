import React from "react";
import CategoryCard from "../card/category-card";

export default class FollowedCategories extends React.Component {
	render() {
		return (
			<div className="row">
				{/*TODO: populate with categories, popular for anonymous, liked/followed for logged in*/}
				{/*TODO: fix issue on very small screen where one category gets huge*/}
				<div className="col col-sm-6 col-md-3">
					<CategoryCard />
				</div>
				<div className="col col-sm-6 col-md-3">
					<CategoryCard />
				</div>
				<div className="col col-sm-6 col-md-3">
					<CategoryCard />
				</div>
				<div className="col col-sm-6 col-md-3">
					<CategoryCard />
				</div>
			</div>
		);
	}
}
