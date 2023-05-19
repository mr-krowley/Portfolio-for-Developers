import React, { useState } from 'react'
import { Accordian } from '../../UI/accordian/Accordian';
import "./Contact.css"

export const ContactAccordian = () => {

  const [active, setActive] = useState("");


  return (
    <>
      <Accordian title="Contacts" active={active} setActive={setActive} />
    </>
  );
}
