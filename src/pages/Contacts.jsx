import React from 'react'
import { Link } from "react-router-dom";
import s from "./Contacts.module.css"
import { ContactAccordian } from '../components/contacts/ContactAccordian';
import { Find_My_Also_In } from '../components/find_me_aslo_in/Find_My_Also_In';
import { HookFormContactMe } from '../components/HookForm_contact_me/HookFormContactMe';



export const Contacts = () => {
  return (
    <div className={s.container}>
      <div>
        <ContactAccordian />
      <Find_My_Also_In />

      </div>
     
      <div className={s.container2}>
        <HookFormContactMe />
      </div>
      <Link to="/">Home</Link>

    </div>
  );
}
