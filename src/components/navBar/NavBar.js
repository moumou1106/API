import React from 'react'
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from "../../images/apiPic.png"

const NavBar = () => {
  return (
    <div className='navbar' >
        <img src={logo} alt='' className='logo' />
        <div className='searchSection' >
            <input type='text' className='searchInput' placeholder='Search' />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='searchIcon' />
        </div>
        <p className='logOutButton'>Log Out</p>
    </div>
  )
}

export default NavBar