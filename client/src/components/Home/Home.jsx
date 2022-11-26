import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getAllDogs } from "../../redux/actions";
import { Link } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const dogs = useSelector ((state) => state.allDogs)

    useEffect(() => {
        dispatch(getAllDogs());
    },[]);

    const handlerClick = (event) => {
        event.preventDefault();
        dispatch(getCharacters());
    }

    return (
        <div>
            <Link to="/dogs">Create Dog</Link>
            <h1>DOGS API</h1>
            <button onClick={ event => {handlerClick(event)}}>Refres Dogs</button>
        </div>
    )

};

export default Home;