import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { RiCloseCircleLine } from "react-icons/ri";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<a href="https://ibb.co/5sCGjbg">
						<img
							src="https://i.ibb.co/nQ461xN/star-wars-icon-png-8-1.png"
							alt="star-wars-icon-png-8-1"
							border="0"
							width="75px"
							height="75px"
						/>
					</a>
				</Link>
				<div className="ml-auto">
					<div className="btn-group">
						<button
							type="button"
							className="btn btn-primary dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
							<span className="itemsAdded">{store.favorites.length}</span>
						</button>
						<div className="dropdown-menu">
							{store.favorites.map((fav, index) => {
								return (
									<a className="dropdown-item itemFav" href="#" key={index}>
										{fav}
										<i className="fas fa-trash" onClick={() => actions.addToFavorite(fav)} />
									</a>
								);
							})}
						</div>
					</div>
				</div>{" "}
			</nav>
		</>
	);
};

{
	/* <div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
						</button>
						<div className="dropdown-menu contenedor" aria-labelledby="dropdownMenuButton">
							{store.favorites.map((fav, index) => {
								return (
									<a className="dropdown-item itemFav" href="#" key={index}>
										{fav}

										<RiCloseCircleLine onClick={() => actions.addToFavorite(fav)} />
									</a>
								);
							})}
						</div>
					</div> */
}
