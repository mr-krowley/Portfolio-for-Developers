import React from 'react'
import { Plash } from '../components/Plash/Plash'
import { PersonalInfo } from '../components/personalInfo/PersonalInfo.jsx' 
import about from './About.module.css'
import { TextPI } from '../UI/textPI/TextPI'


export const About = ({ codeSnippetArr }) => {
  return (
    <div className={about.container2}>
      <Plash/>
      <PersonalInfo/>
      <TextPI/>
    </div>
  );
};
