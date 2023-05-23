import React from "react";
import CssIcon from "../icons/css.svg";
import s from "../vue/Vue.module.css";


export const Css = () => {
  return (
    <>
      <p className={s.wrapper}>
        <input className={s.input} type="checkbox" />
        <img className={s.img} src={CssIcon} alt="CSS" />
        CSS
      </p>
    </>
  );
};
