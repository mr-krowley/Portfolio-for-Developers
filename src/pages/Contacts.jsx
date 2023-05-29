import React from 'react'
import { Link } from "react-router-dom";
import s from "./Contacts.module.css"
import { ContactAccordian } from '../components/ContactsAccordian/ContactAccordian.jsx';
import { FindMyAlsoIn } from '../components/FindMeAsloIn/FindMyAlsoIn'; 
import { HookFormContactMe} from "../components/HookFormContactMe/HookFormContactMe.jsx"



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
