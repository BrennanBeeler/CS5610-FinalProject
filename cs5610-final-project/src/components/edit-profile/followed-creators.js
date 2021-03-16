import React from "react";
import CreatorIcon from "../creator-icon/creator-icon-";

export default class FollowedCreators extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col col-sm-2 col-xs-4">
						<CreatorIcon />
					</div>
					<div className="col col-sm-2 col-xs-4">
						<CreatorIcon />
					</div>
					<div className="col col-sm-2 col-xs-4">
						<CreatorIcon />
					</div>
					<div className="col col-sm-2 col-xs-4">
						<CreatorIcon />
					</div>
					<div className="col col-sm-2 col-xs-4">
						<CreatorIcon />
					</div>
					<div className="col col-sm-2 col-xs-4">
						<CreatorIcon />
					</div>
				</div>
			</div>
		);
	}
}
