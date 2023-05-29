import React from 'react'
import s from './TextHome.module.css'
import snake from "./aseds/SnakeGame.png"
import { Board } from '../BoardSnake/Board'
import { SnakeTest } from '../SnakeTest/SnakeTest'
import { SnakeSnake } from '../SnakeSnake/SnakeSnake'
export const TextHome = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <p className={s.hi}>Hi all. I am</p>
        <h1 className={s.userName}>Micheal Weaver</h1>
        <p className={s.deloveper}> &gt; Front-end developer </p>
        <p className={s.p1}>// complete the game to continue</p>
        <p className={s.p1}>// you can also see it on my Github page</p>
        <p className={s.p1}>
          <span className={s.const}>const</span>
          <span className={s.githubLink}>githubLink</span> = <a href="#"></a>
        </p>
      </div>

      <div className={s.container2}>
        {/* <SnakeSnake/> */}
        {/* <SnakeTest/> */}
        {/* <Board></Board> */}
        <img src={snake} alt="snake" className={s.snake} />
      </div>
    </div>
  );
}
