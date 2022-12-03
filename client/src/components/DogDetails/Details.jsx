import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteDog, getDogDetails } from "../../redux/actions";
import Loading from "../Loading/Loading";
import { loading } from "../../redux/actions";
import { Link, useHistory } from "react-router-dom";


const DogDetails = ({match}) => {
// estado local loading - setLoading // useState(false)
// condicional si es true (return p loading - setTimeOut 3000) cambiar setstate a false // si es false renderiza el componente
    
    let isLoading = useSelector(state => state.loading)
    const dog = useSelector(state => state.dogDetail)
    const [deleted, setDeleted] = useState(false)
    const [warning, setWarning] = useState(false)
    const dogId = match.params.id
    const dispatch = useDispatch();
    const history = useHistory();



    useEffect(() => {
        dispatch(getDogDetails(dogId))
        setTimeout(() => {
            dispatch(loading(false))
        }, 1100)
        setDeleted(false)
        console.log(dogId)
    }, []);

    const handlerDelete = (event) => {
        event.preventDefault();
        if(deleted === false) {
            setDeleted(true)
            setWarning(true)
        } else {
            dispatch(deleteDog(event.target.value))
            setTimeout(() => {
                history.push('/deleted')
            }, 1500)
        }
    }

    return (
        <div>

            {
                isLoading === true ? <Loading></Loading> 
                : <>
                    <button style={{width: '8rem', height: '1.5rem'}} ><Link to={'/home'}>Back to home</Link></button>
                    <h1>{dog.name}</h1>
                <img src={dog.image} alt={dog.name} />
                <div>
                    <h3>TEMPERAMENTS: {dog.temperament?.split(', ').map(ele => ele.trim()[0].toUpperCase()+ele.trim().slice(1)).sort(). join(', ')}</h3>
                    <h4>WEIGHT: {`${dog.weight_min} - ${dog.weight_max}`} kg</h4>
                    <h4>HEIGHT: {dog.height} cm</h4>
                    <h4>LIFE SPAN: {!dog.life_span ? "10 - 15 years" : dog.life_span.split(' ').length > 1 ? dog.life_span : `${dog.life_span} years`}</h4>
                    {
                        dogId.length > 3 && 
                        <div>
                            <p>This dog belongs to database, it can be deleted.</p>
                            <button type="button" value={dogId} onClick={event => handlerDelete(event)}>Delete dog</button>
                        </div>
                    }
                    {
                        warning === true && 
                        <div>
                            <h4>You sure you want to delete this dog?</h4>
                            <p>This action cannot be undone</p>
                        </div>
                    }
                </div>
                </>
            }

            
        </div>
    )
};

export default DogDetails;