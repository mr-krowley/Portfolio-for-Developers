import React from "react";
import s from "./Input_name.module";
export const InputName = () => {
  return (
    <div className={s.name}></div>
      _name:
      <p>
        <input className="input_name" type="text" />
      </p>
    </div>
  );
};
