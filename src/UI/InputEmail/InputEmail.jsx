import React from "react";
import s from "./InputEmail.module.css";
export const InputEmail = () => {
  return (
    <div className={s.email}>
      _email:
      <p>
        <input className="input_email" type="text" />
      </p>
    </div>
  );
};
