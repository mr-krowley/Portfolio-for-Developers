import React from 'react'
import s from "./Butoon_control_up.module"
export const button_control_up = () => {
  return (
    <div className={s.button_control}>
      <button className="buton_control_up">
        <img className="pointer_up" src="../button_control_icons/pointer_up.svg" alt="up" />
      </button>
    </div>
  );
}
