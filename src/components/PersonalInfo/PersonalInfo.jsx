import React, { useState } from 'react'
import s from './PersonalInfo.module.css'
import { AccordionPI } from '../../UI/AccordionPI/AccordionPI'

export const PersonalInfo = () => {

  const [active1, setActive1] = useState("")

  return (
  <div className={s.container1}>
    
    <AccordionPI title="personal-info" active1={active1} setActive1={setActive1} >
     </AccordionPI>

    
  </div>
  )
}
