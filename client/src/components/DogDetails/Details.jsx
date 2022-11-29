import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogDetails } from "../../redux/actions";


const DogDetails = ({match}) => {
// estado local loading - setLoading // useState(false)
// condicional si es false (return p loading - setTimeOut 3000) cambiar setstate a true // si es true renderiza el componente
    
    const dog = useSelector(state => state.dogDetail)
    const dogId = match.params.id
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogDetails(dogId))
    }, [])

    return (
        <div>
            <h1>{dog.name}</h1>
            <img src={dog.image} alt={dog.name} />
            <div>
                <h3>TEMPERAMENTS: {dog.temperament?.split(', ').map(ele => ele.trim()[0].toUpperCase()+ele.trim().slice(1)).sort(). join(', ')}</h3>
                <h4>WEIGHT: {`${dog.weight_min} - ${dog.weight_max}`} kg</h4>
                <h4>HEIGHT: {dog.height}</h4>
                <h4>LIFE SPAN: {dog.life_span? dog.life_span : "10 - 15 years"}</h4>

            </div>
        </div>
    )
};

export default DogDetails;