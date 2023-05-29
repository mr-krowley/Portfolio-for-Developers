import React from 'react'
import svgs from "./svg/vector.svg"
import s from "./YouTubeChannel.module.css"
export const YouTubeChannel = () => {
  return (
    <>
      <div className={s.divia}>
        <img src={svgs} alt="close" />
        <p className={s.youTubeText}>YouTube channel</p>
      </div>
    </>
  );
}
