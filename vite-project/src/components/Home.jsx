import React from 'react'
import '../styles/Home.css'
function Home({ userLogin, setuserLogin }) {
    const handleLogin = () => setuserLogin(true)
    const handleLogout = () => setuserLogin(false)

    return (
        <div>
            <h1>This is Home Page</h1>
            {userLogin ? (
                <button className='login' onClick={handleLogout}>Logout</button>
            ) : (
                <button className='login' onClick={handleLogin}>Login</button>
            )}
        </div>
    )
}

export default Home