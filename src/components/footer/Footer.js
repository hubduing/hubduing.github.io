import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <a href="#"><i className="fas fa-angle-double-up " dest="home"></i></a>

        <div className="flex-container">
          <a href="#!">
            <div className="footer-icon">
              <i className="fab fa-linkedin"></i>
            </div>
          </a>
          <a href="#!">
            <div className="footer-icon">
              <i className="fab fa-facebook-square"></i>
            </div>
          </a>
          <a href="#!">
            <div className="footer-icon">
              <i className="fab fa-instagram"></i>
            </div>
          </a>
          <a href="#!">
            <div className="footer-icon">
              <i className="fab fa-codepen"></i>
            </div>
          </a>

        </div>
        <div className="footer-box">
          <div className="copy">
            Alexey Borisov <span className="highlight">©2021</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
