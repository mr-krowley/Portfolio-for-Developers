import React, { useState } from 'react'
import persInf from './PersInf.module.css'
import { AccordionPI } from '../../UI/AccordionPI/AccordionPI'

export const PersonalInfo = () => {

  const [active1, setActive1] = useState("")

  return (
  <div className={persInf.container1}>
    
    <AccordionPI title="personal-info" active1={active1} setActive1={setActive1} >
     </AccordionPI>

    
  </div>
  )
}
