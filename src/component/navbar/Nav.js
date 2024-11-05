import React from 'react'
import './Nav.css'
import logo from './img/logo.1.png'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    < div className='container-fluid sticky-top '>
    <nav className="navbar navbar-expand-sm shadow p-3 mb-4 bg-body rounded ">
  <div className="container-fluid ">
    
  <img src={logo} className="card-img-top d-m-none rounded-circle d-inline heaederlogo" alt="logo"/>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      
      <div className="d-flex">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link fw-bold" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to="/about">About</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link fw-bold " to="/Registrattion" id='registration'>Registration</Link>
        </li>
        
        <li className="nav-item mx-2">
          <Link className="nav-link fw-bold registration" to="/login">Login</Link>
        </li>
      </ul>
 
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav