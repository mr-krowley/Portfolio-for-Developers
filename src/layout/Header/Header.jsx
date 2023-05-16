import React from "react";
import { MenuLink } from "../../UI/MenuLink/MenuLink";
import s from "./Header.module.css";


export const Header = () => {
  
  return (
    <div>
      <ul className={s.ul}>
        <MenuLink name = 'micheal-weaver'/>
        <MenuLink name = '_hello' />
        <MenuLink name = '_about-me' />
        <MenuLink name = '_projects' />
        <MenuLink name = '_contact-me'/>
      </ul>
    </div>
  );
};
