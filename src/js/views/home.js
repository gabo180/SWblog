import React, { useContext } from "react";
import "../../styles/home.scss";
import { Card } from "../component/Card";
import { Row } from "../component/Row";
import { Context } from "../store/appContext";

export const Home = () => {
	// const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container">
				<Row />
				<Row />
			</div>
		</>
	);
};
