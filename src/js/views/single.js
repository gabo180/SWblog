import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { theid, type } = useParams();

	let targetItem = {};

	if (type === "person") {
		targetItem = store.people.find(person => person.name == theid);
	}

	if (type === "planet") {
		targetItem = store.planets.find(planet => planet.name == theid);
	}

	if (type === "vehicle") {
		targetItem = store.vehicles.find(vehicle => vehicle.name == theid);
	}

	return (
		<div className="jumbotron">
			<h1 className="display-4">{targetItem.name}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
