import React from 'react'
import { PhoneNumber } from '../PhoneNumber/PhoneNumber';
import { Mail } from '../Mail/Mail';
import s from "./AccordianContacts.module.css"
import triangle from "./svg/Vector1.svg"



export const AccordianContacts = ({ title, active, setActive }) => {
  return (
    <>
      <div className={s.accordian_box}>
        <div className={s.acordionHeiding}>
          <div
            className={s.containerContacts}
            onClick={() => {
              active === title ? setActive("") : setActive(title);
            }}
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
            <Mail />
            <PhoneNumber />
          </div>
        </div>
      </div>
    </>
  );
}
