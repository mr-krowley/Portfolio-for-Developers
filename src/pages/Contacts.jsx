import React from 'react'
import { Link } from "react-router-dom";
import s from "./Contacts.module.css"
import { ContactAccordian } from '../components/contactsAccordian/ContactAccordian.jsx';
import { FindMyAlsoIn } from '../components/findMeAsloIn/FindMyAlsoIn'; 
import { HookFormContactMe} from "../components/hookFormContactMe/HookFormContactMe.jsx"



export const Contacts = () => {
  return (
    <div className={s.container}>
      <div>
        <ContactAccordian />
        <FindMyAlsoIn />

      </div>
     
      <div className={s.container2}>
        <HookFormContactMe />
        
      </div>
      <Link to="/">Home</Link>

    </div>
  );
}
