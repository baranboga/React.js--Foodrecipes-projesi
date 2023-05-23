import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>

      <header class="p-3 text-bg-dark">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">

            </a>

            <ul class="nav justify-content-between col-12 col-lg-auto me-lg-auto mb-2  mb-md-0">
              <li className='px-5  me-5' style={{ fontFamily: 'fantasy', fontSize: "40px", color: "yellow" }}>
                yummy recipes...</li>
               
              <NavLink to={"/"} className="nav-link px-2  me-5" style={{ fontFamily: 'fantasy', fontSize: "20px", color: "white" }} >Home</NavLink>
              <li><a href="#categori" className="nav-link px-2 text-white me-5" style={{ fontFamily: 'fantasy', fontSize: "20px", color: "white" }}>Categories</a></li>
              <NavLink to={"/favorite"} className="nav-link px-2 text-white" style={{ fontFamily: 'fantasy', fontSize: "20px", color: "white" }}>My Favorite Recipes</NavLink>

            </ul>



            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">Login</button>
              <button type="button" class="btn btn-dark" style={{color:"black",backgroundColor:"yellow",fontFamily: 'fantasy'}}>Sign-up</button>
            </div>
          </div>
        </div>
      </header>


      <Outlet />

      <div style={{backgroundColor:"black",color:"white"}}  >
  <footer class=" d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
      </a>
      <span class="mb-3 mb-md-0 me-5" style={{color:"yellow"}}>© 2022 Company, Inc</span>
      
      <h4 class="mb-3 mb-md-0 " style={{ fontFamily: 'fantasy', fontSize: "40px", color: "yellow" }}> yummy recipes...</h4>
    </div>
  </footer>
</div>


    </div>
  )
}
