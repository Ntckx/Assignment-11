import React from 'react'
import { Navigate } from 'react-router-dom'
import '../styles/Admin.css'
function Admin({ userLogin, setuserLogin }) {
    const handleLogout = () => setuserLogin(false)

    if (!userLogin) {
        return <Navigate to="/Home" replace />;
    }

    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Funny_Image_of_Dog_with_open_teeth.png" />
            <h1>This is Admin Page</h1>
            <button className='logout' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Admin;