import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getAllDogs } from "../../redux/actions";
import { Link } from "react-router-dom";
import DogCard from "../Card/DogCard";
import style from '../Home/Home.module.css'
import Order from "../Order/Order";
import FilterBySource from "../Filter/FilterBySource";
import FilterbyTemperament from "../Filter/FilterByTemperament";
import Pagination from "../Pagination/Pagination";

const Home = () => {
    const dispatch = useDispatch();
    const dogs = useSelector ((state) => state.allDogs)
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDog = dogs.slice(indexOfFirstDog, indexOfLastDog);

    const paginacion = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getAllDogs());
    },[]);

    const handlerClick = (event) => {
        event.preventDefault();
        dispatch(getAllDogs());
    };

    return (
        <div>
            <Link to={'/dogs'} >Create Dog</Link>
            <h1>DOGS API</h1>
            <button onClick={ event => {handlerClick(event)}}>Refresh Dogs</button>
            <br />
            <div className={`${style.lists}`}>
                <Order></Order>
                <FilterBySource></FilterBySource> 
                <FilterbyTemperament></FilterbyTemperament>
            </div>
            <Pagination dogsPerPage={dogsPerPage} dogs={dogs.length} paginacion={paginacion} />
            <div className={`${style.container}`} >
                {
                    currentDog?.map(ele => {
                        return (
                            <DogCard key={ele.id} image={ele.image} name={ele.name} weight={ele.weight}temperament={ele.temperament} id={ele.name} />
                        )
                    })
                }
            </div>

        </div>
    )

};

export default Home;