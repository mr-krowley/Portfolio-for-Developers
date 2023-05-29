import React, { useState } from 'react'
import { AccordianContacts } from '../../UI/accordianContacts/AccordianContacts';


export const ContactAccordian = () => {

  const [active, setActive] = useState("");


  return (
    <>
      <AccordianContacts  title="Contacts" active={active} setActive={setActive} />
    </>
  );
}
