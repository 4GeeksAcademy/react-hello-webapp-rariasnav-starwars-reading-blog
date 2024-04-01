import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3 p-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Starwars</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown dropstart">
					<button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Likes({store.favorites.length})
					</button>
					<ul className="dropdown-menu">
						{ store.favorites.map( (favorite, index)=> {
							return(
								<li key={index} className="dropdown-item mydropdownlist">{favorite}<span className="btn btn-light text-muted" onClick={ ()=> actions.deleteLikes(favorite)}><i className="fa-solid fa-trash"></i></span></li>
							)
						} ) }
					</ul>
				</div>
			</div>
		</nav>
	);
};
