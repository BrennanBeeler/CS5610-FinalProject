import React from "react";
import { Link } from "react-router-dom";
import "./collection-result.css";

const CollectionResult = ({ result }) => {
	return (
		<Link to={`/details/collection/${result.id}`}>
			<blockquote id="collectionBlock">
				{result.collectionName}
			</blockquote>
		</Link>
	);
};

export default CollectionResult;
