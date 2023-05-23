import React from "react";
import GatsbyIcon from "../icons/Gatsby.svg"; 
import s from "../vue/Vue.module.css";

export const Gatsby = () => {
  return (
    <>
      <p className={s.wrapper}>
        <input className={s.input} type="checkbox" />
        <img className={s.img} src={GatsbyIcon} alt="gatsby" />
        Gatsby
      </p>
    </>
  );
};
