import React, { useState } from 'react'

import { AccordianContacts } from '../../ui/AccordianContacts/AccordianContacts.jsx';

export const ContactAccordian = () => {

  const [active, setActive] = useState("");


  return (
    <>
      <AccordianContacts  title="Contacts" active={active} setActive={setActive} />
    </>
  );
}
