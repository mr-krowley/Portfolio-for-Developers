import React from 'react'
import svgs from "./svg/vector.svg"
import s from "./GuruShotsProfile.module.css"
export const GuruShotsProfile = () => {
  return (
    <>
      <div className={s.divia}>
        <img src={svgs} alt="close" />
        <p className={s.guruText}>GuruShots profile</p>
      </div>
    </>
  );
}
