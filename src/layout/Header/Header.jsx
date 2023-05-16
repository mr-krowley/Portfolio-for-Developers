import React from "react";
import { MenuLink } from "../../UI/MenuLink/MenuLink";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { list } from "./assets/keyLink";



export const Header = (props) => {
  return (
    <div>
      <ul className={s.ul}>
        <MenuLink name = 'micheal-weaver'/>
        <MenuLink name = '_hello'  /> 
        <MenuLink name = '_about-me' />
        <MenuLink name = '_projects' />
        <MenuLink name = '_contact-me'/>
      </ul>
    </div>
  );
};
