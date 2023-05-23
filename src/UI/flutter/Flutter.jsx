import React from "react";
import FlutterIcon from "../icons/Flutter.svg";
import s from "../vue/Vue.module.css";


export const Flutter = () => {
  return (
    <>
      <p className={s.wrapper}>
        <input className={s.input} type="checkbox" />
        <img className={s.img} src={FlutterIcon} alt="Flutter" />
        Flutter
      </p>
    </>
  );
};
