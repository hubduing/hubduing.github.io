import React from 'react'
import './Navbar.scss'

export default function Navbar() {
  return (
    <div>
      <div className="nav-bar" id="navbar-link">
        <ul className="nav-list">
          <li className="nav-item active"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}
