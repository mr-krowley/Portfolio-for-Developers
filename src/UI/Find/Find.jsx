import React from 'react'
import FindIcon from "../../layout//Footer/Icons/Find.svg"
import s from "./Find.module.css"

export const Find = () => {
  return (
    <div className={s.div}>
      <img src={FindIcon} alt="" />
    </div>
  );
}
