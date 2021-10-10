import React from 'react'
import './SkillRow.scss'


export default function SkillRow(props) {
  return (
    <div className="bar d-flex">
      <div className="bar fill" style={{width: props.procent + "%"}}>
        <div className="tag fw-bold d-flex justify-content-center">{props.title}</div>
      </div>
      <span>{props.procent}</span>
    </div>
  )
}