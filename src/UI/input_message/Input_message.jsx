import React from "react";
import s from "./Input_message.module";
export const Input_message = () => {
  return (
    <div className="message">
      _message:
      <p>
        <input className="input_message" type="text" />
      </p>
    </div>
  );
};
