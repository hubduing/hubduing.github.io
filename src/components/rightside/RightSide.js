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
        <SkillRow procent={80} title="JavaScript" />
        <SkillRow procent={80} title="Bootstrap" />
        <SkillRow procent={50} title="Jest" />
        <SkillRow procent={50} title="TypeScript" />
        <SkillRow procent={50} title="REACT" />
        <SkillRow procent={70} title="Python" />
        <SkillRow procent={35} title="Express" />
        <SkillRow procent={65} title="MySql" />
        <SkillRow procent={50} title="Photoshop" />
        <SkillRow procent={90} title="Figma" />
        <SkillRow procent={90} title="Avacode" />
        </div>
      </>
  )
}
{/* 90, 90, 50, 80, 70, 35, 60 */}