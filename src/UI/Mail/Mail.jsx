import React from 'react'
import mail_item from "./svg/mail-icon.svg"
import s from "./Mail.module.css"
export const Mail = () => {
  return (
    <div className={s.style}>
      <img src={mail_item} alt="close" />
      <p className={s.mail}>
        <a href="https/google.com"> user@gmail.com</a>
      </p>
    </div>
  );
}
