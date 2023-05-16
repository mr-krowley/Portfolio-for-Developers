import React from 'react'
import FacebookIcon from "../../layout//Footer/Icons/Facebook.svg";
import s from "./Facebook.module.css"

export const Facebook = () => {
  return (
    <div className={s.div}>
      <img src={FacebookIcon} alt="" />
    </div>
  );
}
