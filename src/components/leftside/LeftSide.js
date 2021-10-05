import React from 'react'
import './LeftSide.scss'
import myPhoto from '../../img/myFoto.png'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function LeftSide() {
  return (
    <div className="flex-sm-row flex-column animated slide-in-left">
      <img src={myPhoto} alt="myphoto" className="my-photo left-50"/>
      <div className="label bold ">
        This me
      </div>
      <div className="skills-text">
        I have good skills for UI effects, <br/> animations and creating intuitive, <br/> dynamic user experiences.
        <span className="page-link highlighter pick" dest="contact"><a href="#contact">Let's make something special.</a></span>
      </div>
    </div>
  )
}
