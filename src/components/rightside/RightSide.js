import React from 'react'
import './RightSide.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RightSide() {
  return (
    <div 
    className="d-flex flex-column flex-wrap align-items-center animated slide-in-right"
    data-animation="slide-in-right"
    >
      <div className="bar d-flex">
        <div className="bar fill" style={{width: 90 + "%"}}>
          <div className="tag fw-bold d-flex justify-content-center">CSS</div>
        </div>
        <span>90%</span>
      </div>

      <div className="bar d-flex">
        <div className="bar fill" style={{width: 90 + "%"}}>
          <div className="tag fw-bold d-flex justify-content-center">HTML</div>
        </div>
        <span>90%</span>
      </div>

      <div className="bar d-flex">
        <div className="bar fill" style={{width: 50 + "%"}}>
          <div className="tag fw-bold d-flex justify-content-center">React</div>
        </div>
        <span>80%</span>
      </div>

      <div className="bar d-flex">
        <div className="bar fill" style={{width: 80 + "%"}}>
          <div className="tag fw-bold d-flex justify-content-center">JavaScript</div>
        </div>
        <span>80%</span>
      </div>

      <div className="bar d-flex">
        <div className="bar fill" style={{width: 70 + "%"}}>
          <div className="tag fw-bold d-flex justify-content-center">Python</div>
        </div>
        <span>50%</span>
      </div>

      <div className="bar d-flex">
        <div className="bar fill" style={{width: 35 + "%"}}>
          <div className="tag fw-bold d-flex justify-content-center">Node.js</div>
        </div>
        <span>65%</span>
      </div>

      <div className="bar d-flex">
        <div className="bar fill" style={{width: 60 + "%"}}>
          <div className="tag fw-bold d-flex justify-content-center">Photoshop</div>
        </div>
        <span>50%</span>
      </div>
    </div>
  )
}
