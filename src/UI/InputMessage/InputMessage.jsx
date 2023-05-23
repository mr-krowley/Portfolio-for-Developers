import React from "react";
import s from "./InputMessage.module.css"
export const InputMessage = () => {
  return (
    <div className={s.message}>
      _message:
      <p>
        <input className="input_message" type="text" />
      </p>
    </div>
  );
};
