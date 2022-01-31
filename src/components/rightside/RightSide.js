import React from 'react'
import './RightSide.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillRow from "../skillRow/SkillRow";

export default function RightSide() {
  return (
      <>
        <div 
        className="d-flex flex-column flex-wrap align-items-center animated slide-in-right"
        data-animation="slide-in-right"
        >
        <SkillRow procent={90} title="CSS" />
        <SkillRow procent={90} title="HTML" />
        <SkillRow procent={90} title="JavaScript" />
        <SkillRow procent={80} title="Bootstrap" />
        <SkillRow procent={50} title="Jest" />
        <SkillRow procent={50} title="TypeScript" />
        <SkillRow procent={70} title="React" />
        <SkillRow procent={40} title="Redux" />
        <SkillRow procent={65} title="Vue" />
        <SkillRow procent={75} title="Jquey" />
        <SkillRow procent={75} title="Ajax" />
        <SkillRow procent={30} title="Express" />
        <SkillRow procent={70} title="Python" />
        <SkillRow procent={75} title="MySql" />
        <SkillRow procent={55} title="Mongo" />
        <SkillRow procent={50} title="Photoshop" />
        <SkillRow procent={90} title="Figma" />
        </div>
      </>
  )
}