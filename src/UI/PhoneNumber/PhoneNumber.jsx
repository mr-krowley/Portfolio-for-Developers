import React from 'react'
import phone_item from "./svg/phone-icon.svg"
import s from "./PhoneNumber.module.css"
export const PhoneNumber = () => {
  return (
    <div className={s.style}>
      <img
        src={phone_item}
        alt="close"
        
      />
      <div className={s.number}>+3598246359</div>
    </div>
  );
}
