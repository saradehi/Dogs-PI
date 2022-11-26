import React from "react";
import { Link } from "react-router-dom";
import style from '../Card/DogCard.module.css'


const DogCard = ({image, name, temperament, weight, id}) => {


    return(
        <div >
            <div className={`${style.card}`}>
            <Link to={`/dogs/${id}`} ><h3>{name}</h3></Link>
            <img className={`${style.img}`} src={image} alt={name}/>
            <p>Temperament: {temperament? temperament.split(',').map(ele=>ele.trim()).sort().join(', ') : "Not specified"}</p>
            <p>Weight: {weight} kg</p>
            </div>
        </div>
    )

};

export default DogCard;