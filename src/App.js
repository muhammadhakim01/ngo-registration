import './App.css';
import React from 'react'
 import { BrowserRouter, Route, Routes } from 'react-router-dom';  

// import Test from './component/Test';
import Nav from './component/navbar/Nav';
import Registrattion from './component/register/Registrattion';
import Login from './component/loginpage/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/home' element={<h1>This is Home Page</h1>}/>
        <Route path='/about' element={<h1>This is About Page</h1>}/>
         <Route path='/Registrattion' element={<Registrattion/>}/>
         <Route path='/login' element={<Login />} />

         </Routes>

       </BrowserRouter>
      {/* <Test/> */}
    </div>
  )
}

export default App
