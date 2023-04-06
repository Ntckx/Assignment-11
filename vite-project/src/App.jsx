import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Profile from "./components/profile";
import Admin from "./components/Admin";

function App() {
  const [userLogin, setUserLogin] = useState(false)

  return (
      <div>
        <Routes>
          <Route exact path="/Home" element={<Home userLogin={userLogin} setuserLogin={setUserLogin}/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Profile/:id" element={<Profile/>} />
          <Route path="/Admin" element={<Admin userLogin={userLogin} setuserLogin={setUserLogin}/>} />
        </Routes>

        <nav>
          <NavLink replace to="/Home" className="inactive-link">
            {({ isActive }) =>
              isActive ? <p className="active-link">Home</p> : <p>Home</p>
            }
          </NavLink>

          <NavLink replace to="/About" className="inactive-link">
            {({ isActive }) =>
              isActive ? <p className="active-link">About</p> : <p>About</p>
            }
          </NavLink>

          <NavLink replace to ='/Contact' className='inactive-link'>
            {({isActive})=> isActive?<p className='active-link'>Contact</p>:<p>Contact</p>}
          </NavLink>
          
          <NavLink replace to ='/Profile/:id' className='inactive-link'>
            {({isActive})=> isActive?<p className='active-link'>Profile</p>:<p>Profile</p>}
          </NavLink>

          <NavLink replace to ='/Admin' className='inactive-link'>
            {({isActive})=> isActive?<p className='active-link'>For Admin!!</p>:<p>For Admin!!</p>}
          </NavLink>
        </nav>
      </div>
  );
}

export default App;
