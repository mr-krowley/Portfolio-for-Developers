import React from 'react'
import svgs from "./svg/vector.svg"
import s from "./InstagramAccaunt.module.css"
export const InstagramAccaunt = () => {
  return (
    <>
      <div className={s.divia}>
        <img src={svgs} alt="close" />
        <p className={s.instagramText}>Instagram accaunt</p>
      </div>
    </>
  );
}
