import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const {store, actions} = useContext(Context)

	return(
	<div className="container">
		<div className="container mycards rounded border border-3 border-dark m-2">
			<h1 className="text-danger">Characters</h1>
			<div className="container mycarrousel">
				{store.characters.map( (character, ) =>{
					return(
						<div className="card" style={{width: "18rem"}} key={character.name}>
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuGSSFmbP0qL-uX3vmV1G2NSgRwXqvBs1lWBgq2k5_ZVX5HCehm3eOvvBLOk04_d0s7A&usqp=CAU" className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">Name: {character.name}</h5>
								<p className="card-text"><strong>Gender:</strong> {character.gender}</p>
								<p className="card-text"><strong>Hair color:</strong> {character.hair_color}</p>
								<p className="card-text"><strong>Eye color:</strong> {character.eye_color}</p>
								<div className="buttons-footer">
									<Link to={`/character-info/${character.name}`}>
										<button type="button" className="btn btn-outline-primary">Learn more!</button>
									</Link>									
									<button type="button" className={`${store.favorites.includes( character.name ) ? "btn btn-danger" : "btn btn-outline-warning" }`} 
									onClick={ ()=> actions.likesCount(character.name) }><i className="fa-regular fa-heart"></i></button>
								</div>						
							</div>
						</div>
					)
				} )}
												
			</div>
		</div>
		<div className="container mycards rounded border border-3 border-dark m-2">
			<h1 className="text-danger">Starships</h1>
			<div className="container mycarrousel">
				{store.starships.map( (starship)=>{
					return(
						<div className="card" style={{width: "18rem"}} key={starship.name}>
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuGSSFmbP0qL-uX3vmV1G2NSgRwXqvBs1lWBgq2k5_ZVX5HCehm3eOvvBLOk04_d0s7A&usqp=CAU" className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">Name: {starship.name}</h5>
								<p className="card-text"><strong>Model:</strong> {starship.model}</p>
								<p className="card-text"><strong>Cost in credits:</strong> {starship.cost_in_credits}</p>
								<div className="buttons-footer">
									<Link to={`/starship-info/${starship.name}`}>
										<button type="button" className="btn btn-outline-primary">Learn more!</button>
									</Link>									
									<button type="button" className={`${store.favorites.includes( starship.name ) ?"btn btn-danger" : "btn btn-outline-warning" }`} 
									onClick={ ()=> actions.likesCount(starship.name) }><i className="fa-regular fa-heart"></i></button>
								</div>						
							</div>
						</div>
					)
				} )}
			</div>
		</div>
		<div className="container mycards rounded border border-3 border-dark m-2">
			<h1 className="text-danger">Planets</h1>
			<div className="container mycarrousel">
				{store.planets.map( (planet)=>{
					return(
						<div className="card" style={{width: "18rem"}} key={planet.name}>
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuGSSFmbP0qL-uX3vmV1G2NSgRwXqvBs1lWBgq2k5_ZVX5HCehm3eOvvBLOk04_d0s7A&usqp=CAU" className="card-img-top" alt="..."/>
							<div className="card-body">
								<h5 className="card-title">Name: {planet.name}</h5>
								<p className="card-text"><strong>Terrain:</strong> {planet.terrain}</p>
								<p className="card-text"><strong>Population:</strong> {planet.population}</p>
								<div className="buttons-footer">
									<Link to={`/planet-info/${planet.name}`}>
										<button type="button" className="btn btn-outline-primary">Learn more!</button>
									</Link>									
									<button type="button" className={`${ store.favorites.includes( planet.name ) ? "btn btn-danger" : "btn btn-outline-warning" }`} 
									onClick={ ()=> actions.likesCount(planet.name) }><i className="fa-regular fa-heart"></i></button>
								</div>						
							</div>
						</div>
					)
				} )}
			</div>
		</div>
	</div>
)};
