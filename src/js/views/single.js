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

	const itemProperties = () => {
		let itemProperties = {};
		if (type == "person") {
			(itemProperties.firstProperty = "Hair Color: " + targetItem.hair_color),
				(itemProperties.secondProperty = targetItem.birth_year),
				(itemProperties.thridProperty = targetItem.height);
		}
		if (type == "planet") {
			(itemProperties.firstProperty = targetItem.climate),
				(itemProperties.secondProperty = targetItem.diameter),
				(itemProperties.thridProperty = targetItem.name);
		}
		if (type == "vehicle") {
			(itemProperties.firstProperty = targetItem.manufacturer),
				(itemProperties.secondProperty = targetItem.cargo_capacity),
				(itemProperties.thridProperty = targetItem.cost_in_credits);
		}
		return itemProperties;
	};

	console.log("ESTO ES UNA PROPIEDAD!", itemProperties());

	return (
		<div className="jumbotron">
			<h1 className="display-4">{itemProperties().firstProperty}</h1>
			<h1 className="display-4">{itemProperties().secondProperty}</h1>
			<h1 className="display-4">{itemProperties().thridProperty}</h1>
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
