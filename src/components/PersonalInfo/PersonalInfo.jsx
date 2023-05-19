import React from 'react'
import persInf from './PersInf.module.css'
import { PersonalInfoLeft } from '../../UI/personalInfoLeft/PersonalInfoLeft'

export const PersonalInfo = () => {
  return (
  <div className={persInf.container1}>
    
      <div className={persInf.persInf__left}><PersonalInfoLeft/></div>

    
  </div>
  )
}
