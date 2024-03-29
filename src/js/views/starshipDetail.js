import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom"
import "../../styles/home.css";

export const StarshipDetails = () => {
    const {store} = useContext(Context)
    const params = useParams()
    const [detail, setDetail] = useState({})

    const findStarship = () => {
        let result = store.starships.find( (starship)=> starship.name == params.id )
        setDetail(result)
    }

    useEffect( ()=> {
        findStarship()
    },[] )

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
                            <p className="card-text"><strong>Model: </strong>{detail.model}</p>
                            <p className="card-text"><strong>Manufacturer: </strong>{detail.manufacturer}</p>
                            <p className="card-text"><strong>Cost in credits: </strong>{detail.cost_in_credits}</p>
                            <p className="card-text"><strong>Lenght </strong>{detail.length}</p>
                            <p className="card-text"><strong>Max atmosphering speed: </strong>{detail.max_atmosphering_speed}</p>
                            <p className="card-text"><strong>Crew: </strong>{detail.crew}</p>
                            <p className="card-text"><strong>Passengers: </strong>{detail.passengers}</p>
                        </div>             
                    </div>
                    <div className="row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card">
                            <div className="card-body">
                                <p className="card-text"><strong>Cargo capacity: </strong>{detail.cargo_capacity}</p>
                                <p className="card-text"><strong>Consumables: </strong>{detail.consumables}</p>
                                <p className="card-text"><strong>Hyperdrive rating: </strong>{detail.hyperdrive_rating}</p>                                 
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                            <div className="card-body">
                                <p className="card-text"><strong>MGLT: </strong>{detail.MGLT}</p> 
                                <p className="card-text"><strong>Starship class: </strong>{detail.starship_class}</p> 
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