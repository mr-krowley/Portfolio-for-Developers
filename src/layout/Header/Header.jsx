import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";



export const Header = () => {
  return (
    <div>
      <ul className={s.ul}>
        <li className={s.li}>micheal-weaver</li>
        <li className={s.li}>
          <NavLink to="/"  exart activeStyle={{color:'white'}} >_hello</NavLink>
        </li>
        <li className={s.li}>
          <NavLink to="_about_me" exart activeStyle={{color:'white'}}>_about</NavLink>
        </li>
        <li className={s.li}>
          <NavLink to="projects_me" exart activeStyle={{color:'white'}}>_projects</NavLink>
        </li>
        <li className={s.li}>
          <NavLink to="contact-me" exart activeStyle={{color:'white'}}>_contact_me</NavLink>
        </li>
      </ul>
    </div>
  );
};
