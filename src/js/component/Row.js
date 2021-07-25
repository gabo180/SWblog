import React from "react";
import { Card } from "./Card";

export const Row = () => {
	return (
		<div className="mb-5 row">
			<div className="col">
				<Card />
			</div>
			<div className="col">
				<Card />
			</div>
			<div className="col">
				<Card />
			</div>
		</div>
	);
};
