import React from 'react'
import triangle from './assets/Vector1.svg'
import s from './AccordionPI.module.css'
import { SubPersInf } from '../../ui/SubPersInf/SubPersInf'
import red from './assets/red.svg'
import fiolet from './assets/fiolet.svg'
import green from './assets/green.svg'




export const AccordionPI = ({title, active1, setActive1}) => {

	return (
		<div className={s.accordian_box}>
        <div className={s.acordionHeiding}>
          <div
            className={s.containerContacts}
            onClick={() => {
              active1 === title ? setActive1("") : setActive1(title);
            }}
          >
            <img
              src={triangle}
              alt="close"
              className={
                active1 === title
                  ? s.accordion_heading_active
                  : s.accordion_heading_not_active
              }
            />
            <p>{title}</p>
          </div>
        </div>

        <div className={active1 === title ? s.show : s.accordionContent}>
          <div className="container">
						<SubPersInf src2={red} >bio </SubPersInf>
						<SubPersInf src2={green} >interests</SubPersInf>
						<SubPersInf src2={fiolet} >education</SubPersInf>
          </div>
        </div>
      </div>
	)
}
