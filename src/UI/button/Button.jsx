import React from 'react'
import s from "./Button.module.css"
export const Button = () => {
  return (
    <button className={s.button}>
      <span className={s.button__txt}>view-project</span>
    </button>
  );
}
