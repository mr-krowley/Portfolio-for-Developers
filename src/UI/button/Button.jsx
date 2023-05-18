import React from 'react'
import s from "./Button.module"
export const button = () => {
  return (
    <button className={s.button}>
      <a href="#"><span className='button__txt'>view-project</span></a>
    </button>
  );
}
