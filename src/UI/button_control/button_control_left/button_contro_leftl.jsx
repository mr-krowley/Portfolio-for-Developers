import React from "react";
import s from "./Butoon_control_left.module";
export const button_control_left = () => {
  return (
    <div className={s.button_control}>
      <button className="buton_control_left">
        <img
          className="pointer_up"
          src="../button_control_icons/pointer_left.svg"
          alt="left"
        />
      </button>
    </div>
  );
};
