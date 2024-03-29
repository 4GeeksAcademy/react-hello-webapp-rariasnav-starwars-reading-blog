import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext"
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";

export const CharacterDetail = () => {
    const {store} = useContext(Context)
    const params = useParams()
    const [detail, setDetail] = useState({})

    const findCharacter = () => {
        let result = store.characters.find( (character)=> character.name = params.id)
        setDetail(result)
    }
    
    useEffect( ()=> {
        findCharacter()
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
                            <p className="card-text"><strong>Height: </strong>{detail.height}</p>
                            <p className="card-text"><strong>Mass: </strong>{detail.mass}</p>
                            <p className="card-text"><strong>Hair color: </strong>{detail.hair_color}</p>
                            <p className="card-text"><strong>Skin color: </strong>{detail.skin_color}</p>
                            <p className="card-text"><strong>Eye color: </strong>{detail.eye_color}</p>
                            <p className="card-text"><strong>Birth year: </strong>{detail.birth_year}</p>
                            <p className="card-text"><strong>Gender: </strong>{detail.gender}</p>
                        </div>             
                    </div>
                    <div className="row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Created</h5>
                                <p className="card-text">{detail.created}</p>                                
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Edited</h5>
                                <p className="card-text">{detail.edited}</p>                             
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