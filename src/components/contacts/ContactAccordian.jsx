import React, { useState } from 'react'
import { AccordianContacts } from '../../UI/accordianContacts/AccordianContacts';
import "./Contact.css"

export const ContactAccordian = () => {

  const [active, setActive] = useState("");


  return (
    <>
      <AccordianContacts title="Contacts" active={active} setActive={setActive} />
    </>
  );
}
