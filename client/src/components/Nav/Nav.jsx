import React from "react";
import { NavLink } from "react-router-dom";
import style from './Nav.module.css'

const NavBar = () => {

    return (
        <nav className={`${style.nav}`}>
            <div className={`${style.intemNav}`}>
                <NavLink to='/' style={{color: 'black', textDecoration: 'none'}} >
                    <span className={`${style.span}`}>Landing Page</span>
                </NavLink>
            </div>
            <div className={`${style.intemNav}`}>
                <NavLink to='/home/dogs' style={{color: 'black', textDecoration: 'none'}}>
                    <span className={`${style.span}`}>Create Dog</span>
                </NavLink>
            </div>
        </nav>
    )
}


// <p><button onClick={event => handlerClick(event)}><Link to={'/'}>Landing page</Link> </button></p>
//             <p><Link to={'/dogs'} >Create Dog</Link></p>
//             <h1>DOGS API</h1>
//             <button onClick={ event => {handlerClick(event)}}>Refresh Dogs</button>


export default NavBar;