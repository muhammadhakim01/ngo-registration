import React from 'react'
import './Login.css'  

function Login() {
  return (
    <div className='login-form '>
      <h1 className='text-center pt-3  '>Welcome Back !</h1>
      <p>Login</p>
      <div className='login-page'>
      <div className="mb-3 ">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="name" className="form-control" id="name" placeholder=''/>
  
  </div>
  <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="email" placeholder="Enter Password"/>
  </div>
  
  <div className="mb-3 d-flex justify-content-between forgot">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Remember Me
  </label>
  

</div>
<p>Forgot Password</p>

  </div>
  <div className="d-grid gap-2 col-12 mx-auto">
  <button className="btn btn-signin" type="button">Sign In</button>
  <p className='mt-0'>Not Registered yet? <a href='create account'>Create Account</a></p>
  <button className="btn btn-signup" type="button">Sign Up</button>
</div>
      </div>
      
    </div>
  );
}

export default Login;