import React from 'react'
import GithubIcon from "../../layout//Footer/Icons/Github.svg";
import s from "./Github.module.css"


export const Github = () => {
  return (
    <div className={s.div}>
      <a href="">
        <img src={GithubIcon} alt="" />
      </a>
    </div>
  );
}
