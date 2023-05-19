import React from 'react'
import { Plash } from '../components/Plash/Plash'
import { PersonalInfo } from '../components/PersonalInfo/PersonalInfo'
import about from './About.module.css'

export const About = () => {
  return (
    <div className={about.container2}>
     <Plash/>
      <PersonalInfo/>
    </div>
  )
}
