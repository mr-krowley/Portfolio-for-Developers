import React from 'react'
import TwitterIcon from "../../layout//Footer/Icons/Twitter.svg";
import s from "./Twitter.module.css"

export const Twitter = () => {
  return (
    <div className={s.div}>
      <img src={TwitterIcon} alt="" />
    </div>
  );
}
