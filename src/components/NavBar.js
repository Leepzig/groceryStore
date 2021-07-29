import React from 'react'
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Items | </NavLink> 
      <NavLink to="/checkout">Checkout | </NavLink> 
      <NavLink to="/history">History</NavLink>
    </div>
  )
}

export default NavBar
