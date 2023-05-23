import React from 'react'
import { Link } from "react-router-dom";
import { ContactAccordian } from '../components/contacts/ContactAccordian';
import { Find_My_Also_In } from '../components/find_me_aslo_in/Find_My_Also_In';




export const Contacts = () => {
  return (
    <>
      <ContactAccordian />
      <Find_My_Also_In/>
      <Link to="/">Home</Link>
    </>
  );
}
