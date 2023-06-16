import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div style={{ padding: '0 10px' }}>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              {/* Buraya logo veya başlık eklenebilir */}
            </a>

            <button className="btn btn-outline-light d-lg-none">Menu</button>

            <ul className="nav col-12 col-lg-auto mt-3 mt-lg-0">
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link px-2" style={{ fontFamily: 'fantasy', fontSize: "20px", color: "white" }}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a href="#categori" className="nav-link px-2 text-white" style={{ fontFamily: 'fantasy', fontSize: "20px", color: "white" }}>
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <NavLink to={"/favorite"} className="nav-link px-2 text-white" style={{ fontFamily: 'fantasy', fontSize: "20px", color: "white" }}>
                  My Favorite Recipes
                </NavLink>
              </li>
            </ul>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-dark" style={{ color: "black", backgroundColor: "yellow", fontFamily: 'fantasy' }}>
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" style={{ backgroundColor: "black", color: "white" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
                {/* Buraya logo veya başlık eklenebilir */}
              </a>
              <span className="mb-3 mb-md-0 me-5" style={{ color: "yellow" }}>© 2022 Company, Inc</span>
              <h4 className="mb-3 mb-md-0" style={{ fontFamily: 'fantasy', fontSize: "40px", color: "yellow" }}>
                yummy recipes...
              </h4>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
