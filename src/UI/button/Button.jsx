import React from "react";
import s from "./Button.module.css";
export const Button = ({ href }) => {
  return (
    <button className={s.button}>
      <span className={s.button__txt}>
        <a className={s.link_project} href={href}>
          view-project
        </a>
      </span>
    </button>
  );
};
