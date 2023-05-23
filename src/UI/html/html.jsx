import React from 'react'
import HtmlIcon from "../icons/html.svg";
import s from "../vue/Vue.module.css";


export const Html = () => {
  return (
    <>
      <p className={s.wrapper}>
        <input className={s.input} type="checkbox" />
        <img className={s.img} src={HtmlIcon} alt="html" />
        HTML
      </p>
    </>
  );
}
