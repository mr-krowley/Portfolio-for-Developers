import React from "react";
import s from "./Username.module.css";
import UsernameIcon from "../../layout/Footer/Icons/Username.svg";

export const Username = () => {
  return (
    <div className={s.div}>
      <a href="">
        <img src={UsernameIcon} alt="" />
      </a>
    </div>
  );
};
