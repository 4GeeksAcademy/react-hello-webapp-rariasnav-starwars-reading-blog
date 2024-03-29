import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";

export const PlanetDetails = () => {
    const {store} = useContext(Context)
    const params = useParams()
    const [detail, setDetail] = useState({})

    const findPlanet = () => {
        let result = store.planets.find( (planet)=> planet.name == params.id )
        setDetail(result)
    }

    useEffect( ()=> {
        findPlanet()
    }, [] )

    return(
        <div className="container">
            <div className="row">
                <div className="card">
                    <div className="card-body row">
                        <div className="col-6">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuGSSFmbP0qL-uX3vmV1G2NSgRwXqvBs1lWBgq2k5_ZVX5HCehm3eOvvBLOk04_d0s7A&usqp=CAU" className="card-img-top" alt="..." style={{width: "18rem"}} />
                        </div>
                        <div className="col-6">
                            <h5 className="card-title">{detail.name}</h5>
                            <p className="card-text"><strong>Rotation period: </strong>{detail.rotation_period}</p>
                            <p className="card-text"><strong>Orbital period: </strong>{detail.orbital_period}</p>
                            <p className="card-text"><strong>Diameter: </strong>{detail.diameter}</p>
                            <p className="card-text"><strong>Climate: </strong>{detail.climate}</p>
                            <p className="card-text"><strong>Gravity: </strong>{detail.gravity}</p>
                            <p className="card-text"><strong>Terrain: </strong>{detail.terrain}</p>
                            <p className="card-text"><strong>Surface water: </strong>{detail.surface_water}</p>
                        </div>             
                    </div>
                    <div className="row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card">
                            <div className="card-body">
                                <p className="card-text"><strong>Population: </strong>{detail.population}</p>                                                                
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                            <div className="card-body">
                                <p className="card-text"><strong>Created: </strong>{detail.created}</p>  
                                <p className="card-text"><strong>Edited: </strong>{detail.edited}</p>                               
                            </div>
                            </div>                            
                        </div>
                    </div>
                    <div className="card-body m-auto">
                        <Link to={"/"}>
                            <button className="btn btn-primary">Back</button>
                        </Link> 
                    </div>
                    
                </div>                
            </div>            
        </div>
    )
}
