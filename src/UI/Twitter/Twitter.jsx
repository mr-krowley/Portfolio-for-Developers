import React from 'react'
import TwitterIcon from "../../layout//Footer/Icons/Twitter.svg";
import s from "./Twitter.module.css"

export const Twitter = () => {
  return (
    <div className={s.div}>
      <a href="https/">
        <img src={TwitterIcon} alt="" />
      </a>
    </div>
  );
}
