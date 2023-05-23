import React from 'react'
// import { data } from './Card_project.js'
import { Button } from '../button/Button.jsx';
import s from "./Card.module.css"
export const Card = ({el}) => {
  return (
    <>
      <div className={s.card}>
       
        <div className={s.container_img_icon}>
          <img src={el.icon} alt="icon" className={s.icon} />
          <img src={el.img} alt="img" className={s.img} />
        </div>

        <div className={s.container_txt_button}>
          <p className={s.txt}> {el.txt}</p>
          <Button />
        </div>
      </div>
    </>
  );
}
