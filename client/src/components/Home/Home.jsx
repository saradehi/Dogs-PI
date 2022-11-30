import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { filterByTemperament, filterSource, getAllDogs, getTemperaments, order } from "../../redux/actions";
import { Link } from "react-router-dom";
import DogCard from "../Card/DogCard";
import style from '../Home/Home.module.css'
import Order from "../Order/Order";
import FilterBySource from "../Filter/FilterBySource";
import FilterbyTemperament from "../Filter/FilterByTemperament";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";


const Home = () => {
    const dispatch = useDispatch();
    const dogs = useSelector ((state) => state.allDogs)
    const [orderState, setOrderState] = useState(''); 
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDog = dogs.slice(indexOfFirstDog, indexOfLastDog);
    const temperaments = useSelector((state) => state.allTemperaments);


    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getTemperaments())
    },[dispatch]);

    const handlerClick = (event) => {
        event.preventDefault();
        dispatch(getAllDogs());
    };

    const handlerTemperamentFilter = (event) => {
        dispatch(filterByTemperament(event.target.value))
        setCurrentPage(1)
    };

    const handlerSource = (event) => {
        dispatch(filterSource(event.target.value));
        setCurrentPage(1)
    };

    const handlerOrder = (event) => {
        event.preventDefault();
        dispatch(order(event.target.value));
        setCurrentPage(1);
        setOrderState(event.target.value)
    };


    return (
        <div>
            <Link to={'/dogs'} >Create Dog</Link>
            <h1>DOGS API</h1>
            <button onClick={ event => {handlerClick(event)}}>Refresh Dogs</button>
            <br />
            <div className={`${style.lists}`}>
                <Order onChange={e => handlerOrder(e)}></Order>
                <FilterBySource onChange={e=> handlerSource(e)} ></FilterBySource> 

                <FilterbyTemperament onChange={e => handlerTemperamentFilter(e)} temperament={temperaments}></FilterbyTemperament>

            </div>
            <SearchBar setCurrentPage={setCurrentPage}></SearchBar>
            <Pagination dogsPerPage={dogsPerPage} dogs={dogs.length} pagination={pagination} />
            <div className={`${style.container}`} >
                {
                    typeof dogs === 'string' || typeof dogs[0] === 'string' ? <h1>{dogs}</h1>
                    : currentDog.map(ele => {
                        return (
                            <DogCard key={ele.id} image={ele.image} name={ele.name} weight={ele.weight}temperament={ele.temperament} id={ele.id} />
                        )
                    })
                }
            </div>

        </div>
    )

};

export default Home;