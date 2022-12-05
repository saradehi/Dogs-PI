import React from 'react';
import {Link} from 'react-router-dom';
import style from './LandingPage.module.css'
// import image from "./img/dog.jpg"
import video from "./img/dogs3.mp4"

const LandingPage = () => {
    return (
        <div className={`${style.body}`}>
            <video autoPlay={true} loop={true} muted={true} playsInline={true} className={`${style.back_video}`}>
                <source src={video} type='video/mp4' />
            </video>
            {/* <img className={`${style.img}`} src={image} alt='dog'/> */}
            <Link to='/home'>
                <button className={`${style.home}`}>Home</button>
            </Link>
        </div>
    ) 

};

export default LandingPage;