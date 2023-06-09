import React from "react";
// import { data } from "./Card_project.js";
import { Button } from "../Button/Button.jsx";
import s from "./CardProject.module.css";
export const Card = ({ el }) => {
  return (
    <>
      <div className={s.card}>
        <p className={s.card_header}>{el.card_header}</p>
        <span className={s.card_header_txt}>{el.card_header_txt}</span>
        <div className={s.container_img_icon}>
          <img src={el.icon} alt="icon" className={s.icon} />
          <img src={el.img} alt="img" className={s.img} />
        </div>

        <div className={s.container_txt_button}>
          <p className={s.txt}> {el.txt}</p>
          <Button href={el.link} />
        </div>
      </div>
    </>
  );
};
