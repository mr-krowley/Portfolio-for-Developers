import React from "react";
import VueIcon from "../icons/Vue.svg"; 
import s from "./Vue.module.css"

export const Vue = () => {
  return (
    <>
      <p className={s.wrapper}>
        <input className={s.input} type="checkbox" />
        <img className={s.img} src={VueIcon} alt="vue" />
        Vue 
      </p>
    </>
  );
};
