import React from 'react'
import s from "./AccordionProjectsUI.module.css"
import triangle from "./svg/Vector1.svg"


import { Reacts } from '../react/Reacts';
import { Html } from '../html/Html';
import { Css } from '../css/Css';
import { Vue } from '../vue/Vue';
import { Angular } from '../angular/Angular';
import { Gatsby } from '../gatsby/Gatsby';
import { Flutter } from '../flutter/Flutter';



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
            <Reacts />
            <Html />
            <Css />
            <Vue />
            <Angular />
            <Gatsby />
            <Flutter />
          </div>
        </div>
      </div>
    </>
  );
}
