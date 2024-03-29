import React, { useState } from 'react'
import OneUser from '../oneUser/OneUser'
import "./UsersList.css"

const UsersList = () => {
  const [users,setUsers] = useState([])
  const fetchUsers = async () => {
    try {
      const users = await 
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="allUsersContent">
      <table className="table">
        <thead>
          <tr className='optionsUsers'>
            <th scope="col">Profile image</th>
            <th scope="col">Username</th>
            <th scope="col">CIN</th>
            <th scope="col">Role</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <OneUser />
          <OneUser />
          <OneUser />
          <OneUser />
          <OneUser />
        </tbody>
      </table>
    </div>

  )
}

export default UsersList