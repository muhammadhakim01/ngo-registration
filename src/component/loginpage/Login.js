import React from 'react'
import './Login.css'
import img from'./img/Frame.png'
import logo from './img/logo (2) 1.png'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className='container '>
   <div className="row">
  <div className="col-12 col-md-6">
  <div className="card-body text-center">
      <h1 className="card-title pt-5 text-success welcome">WELCOME</h1>
      <h3 className="card-text pt-2 text-success ">TO OUR PORTAL</h3>
      <p className="card-text">Start Your New Journay with Us</p>
    </div>
    <img src={img} className="card-img-top d-none d-md-block " alt="logo"/>
   
  </div>
  <div className="col-12 col-md-6">
    <div className="row f-flex justify-content-center">
      <div className='col-lg-8 text-center pt-5'>
    <img src={logo} className="card-img-top rounded-circle w-10 d-inline" alt="logo"/>
    <p className='text-success directorate'>Directorate of <br></br> Social Welfare Govt. of PK</p>

      
      <div className='mt-4  '>
      {/* <div className="mb-2">
      <input type="email" className="form-control shadow p-2 mb-4 bg-body rounded" id="exampleFormControlInput1" placeholder="Email"/>
     </div> */}
      <div className="input-group mb-3">
      <span className="input-group-text fs-3" id="basic-addon1"><i class="bi bi-envelope-at"></i></span>

    <input type="text" className="form-control border-0" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text fs-3" id="basic-addon1"><i class="bi bi-key"></i></span>
      

    <input type="text" className="form-control border-0" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>  
      {/* <div className="mb-2">
       <input type="password" className="form-control shadow p-2 mb-4 bg-body rounded" id="exampleFormControlInput1" placeholder="Password"/>
     </div> */}
       
  <div className="mb-3 d-flex justify-content-between forgot">
  <div className="form-check ">
  <input className="form-check-input fs-5 " type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Remember Me
  </label>
</div>
<p>Forgot Password</p>

  </div>
<div className="d-grid gap-2 col-12 mx-auto mt-3 ">
  <button className="btn btn-success text-white" type="button">Sign In</button>
  <p>Not Registered yet ? <Link className='d-inline pt-2' to='/registrattion'>Create an Account</Link></p>
  <Link class="btn btn-success text-white" to="/registrattion" role="button">Sign Up</Link>
  {/* <button className="btn btn-success text-white" type="button">Sign Up</button> */}
</div>
      </div>

      </div>
    


    </div>
  </div>
</div>
    </div>
  )
}

export default Login