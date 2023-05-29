import React from 'react'
import s from "./AccordionProjectsUI.module.css"
import triangle from "./svg/Vector1.svg"
import reactIcon from "./assets/react.svg"
import htmlIcon from './assets/html.svg'
import cssIcon from './assets/css.svg'
import vueIcon from './assets/Vue.svg'
import angularIcon from './assets/Angular.svg'
import gatsbyIcon from './assets/Gatsby.svg'
import flutterIcon from './assets/Flutter.svg'


import { ProjectLink } from '../ProjectLink/ProjectLink';



export const AccordionProjectsUI = ({ title, active, setActive }) => {
  console.log(title);
  return (
    <>
      <div className={s.accordian_box}>
        <div className={s.acordionHeiding}>
          <div
            className={s.containerContacts}
            onClick={() => { 
              console.log(active, title)
              active === title ? setActive("") : setActive(title)
            }
            }
          >
            <img
              src={triangle}
              alt="close"
              className={
                active === title
                  ? s.accordion_heading_active
                  : s.accordion_heading_not_active
              }
            />
            <p>{title}</p>
          </div>
        </div>

        <div className={active === title ? s.show : s.accordionContent}>
          <div className="container">
            <ProjectLink icon = {reactIcon}> React</ProjectLink>
            <ProjectLink icon = {htmlIcon}> HTML</ProjectLink>
            <ProjectLink icon = {cssIcon}> CSS</ProjectLink>
            <ProjectLink icon = {vueIcon}> Vue</ProjectLink>
            <ProjectLink icon = {angularIcon}> Angular</ProjectLink>
            <ProjectLink icon = {gatsbyIcon}> Gatsby</ProjectLink>
            <ProjectLink icon = {flutterIcon}> Flutter</ProjectLink>
          </div>
        </div>
      </div>
    </>
  );
}
