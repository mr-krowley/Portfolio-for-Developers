import React from 'react'
import { Plash } from '../components/Plash/Plash'
import { PersonalInfo } from '../components/PersonalInfo/PersonalInfo'
import about from './About.module.css'
import { TextPI } from '../UI/textPI/TextPI'

export const About = () => {
  return (
    <div className={about.container2}>
      <Plash/>
      <PersonalInfo/>
      <TextPI/>
    </div>
  )
}
