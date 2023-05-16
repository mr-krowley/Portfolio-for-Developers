import React from 'react'
import s from './TextHome.module.css'

export const TextHome = () => {
  return (
    <div className={s.div}>
      <p className={s.p1}>Hi all. I am</p>
      <h1 className={s.H1}>Micheal Weaver</h1>
      <p className={s.p2}> &gt; Front-end developer </p>
      <p className={s.p3}>// complete the game to continue</p>
      <p className={s.p3}>// you can also see it on my Github page</p>
      <p className={s.p4}> const githubLink = <a href="#"></a> </p>
    </div>
  );
}
