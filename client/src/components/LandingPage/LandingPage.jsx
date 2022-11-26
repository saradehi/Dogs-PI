import React from 'react';
import {Link} from 'react-router-dom';
import style from './LandingPage.module.css'
import image from "./img/dog.jpg"

const LandingPage = () => {
    return (
        <div className={`${style.body}`}>
            <img className={`${style.img}`} src={image} alt='dog'/>
            <Link to='/home'>
                <button className={`${style.home}`}>Home</button>
            </Link>
        </div>
    ) 

};

export default LandingPage;