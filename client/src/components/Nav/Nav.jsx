import React from "react";
import { NavLink } from "react-router-dom";
import style from './Nav.module.css'

const NavBar = () => {

    return (
        <nav>
            <div>
                <NavLink to='/' style={{color: 'black', textDecoration: 'none'}} >
                    <span>Landing Page</span>
                </NavLink>
            </div>
            <div>
                <NavLink to='/home/dogs' style={{color: 'black', textDecoration: 'none'}}>
                    <span>Create Dog</span>
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