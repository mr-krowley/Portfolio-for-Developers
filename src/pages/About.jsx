import React from 'react'
import { Plash } from '../components/Plash/Plash'
import { PersonalInfo } from '../components/PersonalInfo/PersonalInfo'
// import { CodeBlock } from '../components/CodeBlock/CodeBlock'
import style from "./About.module.css";


export const About = ({ codeSnippetArr }) => {
  return (
    <div className={style.container2}>
      <Plash />
      <PersonalInfo />

      {/* <div className={style.right__content_wrapper}>
        <div className={style.content__title}></div>
        <CodeBlock codeSnippetArr={codeSnippetArr} />
      </div> */}
    </div>
  );
};
