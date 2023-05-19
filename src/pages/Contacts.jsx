import React from 'react'
import { Link } from "react-router-dom";
import { ContactAccordian } from '../components/contacts/ContactAccordian';

export const Contacts = () => {
  return (
    <>
      <ContactAccordian />
      <Link to="/">Home</Link>
    </>
  );
}
