import React from 'react'
import '../styles/About.css'
import { useNavigate } from 'react-router-dom'
const About=()=>{
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/")
    }
    return (
        <div className='typeWrit'>
            <h1><span id='typeEff'>This is About page</span></h1>
            <button className="redirect" onClick={handleRedirect}>Redirect</button>
        </div>
    )
}
export default About;