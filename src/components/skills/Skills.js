import React from 'react'
import './Skills.scss'
import LeftSide from '../leftside/LeftSide'
import RightSide from '../rightside/RightSide';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Skills() {
  return (
    <div>
      <div className="skills-wrapper mt-5 text-center">
            <LeftSide/>
            <RightSide/>
          </div>
    </div>
  )
}
