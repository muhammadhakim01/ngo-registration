import React from 'react'
import './Registration.css'

function Registrattion() {

  return (
    <div className="container-fluid">
      <h1 className='text-center fw-bold text-success p-3'>AUTHORIZATION TO REGISTER</h1>
  <div className="row  d-flex justify-content-evenly "id='reg-responsive'>
  
    <div class="col-md-5 bg-white mb-5 shadow-sm  bg-body rounded " >
     
      <div className='row d-flex justify-content-center  mt-2'>
        <div className='col-10 '>
       
        
   <form className ="row g-3"> 
    <h2 className='text-success pt-3  '>Applicant Detail</h2>

  <div className  ="col-md-6">
    <label For="inputName4" className  ="form-label fw-bold fw-bold ">Applicant Name</label>
    <input type="text" className ="form-control shadow-sm  bg-body rounded" id="inputEmail4" placeholder='First Name'/>
  </div>
  <div className  ="col-md-6">
    <label for="inputPassword4" className ="form-label fw-bold">Last Name   </label>
    <input type="text" className  ="form-control shadow-sm  bg-body rounded" id="inputPassword4"placeholder='Last Name'/>
  </div>

  <div className  ="col-12">
    <label for="inputAddress2" className  ="form-label fw-bold">Phone Number</label>
    <input type="text" className  ="form-control shadow-sm  bg-body rounded" id="inputAddress2" placeholder="Phone Number"/>
  </div>
  <div className  ="col-12">
    <label for="inputAddress2" className  ="form-label fw-bold">CNIC</label>
    <input type="text" className  ="form-control shadow-sm  bg-body rounded" id="inputAddress2" placeholder="CNIC"/>
  </div>
  <div className  ="col-12">
    <label for="inputAddress2" className  ="form-label fw-bold">Email Address</label>
    <input type="text" className  ="form-control shadow-sm  bg-body rounded" id="inputAddress2" placeholder="Address"/>
  </div>
  <div className  ="col-12 mb-5">
    <label for="inputAddress2" className  ="form-label fw-bold">Password</label>
    <input type="password" className  ="form-control shadow-sm  bg-body rounded" id="inputAddress2" placeholder="Password"/>
  </div>
 
 
</form>
</div>  
      </div>
    </div>
    <div className="col-md-5 bg-white shadow-sm  bg-body rounded vswa-detail" >

      <div className='row d-flex justify-content-center mt-2'>
     
  <div className='col-10'>
        
   <form className ="row g-3">  
   <h2 className='text-success pt-3'>VSWA Detail</h2>
    
  <div className  ="col-md-6">
    <label For="inputName4" className  ="form-label fw-bold">Name of VSWA</label>
    <input type="text" className ="form-control shadow-sm  bg-body rounded" id="inputEmail4" placeholder='VSWA Name'/>
  </div>
  <div className  ="col-md-6">
    <label for="inputPassword4" className ="form-label fw-bold">VSWA Email </label>
    <input type="text" className  ="form-control shadow-sm  bg-body rounded" id="inputPassword4"placeholder='VSWA Email'/>
  </div>

  <div className  ="col-12">
    <label for="inputAddress2" className  ="form-label fw-bold">Thematic Area</label>
    <select className="form-select shadow-sm  bg-body rounded" aria-label="Default select example">
  <option selected>Thematic Area</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
  <div className  ="col-12">
    <label for="inputAddress2" className  ="form-label fw-bold">VSWA Head Quarter</label>
    <select className="form-select shadow-sm  bg-body rounded" aria-label="Default select example">
  <option selected>VSWA Head Quarter</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
 
  <div className  ="col-md-6">
    <label For="inputName4" className  ="form-label fw-bold">Short/Name</label>
    <input type="text" className ="form-control shadow-sm  bg-body rounded" id="inputEmail4" placeholder='VSWA Name'/>
  </div>
  <div className  ="col-md-6">
    <label for="inputPassword4" className ="form-label fw-bold"> VSWA Phone </label>
    <input type="text" className  ="form-control shadow-sm  bg-body rounded" id="inputPassword4"placeholder='VSWA Phone'/>
  </div>
    {/* <div className=" row mx-auto ">
    <div className="col-6"></div>
    <button class="btn col-6 btn-success   " type="button">Create VSWA Account</button>
    
  </div> */}
 
</form>
</div>
      </div>
      <div className="row d-flex justify-content-end mt-5">
        
  <button className=" col-5 btn btn-success fs-6  mt-5" type="button">Create VSWA Account</button>
</div>
    </div>
  </div>
</div>
  )
}

export default Registrattion