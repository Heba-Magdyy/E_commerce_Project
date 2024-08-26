import React from 'react'
import { Link } from 'react-router-dom'
export default function Navig() {
  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top mb-4">
  <div className="container-fluid">
    <a href='#' className="navbar-brand">E-commerce <span className='text-success'>Admin</span></a>
    {/* <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form> */}
  </div>
</nav>


    </>
  )
}
