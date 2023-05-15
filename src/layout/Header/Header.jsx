import React from "react";
import { MenuLink } from "../../UI/MenuLink/MenuLink";
import s from "./Header.module.css";


export const Header = () => {
  return (
    <div>
      <ul className={s.ul}>
        <MenuLink />
        <MenuLink />
        <MenuLink />
        <MenuLink />
        <MenuLink />
      </ul>
    </div>
  );
};
