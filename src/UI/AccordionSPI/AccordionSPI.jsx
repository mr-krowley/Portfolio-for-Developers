import React from 'react'
import { SubSubPersInf } from '../SubSubPersInf/SubSubPersInf';
import s from './AccordionSPI.module.css'


export const AccordionSPI = ({src,  treug, title, active3, setActive3}) => {
  console.log(title);
	return (
		<div className={s.accordian_box}>
        <div className={s.acordionHeiding}>
          <div>

          </div>
          <div
            className={s.containerContacts}
            onClick={() => {
              active3 === title ? setActive3("") : setActive3(title);
            }}
          >
             <img
              src={treug}
              alt="close"
              className={
                active3 === title
                  ? s.accordion_heading_active
                  : s.accordion_heading_not_active
              } 
            />
            <img src ={src} alt="" />
            <p>{title}</p>
          </div>
        </div>

        <div className={active3 === title ? s.show : s.accordionContent}>
          <div className="container">
						<SubSubPersInf >high-school</SubSubPersInf>
						<SubSubPersInf >universiti</SubSubPersInf>
          </div>
        </div>
      </div>
	)
}
