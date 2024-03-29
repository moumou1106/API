import React from 'react'
import UsersList from '../usersList/UsersList'
import NavBar from '../navBar/NavBar'
import SideBar from '../sideBar/SideBar'
import BasicModal from '../basicModal/BasicModal'
import "./OverView.css"

const OverView = () => {
  return (
    <div className='overview'> 
        <NavBar/>
        <SideBar/>

        <div className='usersList'>
            <BasicModal/>
            <UsersList/>
        </div>
    </div>
  )
}

export default OverView