import React from 'react'
import svgs from "./svg/vector.svg"
import s from "./TwichProfile.module.css"

export const TwichProfile = () => {
  return (
    <>
      <div className={s.divi}>
        <img src={svgs} alt="close" />
        <p className={s.twithText}>Twich profile</p>
      </div>
    </>
  );
}
