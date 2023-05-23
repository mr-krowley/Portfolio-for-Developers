import React from 'react'
import ReactIcon from "../icons/react.svg";
import s from "../vue/Vue.module.css"

export const Reacts = () => {
  return (
    <>
      <p className={s.wrapper}>
        <input className={s.input} type="checkbox" />
        <img className={s.img} src={ReactIcon} alt="react" /> React
      </p>
    </>
  );
}
