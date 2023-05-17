import React from "react";
import s from "./Butoon_control_down.module";
export const button_control_down = () => {
  return (
    <div className={s.button_control}>
      <button className="buton_control_down">
        <img
          className="pointer_down"
          src="../button_control_icons/pointer_down.svg"
          alt="left"
        />
      </button>
    </div>
  );
};
