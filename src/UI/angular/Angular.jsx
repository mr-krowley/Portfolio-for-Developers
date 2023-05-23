import React from "react";
import AngularIcon from "../icons/Angular.svg";
import s from "../vue/Vue.module.css";


export const Angular = () => {
  return (
    <>
      <p className={s.wrapper}>
        <input className={s.input} type="checkbox" />
        <img className={s.img} src={AngularIcon} alt="Angular" />
        Angular
      </p>
    </>
  );
};
